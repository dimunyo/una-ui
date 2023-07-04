export const staticInput = {
  /* default */
  'input-base': 'w-full input-md input-disabled ring-base sm:(text-sm leading-6) placeholder:text-gray-400 dark:placeholder:text-gray-500 block outline-none rounded-md border-0 shadow-sm bg-transparent',
  'input-disabled': '!disabled:(cursor-not-allowed pointer-events-none bg-muted text-muted opacity-75)',
  'input-error': 'input-solid-error text-error-500 dark:text-error-400 placeholder-error-400 dark:placeholder-error-300',

  /* input options */
  // TODO convert to regex and make sizes dynamic
  'input-xs': 'px-2 py-0.5 text-xs',
  'input-sm': 'px-2.5 py-1 text-sm',
  'input-md': 'px-3 py-1.5',
  'input-lg': 'px-3.5 py-2 text-lg',
  'input-xl': 'px-4 py-2.5 text-xl',

  'input-wrapper': 'relative',
  'input-leading-wrapper': 'pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3',
  'input-trailing-wrapper': 'pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3',
}

export const dynamicInput = [
  [/^input-focus(-(\S+))?$/, ([, , c = 'primary']) => `focus:ring-2 focus:ring-${c}-500 dark:focus:ring-${c}-400 focus:bg-base focus:outline-2 focus:outline-offset-0 focus:outline-${c}-500/50 dark:focus:outline-${c}-400/50`],
  [/^input-outline(-(\S+))?$/, ([, , c = 'primary']) => `input-base input-focus-${c} ring-1 ring-inset ring-base`],
  [/^input-solid(-(\S+))?$/, ([, , c = 'primary']) => `input-base input-focus-${c} ring-1 ring-inset ring-${c}-500 dark:ring-${c}-400`],
]
