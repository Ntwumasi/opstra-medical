# OPSTRA MEDICAL - Complete Design Specifications

## Color Palette

### Primary Colors
```css
--primary-dark-blue: #0A1F44
--primary-navy: #1B3B6F
--accent-cyan: #00D9C0
--accent-teal: #1DD3BD
```

### Background Colors
```css
--bg-white: #FFFFFF
--bg-light-cyan: #E8F9F7
--bg-light-blue: #F0F7FF
--bg-dark-navy: #0A1F44
```

### Text Colors
```css
--text-primary: #2D3748
--text-secondary: #718096
--text-light: #A0AEC0
--text-white: #FFFFFF
--text-cyan: #00D9C0
```

### Utility Colors
```css
--border-light: #E2E8F0
--border-cyan: #00D9C0
--shadow-light: rgba(0, 0, 0, 0.05)
--shadow-medium: rgba(0, 0, 0, 0.1)
```

---

## Typography

### Font Families
```css
--font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif
--font-headings: 'Poppins', 'Inter', sans-serif
```

### Font Sizes
```css
/* Headings */
--text-h1: 56px (3.5rem)
--text-h2: 48px (3rem)
--text-h3: 36px (2.25rem)
--text-h4: 24px (1.5rem)
--text-h5: 20px (1.25rem)

/* Body */
--text-lg: 18px (1.125rem)
--text-base: 16px (1rem)
--text-sm: 14px (0.875rem)
--text-xs: 12px (0.75rem)

/* Section Labels */
--text-label: 14px (0.875rem)
--text-label-caps: 12px (0.75rem) /* uppercase */
```

### Font Weights
```css
--font-light: 300
--font-regular: 400
--font-medium: 500
--font-semibold: 600
--font-bold: 700
--font-extrabold: 800
```

### Line Heights
```css
--leading-tight: 1.2
--leading-snug: 1.375
--leading-normal: 1.5
--leading-relaxed: 1.625
--leading-loose: 2
```

---

## Layout & Spacing

### Container Widths
```css
--container-max: 1280px
--container-content: 1140px
--container-narrow: 960px
```

### Spacing Scale
```css
--space-1: 4px
--space-2: 8px
--space-3: 12px
--space-4: 16px
--space-5: 20px
--space-6: 24px
--space-8: 32px
--space-10: 40px
--space-12: 48px
--space-16: 64px
--space-20: 80px
--space-24: 96px
--space-32: 128px
```

### Section Spacing
```css
--section-padding-y: 80px (mobile: 60px)
--section-gap: 120px (mobile: 80px)
```

---

## COMPONENT SPECIFICATIONS

## Header / Navigation

### Dimensions
```css
height: 80px
background: #FFFFFF
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05)
position: sticky
top: 0
z-index: 1000
```

### Logo
```css
height: 40px
width: auto
```

### Navigation Links
```css
font-size: 16px
font-weight: 500
color: #2D3748
letter-spacing: -0.2px
gap-between-items: 40px

hover {
  color: #00D9C0
  transition: color 0.2s ease
}
```

### CTA Button (Header)
```css
background: #00D9C0
color: #FFFFFF
padding: 12px 32px
border-radius: 8px
font-size: 16px
font-weight: 600

hover {
  background: #00C4B0
  transform: translateY(-2px)
  box-shadow: 0 4px 12px rgba(0, 217, 192, 0.3)
}
```

### Social Icons
```css
size: 20px
color: #718096
gap: 16px

hover {
  color: #00D9C0
}
```

---

## Hero Section

### Container
```css
padding-top: 80px
padding-bottom: 80px
background: linear-gradient(135deg, #0A1F44 0%, #1B3B6F 100%)
position: relative
```

### Layout
```
Grid: 2 columns
Left column: 50% (content)
Right column: 50% (image)
Vertical align: center
```

### Label (Above Headline)
```css
text: "CARING FOR LIFE"
font-size: 14px
font-weight: 600
color: #00D9C0
text-transform: uppercase
letter-spacing: 2px
margin-bottom: 16px
```

### Main Headline
```css
font-size: 56px (mobile: 36px)
font-weight: 700
line-height: 1.2
color: #FFFFFF
margin-bottom: 24px

/* "High-Quality Care" in cyan */
.highlight {
  color: #00D9C0
}
```

### Subtext
```css
font-size: 18px
line-height: 1.6
color: rgba(255, 255, 255, 0.8)
max-width: 520px
margin-bottom: 32px
```

