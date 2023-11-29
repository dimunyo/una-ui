<script setup lang="ts">
import { Menu, MenuButton, MenuItems } from '@headlessui/vue'
import { usePopper } from '../../../composables/usePopper'
import type { NDropdownProps } from '../../../types'
import { omitProps } from '../../../utils'
import NButton from '../Button.vue'
import NDropdownMenuItems from './DropdownMenuItems.vue'

const props = defineProps<NDropdownProps>()

const { floatingStyles, reference, container } = usePopper(props.popper)
</script>

<template>
  <Menu v-slot="{ open }" as="div" class="relative">
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
        >
          <template #trailing>
            <NIcon
              name="chevron-down"
              class="dropdown-button-trailing-icon"
            />
          </template>
        </NButton>
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
        <!-- <div v-for="(item, i) in items" :key="i" class="p-1"> -->
        <NDropdownMenuItems :items="props.items" />
        <!-- </div> -->
      </MenuItems>
    </div>
  </Menu>
</template>
