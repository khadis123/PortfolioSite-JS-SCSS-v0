# PortfolioSite-JS-SCSS

## Overview
PortfolioSite-JS-SCSS is a personal portfolio website built using HTML, SCSS (SASS), and JavaScript. It features a responsive design, bilingual support (English and French), dynamic project modals, and smooth navigation with active link highlighting.

## Features
- **Bilingual Support**: Includes separate directories for English (`/en`) and French (`/fr`) content.
- **SCSS Styling**: Modular SCSS structure for maintainability and reusability.
- **Responsive Design**: Optimized for different screen sizes using media queries.
- **Interactive Navigation**: Hamburger menu for mobile views, active page highlighting.
- **Dynamic Project Modals**: Clickable project cards that open detailed modals.
- **Thematic Sections**: Includes About Me, Skills, Projects, Blog, and Contact.
- **Smooth User Experience**: JavaScript-driven transitions and modals.

## Project Structure
```
📦PortfolioSite-JS-SCSS
 ┣ 📂en              # English version
 ┃ ┣ 📂assets-en
 ┃ ┃ ┣ 📜blogindex.html
 ┃ ┃ ┣ 📜index.html
 ┃ ┃ ┗ 📜projectsindex.html
 ┣ 📂fr              # French version
 ┃ ┣ 📂assets-fr
 ┃ ┃ ┣ 📜blogindex.html
 ┃ ┃ ┣ 📜index.html
 ┃ ┃ ┗ 📜projectsindex.html
 ┣ 📂shared-assets   # Shared resources (CSS, JS, Images)
 ┃ ┣ 📂css
 ┃ ┃ ┣ 📜main.css
 ┃ ┣ 📂js
 ┃ ┃ ┗ 📜scripts.js
 ┃ ┣ 📂scss          # SCSS partials
 ┃ ┃ ┣ 📜_variables.scss
 ┃ ┃ ┣ 📜_mixins.scss
 ┃ ┃ ┣ 📜_header.scss
 ┃ ┃ ┣ 📜_projects.scss
 ┃ ┃ ┗ 📜main.scss
 ┃ ┣ 📂images        # Images and icons
 ┣ 📜index.html      # Main entry file
 ┣ 📜README.md       # Project documentation
```

## Technologies Used
- **HTML5**: Structured content
- **SCSS (SASS)**: Modular styling
- **JavaScript (Vanilla JS)**: Dynamic interactions
- **CSS3**: Responsive layouts and animations

## SCSS Structure
The `main.scss` file imports multiple partials for modular styling:
```scss
@import 'variables';  // Global variables
@import 'mixins';     // Reusable mixins
@import 'base';       // Basic resets and typography
@import 'header';     // Header and navigation
@import 'projects';   // Projects section
@import 'responsive'; // Responsive styles
```

## JavaScript Functionality
The `scripts.js` file handles:
- Hamburger menu toggle for mobile navigation.
- Active page highlighting when scrolling.
- Project modals for displaying additional details.

## Installation & Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/my/PortfolioSite-JS-SCSS.git
   ```
2. Navigate to the project directory:
   ```bash
   cd PortfolioSite-JS-SCSS
   ```
3. Open `index.html` in a browser.

## Future Enhancements
- Implement dark mode support.
- Improve accessibility (ARIA attributes for modals and navigation).
- Add animations for smoother transitions.

## Author
[Khadis] - Portfolio Website Developer

## License
This project is licensed under the MIT License.