### Primary CTA Button
```css
background: #00D9C0
color: #FFFFFF
padding: 16px 40px
border-radius: 8px
font-size: 16px
font-weight: 600
display: inline-flex
align-items: center
gap: 8px

hover {
  background: #00C4B0
  transform: translateY(-2px)
  box-shadow: 0 8px 24px rgba(0, 217, 192, 0.4)
}
```

### Hero Image
```css
width: 100%
height: auto
max-width: 600px
border-radius: 0
/* Doctor photo with professional background */
```

---

## "Who We Are" Section

### Section Container
```css
padding: 80px 0
background: #FFFFFF
```

### Section Label
```css
text: "ABOUT US"
font-size: 14px
font-weight: 600
color: #00D9C0
text-transform: uppercase
letter-spacing: 2px
margin-bottom: 12px
text-align: center (or left based on design)
```

### Section Heading
```css
font-size: 48px (mobile: 32px)
font-weight: 700
line-height: 1.2
color: #0A1F44
margin-bottom: 24px
```

### Description Text
```css
font-size: 16px
line-height: 1.75
color: #718096
max-width: 640px
margin-bottom: 48px
```

### Feature Icons Grid
```
Layout: 2x2 grid
Gap: 32px (horizontal) x 40px (vertical)
```

### Feature Card
```css
display: flex
align-items: flex-start
gap: 16px

/* Icon */
.icon {
  width: 48px
  height: 48px
  background: #E8F9F7
  border-radius: 12px
  display: flex
  align-items: center
  justify-content: center
  color: #00D9C0
  flex-shrink: 0
}

/* Title */
.title {
  font-size: 18px
  font-weight: 600
  color: #0A1F44
  margin-bottom: 8px
}

/* Description */
.description {
  font-size: 14px
  line-height: 1.6
  color: #718096
}
```

### Image Grid (Team Photos)
```
Layout: 3 images
- Top-left: Large (2:3 ratio)
- Top-right: Medium (1:1 ratio)
- Bottom-right: Medium (1:1 ratio)

Gap: 16px
Border-radius: 12px
```

---

## "Our Healthcare Service" Section

### Section Container
```css
padding: 80px 0
background: #E8F9F7
```

### Section Label
```css
text: "SERVICES WE PROVIDE"
font-size: 14px
font-weight: 600
color: #00D9C0
text-transform: uppercase
letter-spacing: 2px
margin-bottom: 12px
text-align: center
```

### Section Heading
```css
font-size: 48px (mobile: 32px)
font-weight: 700
line-height: 1.2
color: #0A1F44
margin-bottom: 64px
text-align: center
```

### Service Cards Grid
```
Layout: 3 columns (mobile: 1 column)
Gap: 32px
```

### Service Card
```css
background: #FFFFFF
border-radius: 16px
padding: 40px 32px
transition: all 0.3s ease
border: 1px solid #E2E8F0

hover {
  transform: translateY(-8px)
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.08)
  border-color: #00D9C0
}

/* Icon Container */
.icon {
  width: 64px
  height: 64px
  background: #E8F9F7
  border-radius: 16px
  display: flex
  align-items: center
  justify-content: center
  margin-bottom: 24px
}

/* Icon */
.icon svg {
  width: 32px
  height: 32px
  color: #00D9C0
}

/* Title */
.title {
  font-size: 20px
  font-weight: 600
  color: #0A1F44
  margin-bottom: 12px
}

/* Description */
.description {
  font-size: 15px
  line-height: 1.6
  color: #718096
  margin-bottom: 20px
}

/* Read More Link */
.link {
  font-size: 14px
  font-weight: 600
  color: #00D9C0
  display: inline-flex
  align-items: center
  gap: 8px
  
  hover {
    gap: 12px
    transition: gap 0.2s ease
  }
}
```

### Featured Service Card (Navy Blue)
```css
background: #0A1F44
color: #FFFFFF

.icon {
  background: rgba(0, 217, 192, 0.1)
}

.title {
  color: #FFFFFF
}

.description {
  color: rgba(255, 255, 255, 0.8)
}

.link {
  color: #00D9C0
}
```

---

## "Open for Appointments" Banner

### Container
```css
background: #FFFFFF
padding: 48px
border-radius: 16px
border: 2px solid #E8F9F7
display: flex
align-items: center
justify-content: space-between
margin: 80px 0
```

