// @ts-check

const Guide = [
  {
    text: 'لماذا Slidev',
    link: '/guide/why',
  },
  {
    text: 'دليل البداية',
    link: '/guide/',
  },
  {
    text: 'التثبيت',
    link: '/guide/install',
  },
  {
    text: 'بنية markdown',
    link: '/guide/syntax',
  },
  {
    text: 'التنقل',
    link: '/guide/navigation',
  },
  {
    text: 'الأنيميشن',
    link: '/guide/animations',
  },
  {
    text: 'الإستخراج',
    link: '/guide/exporting',
  },
  {
    text: 'إستضافة ثابتة (Static)',
    link: '/guide/hosting',
  },
  {
    text: 'تسجيل عرض',
    link: '/guide/recording',
  },
  {
    text: 'وضع المقدم',
    link: '/guide/presenter-mode',
  },
  {
    text: 'الرسم والشرح',
    link: '/guide/drawing',
  },
  {
    text: 'التكامل مع محررات النصوص',
    link: '/guide/editors',
  },
  {
    text: 'الأسئلة الشائعة',
    link: '/guide/faq',
  },
]

const Theme = [
  {
    text: 'استخدام ثيم',
    link: '/themes/use',
  },
  {
    text: 'مكتبة الثيمات',
    link: '/themes/gallery',
  },
  {
    text: 'أنشئ ثيماً',
    link: '/themes/write-a-theme',
  },
]

const Translations = [
  {
    text: 'English',
  },
  {
    text: '简体中文',
    link: 'https://cn.sli.dev{{pathname}}',
  },
  {
    text: 'العربية',
    link: 'https://ar.sli.dev{{pathname}}',
  },
  {
    text: 'Français',
    link: 'https://fr.sli.dev{{pathname}}',
  },
  {
    text: 'Español',
    link: 'https://es.sli.dev{{pathname}}',
  },
  {
    text: 'Русский',
    link: 'https://ru.sli.dev{{pathname}}',
  },
  {
    text: 'Việt Nam',
    link: 'https://vn.sli.dev{{pathname}}',
  },
  {
    text: 'Deutsch',
    link: 'https://de.sli.dev{{pathname}}',
  },
  {
    text: 'Português (BR)',
    link: 'https://br.sli.dev{{pathname}}',
  },
  {
    text: 'Ελληνικά',
    link: 'https://el.sli.dev{{pathname}}',
  },
  {
    text: '日本語',
    link: 'https://ja.sli.dev{{pathname}}',
  },
]

const Customizations = [
  {
    text: 'التخصيص',
    link: '/custom/',
  },
  {
    text: 'بنية المشروع',
    link: '/custom/directory-structure',
  },
  {
    text: 'الخطوط',
    link: '/custom/fonts',
  },
  {
    text: 'التطليل',
    link: '/custom/highlighters',
  },
  {
    text: 'إعداد Vue',
    link: '/custom/config-vue',
  },
  {
    text: 'إعداد Vite',
    link: '/custom/config-vite',
  },
  {
    text: 'إعداد Windi CSS',
    link: '/custom/config-windicss',
  },
  {
    text: 'إعداد Monaco',
    link: '/custom/config-monaco',
  },
  {
    text: 'إعداد KaTeX',
    link: '/custom/config-katex',
  },
  {
    text: 'إعداد Mermaid',
    link: '/custom/config-mermaid',
  },
  {
    text: 'إعداد الإختصارات',
    link: '/custom/config-shortcuts',
  },
  {
    text: 'Vue Global Context',
    link: '/custom/vue-context',
  },
  {
    text: 'Global Layers',
    link: '/custom/global-layers',
  }
]

const Resources = [
  {
    text: 'المعرض',
    link: '/showcases',
  },
  {
    text: 'مصادر التعلم',
    link: '/resources/learning',
  },
  {
    text: 'خلفيات مختارة',
    link: '/resources/covers',
  },
]

const slidebars = [
  {
    text: 'الدليل',
    children: Guide,
  },
  {
    text: 'الثيمات',
    children: Theme,
  },
  {
    text: 'التخصيص',
    children: Customizations,
  },
  {
    text: 'Built-in',
    children: [
      {
        text: 'Components',
        link: '/builtin/components',
      },
      {
        text: 'Layouts',
        link: '/builtin/layouts',
      },
    ],
  },
]

/**
 * @type {import('vitepress').UserConfig}
 */
module.exports = {
  title: 'Slidev',
  description: 'Presentation slides for developers',
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon.png' }],
    ['meta', { name: 'author', content: 'Anthony Fu' }],
    ['meta', { property: 'og:title', content: 'Slidev' }],
    ['meta', { property: 'og:image', content: 'https://sli.dev/og-image.png' }],
    ['meta', { property: 'og:description', content: 'Presentation slides for developers' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:creator', content: '@slidevjs' }],
    ['meta', { name: 'twitter:image', content: 'https://sli.dev/og-image.png' }],
    ['link', { rel: 'dns-prefetch', href: 'https://fonts.gstatic.com' }],
    ['link', { rel: 'preconnect', crossorigin: 'anonymous', href: 'https://fonts.gstatic.com' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@200;400;500&family=Inter:wght@200;400;500;600', rel: 'stylesheet' }],
  ],
  themeConfig: {
    repo: 'slidevjs/docs',
    logo: '/logo.svg',
    docsBranch: 'main',
    editLinks: true,
    editLinkText: 'Suggest changes to this page',

    algolia: {
      apiKey: '1a5c5a504139c58f428974c78c55291d',
      indexName: 'slidev',
      searchParameters: {
        // for translations maintainers: change the filter to your locale code (subdomain name)
        facetFilters: ['language:en']
      }
    },

    nav: [
      {
        text: 'الدليل',
        items: Guide,
      },
      {
        text: 'الثيم',
        items: Theme,
      },
      {
        text: 'تخصيص',
        items: Customizations,
      },
      {
        text: 'المصادر',
        items: Resources,
      },
      {
        text: 'English',
        items: Translations,
      },
    ],

    sidebar: {
      '/guide/': slidebars,
      '/themes/': slidebars,
      '/custom/': slidebars,
      '/builtin/': slidebars,
      '/resources/': slidebars,
      '/': slidebars,
    },
  },
}
