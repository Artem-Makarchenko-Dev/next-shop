import { FiltersAction, FiltersActions, FiltersState } from "../productFilters.types";

export const initialFilters: FiltersState = {
  search: "",
  category: "all",
  sort: "",
};

export function productFiltersReducer(state: FiltersState, action: FiltersAction): FiltersState {
  switch (action.type) {
    case FiltersActions.SET_SEARCH:
      return { ...state, search: action.payload };
    case FiltersActions.SET_CATEGORY:
      return { ...state, category: action.payload };
    case FiltersActions.SET_SORT:
      return { ...state, sort: action.payload };
    case FiltersActions.RESET:
      return initialFilters;
    default:
      return state;
  }
}