### Icon
```css
width: 56px
height: 56px
background: #E8F9F7
border-radius: 12px
color: #00D9C0
```

### Text
```css
font-size: 24px
font-weight: 600
color: #0A1F44
```

### Button
```css
background: #00D9C0
color: #FFFFFF
padding: 14px 32px
border-radius: 8px
font-size: 16px
font-weight: 600
```

---

## "Directory" Section

### Container
```css
padding: 80px 0
background: #FFFFFF
```

### Layout
```
Grid: 2 columns (50/50)
Left: Content
Right: Image
Gap: 64px
```

### Section Label
```css
text: "HEALTHCARE DIRECTORY"
font-size: 14px
font-weight: 600
color: #00D9C0
text-transform: uppercase
letter-spacing: 2px
margin-bottom: 12px
```

### Heading
```css
font-size: 42px (mobile: 32px)
font-weight: 700
line-height: 1.2
color: #0A1F44
margin-bottom: 24px
```

### Description
```css
font-size: 16px
line-height: 1.75
color: #718096
margin-bottom: 40px
```

### Directory List Items
```css
/* List container */
gap: 20px
margin-bottom: 40px

/* List item */
.item {
  display: flex
  align-items: flex-start
  gap: 16px
}

/* Icon */
.icon {
  width: 48px
  height: 48px
  background: #E8F9F7
  border-radius: 12px
  display: flex
  align-items: center
  justify-content: center
  color: #00D9C0
  flex-shrink: 0
}

/* Title */
.title {
  font-size: 18px
  font-weight: 600
  color: #0A1F44
  margin-bottom: 4px
}

/* Description */
.description {
  font-size: 14px
  line-height: 1.6
  color: #718096
}
```

### Directory Image
```css
width: 100%
height: 100%
object-fit: cover
border-radius: 16px
max-height: 600px
```

---

## "Trust Us" / CTA Section

### Container
```css
padding: 80px 0
background: #0A1F44
```

### Layout
```
Grid: 2 columns
Left: Content (60%)
Right: Stats cards (40%)
```

### Heading
```css
font-size: 42px (mobile: 32px)
font-weight: 700
line-height: 1.3
color: #FFFFFF
margin-bottom: 24px
```

### Description
```css
font-size: 16px
line-height: 1.75
color: rgba(255, 255, 255, 0.8)
margin-bottom: 32px
```

### CTA Button
```css
background: #00D9C0
color: #FFFFFF
padding: 16px 40px
border-radius: 8px
font-size: 16px
font-weight: 600
```

### Stats Cards
```css
display: grid
grid-template-columns: repeat(2, 1fr)
gap: 24px

/* Card */
.card {
  background: rgba(255, 255, 255, 0.05)
  backdrop-filter: blur(10px)
  border: 1px solid rgba(255, 255, 255, 0.1)
  border-radius: 12px
  padding: 32px 24px
  text-align: center
}

/* Number */
.number {
  font-size: 32px
  font-weight: 700
  color: #00D9C0
  margin-bottom: 8px
}

/* Label */
.label {
  font-size: 14px
  font-weight: 500
  color: rgba(255, 255, 255, 0.8)
}
```

---

## Appointment Form Section

### Container
```css
padding: 80px 0
background: linear-gradient(135deg, #0A1F44 0%, #1B3B6F 100%)
```

### Layout
```
Grid: 2 columns (40/60)
Left: Image/CTA card
Right: Form
Gap: 48px
```

### CTA Card
```css
background: #00D9C0
border-radius: 16px
padding: 48px 40px
text-align: center
position: relative
height: 100%

/* Icon */
.icon {
  width: 80px
  height: 80px
  margin: 0 auto 24px
}

/* Heading */
.heading {
  font-size: 28px
  font-weight: 700
  color: #FFFFFF
  line-height: 1.3
  margin-bottom: 16px
}

/* Subtext */
.subtext {
  font-size: 16px
  color: rgba(255, 255, 255, 0.9)
}
```

### Form Container
```css
background: #FFFFFF
border-radius: 16px
padding: 48px 40px
```

### Form Heading
```css
font-size: 32px
font-weight: 700
color: #0A1F44
margin-bottom: 32px
```

