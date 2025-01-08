import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4.0 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Notes",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "astrimbu.github.io/notes/",
    ignorePatterns: [
      "private",
      "templates",
      ".obsidian",
      "Daily/",
      "Review/",
    ],
    defaultDateType: "created",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Funnel Display",
        body: "Uchen",
        code: "Space Mono",
      },
      colors: {
        lightMode: {
          light: "#ffffff",
          lightgray: "#e0e0e0",
          gray: "#808080",
          darkgray: "#404040",
          dark: "#202020",
          secondary: "#087e96",
          tertiary: "#0f5a6b",
          highlight: "rgba(8, 126, 150, 0.1)",
          textHighlight: "rgba(8, 126, 150, 0.2)",
        },
        darkMode: {
          light: "#161616",
          lightgray: "#393939",
          gray: "#646464",
          darkgray: "#d4d4d4",
          dark: "#ebebec",
          secondary: "#5dc8e3",
          tertiary: "#8be0f5",
          highlight: "rgba(93, 200, 227, 0.1)",
          textHighlight: "rgba(93, 200, 227, 0.2)",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
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
    ],
  },
}

export default config
