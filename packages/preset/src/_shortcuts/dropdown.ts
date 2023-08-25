type KbdPrefix = 'dropdown'

export const staticKbd: Record<`${KbdPrefix}-${string}` | KbdPrefix, string> = {
  // config
  'dropdown-button-trailing-icon': 'i-heroicons-chevron-down-20-solid',

  // base
  'dropdown': '',

  // button
  'dropdown-button': '',
  'dropdown-button-trailing': 'opacity-60',

  // items
  'dropdown-items': 'absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-muted shadow-lg ring-1 ring-base divide-y divide-base focus:outline-none',
  'dropdown-item-list': '',
  'dropdown-items-list-item': '',
  'dropdown-items-list-item-active': '',
  'dropdown-items-list-item-disabled': '',
  'dropdown-items-list-item-icon': '',

  // wrappers
  'dropdown-wrapper': '',
}

export const dynamicKbd: [RegExp, (params: RegExpExecArray) => string][] = [
  // dynamic preset
]

export const dropdown = [
  ...dynamicKbd,
  staticKbd,
]
