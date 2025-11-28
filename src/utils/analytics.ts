interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

interface PageViewData {
  path: string;
  title: string;
}

class Analytics {
  private initialized: boolean = false;
  private consentGiven: boolean = false;

  constructor() {
    this.checkConsent();
  }

  private checkConsent(): void {
    const consent = localStorage.getItem('analytics_consent');
    this.consentGiven = consent === 'accepted';
  }

  setConsent(consent: boolean): void {
    this.consentGiven = consent;
    localStorage.setItem('analytics_consent', consent ? 'accepted' : 'declined');

    if (consent && typeof window !== 'undefined') {
      this.initialize();
    }
  }

  hasConsent(): boolean {
    return this.consentGiven;
  }

  initialize(): void {
    if (this.initialized || !this.consentGiven) return;

    if (typeof window !== 'undefined' && (window as any).gtag) {
      this.initialized = true;
    }
  }

  trackPageView(data: PageViewData): void {
    if (!this.consentGiven || typeof window === 'undefined') return;

    if ((window as any).gtag) {
      (window as any).gtag('event', 'page_view', {
        page_path: data.path,
        page_title: data.title,
      });
    }

    console.log('Page view tracked:', data);
  }

  trackEvent(event: AnalyticsEvent): void {
    if (!this.consentGiven || typeof window === 'undefined') return;

    if ((window as any).gtag) {
      (window as any).gtag('event', event.action, {
        event_category: event.category,
        event_label: event.label,
        value: event.value,
      });
    }

    console.log('Event tracked:', event);
  }

  trackConsultationBooking(method: string): void {
    this.trackEvent({
      action: 'consultation_booking',
      category: 'engagement',
      label: method,
      value: 1,
    });
  }

  trackServiceView(serviceName: string): void {
    this.trackEvent({
      action: 'service_view',
      category: 'services',
      label: serviceName,
    });
  }

  trackCTAClick(ctaName: string, location: string): void {
    this.trackEvent({
      action: 'cta_click',
      category: 'engagement',
      label: `${ctaName} - ${location}`,
    });
  }

  trackNavigation(destination: string, source: string): void {
    this.trackEvent({
      action: 'navigation',
      category: 'navigation',
      label: `${source} -> ${destination}`,
    });
  }

  trackOutboundLink(url: string, linkText: string): void {
    this.trackEvent({
      action: 'outbound_link',
      category: 'engagement',
      label: `${linkText} - ${url}`,
    });
  }
}

export const analytics = new Analytics();

export const trackPageView = (path: string, title: string) => {
  analytics.trackPageView({ path, title });
};

export const trackEvent = (event: AnalyticsEvent) => {
  analytics.trackEvent(event);
};

export const trackConsultationBooking = (method: string) => {
  analytics.trackConsultationBooking(method);
};

export const trackServiceView = (serviceName: string) => {
  analytics.trackServiceView(serviceName);
};

export const trackCTAClick = (ctaName: string, location: string) => {
  analytics.trackCTAClick(ctaName, location);
};

export const trackNavigation = (destination: string, source: string) => {
  analytics.trackNavigation(destination, source);
};

export const trackOutboundLink = (url: string, linkText: string) => {
  analytics.trackOutboundLink(url, linkText);
};