### Input Fields
```css
/* Input wrapper */
.input-group {
  margin-bottom: 20px
}

/* Input field */
input, textarea {
  width: 100%
  padding: 14px 16px
  border: 1px solid #E2E8F0
  border-radius: 8px
  font-size: 15px
  color: #2D3748
  transition: all 0.2s ease
}

input:focus, textarea:focus {
  outline: none
  border-color: #00D9C0
  box-shadow: 0 0 0 3px rgba(0, 217, 192, 0.1)
}

textarea {
  min-height: 120px
  resize: vertical
}

/* Two-column inputs (name, email) */
.input-row {
  display: grid
  grid-template-columns: 1fr 1fr
  gap: 20px
}

/* Submit button */
.submit-btn {
  width: 100%
  background: #00D9C0
  color: #FFFFFF
  padding: 16px
  border-radius: 8px
  font-size: 16px
  font-weight: 600
  border: none
  cursor: pointer
  transition: all 0.2s ease
}

.submit-btn:hover {
  background: #00C4B0
  transform: translateY(-2px)
  box-shadow: 0 8px 24px rgba(0, 217, 192, 0.3)
}
```

---

## Testimonials Section

### Container
```css
padding: 80px 0
background: #F0F7FF
```

### Section Label
```css
text: "TESTIMONIALS"
font-size: 14px
font-weight: 600
color: #00D9C0
text-transform: uppercase
letter-spacing: 2px
margin-bottom: 12px
text-align: center
```

### Heading
```css
font-size: 42px (mobile: 32px)
font-weight: 700
color: #0A1F44
margin-bottom: 48px
text-align: center
```

### Testimonial Card
```css
background: #FFFFFF
border-radius: 16px
padding: 40px
max-width: 800px
margin: 0 auto
text-align: center
box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06)

/* Quote icon */
.quote-icon {
  width: 48px
  height: 48px
  color: #00D9C0
  margin: 0 auto 24px
}

/* Quote text */
.quote {
  font-size: 18px
  line-height: 1.8
  color: #2D3748
  font-style: italic
  margin-bottom: 32px
}

/* Author */
.author {
  font-size: 16px
  font-weight: 600
  color: #0A1F44
  margin-bottom: 4px
}

/* Role */
.role {
  font-size: 14px
  color: #718096
}
```

---

## Footer

### Container
```css
background: #0A1F44
padding-top: 80px
padding-bottom: 40px
color: #FFFFFF
```

### Newsletter Section
```css
background: rgba(0, 217, 192, 0.1)
border: 1px solid rgba(0, 217, 192, 0.2)
border-radius: 12px
padding: 32px
margin-bottom: 64px

/* Heading */
.heading {
  font-size: 20px
  font-weight: 600
  color: #FFFFFF
  margin-bottom: 16px
}

/* Input group */
.input-group {
  display: flex
  gap: 12px
}

/* Email input */
input {
  flex: 1
  padding: 14px 20px
  border: 1px solid rgba(255, 255, 255, 0.2)
  border-radius: 8px
  background: rgba(255, 255, 255, 0.05)
  color: #FFFFFF
  font-size: 15px
}

/* Subscribe button */
button {
  background: #00D9C0
  color: #FFFFFF
  padding: 14px 32px
  border-radius: 8px
  font-size: 15px
  font-weight: 600
  border: none
  cursor: pointer
  white-space: nowrap
}
```

### Footer Grid
```
Layout: 4 columns
- Column 1: Logo + description (wider)
- Column 2: Important Links
- Column 3: Contact Info
- Column 4: Hours / Other info
Gap: 48px
```

### Footer Logo
```css
height: 40px
margin-bottom: 20px
```

### Footer Description
```css
font-size: 14px
line-height: 1.6
color: rgba(255, 255, 255, 0.7)
max-width: 280px
```

### Footer Column Heading
```css
font-size: 18px
font-weight: 600
color: #FFFFFF
margin-bottom: 20px
```

### Footer Links
```css
/* List */
list-style: none
padding: 0
margin: 0

/* Link item */
li {
  margin-bottom: 12px
}

/* Link */
a {
  font-size: 14px
  color: rgba(255, 255, 255, 0.7)
  text-decoration: none
  transition: color 0.2s ease
}

a:hover {
  color: #00D9C0
}
```

### Footer Contact Info
```css
/* Contact item */
.contact-item {
  display: flex
  align-items: start
  gap: 12px
  margin-bottom: 16px
}

/* Icon */
.icon {
  width: 20px
  height: 20px
  color: #00D9C0
  flex-shrink: 0
  margin-top: 2px
}

/* Text */
.text {
  font-size: 14px
  line-height: 1.5
  color: rgba(255, 255, 255, 0.7)
}
```

