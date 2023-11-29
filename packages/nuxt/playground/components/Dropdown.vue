<script setup lang="ts">
const items = [
  [
    {
      label: 'Edit',
      items: [
        [
          {
            label: 'Copy',
            to: '#test',
          },
        ],

      ],
    },
    {
      label: 'Duplicate',
      to: '#test',
    },
  ],
  [
    {
      label: 'Archive',
      to: '#test',
    },
    {
      label: 'Move',
      to: '#test',
    },
  ],
  [
    {
      label: 'Share',
      to: '#test',
    },
    {
      label: 'Add to favorites',
      to: '#test',
    },
  ],
  [
    {
      label: 'Delete',
      to: '#test',
    },
  ],
]
</script>

<template>
  <div>
    <NDropdown
      :items="items"
      hover
      btn="solid-gray"
      label="Options"
    />
  </div>
</template>
