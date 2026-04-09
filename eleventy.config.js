import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";

export default function (eleventyConfig) {
    // eleventyConfig.addPassthroughCopy("**/*.{png,jpg,jpeg}", {
    //     mode: "html-relative"
    // });
    eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
        formats: ["webp"],
    });
};
