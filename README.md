# Ian's Personal Website

A modern, responsive personal website built with React, TypeScript, and Material-UI.

## 🌟 Features

- **Modern Design**: Clean and professional UI with dark theme
- **Responsive Layout**: Optimized for all device sizes
- **Interactive Elements**: Smooth animations and hover effects
- **Social Integration**: Direct links to Discord, Instagram, Bilibili, and email
- **Discord Widgets**: Embedded Discord server widgets
- **Performance Optimized**: Built with Vite for fast loading

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **UI Framework**: Material-UI (MUI)
- **Build Tool**: Vite
- **Styling**: Emotion + CSS-in-JS
- **Icons**: Lucide React
- **Deployment**: GitHub Pages

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/Ian-bug/ian-bug.github.io.git
cd Ian-Website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## 🚀 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run check` - Type check with TypeScript

## 📁 Project Structure

```
src/
├── components/     # Reusable components
├── pages/         # Page components
├── assets/        # Static assets (images, etc.)
├── hooks/         # Custom React hooks
├── lib/           # Utility functions
├── App.tsx        # Main app component
├── main.tsx       # Entry point
└── index.css      # Global styles
```

## 🎨 Customization

To customize the website for your own use:

1. Update personal information in `src/pages/Home.tsx`
2. Replace avatar image in `src/assets/images/`
3. Modify social media links and Discord server IDs
4. Update the theme colors in `src/App.tsx`
5. Change the site title and meta tags in `index.html`

## 🌐 Deployment

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Deploy the `dist` folder to your hosting service

### GitHub Pages (Automatic)

The project includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically builds and deploys the site when you push to the main branch.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 About

Created by Ian - A 14-year-old student from Taiwan who loves gaming and is active on Discord.

- **Discord**: .1an._
- **Instagram**: @_v1oid
- **Bilibili**: w0_i
- **Email**: nigga@plsdonate.club

---

*Made with ❤️ by Ian*