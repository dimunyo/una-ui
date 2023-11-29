<script setup lang="ts">
import { ref } from 'vue'
import {
  DropdownMenuArrow,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuItemIndicator,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuRoot,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from 'radix-vue'
import Button from '../Button.vue'
import Icon from '../Icon.vue'

const open = ref(false)
const checkboxOne = ref(false)
</script>

<template>
  <DropdownMenuRoot
    v-model:open="open"
  >
    <DropdownMenuTrigger
      btn="~ solid"
    >
      Hello
    </DropdownMenuTrigger>

    <DropdownMenuPortal>
      <DropdownMenuContent
        class="will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade min-w-[220px] border border-base rounded-md bg-muted bg-muted p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] outline-none"
        :side-offset="5"
      >
        <DropdownMenuItem
          :as="Button"
          btn="block ghost-gray"
          class="justify-start pl-30px"
        >
          New Tab
        </DropdownMenuItem>

        <DropdownMenuGroup>
          <DropdownMenuItem />
        </DropdownMenuGroup>

        <DropdownMenuCheckboxItem
          v-model:checked="checkboxOne"
          :as="Button"
          btn="block ghost-gray"
          class="justify-start pl-30px"
        >
          <DropdownMenuItemIndicator class="absolute left-0 w-30px inline-flex items-center justify-center">
            <Icon name="i-check" class="ml-3" />
          </DropdownMenuItemIndicator>

          <DropdownMenuLabel>
            Show Bookmarks
          </DropdownMenuLabel>
        </DropdownMenuCheckboxItem>

        <DropdownMenuRadioGroup>
          <DropdownMenuRadioItem
            value="1"
          >
            <DropdownMenuItemIndicator />
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>

        <DropdownMenuSub>
          <DropdownMenuSubTrigger />
          <DropdownMenuPortal>
            <DropdownMenuSubContent />
          </DropdownMenuPortal>
        </DropdownMenuSub>

        <DropdownMenuSeparator />
        <DropdownMenuArrow />
      </DropdownMenuContent>
    </DropdownMenuPortal>
  </DropdownMenuRoot>
</template>
