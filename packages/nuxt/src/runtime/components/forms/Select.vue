<script setup lang="ts">
import { ref } from 'vue'
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/vue'
import NIcon from '../elements/Icon.vue'

// import { CheckIcon, ChevronUpDownIcon } from '@heroicons/vue/20/solid'

const people = [
  { id: 1, name: 'Wade Cooper' },
  { id: 2, name: 'Arlene Mccoy' },
  { id: 3, name: 'Devon Webb' },
  { id: 4, name: 'Tom Cook' },
  { id: 5, name: 'Tanya Fox' },
  { id: 6, name: 'Hellen Schmidt' },
  { id: 7, name: 'Caroline Schultz' },
  { id: 8, name: 'Mason Heaney' },
  { id: 9, name: 'Claudie Smitham' },
  { id: 10, name: 'Emil Schaefer' },
]

const selected = ref(people[3])
</script>

<template>
  <Listbox v-model="selected" as="div">
    <div class="relative">
      <ListboxButton
        class="relative w-full cursor-default rounded-md bg-base py-1.5 pl-3 pr-10 text-left text-base shadow-sm ring-1 ring-base ring-inset sm:text-sm sm:leading-6 focus:outline-none focus:ring-2 focus:ring-indigo-600"
      >
        <span class="block truncate">{{ selected.name }}</span>
        <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
          <NIcon name="i-heroicons-chevron-up-down-20-solid" class="h-5 w-5 text-$gray-400" aria-hidden="true" />
        </span>
      </ListboxButton>

      <transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
        <ListboxOptions class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-base py-1 text-base shadow-lg ring-1 ring-base ring-opacity-5 sm:text-sm focus:outline-none">
          <ListboxOption v-for="person in people" :key="person.id" v-slot="{ active, selected }" as="template" :value="person">
            <li class="relative cursor-default select-none py-2 pl-8 pr-4" :class="[active ? 'bg-indigo-600 text-white' : 'text-base']">
              <span class="block truncate" :class="[selected ? 'font-semibold' : 'font-normal']">{{ person.name }}</span>

              <span v-if="selected" class="absolute inset-y-0 left-0 flex items-center pl-1.5" :class="[active ? 'text-white' : 'text-indigo-600']">
                <NIcon name="i-heroicons-check-20-solid" class="h-5 w-5" aria-hidden="true" />
              </span>
            </li>
          </ListboxOption>
        </ListboxOptions>
      </transition>
    </div>
  </Listbox>
</template>
