export interface SEOMetadata {
  title: string;
  description: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterCard?: 'summary' | 'summary_large_image';
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  canonical?: string;
}

export const defaultSEO: SEOMetadata = {
  title: 'AI Consulting & Development Services | Chryseis Technologies',
  description: 'Transform your organization with AI-powered solutions. Expert workshops, application development, and consulting services to accelerate your digital transformation.',
  keywords: 'AI consulting, AI workshops, application development, agile training, product management, digital transformation, AI-powered development',
  ogImage: '/lovable-uploads/4076979a-5c6a-42fc-bfad-95b3ac8af059.png',
  twitterCard: 'summary_large_image',
};

export const pageSEO: Record<string, SEOMetadata> = {
  home: {
    title: 'AI Consulting & Development Services | Chryseis Technologies',
    description: 'Transform your organization with AI-powered solutions. Expert workshops, application development, and consulting services to accelerate your digital transformation.',
    keywords: 'AI consulting, AI workshops, application development, digital transformation, AI training, software development, AI-powered solutions',
    ogTitle: 'Transform Your Organization with AI | Chryseis Technologies',
    ogDescription: 'Expert-led AI workshops and development services to accelerate your product development and digital transformation journey.',
    twitterTitle: 'Transform Your Organization with AI',
    twitterDescription: 'Expert-led AI workshops and development services for rapid digital transformation.',
  },
  about: {
    title: 'About Us - AI Transformation Experts | Chryseis Technologies',
    description: 'Meet our team of AI specialists, product strategists, and digital transformation consultants. Learn about our mission to empower organizations with AI technology.',
    keywords: 'AI experts, agile coaching, technical training, AI specialists, product management consultants, digital transformation team',
    ogTitle: 'About Chryseis Technologies - Your AI Transformation Partners',
    ogDescription: 'Meet the experts behind Chryseis Technologies, dedicated to empowering organizations with AI innovation.',
    twitterTitle: 'About Chryseis Technologies',
    twitterDescription: 'Your partners in AI transformation and digital innovation.',
  },
  workshops: {
    title: 'AI Development Workshops - No Coding Required | Chryseis Technologies',
    description: 'Learn to build professional websites and applications with AI in our hands-on workshops. From strategy to launch, take control of your digital future without coding.',
    keywords: 'AI workshops, no-code development, product management training, MVP development, AI-powered websites, startup workshops, digital product training',
    ogTitle: 'AI Development Workshops - Build Without Coding',
    ogDescription: 'Master AI-powered development from strategy to launch. Build professional applications without coding experience.',
    twitterTitle: 'AI Development Workshops',
    twitterDescription: 'Build professional apps with AI - no coding required.',
  },
  applicationDevelopment: {
    title: 'Custom AI Application Development Services | Chryseis Technologies',
    description: 'Professional AI-powered application development for startups and enterprises. From MVP to scalable solutions, we build applications that drive business growth.',
    keywords: 'custom application development, AI app development, MVP development, enterprise software, startup applications, scalable solutions, web application development',
    ogTitle: 'Custom AI Application Development Services',
    ogDescription: 'Professional development services for startups and enterprises leveraging AI technology.',
    twitterTitle: 'AI Application Development',
    twitterDescription: 'Custom AI-powered applications for startups and enterprises.',
  },
  productManagement: {
    title: 'Product Management Training & Consulting | Chryseis Technologies',
    description: 'Expert product management training and consulting services. Learn strategic planning, roadmap development, and AI-enhanced product management practices.',
    keywords: 'product management training, product strategy, roadmap development, product management consulting, agile product management, AI product strategy',
    ogTitle: 'Product Management Training & Consulting',
    ogDescription: 'Transform your product strategy with expert training and consulting services.',
    twitterTitle: 'Product Management Training',
    twitterDescription: 'Expert guidance for product strategy and management.',
  },
  agileTraining: {
    title: 'Agile Training & Coaching Services | Chryseis Technologies',
    description: 'Professional agile methodology training and implementation support. Certified coaches help teams adopt agile practices with AI-enhanced workflows.',
    keywords: 'agile training, scrum training, agile coaching, agile methodology, team coaching, agile transformation, certified agile coach',
    ogTitle: 'Agile Training & Coaching Services',
    ogDescription: 'Expert agile methodology training and implementation support for modern teams.',
    twitterTitle: 'Agile Training & Coaching',
    twitterDescription: 'Professional agile training and implementation support.',
  },
  userResearch: {
    title: 'User Research & UX Design Services | Chryseis Technologies',
    description: 'User-centered research and design methodologies to build products customers love. Expert guidance in user testing, personas, and UX strategy.',
    keywords: 'user research, UX design, user testing, customer personas, user-centered design, UX research, usability testing',
    ogTitle: 'User Research & UX Design Services',
    ogDescription: 'Build products customers love with expert user research and UX design services.',
    twitterTitle: 'User Research & UX Design',
    twitterDescription: 'User-centered research and design methodologies.',
  },
  technicalTraining: {
    title: 'Technical Training & Curriculum Development | Chryseis Technologies',
    description: 'Comprehensive technical training programs and curriculum development for teams of any size. Expert instruction in modern development practices and AI integration.',
    keywords: 'technical training, curriculum development, software training, developer training, team training, AI technical training, programming courses',
    ogTitle: 'Technical Training & Curriculum Development',
    ogDescription: 'Comprehensive technical training programs for modern development teams.',
    twitterTitle: 'Technical Training Services',
    twitterDescription: 'Expert technical training and curriculum development.',
  },
  privacyPolicy: {
    title: 'Privacy Policy | Chryseis Technologies',
    description: 'Read our privacy policy to understand how Chryseis Technologies collects, uses, and protects your personal information.',
    keywords: 'privacy policy, data protection, GDPR compliance, personal information',
    ogTitle: 'Privacy Policy - Chryseis Technologies',
    ogDescription: 'Our commitment to protecting your personal information and privacy.',
    twitterTitle: 'Privacy Policy',
    twitterDescription: 'Our privacy policy and data protection practices.',
  },
};
