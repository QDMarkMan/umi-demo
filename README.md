# umi project

> A template based on umi & antd.

## Getting Started

Install dependencies,

```bash
$ yarn
```

Start the dev server,

```bash
$ yarn start
```

## File Directory

```bash
umi-base-template
└───src                     // 业务逻辑代码
│   │   api                 // http api 层
│   │   assets              // 资源
│   └── components          // 公共组件
│   │     └──global         // 全局组件
│   │        │ BaseTable     // 基础表格
│   │        │ BoxContent    // 基础Box
│   └── router              // 路由文件
│   │     │  modules        // 业务路由文件夹
│   │     │  common.ts      // 通用路由
│   │     │  index.ts       // 路由汇总
│   │   hooks               // 自定义hooks
│   │   styles              // 公共样式文件
│   │   utils               // 工具库
│   │   pages               // 视图页面
│   │   global.ts           // 全局模块处理
│   │   access.ts           // 路由拦截器，基于@umijs/plugin-access
│   │   app.tsx             // 入口文件
```
