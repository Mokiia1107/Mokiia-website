---
title: '从零开始：在 VS Code 终端部署 Claude Code + Kimi API 完整指南'
publishDate: 'May 25, 2026'
description: 'Powered by Kimi 2.6 Agent. AI may make mistakes, double check before execute.'
tags: ['Claude Code', 'Kimi', 'VS Code', 'Protocol']
category: 'Protocol'
---

> **Aiming For**：Macintosh OS、VS Code
>
> **Final Result**：在 VS Code 集成终端中运行 `claude` 命令，启动 Claude Code 界面，底层调用 Kimi k2.6 模型，享受 Claude Code 的交互体验 + Kimi 的代码生成能力

---

## 目录

1. [方案概述：Claude Code + CC Switch + Kimi API](#part-1-方案概述)
2. [准备工作：打开 VS Code 集成终端](#part-2-准备工作)
3. [第一步：安装 Homebrew](#part-3-第一步安装-homebrew)
4. [第二步：安装 Claude Code（Anthropic 官方 CLI）](#part-4-第二步安装-claude-code)
5. [第三步：安装 CC Switch](#part-5-第三步安装-cc-switch)
6. [第四步：注册 Kimi 账号并获取 API Key](#part-6-第四步注册-kimi-账号并获取-api-key)
7. [第五步：在 CC Switch 中配置 Kimi 提供商](#part-7-第五步在-cc-switch-中配置-kimi-提供商)
8. [第六步：在 VS Code 终端中启动和使用](#part-8-第六步在-vs-code-终端中启动和使用)
9. [常用命令速查与常见问题](#part-9-常用命令速查与常见问题)

---

## Part 1: 方案概述

### 这个方案是什么？

本教程的核心思路是：

| 组件 | 作用 | 本质 |
|------|------|------|
| **Claude Code** | Anthropic 官方的终端 AI 编程助手，提供交互界面和代码操作功能 | 交互界面 |
| **CC Switch** | 一个开源桌面工具，帮你切换 Claude Code 连接的 AI 模型后端 | 图形化设置工具 |
| **Kimi API** | 月之暗面（Moonshot AI）提供的大模型服务 | 实际提供服务的后端 |

简单说：**Claude Code 是外壳和操作界面，Kimi 是大脑**。通过 CC Switch 这个"切换器"，你可以让 Claude Code 的界面调用 Kimi 的模型能力，而不是 Anthropic 官方的 Claude 模型。

### 为什么要这样搭配？

- **Claude Code 的交互体验非常出色**：文件编辑、命令执行、代码审查等操作流畅
- **Kimi k2.6 代码能力强大**：月之暗面专门优化的代码模型，长程代码编写能力强，国内订阅方便
- **CC Switch 让切换无痛**：不需要手动改配置文件，图形界面一键切换提供商

### 你最终看到的效果

在终端中运行 `claude` 后，你会看到 Claude Code 的欢迎界面，底部状态栏显示：

```
kimi-k2.6 • API Usage Billing
```

这表示你正在使用 Claude Code 的界面，但后端连接的是 Kimi k2.6 模型。

---

## Part 2: 准备工作

### 确认你的环境

| 条件 | 要求 | 检查方式 |
|------|------|----------|
| 操作系统 | **macOS 12 (Monterey) 或更高版本** | 点击屏幕左上角苹果图标 → "关于本机" |
| VS Code | 已安装 | 在"启动台"中搜索 "Visual Studio Code" |
| 网络 | 能访问 Kimi 和 GitHub | 打开浏览器访问 [kimi.com](https://kimi.com) |
| 费用 | 需要 Kimi 会员订阅 | 详见 Part 6 |

### 打开 VS Code 集成终端

本教程的所有终端命令都在 **VS Code 集成终端** 中执行：

1. 打开 VS Code
2. 点击顶部菜单栏 → `Terminal`（终端）→ `New Terminal`（新建终端）
3. 窗口底部会出现终端面板，显示类似以下的提示符：

```bash
yourname@MacBook-Pro ~ %
```
---

## Part 3: 第一步——安装 Homebrew

### 什么是 Homebrew？

Homebrew 是 macOS 上最流行的**包管理器**。你可以把它理解为一个命令行版的 App Store，专门用来安装开发工具。后续的 Claude Code、CC Switch 都需要通过它来安装。

### 安装命令

将以下命令完整复制，粘贴到 VS Code 终端中，按回车执行：

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

**安装过程说明**：

1. 终端会提示你输入 Mac 的**开机密码**（输入时不会显示任何字符，这是正常的），输入后按回车
2. 脚本会自动下载并安装 Homebrew，这个过程通常需要 **5-15 分钟**，取决于你的网络速度
3. 安装完成后，终端会显示 `Installation successful!`

**验证安装**：

```bash
brew --version
```

如果显示类似 `Homebrew 4.x.x` 的版本号，说明安装成功。

> **常见问题**：如果提示 `command not found: brew`，关闭当前终端重新打开一个新的 VS Code 终端即可。

---

## Part 4: 第二步——安装 Claude Code（Anthropic 官方 CLI）

### 什么是 Claude Code？

Claude Code 是 Anthropic 公司推出的终端 AI 编程助手。它可以帮你：

- 编写和修改代码
- 理解项目结构
- 执行终端命令
- 搜索网页获取信息
- 自主完成多步骤开发任务

我们要使用的就是它的**界面和操作体验**，但通过 CC Switch 把背后的 AI 模型换成 Kimi，这将帮助用户使用更稳定且便捷的服务。

### 安装方式（macOS 推荐用 Homebrew）

```bash
brew install claude-code
```

**备选方式**（如果 Homebrew 安装失败）：

```bash
npm install -g @anthropic-ai/claude-code
```

**验证安装**：

```bash
claude --version
```

如果显示版本号（如 `Claude Code x.x.x`），说明安装成功。

---

## Part 5: 第三步——安装 CC Switch

### 什么是 CC Switch？

CC Switch 是一个**开源的桌面管理工具**，专门用来管理 Claude Code、Codex、Gemini CLI 等 AI 编程助手的 API 提供商配置。它有 80,000+ GitHub Stars，是这个领域最流行的配置工具。

**它能帮你做什么**：

- 不用手动改配置文件，图形界面一键切换 AI 提供商
- 管理多个 API Key（Kimi、Anthropic、OpenAI 等）
- 系统托盘快速切换，无需打开完整界面
- 内置 50+ 提供商预设，包括 Kimi

### 安装 CC Switch（macOS）

**方式一：Homebrew（推荐）**

```bash
brew tap farion1231/ccswitch
brew install --cask cc-switch
```

**方式二：手动下载**

1. 访问 CC Switch 官网 [ccswitch.io](https://ccswitch.io)
2. 或访问 GitHub Releases 页面：[github.com/farion1231/cc-switch/releases](https://github.com/farion1231/cc-switch/releases)
3. 下载 `CC-Switch-v{版本号}-macOS.dmg`
4. 打开 DMG 文件，将 `CC Switch.app` 拖动到「应用程序」文件夹

> **注意**：CC Switch 已通过 Apple 代码签名和公证，可直接打开，无需额外安全设置。

### 启动 CC Switch

1. 在「启动台」或「应用程序」文件夹中找到 **CC Switch**
2. 双击打开
3. 首次启动时，你会看到如下界面：

```
┌─────────────────────────────────────────────────────┐
│  CC Switch                                          │
│                                                     │
│  ┌──────────┐ ┌──────────┐ ┌───────┐ ┌──────────┐   │
│  │ ☀ Claude │ │ ✱ Kimi   │ │ □ ... │ │ ...      │   │
│  └──────────┘ └──────────┘ └───────┘ └──────────┘   │
│                                                     │
│  ┌─────────────────────────────────────────────────┐│
│  │  Claude Official                                ││
│  │  https://www.anthropic.com/claude-code          ││
│  └─────────────────────────────────────────────────┘│
│                                                     │
│  ┌─────────────────────────────────────────────────┐│
│  │  Kimi                                           ││
│  │  https://platform.moonshot.cn/console           ││
│  │  5小时: 0%  7天: 3%                              ││
│  └─────────────────────────────────────────────────┘│
│                                                     │
└─────────────────────────────────────────────────────┘
```

---

## Part 6: 第四步——注册 Kimi 账号并获取 API Key

### 6.1 注册 Kimi 账号

1. 打开浏览器，访问 [kimi.com](https://kimi.com)
2. 点击页面右上角的 **"注册/登录"** 按钮
3. 使用手机号或邮箱注册账号

### 6.2 订阅 Kimi Code 会员

Kimi Code 是 Kimi 会员计划中专为开发者提供的服务：

1. 访问 [kimi.com/membership/pricing](https://kimi.com/membership/pricing)
2. 选择适合你的会员档位：
   - **Andante**：日常使用
   - **Moderato**：效率升级（推荐）
   - **Allegretto**：专业优选
   - **Allegro**：全能尊享
3. 完成支付订阅

### 6.3 获取 API Key

1. 访问 Kimi Code 控制台：[kimi.com/code/console](https://kimi.com/code/console)
   - 或访问 Kimi 开放平台：[platform.moonshot.cn](https://platform.moonshot.cn)
2. 使用你的 Kimi 账号登录
3. 进入 **"API Key 管理"** 或控制台页面
4. 点击 **"新建 API Key"**
5. 为 API Key 起一个名字（如 "My MacBook"），然后创建
6. **立即复制并保存**生成的 API Key（以 `sk-kimi-` 或 `sk-` 开头），因为它只会显示一次

> **⚠️ 重要安全提示**：
> - API Key 相当于你的账户密码，**不要分享给他人**
> - 不要将其上传到 GitHub 等公开平台
> - 如果泄露，立即在控制台"废弃"该 Key 并重新创建

### 6.4 充值（如不按量计费）

如果你不使用会员订阅，也可以在 Kimi 开放平台充值按量调用：

1. 在 [platform.moonshot.cn](https://platform.moonshot.cn) 控制台中找到 **"账户充值"**
2. 选择充值金额并完成支付

---

## Part 7: 第五步——在 CC Switch 中配置 Kimi 提供商

这是整个部署的**核心步骤**。通过 CC Switch，你可以轻松地将 Claude Code 的 API 切换到 Kimi。

### 7.1 添加 Kimi 提供商

1. 打开 **CC Switch** 应用
2. 确认顶部的 **Claude** 标签页被选中（因为我们要配置的是 Claude Code 的提供商）
3. 在提供商列表区域，点击 **"+"**（添加提供商）按钮
4. 在弹出的提供商预设列表中，找到并选择 **"Kimi"** 或 **"Kimi For Coding"**
   - CC Switch 内置了 Kimi 的预设配置，你不需要手动填写 API 地址

### 7.2 填写 API Key

1. 选择 Kimi 预设后，会弹出配置表单
2. 在 **API Key** 字段中，粘贴你在 Part 6.3 中复制的 Key（以 `sk-kimi-` 开头）
3. 其他字段保持默认即可：
   - **Base URL**：`https://api.kimi.com/coding/`（已由预设自动填写）
   - **Model**：`kimi-for-coding`（Kimi k2.6 的 API 内部标识符）
4. 点击 **"添加"** 或 **"保存"**

### 7.3 启用 Kimi 提供商

1. 添加成功后，你会在 CC Switch 的提供商列表中看到新添加的 **Kimi** 卡片
2. 点击 Kimi 卡片，然后点击 **"启用"** 按钮
3. CC Switch 会自动修改 Claude Code 的配置文件，将其指向 Kimi 的 API
4. 如果显示 **"运行正常"**（绿色提示），说明配置成功

### 7.4 验证切换结果

启用 Kimi 提供商后，CC Switch 界面会显示类似以下信息：

```
┌──────────────────────────────────────────────────────────┐
│  Kimi                                                    │
│  https://platform.moonshot.cn/console                    │
│  3 分钟前                                                 │
│  5小时: 0% ◷4h52m    7天: 3% ◷19h52m                      │
└──────────────────────────────────────────────────────────┘
```

底部的使用率统计显示 CC Switch 已成功连接到 Kimi 的 API。

---

## Part 8: 第六步——在 VS Code 终端中启动和使用

### 启动 Claude Code

在 VS Code 集成终端中，输入：

```bash
claude
```

你会看到 Claude Code 的欢迎界面，注意底部状态栏显示：

```
kimi-k2.6 • API Usage Billing
```

这表示：**Claude Code 的界面 + Kimi k2.6 的模型**。配置成功！

### 基础使用场景

#### 1. 代码生成

直接在 `>` 提示符后输入你的需求：

```
> 写一个 Python 函数，计算斐波那契数列的前 n 项
```

Kimi k2.6 会生成代码并询问你是否要写入文件。

#### 2. 代码编辑

告诉 Claude Code 修改当前目录下的某个文件：

```
> 在 main.py 中添加错误处理逻辑
```

它会读取文件、规划修改方案，并在执行前让你确认。

#### 3. 问答与代码解释

```
> 解释这段代码的作用：[粘贴代码]
```

或直接询问技术问题：

```
> async/await 在 Python 中是怎么工作的？
```

#### 4. 读取本地图片

你可以直接告诉它图片的本地路径，它会自动读取并分析：

```
> 请分析这张图片中的代码问题：/Users/yourname/Desktop/screenshot.png
```

> **注意**：图片路径支持绝对路径（如 `/Users/yourname/Desktop/xxx.png`）或相对路径（如 `./assets/image.png`）。

#### 5. 执行 Shell 命令

Claude Code 可以帮你执行终端命令：

```
> 运行当前项目的测试
```

它会提议执行 `npm test` 或 `pytest` 等命令，并在执行前征得你的同意。

### 常用交互命令

在交互界面中，你可以使用以下特殊命令：

| 命令 | 作用 |
|------|------|
| `/model` | 查看或切换当前使用的模型 |
| `/login` | 重新配置 API Key 和平台 |
| `/status` | 查看当前连接状态和模型信息 |
| `/help` | 显示帮助信息 |
| `?` | 显示快捷键列表 |
| `Ctrl + C` | 中断当前操作 |
| `/exit` 或 `Ctrl + D` | 退出 Claude Code |

### 在 VS Code 中的工作流建议

1. **打开项目文件夹**：在 VS Code 中打开你的项目文件夹（`File` → `Open Folder`），这样 Claude Code 能访问项目中的所有文件
2. **保持终端在底部**：将终端面板放在编辑器底部，方便随时查看和操作
3. **多终端切换**：点击终端面板右侧的 `+` 号可以创建多个终端，一个运行 Claude Code，一个执行其他命令
4. **代码自动应用**：当 Claude Code 生成代码修改时，它会在终端中显示差异（diff），你可以输入 `y` 确认应用或 `n` 拒绝

---

## Part 9: 常用命令速查与常见问题

### 命令速查表

| 场景 | 命令 |
|------|------|
| 启动 Claude Code | `claude` |
| 查看 Claude Code 版本 | `claude --version` |
| 查看当前模型 | `/model` |
| 查看连接状态 | `/status` |
| 重新配置 API | `/login` |
| 显示帮助 | `/help` |
| 退出程序 | `/exit` 或 `Ctrl + D` |
| 中断操作 | `Ctrl + C` |
| 升级 Claude Code | `brew upgrade claude-code` |
| 升级 CC Switch | `brew upgrade --cask cc-switch` |

### 常见问题 FAQ

**Q: 运行 `claude` 提示 `command not found: claude`**

A: 
1. 关闭当前终端，重新打开一个新的 VS Code 终端
2. 确认安装成功：`brew list | grep claude-code`
3. 如果未安装，重新执行 `brew install claude-code`

**Q: CC Switch 中 Kimi 显示"连接失败"或红色状态**

A:
1. 确认你的 Kimi 会员订阅是否有效
2. 检查 API Key 是否输入正确（以 `sk-kimi-` 开头）
3. 点击 Kimi 卡片旁的 **刷新按钮** 重新测试连接
4. 确认网络可以访问 `api.kimi.com`

**Q: Claude Code 启动后显示 `Anthropic` 而不是 `kimi-k2.6`**

A:
1. 确认在 CC Switch 中已**启用** Kimi 提供商（不只是添加）
2. 关闭 Claude Code（`Ctrl + D`），然后重新启动
3. 检查 CC Switch 中 Claude 标签页顶部的提供商图标，Kimi 应该被高亮

**Q: 提示 "API Error: 401 Invalid Authentication"**

A:
1. 在 [kimi.com/code/console](https://kimi.com/code/console) 确认 API Key 是否有效
2. 在 CC Switch 中删除 Kimi 提供商，重新添加并输入正确的 API Key
3. 确认使用的是 Kimi Code 平台签发的 Key（不是 Moonshot 开放平台的 Key）

**Q: 如何切换回 Anthropic 官方的 Claude 模型？**

A: 打开 CC Switch，在 Claude 标签页中点击 **"Claude Official"** 卡片，然后点击 **"启用"** 即可一键切换回来。

**Q: macOS 首次运行 `claude` 命令很慢**

A: 这是 macOS Gatekeeper 安全机制的正常表现。在「系统设置 → 隐私与安全性 → 开发者工具」中添加你的终端应用后，后续启动会快很多。

### 参考资源

| 资源 | 链接 |
|------|------|
| CC Switch 官网 | [ccswitch.io](https://ccswitch.io) |
| CC Switch GitHub | [github.com/farion1231/cc-switch](https://github.com/farion1231/cc-switch) |
| Kimi Code 官网 | [kimi.com/code](https://kimi.com/code) |
| Kimi Code 文档 | [kimi.com/code/docs](https://kimi.com/code/docs/) |
| Kimi 控制台（获取 API Key） | [kimi.com/code/console](https://kimi.com/code/console) |
| Kimi 会员定价 | [kimi.com/membership/pricing](https://kimi.com/membership/pricing) |
| Claude Code 官方 | [anthropic.com/claude-code](https://www.anthropic.com/claude-code) |

---

## 总结

恭喜你完成了从零开始的全部部署！让我们回顾一下你做了什么：

1. ✅ 安装了 **Homebrew** —— macOS 的包管理器
2. ✅ 安装了 **Claude Code** —— Anthropic 官方的终端 AI 编程助手
3. ✅ 安装了 **CC Switch** —— 管理 AI 工具 API 提供商的桌面工具
4. ✅ 注册了 **Kimi 账号** 并订阅会员
5. ✅ 获取并配置了 **API Key** 到 CC Switch
6. ✅ 在 **VS Code 集成终端** 中启动并使用

你现在拥有了一个强大的 AI 编程环境：**Claude Code 的流畅交互体验 + Kimi k2.6 的强大代码能力**。所有操作都在 VS Code 内完成，无需切换窗口。

---

*本文最后更新于 2026-05-25。Claude Code、CC Switch 和 Kimi 都在快速迭代中，部分界面和命令可能随版本更新而调整，请以官方文档为准。*
