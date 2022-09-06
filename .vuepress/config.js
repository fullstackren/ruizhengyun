const path = require('path');

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@assets': path.resolve(__dirname, '../assets')
      }
    }
  },
  base: '/',
  title: '芮正云的个人博客',
  patterns: ['**/*.md', '**/*.vue', '**/*.svg'],
  description: '芮正云的个人博客',
  head: [
    ['meta', { name: "viewport", content: 'width=device-width,initial-scale=1,maximum-scale=1'}],
    ['meta', { name: 'baidu-site-verification', content: 'F162aQBZSM'}],
    ['meta', { name: 'google-site-verification', content: ''}],
    ['link', { rel: 'shortcut icon', href: '/favicon.ico', type: 'image/x-icon' }],
    [ 'script', {}, `
      var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?b1eb62ac2866544e8333dcea633685fa";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();
      `
    ]
  ],
  shouldPrefetch: () => false,
  themeConfig: {
    logo: '/logo.png',
    // repo: 'fullstackren/fullstackren.github.io.git',
    sidebarDepth: 2,
    nav: [
      { text: '主页', link: 'http://www.fullstack.ren/' },
      { text: '初心', link: 'http://www.fullstack.ren/chuxin/' },
      {
        text: '技术栈', items: [
          { text: 'HTML', link: 'http://www.fullstack.ren/html/'},
          { text: 'CSS', link: 'http://www.fullstack.ren/css/'},
          { text: 'Javascript', link: 'http://www.fullstack.ren/javascript/'},
          { text: 'Nodejs', link: 'http://www.fullstack.ren/nodejs/'},
          { text: 'Vue', link: 'http://www.fullstack.ren/vue/'},
          { text: 'React', link: 'http://www.fullstack.ren/react/'},
          { text: 'linux', link: 'http://www.fullstack.ren/linux/' },
          { text: 'Tauri', link: 'http://www.fullstack.ren/tauri/'},
        ]
      },
      {
        text: '知识体系', items: [
          { text: '前端工程化', link: 'http://www.fullstack.ren/frontend-engineering/' },
          { text: '微前端', link: 'http://www.fullstack.ren/micro-frontends/'},
        ]
      },
      // 开源
    // 最佳实践
      {
        text: '架构', link: 'http://www.fullstack.ren/architecture/'
      },
      {
        text: '工具方法', items: [
          { text: '好用工具', link: 'http://www.fullstack.ren/nice-tools/'},
          { text: 'UI', link: 'http://www.fullstack.ren/ui/'},
          { text: 'UML', link: 'http://www.fullstack.ren/uml/'},
          { text: 'Git 使用', link: 'http://www.fullstack.ren/git/'},
          { text: '设计模式', link: 'http://www.fullstack.ren/design-patterns/'},
          { text: '学习资源', link: 'http://www.fullstack.ren/study-assets/'},
          { text: '管理', link: 'http://www.fullstack.ren/manage/'},
          { text: '文摘', link: 'http://www.fullstack.ren/abstract/'},
          { text: '互联网概念', link: 'http://www.fullstack.ren/concept/'},
        ]
      },
      {
        text: '看世界', link: 'http://www.fullstack.ren/world/'
      }
    ]
  },
}