### Social Media Icons
```css
display: flex
gap: 16px
margin-top: 24px

/* Icon button */
.social-icon {
  width: 40px
  height: 40px
  border-radius: 50%
  background: rgba(255, 255, 255, 0.05)
  display: flex
  align-items: center
  justify-content: center
  color: rgba(255, 255, 255, 0.7)
  transition: all 0.2s ease
}

.social-icon:hover {
  background: #00D9C0
  color: #FFFFFF
  transform: translateY(-2px)
}
```

### Copyright Bar
```css
border-top: 1px solid rgba(255, 255, 255, 0.1)
padding-top: 32px
margin-top: 64px
display: flex
justify-content: space-between
align-items: center

/* Text */
.copyright {
  font-size: 14px
  color: rgba(255, 255, 255, 0.5)
}

/* Links */
.legal-links {
  display: flex
  gap: 24px
  font-size: 14px
  color: rgba(255, 255, 255, 0.5)
}
```

---

## Buttons - Complete Specs

### Primary Button
```css
background: #00D9C0
color: #FFFFFF
padding: 16px 40px
border-radius: 8px
font-size: 16px
font-weight: 600
border: none
cursor: pointer
transition: all 0.2s ease
display: inline-flex
align-items: center
gap: 8px

hover {
  background: #00C4B0
  transform: translateY(-2px)
  box-shadow: 0 8px 24px rgba(0, 217, 192, 0.4)
}

active {
  transform: translateY(0)
}
```

### Secondary Button (Outline)
```css
background: transparent
color: #00D9C0
padding: 16px 40px
border-radius: 8px
font-size: 16px
font-weight: 600
border: 2px solid #00D9C0
cursor: pointer
transition: all 0.2s ease

hover {
  background: #00D9C0
  color: #FFFFFF
  transform: translateY(-2px)
}
```

### Text Button / Link
```css
background: none
border: none
color: #00D9C0
font-size: 15px
font-weight: 600
padding: 0
cursor: pointer
display: inline-flex
align-items: center
gap: 8px
transition: gap 0.2s ease

hover {
  gap: 12px
}
```

---

## Cards & Containers

### Standard Card
```css
background: #FFFFFF
border-radius: 16px
padding: 32px
box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06)
border: 1px solid #E2E8F0
transition: all 0.3s ease

hover {
  transform: translateY(-4px)
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.1)
  border-color: #00D9C0
}
```

### Icon Container (Cyan background)
```css
width: 64px
height: 64px
background: #E8F9F7
border-radius: 16px
display: flex
align-items: center
justify-content: center
color: #00D9C0
```

---

## Responsive Breakpoints

```css
/* Mobile */
@media (max-width: 640px) {
  --text-h1: 32px
  --text-h2: 28px
  --text-h3: 24px
  --section-padding-y: 48px
  
  /* Stack all grid columns */
  grid-template-columns: 1fr !important
}

/* Tablet */
@media (max-width: 1024px) {
  --text-h1: 42px
  --text-h2: 36px
  --section-padding-y: 64px
  
  /* 2-column grids become single column */
  .service-grid {
    grid-template-columns: repeat(2, 1fr)
  }
}

/* Desktop */
@media (min-width: 1280px) {
  --container-max: 1280px
}
```

---

## Animations & Transitions

### Hover Effects
```css
/* Standard transition */
transition: all 0.2s ease

/* Card hover */
transform: translateY(-4px)
box-shadow: 0 12px 32px rgba(0, 0, 0, 0.1)

/* Button hover */
transform: translateY(-2px)
box-shadow: 0 8px 24px rgba(0, 217, 192, 0.4)

/* Link hover */
color: #00D9C0
gap: 12px /* if with arrow */
```

### Loading States
```css
/* Skeleton loader */
background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)
background-size: 200% 100%
animation: loading 1.5s ease-in-out infinite

@keyframes loading {
  0% { background-position: 200% 0 }
  100% { background-position: -200% 0 }
}
```

### Fade In
```css
@keyframes fadeIn {
  from {
    opacity: 0
    transform: translateY(20px)
  }
  to {
    opacity: 1
    transform: translateY(0)
  }
}

animation: fadeIn 0.6s ease-out
```

---

## Icons

### Icon Library
Recommended: **Lucide React** or **Heroicons**

### Icon Sizes
```css
--icon-xs: 16px
--icon-sm: 20px
--icon-md: 24px
--icon-lg: 32px
--icon-xl: 48px
--icon-2xl: 64px
```

