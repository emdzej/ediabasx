export default {
  title: "Ediabas TypeScript",
  description: "BMW diagnostic protocol implementation in TypeScript",
  base: "/ediabas/",
  srcExclude: ["sgbd/**"],
  markdown: {
    html: false,
  },
  themeConfig: {
    nav: [
      { text: "Guide", link: "/guide/getting-started" },
      { text: "Reference", link: "/reference/architecture" },
      { text: "Reports", link: "/reports/" },
      { text: "GitHub", link: "https://github.com/emdzej/ediabas" },
    ],
    sidebar: {
      "/guide/": [
        {
          text: "Guide",
          items: [
            { text: "Getting Started", link: "/guide/getting-started" },
            { text: "Interfaces", link: "/guide/interfaces" },
            { text: "Running Jobs", link: "/guide/running-jobs" },
            { text: "Simulator", link: "/guide/simulator" },
            { text: "Troubleshooting", link: "/guide/troubleshooting" },
          ],
        },
      ],
      "/reference/": [
        {
          text: "Reference",
          items: [
            { text: "Architecture", link: "/reference/architecture" },
            { text: "Packages", link: "/reference/packages" },
            { text: "CLI", link: "/reference/cli" },
            { text: "Development", link: "/reference/development" },
          ],
        },
      ],
      "/reports/": [
        {
          text: "Reports",
          items: [{ text: "Summary", link: "/reports/" }],
        },
      ],
    },
  },
};
