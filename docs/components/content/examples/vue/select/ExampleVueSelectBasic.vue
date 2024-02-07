<script setup lang="ts">
const selected = ref(null)

const items = [
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
</script>

<template>
  <div class="h-100 rounded-md bg-muted p-10">
    <div class="max-w-xl">
      <NFormGroup label="Assigned to">
        <NSelect
          v-model="selected"
          :items="items"
        />
      </NFormGroup>
    </div>
  </div>
</template>
