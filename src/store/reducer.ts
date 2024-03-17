import { ActionCreator, Reducer } from "redux";

export type Filters = {
   product: string | undefined; price: string | undefined; brand: string | undefined;
}

export type RootState = {  
  filtering: boolean;
  filters: Filters;
};
const initialState = {  
  filtering: false,
  filters: { product: '', price: '', brand: '' }
};

type Action = SaveFilteringAction | SaveFiltersAction;

const SAVE_FILTERING = 'SAVE_FILTERING';
export type SaveFilteringAction = {
  type: typeof SAVE_FILTERING;
  filtering: boolean
}
export const saveFiltering: ActionCreator<SaveFilteringAction> = (filtering) => ({
    type: SAVE_FILTERING,
    filtering: filtering
})

const SAVE_FILTERS = 'SAVE_FILTERS';
export type SaveFiltersAction = {
  type: typeof SAVE_FILTERS;
  filters: Filters
}
export const saveFilters: ActionCreator<SaveFiltersAction> = (filters: Filters) => ({
    type: SAVE_FILTERS,
    filters: {product: filters.product, price: filters.price, brand: filters.brand}
})

export const rootReducer: Reducer<RootState, Action> = (state = initialState, action) => {
  switch (action.type) {
   
    case SAVE_FILTERING:
      return {
        ...state,
        filtering: action.filtering
      };    
      case SAVE_FILTERS:
        return {
            ...state,
            filters: action.filters           
        };
    default:
      return state;
  }
}
