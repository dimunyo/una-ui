import antfu from '@antfu/eslint-config'
import pluginUnoCSS from '@unocss/eslint-plugin'

export default antfu(
  {
    ingores: [
      '**/docs/content/**',
      '**/*.sh',
      '/scripts/release-edge.sh',
    ],
  },
  {
    rules: {
      'node/prefer-global/process': 'off',
      'vue/no-v-text-v-html-on-component': 'off',
    },
  },
  {
    plugins: {
      unocss: pluginUnoCSS,
    },
    rules: {
      'unocss/order': 'warn',
      'unocss/order-attributify': 'warn',
    },
  },
)
