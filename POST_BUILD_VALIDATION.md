# Post-Build Validation Checklist

Use this checklist to validate your site after building:

## 1. Performance Validation

- [ ] Run Lighthouse in Chrome DevTools
  - [ ] Performance score > 90
  - [ ] Accessibility score > 90
  - [ ] Best Practices score > 90
  - [ ] SEO score > 90

- [ ] Check PageSpeed Insights (https://pagespeed.web.dev/)

- [ ] Verify Core Web Vitals
  - [ ] LCP (Largest Contentful Paint) < 2.5s
  - [ ] FID (First Input Delay) < 100ms
  - [ ] CLS (Cumulative Layout Shift) < 0.1

## 2. Visual Validation

- [ ] Check site on multiple devices and screen sizes
  - [ ] Desktop (1920px+)
  - [ ] Laptop (1366px)
  - [ ] Tablet (768px)
  - [ ] Mobile (375px)

- [ ] Test in multiple browsers
  - [ ] Chrome
  - [ ] Firefox
  - [ ] Safari
  - [ ] Edge

## 3. Functionality Testing

- [ ] Verify all links work correctly
- [ ] Check that navigation works on all pages
- [ ] Test scroll-to-top button functionality
- [ ] Verify chat widget loads correctly
- [ ] Test Microsoft Store badge click

## 4. Accessibility Testing

- [ ] Run axe DevTools extension (https://www.deque.com/axe/)
- [ ] Test keyboard navigation
- [ ] Verify contrast ratios
- [ ] Check screen reader compatibility

## 5. SEO Validation

- [ ] Use https://validator.w3.org/ to validate HTML
- [ ] Check meta tags with https://metatags.io/
- [ ] Verify sitemap.xml
- [ ] Test robots.txt

## 6. PWA Validation

- [ ] Test offline functionality
- [ ] Verify Service Worker registration
- [ ] Check Web App Manifest
- [ ] Test "Add to Home Screen" functionality

## 7. Asset Optimization

- [ ] Verify WebP images are loading
- [ ] Check image dimensions and file sizes
- [ ] Validate CSS and JS minification
- [ ] Test lazy loading images

## 8. Security

- [ ] Check HTTPS functionality
- [ ] Verify security headers are working
- [ ] Test for mixed content warnings
- [ ] Validate CSP if implemented

## Tools for Testing

- Chrome DevTools
- Lighthouse
- axe DevTools
- PageSpeed Insights
- W3C Validator
- WebPageTest.org
- Screenfly for responsive testing
