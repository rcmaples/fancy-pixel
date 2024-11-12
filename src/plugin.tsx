import {definePlugin} from 'sanity'

import FancyPixelNavbar from './components/FancyPixelNavbar'

export const fancyPixelPlugin = definePlugin({
  name: 'sanity-plugin-fancy-pixel',
  studio: {
    components: {
      navbar: FancyPixelNavbar,
    },
  },
})
