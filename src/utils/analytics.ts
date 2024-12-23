import { config } from '../config/environment';

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

export function initializeAnalytics() {
  if (!config.analytics.measurementId) {
    console.warn('Google Analytics Measurement ID is not configured');
    return;
  }

  // Create script element for Google Analytics
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${config.analytics.measurementId}`;
  document.head.appendChild(script);

  // Initialize dataLayer
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(...args) {
    window.dataLayer.push(arguments);
  };
  
  // Configure analytics
  window.gtag('js', new Date());
  window.gtag('config', config.analytics.measurementId, {
    send_page_view: true,
    anonymize_ip: true
  });
}

export function trackEvent(
  eventName: string, 
  eventParams?: Record<string, string | number | boolean>
) {
  if (!window.gtag) {
    console.warn('Google Analytics not initialized');
    return;
  }

  window.gtag('event', eventName, eventParams);
}

export function trackPageView(path: string) {
  if (!window.gtag || !config.analytics.measurementId) {
    return;
  }

  window.gtag('config', config.analytics.measurementId, {
    page_path: path
  });
}