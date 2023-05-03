import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import netlify from "@astrojs/netlify/functions";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [mdx(), sitemap(), tailwind(), image({
    serviceEntryPoint: "@astrojs/image/sharp"
  }), preact()],
  tailwindConfig: "./tailwind.config.cjs",
  output: "server",
  adapter: netlify()
});