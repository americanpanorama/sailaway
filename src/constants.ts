// Colors
export const colorText = '#2d2624';
export const colorTextLight = '#6f6f6e'; // Equivalent to lighten($color-text, 25%)
export const colorTextInvert = 'white';
export const colorBackground = '#f0f0eb';
export const colorBorder = 'silver';
export const colorInteractive = '#3366CC';
export const colorInteractiveHover = '#2c5bb2'; // Equivalent to darken($color-interactive, 10%)
export const colorInteractiveLight = '#9cbff2'; // Equivalent to lighten($color-interactive, 35%)
export const colorFooterBackground = '#666665'; // Equivalent to lighten($color-text, 20%)

// Typography
export const openLeading = 1.7;

// Mixin equivalents
export const typeSansSerif = "'Roboto', sans-serif";

// Dimensions
export const headerHeight = 110;
export const headerTitleHeight = 60;
export const footerHeight = 46;


export const sizes = {
  mobile: 480,
  tablet: 600,
  desktop: 1000,
  desktop2: 1440,
}

export const devices = {
  mobile: `(min-width: ${sizes.mobile}px)`,
  tablet: `(min-width: ${sizes.tablet}px)`,
  desktop: `(min-width: ${sizes.desktop}px)`,
  desktop2: `(min-width: ${sizes.desktop2}px)`,
}

