export interface NRadioProps {
  /**
   * Disable the radio.
   *
   * @default false
  */
  disabled?: boolean
  /**
   * Switch the position of label and radio.
   *
   * @default false
  */
  reverse?: boolean

  /**
   * Allows you to add `UnaUI` radio preset properties,
   * Think of it as a shortcut for adding options or variants to the preset if available.
   *
   * @see https://github.com/una-ui/una-ui/blob/main/packages/preset/src/_shortcuts/radio.ts
   * @example
   * radio="green"
  */
  radio?: string
  /**
   * v-model binding value if the radio is checked.
   *
   * @default null
  */
  modelValue?: string | number | boolean | Record<string, any>
  /**
   * Add name attribute to the radio.
   *
   * @default null
  */
  name?: string
  /**
   * Manually set the id attribute.
   *
   * By default, the id attribute is generated randomly for accessibility reasons.
   *
   * @default randomId
   * @example
   * id="options"
  */
  id?: string
  /**
   * Manually set the for attribute.
   *
   * By default, the for attribute is synced with the id attribute for accessibility reasons.
   *
   * @default randomId
   * @example
   * for="options"
  */
  for?: string
  /**
   * Value of the radio.
   *
   * @example
   * value="1"
  */
  value?: string
  /**
   * Display label of the radio.
   *
   * @default null
  */
  label?: string
  /**
   * Allows you to change the size of the radio.
   *
   * @default size="sm"
   *
   * @example
   * size="sm" | size="2cm" | size="2rem" | size="2px"
  */
  size?: string

  /**
   * `UnaUI` preset configuration
   *
   * @see https://github.com/una-ui/una-ui/blob/main/packages/preset/src/_shortcuts/radio.ts
  */
  una?: {
    radio?: string
    radioWrapper?: string
    radioLabel?: string
    radioIconBase?: string
    radioIcon?: string
  }
}
