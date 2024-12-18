# sanity-plugin-fancy-pixel

> This is a **Sanity Studio v3** plugin.

![](assets/fancy-pixel.gif)

## Installation

```sh
npm install sanity-plugin-fancy-pixel
```

## Usage

Add it as a plugin in `sanity.config.ts` (or .js):

```ts
import {defineConfig} from 'sanity'
import {fancyPixelPlugin} from "sanity-plugin-fancy-pixel";

export default defineConfig({
  //...
  plugins: [
    // ...,
    fancyPixelPlugin()
  ],
})
```

## Credits
Nyan Cat CSS by [@eusonic | Cameron Spencer](https://codepen.io/eusonic/pen/nrjqKn)

## License

[MIT](LICENSE) © RC Maples

## Develop & test

This plugin uses [@sanity/plugin-kit](https://github.com/sanity-io/plugin-kit)
with default configuration for build & watch scripts.

See [Testing a plugin in Sanity Studio](https://github.com/sanity-io/plugin-kit#testing-a-plugin-in-sanity-studio)
on how to run this plugin with hotreload in the studio.


### Release new version

Run ["CI & Release" workflow](https://github.com/rcmaples/fancy-pixel/actions/workflows/main.yml).
Make sure to select the main branch and check "Release new version".

Semantic release will only release on configured branches, so it is safe to run release on any branch.
