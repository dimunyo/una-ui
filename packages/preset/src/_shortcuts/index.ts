import type { Preset, StaticShortcutMap } from '@unocss/core'
import { link } from './link'
import { navLinkGroup } from './nav-link-group'
import { navLink } from './nav-link'
import { icon } from './icon'
import { accordion } from './accordion'
import { btn } from './btn'
import { formGroup } from './form-group'
import { input } from './input'
import { general } from './general'
import { _switch } from './switch'
import { alert } from './alert'
import { badge } from './badge'
import { avatar } from './avatar'
import { avatarGroup } from './avatar-group'
import { indicator } from './indicator'
import { kbd } from './kbd'
import { dropdown } from './dropdown'
import { radio } from './radio'
import { checkbox } from './checkbox'

export const shortcuts = [
  ...general,
  ...accordion,
  ...btn,
  ...formGroup,
  ...input,
  ...icon,
  ..._switch,
  ...alert,
  ...badge,
  ...avatarGroup,
  ...avatar,
  ...indicator,
  ...kbd,
  ...dropdown,
  ...navLink,
  ...navLinkGroup,
  ...link,
  ...radio,
  ...checkbox,
] as Exclude<Preset['shortcuts'], undefined | StaticShortcutMap>
