import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Zona's Webyard",
    pageTitleSuffix: " | Webyard",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "goatcounter",
      websiteId: "0808" // Replace with your actual GoatCounter site code
    },
    locale: "en-US",
    baseUrl: "chezona.github.io",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Playfair Display",
        body: "Source Serif Pro",
        code: "Fira Code",
      },
      colors: {
        lightMode: {
          light: "#f6f7fb",         // Very light blue-gray background
          lightgray: "#eaedf3",     // Light gray for boxes
          gray: "#9ba4b5",          // Medium gray for borders
          darkgray: "#35374b",      // Dark blue-gray for text
          dark: "#202030",          // Very dark blue for headings
          secondary: "#5c6d8f",     // Deep blue for links and accents
          tertiary: "#8da2c4",      // Lighter blue accent
          highlight: "rgba(92, 109, 143, 0.15)", // Subtle highlight
          textHighlight: "#f8e4bc", // Peach highlight for text
        },
        darkMode: {
          light: "#1a1c2d",         // Dark blue-gray background
          lightgray: "#2a2e42",     // Slightly lighter box background
          gray: "#606680",          // Medium-light accents
          darkgray: "#c9cde3",      // Light text color
          dark: "#eef0ff",          // Near white for headings
          secondary: "#8da2c4",     // Medium blue for links and accents
          tertiary: "#637db1",      // Darker blue accent
          highlight: "rgba(141, 162, 196, 0.15)", // Subtle highlight
          textHighlight: "#705937", // Darker highlight for text
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
