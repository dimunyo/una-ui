type SelectPrefix = 'select'

export const staticSelect: Record<`${SelectPrefix}-${string}` | SelectPrefix, string> = {
  // base
  'select': 'bg-red',

  // wrappers
  'select-wrapper': '',

}

export const dynamicSelect: [RegExp, (params: RegExpExecArray) => string][] = [
  // dynamic preset
]

export const select = [
  ...dynamicSelect,
  staticSelect,
]
