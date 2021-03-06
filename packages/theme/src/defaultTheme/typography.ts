import type { Size, TypographyProperties } from '../types'

export const heading: TypographyProperties<Size> = {
  fontFamily: '"Noto Serif", Georgia, serif',
  fontWeight: 400,
  fontSize: {
    xs: '2.8rem',
    sm: '3.2rem',
    md: '3.6rem',
    lg: '5.2rem',
    xl: '5.7rem'
  },
  lineHeight: 1.3
}

export const text: TypographyProperties<Size> = {
  fontFamily: '"Noto Sans", Helvetica, Arial, sans-serif',
  fontWeight: 400,
  fontSize: {
    xs: '1.2rem',
    sm: '1.4rem',
    md: '1.6rem',
    lg: '1.8rem',
    xl: '2.2rem'
  },
  lineHeight: 1.5
}

export const label: TypographyProperties<Size> = {
  fontFamily: '"Noto Sans", Helvetica, Arial, sans-serif',
  fontWeight: 600,
  fontSize: {
    xs: '1rem',
    sm: '1.1rem',
    md: '1.2rem',
    lg: '1.4rem',
    xl: '1.6rem'
  },
  lineHeight: 1.3
}

export const code: TypographyProperties<Size> = {
  fontFamily: '"Noto Sans Mono", monospace',
  fontWeight: 400,
  fontSize: {
    xs: '1.1rem',
    sm: '1.2rem',
    md: '1.4rem',
    lg: '1.6rem',
    xl: '1.8rem'
  },
  lineHeight: 1.5
}
