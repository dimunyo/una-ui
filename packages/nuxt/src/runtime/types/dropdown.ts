import type { NButtonProps } from './button'

export interface NDropdownProps extends Omit<NButtonProps, 'una'> {
  items?: NDropdownItemProps[]
  una?: {
    dropdown?: string
  } & NButtonProps['una']
}

export interface NDropdownItemProps {

}
