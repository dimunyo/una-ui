import type { Preset } from 'unocss'
import type { RuleContext } from '@unocss/core'
import { fonts } from '@unocss/preset-mini/rules'
import { parseColor } from '@unocss/preset-mini/utils'
import type { Theme } from '@unocss/preset-uno'
import { theme as unoTheme } from '@unocss/preset-mini'
import { mergeDeep } from 'unocss'
import { colors } from '@unocss/preset-mini/colors'
import type { unaUIOptions } from './types'
import { shortcuts } from './shortcuts'

export default function presetUna(options: unaUIOptions = {
  // TODO: add options
}): Preset {
  return {
    name: '@una-ui/preset',
    options,
    shortcuts,
    theme: mergeDeep<Theme>(unoTheme, {
      colors: {
        brand: 'rgba(var(--c-brand),%alpha)',
        primary: {
          DEFAULT: 'rgba(var(--una-primary) / <alpha-value>)',
          active: 'rgba(var(--una-primary-active) / <alpha-value>)',
          50: 'rgba(var(--una-primary-50) / <alpha-value>)',
          100: 'rgba(var(--una-primary-100) / <alpha-value>)',
          200: 'rgba(var(--una-primary-200) / <alpha-value>)',
          300: 'rgba(var(--una-primary-300) / <alpha-value>)',
          400: 'rgba(var(--una-primary-400) / <alpha-value>)',
          500: 'rgba(var(--una-primary-500) / <alpha-value>)',
          600: 'rgba(var(--una-primary-600) / <alpha-value>)',
          700: 'rgba(var(--una-primary-700) / <alpha-value>)',
          800: 'rgba(var(--una-primary-800) / <alpha-value>)',
          900: 'rgba(var(--una-primary-900) / <alpha-value>)',
          950: 'rgba(var(--una-primary-950) / <alpha-value>)',
        },
        gray: {
          DEFAULT: 'rgba(var(--una-gray) / <alpha-value>)',
          active: 'rgba(var(--una-gray-active) / <alpha-value>)',
          50: 'rgba(var(--una-gray-50) / <alpha-value>)',
          100: 'rgba(var(--una-gray-100) / <alpha-value>)',
          200: 'rgba(var(--una-gray-200) / <alpha-value>)',
          300: 'rgba(var(--una-gray-300) / <alpha-value>)',
          400: 'rgba(var(--una-gray-400) / <alpha-value>)',
          500: 'rgba(var(--una-gray-500) / <alpha-value>)',
          600: 'rgba(var(--una-gray-600) / <alpha-value>)',
          700: 'rgba(var(--una-gray-700) / <alpha-value>)',
          800: 'rgba(var(--una-gray-800) / <alpha-value>)',
          900: 'rgba(var(--una-gray-900) / <alpha-value>)',
          950: 'rgba(var(--una-gray-950) / <alpha-value>)',
        },
        error: colors.red,
        success: colors.green,
        warning: colors.amber,
        info: colors.blue,
      },
    }),
    rules: [
      [/^n-(.*)$/, ([, body]: string[], { theme }: RuleContext<Theme>) => {
        const color = parseColor(body, theme)
        if ((color?.cssColor?.type === 'rgb' || color?.cssColor?.type === 'rgba') && color.cssColor.components) {
          return {
            '--c-brand': `${color.cssColor.components.join(',')}`,
          }
        }
      }],
      [/^size-(.*)$/, fonts[1][1] as any],
      ['n-disabled', {
        'opacity': 0.7,
        'pointer-events': 'none',
      }],
    ],
    variants: [
      (input: string) => {
        const prefix = 'n-disabled:'
        if (input.startsWith(prefix)) {
          return {
            matcher: input.slice(prefix.length),
            selector: input => `[disabled] ${input}, ${input}[disabled]`,
          }
        }
      },
      (input: string) => {
        const prefix = 'n-checked:'
        if (input.startsWith(prefix)) {
          return {
            matcher: input.slice(prefix.length),
            selector: input => `[checked] ${input}, ${input}[checked]`,
          }
        }
      },
    ],
    preflights: [
      {
        getCSS: () => `
          *:focus-visible {
            outline: 2px solid rgb(var(--una-primary)); /* 2 */
            border-radius: 0.25rem; /* 1 */
            outline-offset: 0.10rem; /* 1 */
          }
        `,
      },
    ],
  }
}
