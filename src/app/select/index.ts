import {createSelector} from '@ngrx/store';

export interface FeatureState {
  uid:string;
  username:string;
  loggedin:boolean;
}


export interface AppState {
  feature : FeatureState;
  count: number;
}

export const selectFeature = (state : AppState) => state.feature;

export const selectFeatureUsername = createSelector (
  selectFeature,
  (state : FeatureState) => state.username
);

export const selectFeatureUid = createSelector (
  selectFeature,
  (state : FeatureState) => state.uid
);
