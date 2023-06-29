import { IQueryFields } from '../interfaces/query-fields.interface';

export interface MovieFields extends IQueryFields {
  StringFields:
    | 'name'
    | 'alternativeName'
    | 'enName'
    | 'names.name'
    | 'externalId.kpHD'
    | 'externalId.imdb'
    | 'type'
    | 'tagline'
    | 'persons.name'
    | 'persons.enName'
    | 'persons.description'
    | 'description'
    | 'shortDescription'
    | 'slogan'
    | 'status'
    | 'ratingMpaa'
    | 'logo.url'
    | 'poster.url'
    | 'backdrop.url'
    | 'videos.trailers.url'
    | 'videos.trailers.site'
    | 'videos.trailers.type'
    | 'genres.name'
    | 'countries.name'
    | 'persons.photo'
    | 'budget.value'
    | 'budget.currency'
    | 'watchability.items.name'
    | 'audience.country';
  DateFields:
    | 'premiere.world'
    | 'premiere.russia'
    | 'premiere.digital'
    | 'premiere.bluray'
    | 'premiere.dvd';
  NumberFields:
    | 'id'
    | 'similarMovies.id'
    | 'sequelsAndPrequels.id'
    | 'externalId.tmdb'
    | 'typeNumber'
    | 'movieLength'
    | 'seriesLength'
    | 'totalSeriesLength'
    | 'year'
    | 'rating.kp'
    | 'rating.imdb'
    | 'rating.tmdb'
    | 'rating.filmCritics'
    | 'rating.russianFilmCritics'
    | 'rating.await'
    | 'votes.kp'
    | 'votes.imdb'
    | 'votes.tmdb'
    | 'votes.filmCritics'
    | 'votes.russianFilmCritics'
    | 'votes.await'
    | 'ratingAgeLimits'
    | 'ageRating'
    | 'persons.id'
    | 'budget.value'
    | 'fees.world.value'
    | 'fees.russia.value'
    | 'fees.usa.value'
    | 'image.postersCount'
    | 'image.backdropsCount'
    | 'image.framesCount'
    | 'reviewInfo.count'
    | 'reviewInfo.positiveCount'
    | 'seasonsInfo.number'
    | 'seasonsInfo.episodesCount'
    | 'videos.trailers.size'
    | 'videos.teasers.size'
    | 'audience.count'
    | 'top10'
    | 'top250'
    | 'releaseYears.start'
    | 'releaseYears.end';
  BooleanFields: 'ticketsOnSale' | 'isSeries';
  ObjectFields:
    | 'externalId'
    | 'image'
    | 'reviewInfo'
    | 'seasonsInfo'
    | 'videos'
    | 'audience'
    | 'releaseYears'
    | 'budget'
    | 'fees'
    | 'watchability'
    | 'persons'
    | 'rating'
    | 'genres'
    | 'countries'
    | 'similarMovies'
    | 'sequelsAndPrequels'
    | 'poster'
    | 'backdrop'
    | 'logo'
    | 'names'
    | 'facts';
}
