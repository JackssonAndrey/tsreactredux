/**
 * Action types
 */

// eslint-disable-next-line no-shadow
export enum RepositoriesTypes {
  LOAD_REQUEST = '@respositories/LOAD_REQUEST',
  LOAD_SUCCESS = '@respositories/LOAD_SUCCESS',
  LOAD_FAILURE = '@respositories/LOAD_FAILURE',
}

/**
 * Data types
 */

export interface Repository {
  id: number;
  name: string;
}

/**
 * State type
 */

export interface RepositoriesState {
  readonly data: Repository[];
  readonly loading: boolean;
  readonly error: boolean;
}
