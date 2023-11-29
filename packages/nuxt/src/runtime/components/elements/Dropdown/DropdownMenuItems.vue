<script setup lang="ts">
import { MenuItem, MenuItems } from '@headlessui/vue'
import type { NDropdownProps } from '../../../types'
import NButton from '../Button.vue'
import NDropdown from './Dropdown.vue'

const props = defineProps<NDropdownProps>()
</script>

<template>
  <MenuItems
    static
    class="rounded-md bg-muted shadow-lg ring-1 ring-base divide-y divide-base focus:outline-none"
  >
    <div v-for="(item, i) in props.items" :key="i" class="p-1">
      <MenuItem v-for="(link, i) in item" v-slot="{ active }" :key="i" as="div">
        <!-- <a :href="link.to" class="block px-4 py-2 text-sm" :class="active ? 'bg-$c-gray-100 text-base' : 'text-$c-gray-700'">{{ link.label }}</a> -->
        <NButton v-if="link.to" :to="link.to" :btn="`${active ? 'soft-gray' : 'ghost-gray'} block`" class="justify-start" :label="link.label!" />

        <NDropdown
          v-else
          :popper="{
            placement: 'right-start',
          }"
          trailing="i-heroicons-chevron-right"
          :btn="`${active ? 'soft-gray' : 'ghost-gray'} block`"
          hover
          v-bind="link"
        />
      </MenuItem>
    </div>
  </MenuItems>
</template>
