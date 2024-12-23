export const config = {
  googleMaps: {
    apiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    defaultCenter: {
      lat: 40.63332,
      lng: -3.16259
    },
    defaultZoom: 16
  },
  analytics: {
    measurementId: import.meta.env.VITE_GA_MEASUREMENT_ID,
    enabled: import.meta.env.PROD // Only enable in production
  }
} as const;