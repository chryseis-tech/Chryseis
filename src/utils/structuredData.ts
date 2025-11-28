export interface Organization {
  '@context': string;
  '@type': string;
  name: string;
  url: string;
  logo: string;
  description: string;
  email: string;
  contactPoint: {
    '@type': string;
    email: string;
    contactType: string;
  };
  sameAs: string[];
  address?: {
    '@type': string;
    addressCountry: string;
  };
}

export interface WebPage {
  '@context': string;
  '@type': string;
  name: string;
  description: string;
  url: string;
  inLanguage: string;
  isPartOf: {
    '@type': string;
    url: string;
  };
}

export interface Service {
  '@context': string;
  '@type': string;
  name: string;
  description: string;
  provider: {
    '@type': string;
    name: string;
    url: string;
  };
  areaServed: string;
  serviceType: string;
}

export interface Person {
  '@context': string;
  '@type': string;
  name: string;
  jobTitle: string;
  description: string;
  worksFor: {
    '@type': string;
    name: string;
    url: string;
  };
  image?: string;
}

export interface BreadcrumbList {
  '@context': string;
  '@type': string;
  itemListElement: {
    '@type': string;
    position: number;
    name: string;
    item?: string;
  }[];
}

export const getOrganizationSchema = (baseUrl: string): Organization => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Chryseis Technologies Ltd',
  url: baseUrl,
  logo: `${baseUrl}/lovable-uploads/4076979a-5c6a-42fc-bfad-95b3ac8af059.png`,
  description: 'AI consulting and development services helping organizations transform with AI-powered solutions, workshops, and training programs.',
  email: 'admin@chryseis.co.uk',
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'admin@chryseis.co.uk',
    contactType: 'customer service',
  },
  sameAs: [],
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'GB',
  },
});

export const getWebPageSchema = (
  name: string,
  description: string,
  url: string,
  baseUrl: string
): WebPage => ({
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name,
  description,
  url,
  inLanguage: 'en-GB',
  isPartOf: {
    '@type': 'WebSite',
    url: baseUrl,
  },
});

export const getServiceSchema = (
  name: string,
  description: string,
  serviceType: string,
  baseUrl: string
): Service => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name,
  description,
  provider: {
    '@type': 'Organization',
    name: 'Chryseis Technologies Ltd',
    url: baseUrl,
  },
  areaServed: 'GB',
  serviceType,
});

export const getPersonSchema = (
  name: string,
  jobTitle: string,
  description: string,
  baseUrl: string,
  image?: string
): Person => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  name,
  jobTitle,
  description,
  worksFor: {
    '@type': 'Organization',
    name: 'Chryseis Technologies Ltd',
    url: baseUrl,
  },
  ...(image && { image: `${baseUrl}${image}` }),
});

export const getBreadcrumbSchema = (
  items: { name: string; url?: string }[]
): BreadcrumbList => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    ...(item.url && { item: item.url }),
  })),
});