### Common Icons Used
- Stethoscope (Medical)
- Heart (Care/Health)
- Users (Team)
- Clock (24/7 Service)
- Shield (Protection)
- Calendar (Appointments)
- Phone (Contact)
- Mail (Email)
- MapPin (Location)
- ArrowRight (Links/CTAs)
- Check (Checkmarks)
- Menu (Mobile nav)

---

## Images

### Image Sizing
```css
/* Hero image */
max-width: 600px
height: auto
aspect-ratio: 4/5

/* Service icons */
width: 64px
height: 64px

/* Team photos */
border-radius: 12px
aspect-ratio: varies

/* Directory image */
max-height: 600px
border-radius: 16px
object-fit: cover
```

### Image Optimization
- Use WebP format with JPEG fallback
- Implement lazy loading
- Use responsive images with srcset
- Target sizes:
  - Hero: 1200px width
  - Service cards: 600px width
  - Team photos: 400px width

---

## Additional Details

### Border Radius Scale
```css
--radius-sm: 6px
--radius-md: 8px
--radius-lg: 12px
--radius-xl: 16px
--radius-2xl: 24px
--radius-full: 9999px (circles)
```

### Shadow Scale
```css
--shadow-xs: 0 1px 2px rgba(0, 0, 0, 0.05)
--shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.05)
--shadow-md: 0 4px 20px rgba(0, 0, 0, 0.06)
--shadow-lg: 0 8px 32px rgba(0, 0, 0, 0.08)
--shadow-xl: 0 16px 40px rgba(0, 0, 0, 0.1)

/* Cyan shadow (for buttons) */
--shadow-cyan: 0 8px 24px rgba(0, 217, 192, 0.4)
```

### Z-index Scale
```css
--z-base: 0
--z-dropdown: 100
--z-sticky: 500
--z-header: 1000
--z-modal: 2000
--z-toast: 3000
```

---

## Implementation Checklist

### Phase 1: Setup
- [ ] Install fonts (Inter, Poppins)
- [ ] Set up CSS variables
- [ ] Configure Tailwind (if using)
- [ ] Set up icon library

### Phase 2: Layout
- [ ] Header/Navigation
- [ ] Hero section
- [ ] Footer structure
- [ ] Container system

### Phase 3: Components
- [ ] Buttons (all variants)
- [ ] Cards (service, testimonial)
- [ ] Forms (inputs, textarea)
- [ ] Icons containers

### Phase 4: Sections
- [ ] Who We Are
- [ ] Services
- [ ] Directory
- [ ] Appointment form
- [ ] Testimonials

### Phase 5: Polish
- [ ] Hover effects
- [ ] Transitions
- [ ] Responsive design
- [ ] Accessibility (ARIA labels, focus states)

### Phase 6: Testing
- [ ] Cross-browser testing
- [ ] Mobile responsiveness
- [ ] Performance optimization
- [ ] Accessibility audit

---

## Quick Copy-Paste CSS Variables

```css
:root {
  /* Colors */
  --primary-dark-blue: #0A1F44;
  --primary-navy: #1B3B6F;
  --accent-cyan: #00D9C0;
  --accent-teal: #1DD3BD;
  
  --bg-white: #FFFFFF;
  --bg-light-cyan: #E8F9F7;
  --bg-light-blue: #F0F7FF;
  --bg-dark-navy: #0A1F44;
  
  --text-primary: #2D3748;
  --text-secondary: #718096;
  --text-light: #A0AEC0;
  --text-white: #FFFFFF;
  --text-cyan: #00D9C0;
  
  /* Typography */
  --font-primary: 'Inter', sans-serif;
  --font-headings: 'Poppins', sans-serif;
  
  --text-h1: 56px;
  --text-h2: 48px;
  --text-h3: 36px;
  --text-h4: 24px;
  --text-base: 16px;
  
  /* Spacing */
  --space-4: 16px;
  --space-6: 24px;
  --space-8: 32px;
  --space-12: 48px;
  --space-16: 64px;
  --space-20: 80px;
  
  /* Border Radius */
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  
  /* Shadows */
  --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 20px rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 8px 32px rgba(0, 0, 0, 0.08);
  --shadow-cyan: 0 8px 24px rgba(0, 217, 192, 0.4);
}
```

---

**This specification document is complete and production-ready. Use it to recreate the Opstra Medical website pixel-perfect!**
