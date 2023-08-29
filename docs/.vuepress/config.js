const { getMdByDir } = require("./utils");
module.exports = {
  title: "Kaino·Lamperouge",
  // description: "This is a blog.",
  base: '/blogs/',
  serviceWorker: true, // 阅读缓存进程
  theme: '@vuepress/theme-default',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Canvas', items: [
          { text: 'Canvas', link: '/canvas/Canvas.md' },
          { text: 'Three.js', link: '/canvas/Three.js.md' },
          { text: 'WebGL', link: '/canvas/WebGL.md' },
          { text: 'WebGLProgram', link: '/canvas/WebGLProgram.md' },
        ]
      },
      {
        text: 'MiniProject', items: [
          { text: '计时器', link: '/miniproject/Timer.md' },
          { text: 'demo', link: '/miniproject/Demo.md' },
        ]
      },
      { text: 'About', link: '/about/' },
    ],
    sidebar: [
      {
        title: "Tools",
        path: '/', // 默认激活的选项
        collapsable: false, // 不折叠
        children: [
          { title: "Export", path: "/tools/JavaScript/export.md" },
          { title: "Object", path: "/tools/JavaScript/object.md" },
          { title: "更改鼠标指针", path: "/tools/JavaScript/cursor.md" },
          { title: "Void", path: "/tools/JavaScript/void.md" },
          { title: "B端C端", path: "/tools/Business Consumer.md" },
          { title: "闭包", path: "/tools/closure.md" },
          { title: "防抖和节流", path: "/tools/debounce throttle.md" },
          { title: "断点调试", path: "/tools/debugger.md" },
          { title: "Git", path: "/tools/git.md" },
          { title: "低代码", path: "/tools/Low Code.md" },
          { title: "md语法", path: "/tools/markdown.md" },
          { title: "内存泄漏", path: "/tools/Memory leak.md" },
          { title: "NPM", path: "/tools/npm.md" },
          { title: "优化", path: "/tools/optimize.md" },
          { title: "Promise", path: "/tools/promise.md" },
          { title: "报错", path: "/tools/report errors.md" },
          { title: "Shell", path: "/tools/shell.md" },
          { title: "Style", path: "/tools/style.md" },
          { title: "时间戳", path: "/tools/timestamp.md" },
          { title: "URL编码", path: "/tools/URL Code.md" },
          { title: "UUID", path: "/tools/uuid.md" },
        ],
      }
    ],
    search: true,
    searchMaxSuggestions: 10
  }
}