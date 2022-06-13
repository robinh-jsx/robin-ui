import type { CSSObject } from '@emotion/react'
import type { ThemeFunctions } from './ThemeProvider/functions'

export type DeepPartial<T> = T extends object
	? {
			[P in keyof T]?: DeepPartial<T[P]>
	  }
	: T

export type ColorMode = 'light' | 'dark' | 'system'
export type DerrivedColorMode = 'light' | 'dark'

export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export type SizeValue = Size | string | number

export type Modifier =
	| 'backgroundTint'
	| 'tint'
	| 'hover'
	| 'focus'
	| 'active'
	| 'fadedBase'
	| 'fadedOnBase'

type DefaultColor =
	| 'gray'
	| 'red'
	| 'pink'
	| 'violet'
	| 'indigo'
	| 'blue'
	| 'cyan'
	| 'teal'
	| 'green'
	| 'lime'
	| 'yellow'
	| 'orange'

type Intensity = 0 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900
export type ColorObj = Record<Intensity, string>

export interface AdditionalColors extends Record<string, ColorObj> {}

interface PaletteColor {
	base: string
	onBase: string
}

interface PaletteColorWithVariant extends PaletteColor {
	variant: string
	onVariant: string
}

type PaletteKey = 'background'
type PaletteKeyWithVariant =
	| 'primary'
	| 'secondary'
	| 'critical'
	| 'warning'
	| 'info'
	| 'success'
	| 'surface'

// TODO: Test additional keys
export interface AdditionalPalette
	extends Record<string, string | PaletteColor | PaletteColorWithVariant> {}

interface DefaultPalette
	extends Record<PaletteKey, PaletteColor>,
		Record<PaletteKeyWithVariant, PaletteColorWithVariant> {
	outline: string
}

export type Palette = DefaultPalette & AdditionalPalette

export type ColorToken =
	| `${keyof DefaultPalette}`
	| `${PaletteKeyWithVariant}.${keyof PaletteColorWithVariant}`
	| `${PaletteKey}.${keyof PaletteColor}`
	| `${DefaultColor}.${keyof ColorObj}`
	| 'outline'
	| (`${keyof AdditionalPalette}` & Record<never, never>)
	| (string & Record<never, never>)

export interface TypographyProperties<V extends Size> {
	fontFamily: NonNullable<React.CSSProperties['fontFamily']>
	fontWeight: NonNullable<React.CSSProperties['fontWeight']>
	fontSize: Record<V, NonNullable<React.CSSProperties['fontSize']>>
	lineHeight: Record<V, NonNullable<React.CSSProperties['lineHeight']>>
}

export interface BaseTheme extends Record<string, unknown> {
	global: CSSObject
	componentStyles: Record<string, CSSObject>
	breakpoints: Record<Size, number | string>
	spacing: Record<Size, number | string>
	radius: Record<Size, NonNullable<React.CSSProperties['borderRadius']>>
	typography: {
		heading: TypographyProperties<Size>
		text: TypographyProperties<Size>
		label: TypographyProperties<Size>
		code: TypographyProperties<Size>
	}
	colors: Record<DefaultColor, ColorObj> & AdditionalColors
	lightPalette: Palette
	darkPalette: Palette
	colorModifiers: Record<Modifier, number>
	transition: {
		duration: NonNullable<React.CSSProperties['transitionDuration']>
		ease: NonNullable<React.CSSProperties['transitionTimingFunction']>
	}
	shadow: {
		color: string
		generateShadow: (elevation: number) => React.CSSProperties['boxShadow']
	}
}

export type AugumentedTheme = BaseTheme & {
	colorMode: 'light' | 'dark'
	palette: Palette
	media: Record<Size, string>
}

export interface RobinTheme extends AugumentedTheme {
	fn: ThemeFunctions
}
