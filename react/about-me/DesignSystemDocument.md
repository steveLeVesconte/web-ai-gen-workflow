# Design System Documentation

## 1. Typography
### Font Family
- All text: apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif

### Font Sizes and Styles
#### Desktop Font Sizes and Styles
| Element | Font Size | Line Height | Font Weight | Other |
|---------|-----------|-------------|-------------|-------|
| Body Text | 18px | 28px | 400 | - |
| NavBar Menu Link | 18px | 28px | 500 | text-decoration: none |
| Body Text Links | 18px | 28px | 600 | text-decoration: underline |
| H1 | 48px | 56px | 700 | - |
| H2 | 40px | 48px | 700 | - |
| H3 | 28px | 36px | 600 | - |
| Byline | 14px | 20px | 400 | color: #6b7280 |
| Image Labels | 14px | 20px | 400 | - |
| Footer Link | 16px | 24px | 400 | text-decoration: none |
| Brand Title | 40px | 48px | 700 | text-decoration: none |
| Caption | 13px | 18.2px | 400 | text-align: center |

#### Mobile Font Sizes and Styles
| Element | Font Size | Line Height | Font Weight | Other |
|---------|-----------|-------------|-------------|-------|
| Body Text | 16px | 24px | 400 | - |
| Vertical NavBar Menu Link | 24px | 36px | 500 | text-decoration: none |
| Body Text Links | 16px | 24px | 600 | text-decoration: underline |
| H1 | 32px | 40px | 700 | - |
| H2 | 28px | 36px | 700 | - |
| H3 | 24px | 32px | 600 | - |
| hamburger icon | 32px | 40px | 700 | - |
| Caption | 10px | 13px | 400 | text-align: center |

## 2. Color Scheme
| Element | Color |
|---------|-------|
| Default Text | #1f2937 |
| Body Text Links | #2563eb |
| Reverse Text | #ffffff |
| Primary Accent | #3b82f6 |
| Secondary Accent | #10b981 |
| NavBar Background | #111827 |
| NavBar Menu Link color | Reverse Text |
| NavBar Menu Link Active | Primary Accent |
| NavBar Menu Link Hover | Primary Accent |
| Footer Background | #111827 |
| Footer Link | rgba(255, 255, 255, 0.7) |
| Footer Text | rgba(255, 255, 255, 0.7) |
| Background | #f3f4f6 |
| hamburger icon | Reverse Text |
| Brand Title | Reverse Text |
| Caption | color: rgba(0, 0, 0, .5)|

## 3. Layout
### Desktop Layout
#### PageContainer
- display: flex
- flex-direction: column
- min-height: 100vh
- Contains:
  -- Header:
    --- Full viewport width
    --- Header Content Area:
      ---- max-width: 1280px
      ---- margin: 0 auto
      ---- padding: 0 32px
      ---- Contains:
        ----- Brand Title on left
        ----- NavBar on right
  -- Main Content Aria:
    --- flex-grow:1
  -- Footer:
    --- Full viewport width
    --- Footer Content Area:
      ---- max-width: 1280px
      ---- margin: 0 auto
      ---- padding: 0 32px
      ---- Content displayed horizontally in one row with appropriate spacing
      ---- contains:
        ----- copywright on left
        ----- social links on right (gitHub, LinkedIn)

### Mobile Layout
- Main Content Area:
  -- margin: 0 16px
- NavBar:
  -- margin: 0 16px

## 4. Components
### NavBar
#### Desktop NavBar:
- Hide Mobile menu items
- Centered in viewport
- Width: 100%
- max-width: 1280px
- margin: 0 auto
- padding: 16px 32px
- Align items: center
  
#### Mobile NavBar (≤ 768px):
- Hide horizontal menu items
- Display hamburger icon (≡) in top-right corner
- Clicking hamburger reveals full-screen-vertical-menu with smooth transition
    -- Display Vertical Mobile Menu
     --- list-style-type: none
     --- flex-direction: column
     --- align-items: center
  -- Display (X) button for closing the full-screen-vertical-menu
    --- Clicking (x) button hides the ull-screen-vertical-menu

### Article Image (Shadowed)
- Spans content area
- Border radius: 8px
- Box shadow: 0 4px 6px rgba(0, 0, 0, 0.1)
- Placeholder: src="https://picsum.photos/1200/600" alt="Article Image"
  -- followed by a Caption:

### Caption
- padding:  0;
- margin-top:0;
- contains:
  -- words about the image

## 5. Default Page Layout
- Main Content Aria
  -- Centered in viewport
  -- max-width: ( Default: 800px, Home Page: 1280px)
  -- margin: 0 auto
  -- padding: 64px 32px
- Main Content Aria Contains:
  -- Page title: H1 - left justified
  -- Page subtitle title: H2 - left justified
  -- Article:
    --- paragraphs alternating with Article Images

## 6. Pages:
- Home
- Projects
- About Me
- Generated Art
- Contact

## 7. Accessibility Guidelines
- Use semantic HTML5 elements
- Follow WCAG 2.1 guidelines (AA level)
- Ensure hamburger menu is keyboard accessible
- Use appropriate alt text for images
- Maintain sufficient color contrast ratios (minimum 4.5:1 for normal text, 3:1 for large text)
- Implement skip-to-content link for keyboard users
- Ensure all interactive elements have focus states

## 8. Responsive Design
- Implement mobile-first approach
- Use media queries for responsive breakpoints
- Ensure all images are responsive (width: 100%; height: auto;)
- Collapse navigation into hamburger menu on mobile devices


## 9. Interactive Elements
### Buttons
- Primary Button:
  -- Background: Primary Accent
  -- Text Color: #ffffff
  -- Padding: 12px 24px
  -- Border Radius: 4px
  -- Hover State: Darken background by 10%
- Secondary Button:
  -- Border: 2px solid Primary Accent
  -- Text Color: Primary Accent
  -- Background: transparent
  -- Padding: 10px 22px
  -- Border Radius: 4px
  -- Hover State: Fill background with 10% opacity of primary color

### Form Elements
- Input Fields:
  -- Border: 1px solid #d1d5db
  -- Border Radius: 4px
  -- Padding: 8px 12px
  -- Focus State: 2px solid #3b82f6 border
- Checkboxes and Radio Buttons:
  -- Use custom styles to maintain consistency across browsers
  -- Ensure clear visual feedback for checked states

## 10. Animation and Transitions
- Use consistent easing for all animations: cubic-bezier(0.4, 0, 0.2, 1)
- Standard duration for short animations: 200ms
- Hover transitions:
  -- Apply to all interactive elements
  -- Duration: 150ms
- Page transitions:
  -- Fade in new content: 300ms
- Loading animations:
  -- Use subtle, on-brand animations for loading states
  -- Avoid rapid or distracting movements

## 11. Iconography
- Use a consistent icon library (e.g., Feather Icons, Material Icons)
- Ensure icons are available in both light and dark mode variants
- Use SVG format for scalability
- Maintain consistent sizing:
  -- Small: 16x16px
  -- Medium: 24x24px
  -- Large: 32x32px
