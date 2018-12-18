import { ADD_PLACE, DELETE_PLACE, SELECT_PLACE, DESELECT_PLACE } from '../actions/actionTypes';

export const addPlace = placeName => ({
  type: ADD_PLACE,
  placeName,
});

export const deletelace = () => ({
  type: DELETE_PLACE,
});

export const selectPlace = placeKey => ({
  type: SELECT_PLACE,
  placeKey,
});

export const deselectPlace = () => ({
  type: DESELECT_PLACE,
});
