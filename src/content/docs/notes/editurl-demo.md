---
title: editUrl 使用示例
description: 演示 Starlight frontmatter 中 editUrl 的效果。
editUrl: https://github.com/ajaxgoldfish/wretched-wavelength/blob/main/src/content/docs/blog/first-post.md
---

## 什么是 editUrl？

`editUrl` 是 Starlight 页面 frontmatter 中的一个可选字段，用于控制页面底部的「编辑此页」链接。

## 使用方式

### 1. 自定义编辑链接

在 frontmatter 中设置 `editUrl` 为完整 URL，访客点击「编辑此页」时会跳转到该地址：

```yaml
---
title: 页面标题
editUrl: https://github.com/用户名/仓库名/edit/main/文件路径
---
```

### 2. 隐藏编辑链接

将 `editUrl` 设为 `false` 可隐藏该页面的编辑链接：

```yaml
---
title: 页面标题
editUrl: false
---
```

## 效果说明

当前页面已设置 `editUrl`，你可以在页面底部看到「编辑此页」链接。点击后会跳转到 GitHub 的编辑界面（需将 URL 中的仓库地址改为你的实际仓库）。

若未配置全局 `editLink.baseUrl`，仅通过页面级 `editUrl` 也可让编辑链接显示。
