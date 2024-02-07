<script setup lang="ts">
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/vue'
import { useVModel } from '@vueuse/core'
import NIcon from '../elements/Icon.vue'
import NButton from '../elements/Button.vue'
import type { NSelectProps } from '../../types'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps <NSelectProps> (), {
  items: () => [],
})

const emit = defineEmits<{ (...args: any): void }>()

const selected = useVModel(props, 'modelValue', emit, { passive: true })
</script>

<template>
  <Listbox v-model="selected" as="div" class="outline-none">
    <!-- class="relative w-full cursor-default rounded-md bg-base py-1.5 pl-3 pr-10 text-left text-base shadow-sm ring-1 ring-base ring-inset sm:text-sm sm:leading-6 focus:outline-none focus:ring-2 focus:ring-indigo-600" -->
    <div class="relative">
      <ListboxButton
        as="div"
      >
        <NButton
          :id="id"
          v-bind="$attrs"
          class="relative w-full justify-between"
          btn="input-outline"
          trailing="i-heroicons-chevron-up-down-20-solid"
          :una="{
            btnTrailing: 'text-$c-gray-400',
          }"
        >
          <slot>
            <span class="block truncate">{{ selected?.name }}</span>

            <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <NIcon name="" class="h-5 w-5 text-$gray-400" aria-hidden="true" />
            </span>
          </slot>
        </NButton>
      </ListboxButton>

      <transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
        <ListboxOptions class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-base py-1 text-base shadow-lg ring-1 ring-base ring-opacity-5 sm:text-sm focus:outline-none">
          <ListboxOption v-for="item in items" :key="item.id" v-slot="{ active, selected }" as="template" :value="item">
            <li class="relative cursor-default select-none py-2 pl-8 pr-4" :class="[active ? 'bg-indigo-600 text-white' : 'text-base']">
              <span class="block truncate" :class="[selected ? 'font-semibold' : 'font-normal']">{{ item.name }}</span>

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
