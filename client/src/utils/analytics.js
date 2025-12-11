/**
 * Google Analytics 4 (GA4) Tracking Utilities
 * Provides event tracking and analytics initialization for portfolio
 */

/**
 * Initialize Google Analytics 4
 * @param {string} measurementId - GA4 Measurement ID (G-XXXXXXXXXX)
 */
export const initAnalytics = (measurementId) => {
  if (!measurementId) {
    console.warn('Google Analytics: No measurement ID provided');
    return;
  }

  // Prevent double initialization
  if (window.gtag) {
    console.warn('Google Analytics: Already initialized');
    return;
  }

  // Load GA4 script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);

  // Initialize dataLayer
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  window.gtag = gtag;

  // Configure GA4
  gtag('js', new Date());
  gtag('config', measurementId, {
    send_page_view: true,
    anonymize_ip: true, // Privacy-friendly
  });

  console.log('Google Analytics initialized:', measurementId);
};

/**
 * Track custom click events
 * @param {string} label - Event label (e.g., "hero_hire_me")
 * @param {object} params - Additional parameters
 */
export const trackClick = (label, params = {}) => {
  if (!window.gtag) {
    console.warn('Google Analytics: gtag not initialized');
    return;
  }

  window.gtag('event', 'click', {
    event_label: label,
    ...params,
  });

  console.log('GA Event: click ->', label, params);
};

/**
 * Track page views (for SPA navigation)
 * @param {string} path - Page path (e.g., "/projects")
 */
export const trackPageView = (path) => {
  if (!window.gtag) {
    console.warn('Google Analytics: gtag not initialized');
    return;
  }

  window.gtag('event', 'page_view', {
    page_path: path,
    page_title: document.title,
  });

  console.log('GA Event: page_view ->', path);
};

/**
 * Track project views
 * @param {string} projectName - Name of the project
 */
export const trackProjectView = (projectName) => {
  if (!window.gtag) return;

  window.gtag('event', 'view_item', {
    event_category: 'Projects',
    event_label: projectName,
  });

  console.log('GA Event: view_item ->', projectName);
};

/**
 * Track contact form interactions
 * @param {string} action - Action type (e.g., "email_click", "form_submit")
 */
export const trackContact = (action) => {
  if (!window.gtag) return;

  window.gtag('event', action, {
    event_category: 'Contact',
  });

  console.log('GA Event: contact ->', action);
};

/**
 * Track external link clicks
 * @param {string} url - External URL
 * @param {string} label - Link label
 */
export const trackExternalLink = (url, label) => {
  if (!window.gtag) return;

  window.gtag('event', 'click', {
    event_category: 'External Link',
    event_label: label,
    value: url,
  });

  console.log('GA Event: external_link ->', label, url);
};

/**
 * Track scroll depth (for engagement metrics)
 * @param {number} percentage - Scroll percentage (25, 50, 75, 100)
 */
export const trackScrollDepth = (percentage) => {
  if (!window.gtag) return;

  window.gtag('event', 'scroll', {
    event_category: 'Engagement',
    event_label: `${percentage}%`,
    value: percentage,
  });

  console.log('GA Event: scroll ->', `${percentage}%`);
};

/**
 * Track resume downloads
 */
export const trackResumeDownload = () => {
  if (!window.gtag) return;

  window.gtag('event', 'file_download', {
    event_category: 'Resume',
    event_label: 'resume.pdf',
  });

  console.log('GA Event: resume_download');
};
