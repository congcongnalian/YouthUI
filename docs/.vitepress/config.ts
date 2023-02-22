import { defineConfig } from 'vitepress'
import { demoBlockPlugin } from 'vitepress-theme-demoblock'
import {
  componentPreview,
  containerPreview
} from '@vitepress-demo-preview/plugin'
import { nav } from './config/nav'
import { sidebar } from './config/sidebar'

export default defineConfig({
  head: [['link', { rel: 'icon', href: '../assets/favicon.ico' }]],
  title: 'YouthUI',
  lang: 'zh-CN',
  cleanUrls: true,
  base: process.env.NODE_DEV === 'production' ? '/YouthUI/' : '/',
  themeConfig: {
    sidebar,
    nav,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/NoBug2023114/YouthUI' }
    ]
  },
  markdown: {
    config(md) {
      // md.use(demoBlockPlugin)
      md.use(containerPreview)
      md.use(componentPreview)
    }
  }
})
