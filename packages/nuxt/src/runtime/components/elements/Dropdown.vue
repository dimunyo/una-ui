<script setup lang="ts">
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import type { NDropdownProps } from '../../types'
import { omitProps } from '../../utils'
import NButton from './Button.vue'

const props = defineProps<NDropdownProps>()

const items = [
  [
    {
      label: 'Edit',
      href: '#',
    },
    {
      label: 'Duplicate',
      href: '#',
    },
  ],
  [
    {
      label: 'Archive',
      href: '#',
    },
    {
      label: 'Move',
      href: '#',
    },
  ],
  [
    {
      label: 'Share',
      href: '#',
    },
    {
      label: 'Add to favorites',
      href: '#',
    },
  ],
  [
    {
      label: 'Delete',
      href: '#',
    },
  ],
]
</script>

<template>
  <Menu as="div" class="relative inline-block text-left">
    <div>
      <MenuButton as="template">
        <slot name="button">
          <NButton
            v-bind="omitProps(props, [])"
            trailing="dropdown-button-trailing-icon"
            :una="{
              btnTrailing: 'dropdown-button-trailing',
            }"
          />
        </slot>
      </MenuButton>
    </div>

    <!-- <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95"> -->
    <!-- <transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-out"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    > -->
    <MenuItems class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-muted shadow-lg ring-1 ring-base divide-y divide-base focus:outline-none">
      <div v-for="(item, i) in items" :key="i" class="p-1">
        <MenuItem v-for="(link, li) in item" v-slot="{ active }" :key="li" as="div">
          <!-- <a :href="link.href" class="block px-4 py-2 text-sm" :class="active ? 'bg-$c-gray-100 text-base' : 'text-$c-gray-700'">{{ link.label }}</a> -->
          <NButton :to="link.href" :btn="`${active ? 'soft-gray' : 'ghost-gray'} block`" class="justify-start" :label="link.label" />
        </MenuItem>
      </div>
      <!-- <div class="py-1">
          <MenuItem v-slot="{ active }">
            <a href="#" class="block px-4 py-2 text-sm" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700']">Archive</a>
          </MenuItem>
          <MenuItem v-slot="{ active }">
            <a href="#" class="block px-4 py-2 text-sm" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700']">Move</a>
          </MenuItem>
        </div>
        <div class="py-1">
          <MenuItem v-slot="{ active }">
            <a href="#" class="block px-4 py-2 text-sm" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700']">Share</a>
          </MenuItem>
          <MenuItem v-slot="{ active }">
            <a href="#" class="block px-4 py-2 text-sm" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700']">Add to favorites</a>
          </MenuItem>
        </div>
        <div class="py-1">
          <MenuItem v-slot="{ active }">
            <a href="#" class="block px-4 py-2 text-sm" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700']">Delete</a>
          </MenuItem>
        </div> -->
    </MenuItems>
    <!-- </transition> -->
  </Menu>
</template>
