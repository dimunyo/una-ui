export interface NSelectProps {
  id?: string
  modelValue?: any
  items?: any[] // TODO: type this
  placeholder?: string
  label?: string
  title?: string
  defaultValue?: any

  required?: boolean
  isLoading?: boolean
  isDisabled?: boolean
}
