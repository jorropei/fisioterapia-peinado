import { config } from '../../../config/environment';

export const MAP_CENTER = config.googleMaps.defaultCenter;

export const MAP_CONTAINER_STYLE = {
  width: '100%',
  height: '400px'
} as const;