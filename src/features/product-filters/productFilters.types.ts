export enum FiltersActions {
  SET_SEARCH = "SET_SEARCH",
  SET_CATEGORY = "SET_CATEGORY",
  SET_SORT = "SET_SORT",
  RESET = "RESET",
}

export enum SortOptions {
  ASC = "asc",
  DESC = "desc",
  NONE = "",
}
export enum CategoryOptions {
  ALL = "all",
}

export type SortOptionType = (typeof SortOptions)[keyof typeof SortOptions];

export interface FiltersState {
  search: string;
  category: string;
  sort: string;
}

export type FiltersAction =
  | { type: FiltersActions.SET_SEARCH; payload: string }
  | { type: FiltersActions.SET_CATEGORY; payload: string }
  | { type: FiltersActions.SET_SORT; payload: string }
  | { type: FiltersActions.RESET };
