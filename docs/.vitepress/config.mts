import { defineConfig } from 'vitepress'
import { fileURLToPath, URL } from 'node:url'
import  demoContainer  from '../utils/demoContainer'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "CJr Blog",
  description: "CJr Blog",
  vite: {
    resolve: {
      alias: [
        {
          find: '@',
          replacement: fileURLToPath(new URL('../../src', import.meta.url))
        },
        // 覆盖vitepress默认的组件
        {
          find: /^.*\/VPHomeHero\.vue$/,
          replacement: fileURLToPath(
            new URL('../components/CustomVPHomeHero.vue', import.meta.url)
          )
        },
        {
          find: /^.*\/VPHomeFeatures\.vue$/,
          replacement: fileURLToPath(
            new URL('../components/CustomVPHomeFeatures.vue', import.meta.url)
          )
        },
      ]
    }
  },
  markdown: {
    lineNumbers: true,
    config(md) {
      md.use(demoContainer)
    },
    // theme: {
    //   light: 'vitesse-light',
    //   dark: 'material-theme-ocean'
    // }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local'
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: '组件', link: '/markdown-examples' }
    ],
    sidebar: [
      {
        text: '风格与样式',
        collapsed: true,
        items: [
          { text: 'Color 颜色', link: '/pages/style/color' },
          { text: 'Spacing 间距', link: '/pages/style/spacing' },
          { text: 'Shadows 阴影', link: '/pages/style/shadows' },
        ]
      },
      {
        text: 'Vue 组件',
        collapsed: true,
        items: [
          { text: 'Button 按钮', link: '/pages/vue-components/button' },
          { text: 'Alert 提示', link: '/pages/vue-components/alert' },
          { text: 'Collapse 折叠面板', link: '/pages/vue-components/collapse' },
          { text: 'Dropdown 下拉菜单', link: '/pages/vue-components/dropdown' },
          { text: 'Message 消息', link: '/pages/vue-components/message' },
          { text: 'Input 文字输入', link: '/pages/vue-components/input' },
          { text: 'Switch 开关', link: '/pages/vue-components/switch' },
          { text: 'Select 选择器', link: '/pages/vue-components/select' },
          { text: 'Form 表单', link: '/pages/vue-components/form' },
          { text: 'Loading 加载', link: '/pages/vue-components/loading' },
        ]
      },
      {
        text: 'Vue 指令'
      },
      {
        text: '前端知识',
        collapsed: true,
        items: [
          { 
            text: 'HTML&CSS', 
            collapsed: true,
            items: [
              {text: '浏览器渲染原理', link: '/pages/front-end/html_css/浏览器渲染原理'},
            ]
          },
          { 
            text: 'JavaScript', 
            collapsed: true,
            items: [
              {text: '事件循环', link: '/pages/front-end/javascript/事件循环'},
              {text: 'this指向', link: '/pages/front-end/javascript/this指向'},
              {text: 'Promise' , link: '/pages/front-end/javascript/Promise'},
              {text: '防抖' , link: '/pages/front-end/javascript/防抖'},
              {text: '节流' , link: '/pages/front-end/javascript/节流'},
            ]
          },
          { text: 'CSS', link: '/pages/front-end/css' },
          { text: 'HTML', link: '/pages/front-end/html' },
          { text: 'TypeScript', link: '/pages/front-end/ts' },
          { 
            text: 'Vue',
            collapsed: true,
            items: [
              {
                text: 'vuex',
                collapsed: true,
                items: [
                  {text: '基础', link: '/pages/front-end/vue/vuex/基础'}
                ]
              },
              {text: 'pinia' , link: '/pages/front-end/vue/pinia/基础'},
            ]
          }, 
          { 
            text: 'Vue3',
            collapsed: true,
            items: [
              {text: '简介' , link: '/pages/front-end/vue3/1-vue3简介'},
              {text: '安装使用' , link: '/pages/front-end/vue3/2-创建vue3工程'},
              {text: 'setup', link: '/pages/front-end/vue3/3-setup'},
              {text: '响应式数据', link: '/pages/front-end/vue3/4-响应式数据'},
              {text: '计算属性', link: '/pages/front-end/vue3/5-计算属性'},
              {text: '侦听器', link: '/pages/front-end/vue3/6-侦听器'},
              {text: '生命周期', link: '/pages/front-end/vue3/7-生命周期'},
              {
                text: '组件', 
                collapsed: true,
                items: [
                  {text: 'props', link: '/pages/front-end/vue3/8-1-props'},
                  {text: 'emit', link: '/pages/front-end/vue3/8-2-emit'},
                  {text: '组件 v-model', link: '/pages/front-end/vue3/8-3-组件v-model'},
                  {text: '插槽Slots', link: '/pages/front-end/vue3/8-4-插槽Slots'},
                  {text: '依赖注入', link: '/pages/front-end/vue3/8-5-依赖注入'},
                ]
              },
              {text: '自定义hook', link: '/pages/front-end/vue3/9-自定义hook'},
              {text: '内置指令', link: '/pages/front-end/vue3/11-内置指令'},
              {text: '自定义指令', link: '/pages/front-end/vue3/12-自定义指令'},
              {text: '插件', link: '/pages/front-end/vue3/13-插件'},
              {
                text: '路由',
                collapsed: true,
                items: [
                  {text: '介绍', link: '/pages/front-end/vue3/10-0-路由v-router'},
                  {text: '基本使用', link: '/pages/front-end/vue3/10-1-基本使用'},
                  {text: '路由器工作模式', link: '/pages/front-end/vue3/10-2-路由器工作模式'},
                  {text: '嵌套路由', link: '/pages/front-end/vue3/10-3-嵌套路由'},
                  {text: '路由传参', link: '/pages/front-end/vue3/10-4-路由传参'},
                  {text: 'replace属性', link: '/pages/front-end/vue3/10-5-replace属性'},
                  {text: '编程式导航', link: '/pages/front-end/vue3/10-6-编程式导航'},
                  {text: '导航守卫', link: '/pages/front-end/vue3/10-7-导航守卫'},
                  {text: '组合式API', link: '/pages/front-end/vue3/10-8-组合式API'},
                  {text: '动态路由', link: '/pages/front-end/vue3/10-9-动态路由'},
                ]
              },
            ]
          }, 
        ]
      },
      {
        text: 'Examples',
        collapsed: true,
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },



    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
