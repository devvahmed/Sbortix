---
name: Precision Enterprise
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f3'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#464553'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f0f1f1'
  outline: '#777584'
  outline-variant: '#c8c4d5'
  surface-tint: '#544fc0'
  primary: '#1f108e'
  on-primary: '#ffffff'
  primary-container: '#3730a3'
  on-primary-container: '#a9a7ff'
  inverse-primary: '#c3c0ff'
  secondary: '#5e5e61'
  on-secondary: '#ffffff'
  secondary-container: '#e0dfe2'
  on-secondary-container: '#626265'
  tertiary: '#511c00'
  on-tertiary: '#ffffff'
  tertiary-container: '#752c00'
  on-tertiary-container: '#fe9562'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e2dfff'
  primary-fixed-dim: '#c3c0ff'
  on-primary-fixed: '#0f0069'
  on-primary-fixed-variant: '#3b35a7'
  secondary-fixed: '#e3e2e4'
  secondary-fixed-dim: '#c7c6c9'
  on-secondary-fixed: '#1b1c1e'
  on-secondary-fixed-variant: '#464749'
  tertiary-fixed: '#ffdbcc'
  tertiary-fixed-dim: '#ffb694'
  on-tertiary-fixed: '#351000'
  on-tertiary-fixed-variant: '#7a3003'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
typography:
  headline-xl:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  xs: 8px
  sm: 16px
  md: 24px
  lg: 40px
  xl: 64px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
---

## Brand & Style

The design system is engineered for high-stakes enterprise environments where data integrity and professional credibility are paramount. The brand personality is authoritative yet understated, avoiding the hyperbole of typical AI marketing in favor of a "tools-not-toys" philosophy. It targets C-suite executives and senior data analysts who value clarity and efficiency over visual noise.

The visual style is a refined **Corporate Modernism**. It leverages a "Quiet Luxury" approach to interface design: heavy use of whitespace, high-contrast typography, and a restricted palette. There is zero tolerance for decorative elements like gradients or glassmorphism. Instead, the design system relies on mathematical precision, hairline strokes, and a rigid adherence to the grid to evoke an emotional response of stability, focus, and trust.

## Colors

The palette is strictly functional. The primary background is a crisp White (#FFFFFF), used for the main canvas to maximize readability. An Off-white (#FAFAFA) is utilized for secondary containers, sidebars, and section backgrounds to create subtle structural differentiation without the need for heavy borders.

**Deep Indigo (#3730A3)** serves as the sole high-affinity accent color. It is reserved exclusively for primary actions, active states, and critical highlights. **Dark Charcoal (#111214)** is used for all primary headings and body text to ensure maximum WCAG AAA compliance and a grounded, serious tone. Semantic colors (success, error, warning) should be used sparingly and desaturated to maintain the monochromatic professional aesthetic.

## Typography

This design system utilizes **Inter** across all levels to maintain a systematic and utilitarian feel. The hierarchy is intentionally dramatic; headlines use a bold weight with tight letter-spacing to command attention, while body text uses a generous line-height (1.5x - 1.6x) to ensure long-form data reports remain legible.

On mobile devices, the largest headlines scale down aggressively to prevent awkward line breaks, while body sizes remain constant to preserve accessibility. Labels and metadata should utilize the medium or semi-bold weights of Inter to distinguish them from standard body copy without increasing font size.

## Layout & Spacing

The design system follows a **Fixed-Fluid Hybrid Grid**. For desktop, a 12-column grid is used with a maximum content width of 1280px. Gutters are fixed at 24px to maintain consistent "air" between data modules. For mobile, a 4-column fluid grid is implemented with 16px side margins.

Spacing follows a strict 4px base unit. Component-internal spacing (padding) should lean towards the generous side (typically 16px or 24px) to avoid a cramped "legacy software" feel. Section-to-section vertical spacing should be substantial (64px+) to clearly demarcate different content streams.

## Elevation & Depth

Elevation is achieved through a combination of **Tonal Layering** and **Low-Contrast Outlines**. Instead of deep, dramatic shadows, this system uses a single 1px hairline border in a light grey (#E5E7EB) for card containers. 

When depth is required for interactive elements (like modals or dropdowns), a very subtle, diffused ambient shadow is used: `0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)`. Surfaces do not "float" high above the background; they sit just above it, maintaining a flat and architectural feel.

## Shapes

The shape language is "Soft Professional." A standard **8px (0.5rem)** radius is applied to all primary UI components including buttons, input fields, and cards. This radius provides enough softness to feel modern and accessible while remaining structured enough for enterprise software. Large containers or featured sections may use a **16px (1rem)** radius to further differentiate them from smaller interactive units.

## Components

- **Buttons**: Primary buttons are solid Deep Indigo (#3730A3) with white text. Secondary buttons use the hairline border (#E5E7EB) with Charcoal text. No gradients or inner glows.
- **Input Fields**: 1px border (#E5E7EB), 8px radius. Active state is indicated by a 1px Indigo border and a soft 2px Indigo focus ring with 10% opacity.
- **Cards**: Use the Off-white (#FAFAFA) background or a white background with the hairline border. Avoid heavy shadows; prefer a slight background color change on hover.
- **Data Tables**: Minimalist approach. No vertical lines. Horizontal lines should be #F3F4F6. Headers are bold Charcoal in `label-sm` style.
- **Chips/Badges**: Small 4px radius or pill-shape. Backgrounds should be very light desaturated versions of semantic colors (e.g., light mint for success) with dark text.
- **Lists**: High-density lists should use `body-md` typography with 12px vertical padding between items to ensure touch targets are sufficient while maintaining data density.