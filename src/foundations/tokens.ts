export const primitiveColors = {
  forest: { 950: '#090b09', 900: '#0e110e', 800: '#1c241c', 700: '#252f25', 600: '#2d3a2d', 500: '#526252', 400: '#5b745b', 300: '#8caf7a', 200: '#a5b5a5', 100: '#e4ecd1' },
  neutral: { white: '#ffffff', 50: '#faf9f5', 100: '#f2f0e8', 200: '#ecebe3', 300: '#e0ddd5', 900: '#000000' },
} as const

export type EarthingTheme = 'light' | 'dark'
