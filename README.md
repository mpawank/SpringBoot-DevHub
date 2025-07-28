# 🚀 SpringBoot DevHub

> Your central hub for learning and building with Spring Boot — templates, guides, snippets & more.

[![Next.js](https://img.shields.io/badge/Next.js-15.4.4-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.1.0-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?style=for-the-badge&logo=javascript)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-blue?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![shadcn/ui](https://img.shields.io/badge/shadcn/ui-1.0-gray?style=for-the-badge)](https://ui.shadcn.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

<div align="center">
  <img src="https://img.shields.io/badge/Spring%20Boot-3.x-green?style=for-the-badge&logo=spring-boot" alt="Spring Boot 3.x" />
  <img src="https://img.shields.io/badge/Java-17+-orange?style=for-the-badge&logo=java" alt="Java 17+" />
  <img src=https://img.shields.io/badge/JavaScript-ES6+-yellow?style=for-the-badge&logo=javascript" alt="JavaScript" />
</div>

---

## ✨ Features

### 🎯 **Core Features**

- **📦 Ready-to-use Templates** - Complete Spring Boot projects with CRUD, Auth, REST APIs
- **📄 Code Snippets** - Common patterns, annotations, and boilerplate code
- **📚 Comprehensive Guides** - Step-by-step tutorials for all skill levels
- **🌐 GitHub Explorer** - Discover trending Spring Boot repositories
- **📰 News & Updates** - Latest Spring ecosystem news and trends
- **⚡ Performance Tools** - Optimization and monitoring utilities

### 🎨 **UI/UX Features**

- **Modern Design** - Beautiful, responsive interface with dark mode support
- **Smooth Animations** - Custom CSS animations and transitions
- **Interactive Components** - Hover cards, tooltips, and dynamic content
- **Accessibility** - WCAG compliant with proper focus management
- **Mobile First** - Optimized for all device sizes

### 🛠 **Technical Features**

- **Next.js 15** - Latest React framework with App Router
- **shadcn/ui** - Beautiful, accessible component library
- **Tailwind CSS 4** - Utility-first CSS framework
- **TypeScript Ready** - Full TypeScript support
- **Performance Optimized** - Fast loading and smooth interactions

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/springboothub.git
   cd springboothub
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

---

## 📁 Project Structure

```
springboothub/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles and animations
│   ├── layout.js          # Root layout component
│   └── page.js            # Homepage component
├── components/             # Reusable components
│   └── ui/                # shadcn/ui components
│       ├── button.jsx     # Button component
│       ├── card.jsx       # Card component
│       ├── dialog.jsx     # Dialog component
│       ├── tabs.jsx       # Tabs component
│       ├── badge.jsx      # Badge component
│       ├── accordion.jsx  # Accordion component
│       ├── hover-card.jsx # Hover card component
│       ├── tooltip.jsx    # Tooltip component
│       ├── progress.jsx   # Progress component
│       ├── avatar.jsx     # Avatar component
│       ├── calendar.jsx   # Calendar component
│       ├── command.jsx    # Command component
│       ├── dropdown-menu.jsx # Dropdown menu component
│       ├── form.jsx       # Form component
│       ├── label.jsx      # Label component
│       ├── navigation-menu.jsx # Navigation menu component
│       ├── separator.jsx  # Separator component
│       ├── sheet.jsx      # Sheet component
│       ├── switch.jsx     # Switch component
│       ├── textarea.jsx   # Textarea component
│       └── input.jsx      # Input component
├── lib/                    # Utility functions
│   └── utils.js           # Common utilities
├── public/                 # Static assets
├── package.json            # Dependencies and scripts
├── components.json         # shadcn/ui configuration
├── tailwind.config.js      # Tailwind CSS configuration
└── README.md              # Project documentation
```

---

## 🎨 Customization

### Adding New Components

The project uses shadcn/ui for components. To add new components:

```bash
npx shadcn@latest add [component-name]
```

### Styling

The project uses Tailwind CSS with custom animations. Key styling features:

- **Custom Animations** - Fade, slide, scale, and gradient animations
- **Dark Mode** - Full dark mode support
- **Responsive Design** - Mobile-first approach
- **Glass Effects** - Modern glass morphism effects
- **Gradient Text** - Beautiful gradient text effects

### Theme Customization

Edit `app/globals.css` to customize:

- Color scheme
- Animations
- Typography
- Spacing

---

## 🧩 Available Components

### Core Components

- **Button** - Various button styles and variants
- **Card** - Content containers with headers and content
- **Dialog** - Modal dialogs and overlays
- **Sheet** - Slide-out panels
- **Tabs** - Tabbed content organization

### Form Components

- **Input** - Text input fields
- **Textarea** - Multi-line text input
- **Switch** - Toggle switches
- **Form** - Form validation and handling

### Navigation Components

- **Navigation Menu** - Main navigation
- **Dropdown Menu** - Dropdown navigation
- **Command** - Command palette interface

### Display Components

- **Badge** - Status indicators
- **Avatar** - User avatars
- **Progress** - Progress indicators
- **Separator** - Visual separators

### Interactive Components

- **Hover Card** - Hover-triggered cards
- **Tooltip** - Contextual tooltips
- **Accordion** - Collapsible content
- **Calendar** - Date picker component

---

## 🚀 Deployment

### Vercel (Recommended)

1. **Push to GitHub**

   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Connect your GitHub repository to Vercel
   - Vercel will automatically detect Next.js and deploy

### Other Platforms

The project can be deployed to any platform that supports Next.js:

- **Netlify** - Static site hosting
- **Railway** - Full-stack platform
- **DigitalOcean App Platform** - Managed hosting
- **AWS Amplify** - AWS hosting solution

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

### 🐛 Reporting Bugs

1. Check existing issues
2. Create a new issue with detailed information
3. Include steps to reproduce

### 💡 Suggesting Features

1. Check existing feature requests
2. Create a new issue with your idea
3. Explain the use case and benefits

### 🔧 Code Contributions

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

### 📝 Development Guidelines

- Follow the existing code style
- Add comments for complex logic
- Test your changes thoroughly
- Update documentation as needed

---

## 📚 Resources

### Official Documentation

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com/)

### Spring Boot Resources

- [Spring Boot Documentation](https://spring.io/projects/spring-boot)
- [Spring Guides](https://spring.io/guides)
- [Spring Initializr](https://start.spring.io/)

### Community

- [Spring Boot GitHub](https://github.com/spring-projects/spring-boot)
- [Spring Community](https://spring.io/community)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/spring-boot)

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **Next.js Team** - For the amazing React framework
- **shadcn/ui** - For the beautiful component library
- **Tailwind CSS** - For the utility-first CSS framework
- **Spring Boot Team** - For the incredible Java framework
- **Vercel** - For the excellent hosting platform

---

<div align="center">
  <p>Made with ❤️ by the SpringBoot DevHub Team</p>
  <p>
    <a href="https://github.com/your-username/springboothub">GitHub</a> •
    <a href="https://springboothub.dev">Website</a> •
    <a href="https://discord.gg/springboothub">Discord</a>
  </p>
</div>
