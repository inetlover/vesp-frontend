import { Config } from "@vesp/frontend";

Config.head.title = "Vesp Framework";

Config.head.script = [
  { src: "/plugins/glightbox/glightbox.min.js", body: true },
];

Config.head.htmlAttrs = { lang: "ru" };

Config.buildModules = [
  "@nuxtjs/style-resources",
  "@nuxtjs/eslint-module",
  "@nuxtjs/fontawesome",
];
Config.modules = [
  "bootstrap-vue/nuxt",
  "@nuxtjs/axios",
  "@nuxtjs/pwa",
  "@vesp/frontend",
  "@nuxtjs/sitemap",
];

// Но подключаем из него пока только утилиты
Config.Vesp = {
  components: true, // компоненты админки
  scss: false, // стили компонентов
  i18n: false, // поддержка мультиязычности
  axios: false, // обработка ошибок при запросах в API
  utils: true, // утилиты, в которых есть и нужная нам $image
  filters: false, // фильтры вывода, типа форматирование дат
};

Config.pwa = {
  icon: {
    fileName: "favicons/favicon-512x512.png",
  },
  manifest: {
    lang: "ru",
    name: "Vesp Framework",
    short_name: "Vesp Framework",
    useWebmanifestExtension: false,
    display: "standalone",
  },
};

Config.fontawesome = {
  addCss: false,
  component: "fa",
  icons: {
    solid: [
      "faHome",
      "faCartShopping",
      "faMinus",
      "faPlus",
      "faList",
      "faQrcode",
      "faLocationDot",
      "faCheck",
      "faEnvelope",
      "faPhone",
      "faUser",
      "faComments",
      "faGears",
      "faHandshake",
      "faUsers",
      "faBusinessTime",
      "faPhoneVolume",
      "faAddressCard",
      "faMarker",
      "faTruckMonster",
      "faLightbulb",
      "faTableCellsLarge",
      "faScrewdriverWrench",
      "faMobileScreen",
      "faEllipsis",
      "faEllipsisVertical",
      "faDiceD6",
      "faCubes",
      "faClockRotateLeft",
      "faChampagneGlasses",
      "faRectangleList",
      "faTruckFast",
      "faArrowRight",
      "faMoneyCheckDollar",
      "faMoneyCheck",
      "faFileSignature",
      "faFileInvoiceDollar",
      "faBarcode",
      "faSignature",
      "faWallet",
      "faDownload",
    ],
  },
};

Config.bootstrapVue.componentPlugins = [
  "LayoutPlugin",
  "NavbarPlugin",
  "ImagePlugin",
  "LinkPlugin",
  "PaginationPlugin",
  "OverlayPlugin",
  "ButtonPlugin",
  "ButtonGroupPlugin",
  "CarouselPlugin",
  "BreadcrumbPlugin",
  "ModalPlugin",
  "FormPlugin",
  "FormGroupPlugin",
  "FormInputPlugin",
  "SpinnerPlugin",
  "SidebarPlugin",
  "DropdownPlugin",
  "VBVisiblePlugin",
  "PopoverPlugin",
  "VBScrollspyPlugin",
  "CollapsePlugin",
  "VBTogglePlugin",
];

Config.plugins = [];

Config.sitemap = {
  hostname: "https://site.ru",
  defaults: {
    lastmod: "2022-11-20T11:21:42.000Z",
  },
};

export default Config;

// ==========================

// export default {
//   // Global page headers: https://go.nuxtjs.dev/config-head
//   head: {
//     meta: [
//       { charset: 'utf-8' },
//       { name: 'viewport', content: 'width=device-width, initial-scale=1' },
//       { hid: 'description', name: 'description', content: '' },
//       { name: 'format-detection', content: 'telephone=no' }
//     ],
//     link: [
//       { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
//     ],
//     script: [
//       { src: "/plugins/glightbox/glightbox.min.js", body: true }
//     ]
//   },

//   // Global CSS: https://go.nuxtjs.dev/config-css
//   css: [
//   ],

//   // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
//   plugins: [
//   ],

//   // Auto import components: https://go.nuxtjs.dev/config-components
//   components: true,

//   // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
//   buildModules: [
//   ],

//   // Modules: https://go.nuxtjs.dev/config-modules
//   modules: [
//     // https://go.nuxtjs.dev/pwa
//     '@nuxtjs/pwa',
//   ],

//   // PWA module configuration: https://go.nuxtjs.dev/pwa
//   pwa: {
//     manifest: {
//       lang: 'en'
//     }
//   },

//   // Build Configuration: https://go.nuxtjs.dev/config-build
//   build: {
//   }
// }
