# Website Pre-Launch Audit

## Role
Act as a senior web developer, UX specialist, SEO specialist, security reviewer, and QA engineer.

## Objective
Before launching my website, perform a complete pre-launch audit and identify everything that needs to be fixed or improved.

## Context
I want the website to be production-ready, secure, fast, mobile-friendly, accessible, SEO-friendly, and optimized for conversions.

## Task

Go through the website/codebase and check the following 20 items:

### 1. Privacy Policy
- Check whether a Privacy Policy page exists.
- Make sure it is accessible from the website.

### 2. Terms & Conditions
- Check whether Terms & Conditions exist.
- Make sure they are accessible from the website.

### 3. Secrets
- Search the frontend and repository for exposed:
  - API keys
  - passwords
  - tokens
  - private credentials
  - `.env` values
- Move sensitive information to the backend/environment variables where necessary.

### 4. HTTPS
- Make sure the production website uses HTTPS.
- Check for insecure HTTP resources.

### 5. Cookie Consent
- Check whether a cookie-consent banner is required.
- If required, make sure it works correctly.

### 6. Meta Titles & Descriptions
- Check every important page for:
  - `<title>`
  - meta description
  - appropriate keywords/context
- Make titles and descriptions useful for search engines and users.

### 7. Social Preview
- Check Open Graph and social sharing metadata.
- Make sure links generate a proper preview image, title, and description.

### 8. Favicon
- Add/check:
  - favicon
  - appropriate sizes
  - Apple touch icon if relevant

### 9. Sitemap & robots.txt
- Make sure `sitemap.xml` exists and is correct.
- Make sure `robots.txt` exists and does not accidentally block important pages.

### 10. Image Alt Text
- Check all meaningful images.
- Add descriptive `alt` attributes.
- Use empty alt attributes for purely decorative images where appropriate.

### 11. Image Compression
- Find unnecessarily large images.
- Compress and/or convert them to modern formats such as WebP or AVIF where appropriate.
- Avoid sacrificing noticeable visual quality.

### 12. Page Load Speed
- Identify performance bottlenecks.
- Check:
  - JavaScript bundle size
  - CSS
  - images
  - fonts
  - unnecessary requests
  - lazy loading
  - caching
- Optimize the biggest bottlenecks first.

### 13. Color Contrast
- Check text/background contrast.
- Make sure important content is readable and accessible.

### 14. Mobile Friendly
- Test the website at common mobile screen sizes.
- Check:
  - responsive layout
  - text size
  - buttons
  - navigation
  - forms
  - images
  - horizontal scrolling
  - touch targets

### 15. Custom 404 Page
- Check whether a custom 404 page exists.
- Make sure it provides a useful way back to the main website.

### 16. Broken Links
- Scan internal links.
- Find:
  - 404 links
  - incorrect routes
  - broken buttons
  - broken navigation
- Fix them.

### 17. Form Validation
- Check every form.
- Validate:
  - required fields
  - email format
  - incorrect input
  - empty submissions
  - server-side validation where applicable
- Make error messages clear to users.

### 18. Spam Protection
- Check public forms for spam protection.
- Implement an appropriate solution if necessary.

### 19. Analytics
- Check whether analytics is configured correctly.
- Make sure important events/conversions can be tracked.

### 20. One Clear Call To Action
- Identify the primary goal of the website.
- Make sure there is one obvious primary CTA.
- Check CTA text, placement, visibility, and consistency.

---

# How To Work

Do not simply tell me what I should check.

Actually inspect the existing codebase and make the necessary changes wherever possible.

For every issue:

1. Identify the problem.
2. Explain why it matters.
3. Fix it if you can.
4. Show me what you changed.
5. If you cannot fix it automatically, give me exact instructions.

## Priority

Classify every issue as:

- 🔴 Critical — must fix before launch
- 🟠 High — strongly recommended before launch
- 🟡 Medium — should fix soon
- 🟢 Low — optional improvement

## Final Report

At the end, provide:

### Pre-Launch Score
Give the website a score from **0–100**.

### Critical Issues
List everything that absolutely needs to be fixed before launch.

### Fixed Automatically
List everything you changed yourself.

### Remaining Issues
List everything that still requires my action.

### Performance
Give the most important performance improvements.

### SEO
Give the most important SEO improvements.

### Security
Give the most important security issues.

### UX / Mobile
Give the most important UX and responsive-design issues.

### Final Launch Checklist

- [ ] Privacy Policy
- [ ] Terms & Conditions
- [ ] No exposed secrets
- [ ] HTTPS
- [ ] Cookie consent if required
- [ ] Meta titles
- [ ] Meta descriptions
- [ ] Social preview
- [ ] Favicon
- [ ] Sitemap
- [ ] robots.txt
- [ ] Image alt text
- [ ] Compressed images
- [ ] Page speed optimized
- [ ] Accessible color contrast
- [ ] Mobile responsive
- [ ] Custom 404
- [ ] No broken links
- [ ] Form validation
- [ ] Spam protection
- [ ] Analytics
- [ ] Clear primary CTA

Only consider the website **launch-ready** when all critical issues are resolved.