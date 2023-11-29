import { autoUpdate, flip, offset, shift, useFloating } from '@floating-ui/vue'
import type { UseFloatingOptions } from '@floating-ui/vue'
import { ref } from 'vue'

// @ts-expect-error tsconfig
import { useAppConfig } from '#imports'

export function usePopper(options: UseFloatingOptions = {
  placement: 'bottom-start',
}) {
  const reference = ref<HTMLDivElement>()
  const container = ref<HTMLDivElement>()

  const { floating } = useAppConfig()
  const { floatingStyles } = useFloating(reference, container, {
    whileElementsMounted: autoUpdate,
    ...options,
    middleware: [offset(10), flip(), shift()],
    transform: true,
    ...floating,
  })

  return {
    reference,
    container,
    floatingStyles,
  }
}
