# Tech Context

## 技术栈

- HTML5
- CSS3
- Vanilla JavaScript
- 静态资源：JPEG 图片

## 开发与预览

项目不依赖 Node.js 或构建工具，可直接使用任意静态服务器预览：

```bash
python3 -m http.server 8080
```

然后访问：

```text
http://localhost:8080
```

## 约束

- 当前仓库起始状态为空，仅包含 `resources/` 图片资源
- 页面应保持静态可部署，避免引入后端服务
- 后续若需要表单提交，可接入第三方表单服务或自建 API
