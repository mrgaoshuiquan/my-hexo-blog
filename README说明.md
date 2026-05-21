# 失忆的普信男 · Ops Gao Blog

> 一个普信男运维工程师的技术博客，专注运维 15 年。  
> 分享 Linux / 系统运维 / 自动化 / AI 工具 / 跨境电商环境配置等实战经验。

🌐 访问地址：[gaoops.com](https://gaoops.com)

---

## 📖 博客简介

本博客基于 [Hexo](https://hexo.io/) 搭建，使用 [Butterfly](https://butterfly.js.org/) 主题，托管于 Vercel + GitHub。

内容涵盖：

- 🖥️ Linux 系统运维与故障排查
- ⚙️ 自动化运维与脚本工具
- 🤖 AI 工具选型与使用建议
- 🌐 跨境电商 / 环境配置 / 网络相关
- 📦 应用部署与系统优化

---

## 🛠️ 技术栈

| 技术 | 说明 |
|---|---|
| [Hexo](https://hexo.io/) 5.5.4 | 静态博客框架 |
| [Butterfly](https://butterfly.js.org/) | 博客主题 |
| [Node.js](https://nodejs.org/) | 运行环境 |
| [Git](https://git-scm.com/) | 版本管理 |
| [Vercel](https://vercel.com/) | 自动构建 & 托管 |
| [GitHub](https://github.com/) | 源码仓库 |
| [hexo-tag-aplayer](https://github.com/MoePlayer/hexo-tag-aplayer) | 音乐播放器插件 |
| [Live2D](https://github.com/EYHN/hexo-helper-live2d) | 看板娘插件 |

---

## 💻 本地运行

### 环境要求

- Node.js >= 12.x
- Git
- npm 或 yarn

### 克隆项目

```bash
git clone https://github.com/mrgaoshuiquan/my-hexo-blog.git
cd my-hexo-blog
```

### 安装依赖

```bash
npm install
```

### 本地预览

```bash
hexo clean && hexo server
```

浏览器访问 [http://localhost:4000](http://localhost:4000)

### 常用命令

```bash
hexo clean       # 清理缓存
hexo generate    # 生成静态文件
hexo server      # 本地预览
hexo deploy      # 部署（不推荐，见下方部署说明）
```

---

## 🚀 部署说明

本项目采用 **Vercel 自动部署** 方式：

1. 将源码推送到 GitHub `main` 分支
2. Vercel 监听到变更后自动拉取源码
3. Vercel 执行 `hexo generate` 生成静态文件
4. 自动发布到线上，访问 [gaoops.com](https://gaoops.com) 即可看到更新

### 手动推送源码脚本（Windows）

项目根目录提供 `push-source.bat`，双击即可一键强推本地源码到 GitHub：

```bat
git add .
git commit -m "backup source: %date% %time%"
git push origin main --force
```

> ⚠️ 注意：`hexo deploy` 命令会将编译后的静态文件推送到仓库，会破坏 Vercel 的自动构建，请勿使用。

---

## 📬 联系方式

- 📧 Email：[vip@gaoops.com](mailto:vip@gaoops.com)
- 🌐 博客：[gaoops.com](https://gaoops.com)
- 🐙 GitHub：[@mrgaoshuiquan](https://github.com/mrgaoshuiquan)

---

## 📄 版权声明

本博客所有文章除特别声明外，均采用 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/) 许可协议。  
转载请注明来源：**失忆的普信男（Ops Gao Blog）**
