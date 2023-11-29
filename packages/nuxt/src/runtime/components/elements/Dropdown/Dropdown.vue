<script setup lang="ts">
import { Menu, MenuButton, MenuItems } from '@headlessui/vue'
import { useElementHover } from '@vueuse/core'
import { onMounted, ref, watchEffect } from 'vue'
import { usePopper } from '../../../composables/usePopper'
import type { NDropdownProps } from '../../../types'
import { omitProps } from '../../../utils'
import NButton from '../Button.vue'
import NDropdownMenuItemsList from './DropdownMenuItemsList.vue'

const props = withDefaults(defineProps<NDropdownProps>(), {
  closeDelay: 300,
  openDelay: 200,
})

const { floatingStyles, reference, container } = usePopper(props.popper)

const isHoveredReference = useElementHover(reference)
const isHoveredContainer = useElementHover(container)

const menuApi = ref<any>(null)
let closeTimer: NodeJS.Timeout | null = null
let openTimer: NodeJS.Timeout | null = null

watchEffect(() => {
  if (!props.hover)
    return

  if (isHoveredReference.value || isHoveredContainer.value) {
    if (closeTimer) {
      clearTimeout(closeTimer)
      closeTimer = null
    }

    openTimer = setTimeout(() => {
      menuApi.value?.openMenu()
    }, props.openDelay)
  }
  else {
    if (openTimer) {
      clearTimeout(openTimer)
      openTimer = null
    }

    closeTimer = setTimeout(() => {
      menuApi.value?.closeMenu()
    }, props.closeDelay)
  }
})

onMounted(() => {
  setTimeout(() => {
    // @ts-expect-error internals
    const menuProvides = reference.value?.$.provides
    if (!menuProvides)
      return

    const menuProvidesSymbols = Object.getOwnPropertySymbols(menuProvides)
    menuApi.value = menuProvidesSymbols.length && menuProvides[menuProvidesSymbols[0]]
  }, 200)
})
</script>

<template>
  <Menu
    v-slot="{ open }"
    as="div"
    class="relative"
  >
    <MenuButton
      ref="reference"
      as="div"
      role="button"
    >
      <slot name="button">
        <NButton
          v-bind="omitProps(props, ['popper', 'items'])"
          trailing="dropdown-button-trailing-icon"
          class="w-full justify-between"
          :una="{
            btnTrailing: 'dropdown-button-trailing',
          }"
        />
      </slot>
    </MenuButton>

    <div
      v-if="open"
      ref="container"
      :style="floatingStyles"
    >
      <MenuItems
        static
        class="w-56 rounded-md bg-muted shadow-lg ring-1 ring-base divide-y divide-base focus:outline-none"
      >
        <NDropdownMenuItemsList :items="props.items" />
      </MenuItems>
    </div>
  </Menu>
</template>
