import { defineConfig } from "astro/config";
import NetlifyCMS from "astro-netlify-cms";

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [NetlifyCMS({
    config: {
      backend: {
        name: "git-gateway",
        branch: "main"
      },
      collections: [
      // Define a blog post collection
      {
        name: "posts",
        label: "Blog Posts",
        folder: "src/pages/posts",
        create: true,
        delete: true,
        fields: [{
          name: "title",
          widget: "string",
          label: "Post Title"
        }, {
          name: "body",
          widget: "markdown",
          label: "Post Body"
        }]
      }]
    }
  }), react()]
});