import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Health",
  description: "My train&diet tracker",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [{ text: "Home", link: "/" }],

    sidebar: [
      {
        text: "Palestra",
        items: [
          {
            text: "2023-04",
            collapsed: false,
            items: [
              {
                text: "Scheda A",
                link: "/allenamento/2023-04/allenamento-A",
              },
              {
                text: "Scheda B",
                link: "/allenamento/2023-04/allenamento-B",
              },
              {
                text: "Scheda C",
                link: "/allenamento/2023-04/allenamento-C",
              },
              {
                text: "Stretching",
                link: "/allenamento/2023-04/stretching/",
              },
              {
                text: "Esercizi a casa",
                link: "/allenamento/2023-04/esercizi-a-casa/",
              },
            ],
          },
          {
            text: "Archivio",
            collapsed: true,
            items: [
              {
                text: "2023-01",
                collapsed: true,
                items: [
                  {
                    text: "Scheda A",
                    link: "/allenamento/2023-01/allenamento-A",
                  },
                  {
                    text: "Scheda B",
                    link: "/allenamento/2023-01/allenamento-B",
                  },
                  {
                    text: "Scheda C",
                    link: "/allenamento/2023-01/allenamento-C",
                  },
                  {
                    text: "Stretching",
                    link: "/allenamento/2023-01/stretching/",
                  },
                  {
                    text: "Esercizi a casa",
                    link: "/allenamento/2023-01/esercizi-a-casa/",
                  },
                ],
              },
              {
                text: "2022-10",
                collapsed: true,
                items: [
                  {
                    text: "Scheda A",
                    link: "/allenamento/2022-10/allenamento-A",
                  },
                  {
                    text: "Scheda B",
                    link: "/allenamento/2022-10/allenamento-B",
                  },
                  {
                    text: "Scheda C",
                    link: "/allenamento/2022-10/allenamento-C",
                  },
                  {
                    text: "Stretching",
                    link: "/allenamento/2022-10/stretching/",
                  },
                  {
                    text: "Esercizi a casa",
                    link: "/allenamento/2022-10/esercizi-a-casa/",
                  },
                ],
              },
              {
                text: "2022-07",
                collapsed: true,
                items: [
                  {
                    text: "Scheda A",
                    link: "/allenamento/2022-07/allenamento-A",
                  },
                  {
                    text: "Scheda B",
                    link: "/allenamento/2022-07/allenamento-B",
                  },
                  {
                    text: "Scheda C",
                    link: "/allenamento/2022-07/allenamento-C",
                  },
                  {
                    text: "Stretching",
                    link: "/allenamento/2022-07/stretching/",
                  },
                  {
                    text: "Esercizi a casa",
                    link: "/allenamento/2022-07/esercizi-a-casa/",
                  },
                ],
              },
              {
                text: "2022-05",
                collapsed: true,
                items: [
                  {
                    text: "Scheda A",
                    link: "/allenamento/2022-05/allenamento-A",
                  },
                  {
                    text: "Scheda B",
                    link: "/allenamento/2022-05/allenamento-B",
                  },
                  {
                    text: "Scheda C",
                    link: "/allenamento/2022-05/allenamento-C",
                  },
                  {
                    text: "Stretching",
                    link: "/allenamento/2022-05/stretching/",
                  },
                  {
                    text: "Esercizi a casa",
                    link: "/allenamento/2022-05/esercizi-a-casa/",
                  },
                ],
              },
              {
                text: "2022-02",
                collapsed: true,
                items: [
                  {
                    text: "Scheda A",
                    link: "/allenamento/2022-02/allenamento-A",
                  },
                  {
                    text: "Scheda B",
                    link: "/allenamento/2022-02/allenamento-B",
                  },
                  {
                    text: "Scheda C",
                    link: "/allenamento/2022-02/allenamento-C",
                  },
                  {
                    text: "Stretching",
                    link: "/allenamento/2022-02/stretching/",
                  },
                  {
                    text: "Esercizi a casa",
                    link: "/allenamento/2022-02/esercizi-a-casa/",
                  },
                ],
              },

              {
                text: "2021-12",
                collapsed: true,
                items: [
                  {
                    text: "Scheda A",
                    link: "/allenamento/2021-12/allenamento-A",
                  },
                  {
                    text: "Scheda B",
                    link: "/allenamento/2021-12/allenamento-B",
                  },
                  {
                    text: "Scheda C",
                    link: "/allenamento/2021-12/allenamento-C",
                  },
                ],
              },
              {
                text: "2021-10",
                collapsed: true,
                items: [
                  {
                    text: "Scheda A",
                    link: "/allenamento/2021-10/allenamento-A",
                  },
                  {
                    text: "Scheda B",
                    link: "/allenamento/2021-10/allenamento-B",
                  },
                  {
                    text: "Scheda C",
                    link: "/allenamento/2021-10/allenamento-C",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        text: "Dieta",
        items: [
          {
            text: "2023-04",
            collapsed: false,
            items: [
              {
                text: "Info",
                link: "/dieta/2023-04/info",
              },
              {
                text: "Colazione/Spuntino",
                link: "/dieta/2023-04/colazione-spuntino",
              },
              {
                text: "Pranzo/Cena",
                link: "/dieta/2023-04/pranzo-cena",
              },
            ],
          },
          {
            text: "Archivio",
            collapsed: true,
            items: [
              {
                text: "2023-01",
                collapsed: true,
                items: [
                  {
                    text: "Info",
                    link: "/dieta/2023-01/info",
                  },
                  {
                    text: "Colazione/Spuntino",
                    link: "/dieta/2023-01/colazione-spuntino",
                  },
                  {
                    text: "Pranzo/Cena",
                    link: "/dieta/2023-01/pranzo-cena",
                  },
                ],
              },
              {
                text: "2022-10",
                collapsed: true,
                items: [
                  {
                    text: "Info",
                    link: "/dieta/2022-10/info",
                  },
                  {
                    text: "Colazione",
                    link: "/dieta/2022-10/colazione",
                  },
                  {
                    text: "Spuntino",
                    link: "/dieta/2022-10/spuntino",
                  },
                  {
                    text: "Pranzo/Cena",
                    link: "/dieta/2022-10/pranzo-cena",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vitalegi/health" },
    ],
  },
  srcExclude: ["README.md"],
});
