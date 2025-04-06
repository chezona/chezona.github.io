import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Chezona's Garden",
    pageTitleSuffix: " | Digital Notes",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "goatcounter",
      websiteId: "chezona" // Replace with your actual GoatCounter site code
    },
    locale: "en-US",
    baseUrl: "chezona.github.io",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Merriweather",
        body: "Lato",
        code: "Fira Code",
      },
      colors: {
        lightMode: {
          light: "#ffffff",       // White background
          lightgray: "#f5f5f5",   // Very light gray for subtle divisions
          gray: "#aaaaaa",       // Lighter gray for borders, secondary text
          darkgray: "#555555",   // Main text color
          dark: "#222222",       // Darker text, headings
          secondary: "#0056b3",   // A calm blue for links/accents
          tertiary: "#4a90e2",   // A slightly lighter blue
          highlight: "rgba(74, 144, 226, 0.1)", // Subtle blue highlight
          textHighlight: "#fff23688", // Keep yellow for text highlights (optional)
        },
        darkMode: {
          light: "#1a1a1a",       // Very dark gray background
          lightgray: "#2a2a2a",   // Slightly lighter dark gray
          gray: "#777777",       // Medium gray for borders, secondary text
          darkgray: "#cccccc",   // Main text color (light gray)
          dark: "#eeeeee",       // Lighter text, headings (off-white)
          secondary: "#58a6ff",   // Brighter blue for links/accents in dark mode
          tertiary: "#79c0ff",   // Lighter blue
          highlight: "rgba(88, 166, 255, 0.15)", // Subtle blue highlight
          textHighlight: "#b3aa0288", // Keep dark yellow for highlights (optional)
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
