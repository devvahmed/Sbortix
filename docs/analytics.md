# Sbortix Analytics Implementation (GA4 via gtag.js)

**Measurement ID**: `G-FBDLTHZYJQ` (Configurable via `NEXT_PUBLIC_GA_ID`)  
**Method**: Direct `gtag.js` (Google Tag Manager is **not** used).

---

## 1. Architecture Overview

Sbortix implements direct, server-safe, and ad-blocker-resilient Google Analytics 4 tracking tailored for Next.js App Router.

- **Direct gtag Initialization**: Loaded in [app/layout.tsx](file:///c:/Users/LENOVO/Desktop/stitch_sbortix_enterprise_redesign%20(1)/app/layout.tsx) with `send_page_view: false` to disable automatic initial pageviews.
- **Client Route Tracking**: Controlled by [<AnalyticsPageView />](file:///c:/Users/LENOVO/Desktop/stitch_sbortix_enterprise_redesign%20(1)/components/AnalyticsPageView.tsx), wrapped in `<Suspense>`, placed directly after `{children}`. It sends a single, explicit `page_view` on initial load and route changes.
- **404 Handling**: When a route resolves to [app/not-found.tsx](file:///c:/Users/LENOVO/Desktop/stitch_sbortix_enterprise_redesign%20%281%29/app/not-found.tsx), [<NotFoundTracker />](file:///c:/Users/LENOVO/Desktop/stitch_sbortix_enterprise_redesign%20(1)/components/NotFoundTracker.tsx) synchronously flags the 404 state, suppressing `page_view` and dispatching `page_not_found` instead.
- **Delegated Interactions**: A single passive delegated click listener tracks `cta_click`, `email_click`, and `calendar_click` across all dynamically rendered components.
- **SSR & Ad-Blocker Safety**: [lib/analytics.ts](file:///c:/Users/LENOVO/Desktop/stitch_sbortix_enterprise_redesign%20(1)/lib/analytics.ts) encapsulates `trackEvent()` in a `try...catch` block with guards against missing `window` or blocked `gtag`.

---

## 2. Events & Parameter Specifications

### `page_view`
Fired on the initial site load and on every App Router client route transition.
- **Parameters**:
  - `page_path` (`string`): Full pathname with search query string (e.g. `/services/ai-solutions?utm_source=linkedin`).
  - `page_title` (`string`): Document title (e.g. `AI Solutions & Automation Systems | Sbortix`).
- **Trigger**: Fired by `<AnalyticsPageView />` effect upon route detection, provided the route is not flagged as 404.

### `page_not_found`
Fired when an invalid route or scanner path (e.g. `/login`, `/admin`, `/wp-login.php`) renders `app/not-found.tsx`.
- **Parameters**:
  - `page_path` (`string`): Path attempted by the visitor/bot.
- **Trigger**: Fired by `<NotFoundTracker />` inside `app/not-found.tsx`. Standard `page_view` is suppressed to preserve clean conversion rates and landing page metrics.

### `form_submit`
Fired only when an inquiry form submission completes successfully (HTTP 200 and `{ success: true }`).
- **Parameters**:
  - `form_name` (`"contact_page" | "home_inquiry"`): Source form identifier.
  - `page_path` (`string`): Current page path where the submission occurred (`/contact` or `/`).
- **Trigger**:
  - `ContactClient.tsx`: Contact page form submit handler after API success.
  - `HomeContactForm.tsx`: Homepage inquiry form submit handler after API success.

### `email_click`
Fired when a user clicks any `mailto:` link on the website.
- **Parameters**:
  - `link_url` (`string`): Target `mailto:` URL (e.g. `mailto:contact@sbortix.com`).
  - `page_path` (`string`): Current page path where the click occurred.
- **Trigger**: Delegated listener on any `<a>` element matching `href^="mailto:"` across contact page, homepage, and footer.

### `calendar_click`
Fired when a user clicks an appointment/consultation booking link.
- **Parameters**:
  - `link_url` (`string`): Target calendar URL (e.g. `https://cal.com`).
  - `page_path` (`string`): Current page path where the booking CTA was clicked.
- **Trigger**: Delegated listener on any `<a>` element matching `href*="cal.com"` (such as the consultation card on `/contact`).
- *Note*: Marked with a `TODO` in `ContactClient.tsx` to insert the company's dedicated Cal.com booking slug.

### `cta_click`
Fired when an interactive element with a `data-cta` attribute is clicked.
- **Parameters**:
  - `cta_id` (`string`): Unique CTA identifier defined in the `data-cta` attribute.
  - `cta_text` (`string`): Visible button text or aria-label.
  - `page_path` (`string`): Current page path where the CTA was triggered.
- **Active CTA IDs**:
  - `hero-get-started`: Homepage hero primary button (`Get Started ↗`).
  - `header-book-a-call`: Global header CTA button (`Book a call`).
  - `service-ai-solutions-primary`: Primary and bottom CTAs on `/services/ai-solutions`.
  - `service-digital-marketing-primary`: Primary and bottom CTAs on `/services/digital-marketing`.
  - `service-web-branding-primary`: Primary and bottom CTAs on `/services/web-branding`.

---

## 3. URL & UTM Query String Preservation

In [next.config.mjs](file:///c:/Users/LENOVO/Desktop/stitch_sbortix_enterprise_redesign%20(1)/next.config.mjs), apex-to-www canonical redirects are configured as:
```javascript
{
  source: '/:path*',
  has: [{ type: 'host', value: 'sbortix.com' }],
  destination: 'https://www.sbortix.com/:path*',
  permanent: true,
}
```
Next.js redirects inherently preserve all query parameters. For example, `https://sbortix.com/services/ai-solutions?utm_source=google&utm_medium=cpc` permanently redirects to `https://www.sbortix.com/services/ai-solutions?utm_source=google&utm_medium=cpc` without dropping campaign tracking parameters.

---

## 4. Verification & Testing

1. **Local Build**:
   ```bash
   npm run build
   ```
2. **GA4 DebugView**:
   Append `?debug_mode=true` to any URL or enable the Google Analytics Debugger Chrome extension to verify all events in **Admin > DebugView** in real time.
