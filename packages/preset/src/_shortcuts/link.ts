type LinkPrefix = 'link'

export const staticLink: Record<`${LinkPrefix}-${string}` | LinkPrefix, string> = {
  // base
  'link': '',

  // wrappers
  'link-wrapper': '',
}

export const dynamicLink: [RegExp, (params: RegExpExecArray) => string][] = [
  // dynamic preset
]

export const link = [
  ...dynamicLink,
  staticLink,
]
