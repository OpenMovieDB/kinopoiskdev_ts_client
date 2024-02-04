import { VERSION } from '@/interfaces/enums/version.enum';
import {
  DocsResponse,
  ErrorResponse,
  IResponse,
} from '@/interfaces/response/response.interface';
import { QueryBuilder } from '../builder/query-builder';

export class ClientRequest {
  constructor(
    private readonly API_KEY: string,
    private readonly API_URL: string,
  ) {}

  async get<T, R>(
    version: VERSION,
    path: string,
    params?: T | QueryBuilder<T>,
  ): Promise<IResponse<DocsResponse<R>>> {
    try {
      let buildParams = '';

      if (params && params instanceof QueryBuilder && params.build) {
        buildParams = `?${params.build?.() ?? ''}`;
      } else if (params && typeof params === 'object') {
        const qb = new QueryBuilder<T>();
        const p = qb.createQueryByProps(params as T).build();
        buildParams = `?${p}`;
      }

      const response = await fetch(
        `${this.API_URL}/${version}${path}${buildParams}`,
        { headers: { 'X-API-KEY': this.API_KEY } },
      );

      // Если статус HTTP-ответа не 200, выбрасывается ошибка
      if (!response.ok) {
        const error: ErrorResponse = await response.json();
        throw new Error(
          JSON.stringify({
            status: response.status,
            error: error.error,
            message: error.message,
          }),
        );
      }

      return {
        data: await response.json(),
        statusCode: response.status,
        error: null,
        message: null,
      };
    } catch (error) {
      const { status, message, error: err } = JSON.parse(error?.message);
      console.log('There was an error with your request:', error);
      return {
        data: null,
        statusCode: status,
        error: err,
        message: message,
      };
    }
  }
}
