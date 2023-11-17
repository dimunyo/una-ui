import { basename, dirname, extname, relative } from 'node:path'

// import {resolve} from 'node:path'
// import { copyFileSync } from 'node:fs'
// import { fileURLToPath } from 'node:url'

import fg from 'fast-glob'
import fs from 'fs-extra'

import { grayThemes, primaryThemes } from '../config/color-themes'

const exportSubmodules = '/* @export-submodules */'

const files = await fg('packages/**/index.ts', {
  ignore: [
    '**/node_modules/**',
  ],
  absolute: true,
})

// export submodules
for (const file of files) {
  let content = await fs.readFile(file, 'utf-8')
  const index = content.indexOf(exportSubmodules)
  if (index !== -1) {
    const submodules = await fg(['**/*.ts'], { cwd: dirname(file), absolute: true })
    const imports = submodules
      .filter(i => i !== file)
      .map(i => relative(dirname(file), i))
      .map(i => `export * from './${basename(i, extname(i))}'`).join('\n')
    content = `${content.slice(0, index) + exportSubmodules}\n${imports}\n`
    await fs.writeFile(file, content, 'utf-8')
  }
}

// filter yellow and stone colors from primary and gray themes
const filteredPrimaryThemes = primaryThemes.filter(([color]) => ['yellow'].includes(color))[0][1]
const filteredGrayThemes = grayThemes.filter(([color]) => ['stone'].includes(color))[0][1]

// generate default theme
await fs.writeFile('./packages/preset/src/_style/theme.css', `:root {\n${Object.entries(filteredPrimaryThemes).map(([k, v]) => `  ${k}: ${v};`).join('\n')}
      \n${Object.entries(filteredGrayThemes).map(([k, v]) => `  ${k}: ${v};`).join('\n')}\n}\n`, { encoding: 'utf-8' })

// copy color-themes.ts
// const _filename = fileURLToPath(import.meta.url)
// copyFileSync(resolve(_filename, '..', '../config/color-themes.ts'), resolve(_filename, '..', '../packages/preset/src/_theme/color-themes.ts'))

// generate all prefixes from shortcuts filenames without extension
const prefixFiles = await fg('packages/preset/src/_shortcuts/*.ts', {
  absolute: true,
})
const prefixes = prefixFiles.map(i => basename(i, extname(i))).filter(i => i !== 'index')
const global = ['resize', 'size', 'nav-link-active', 'nav-link-inactive']
prefixes.push(...global)
const formattedPrefixes = `export default [${prefixes.map(p => `'${p}'`).join(', ')}]\n`
await fs.writeFile('./packages/preset/src/prefixes.ts', formattedPrefixes, { encoding: 'utf-8' })
