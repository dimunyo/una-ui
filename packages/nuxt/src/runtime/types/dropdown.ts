import type { UseFloatingOptions } from '@floating-ui/vue'
import type { NButtonProps } from './button'

export interface NDropdownProps extends Omit<NButtonProps, 'una'> {
  items?: NDropdownProps[][]

  popper?: UseFloatingOptions

  una?: {
    dropdown?: string
  } & NButtonProps['una']
}
