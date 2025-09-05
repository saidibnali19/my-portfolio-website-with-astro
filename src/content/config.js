import { defineCollection } from "astro:content";

const projectsCollection = defineCollection({
    // No schema, Astro will accept any frontmatter fields
});

export const collections = {
    projects: projectsCollection,
};
