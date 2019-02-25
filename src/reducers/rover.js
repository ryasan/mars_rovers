import {
  SELECT_ROVER,
  STORE_PHOTOS,
  SELECT_DATE,
  SELECT_CAMERA
} from './../actions/types';

const rovers = [
  {
    name: 'curiosity',
    minPhotoDate: '2012-8-6',
    maxPhotoDate: '2019-2-14',
    selected: true
  },
  {
    name: 'opportunity',
    minPhotoDate: '2004-1-25',
    maxPhotoDate: '2018-6-11',
    selected: false
  },
  {
    name: 'spirit',
    minPhotoDate: '2004-1-4',
    maxPhotoDate: '2010-3-21',
    selected: false
  }
];

const INITIAL_STATE = {
  selectedDate: new Date(rovers[0].maxPhotoDate),
  selectedCamera: 'All',
  photos: [],
  filteredPhotos: [],
  rovers
};

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case SELECT_ROVER:
      return {
        ...state,
        rovers: state.rovers.map(rover => ({
          ...rover,
          selected: rover.name === payload.name
        }))
      };
    case SELECT_DATE:
      return { ...state, selectedDate: payload.date };
    case STORE_PHOTOS:
      return {
        ...state,
        photos: payload.photos,
        filteredPhotos: payload.photos
      };
    case SELECT_CAMERA:
      return {
        ...state,
        selectedCamera: payload.camera,
        filteredPhotos: state.photos.filter(
          ({ camera }) => camera.name === payload.camera || payload.camera === 'All'
        )
      };
    default:
      return state;
  }
};