# Momentos Especiais

A beautiful interactive web application built to celebrate special moments in a relationship. This project showcases a timeline of significant events, an elegant photo gallery, and heartfelt messages wrapped in a romantic design.

## 📝 Description

"Momentos Especiais" (Special Moments) is a React-based web application designed as a digital love letter. It provides an interactive and visually appealing way to commemorate relationship milestones and share memories through various engaging components.

## ✨ Features

- **Timeline**: An interactive, draggable timeline showcasing important relationship milestones.
- **Together Timer**: A counter that precisely calculates and displays the time spent together since the beginning of the relationship.
- **Photo Carousel**: An elegant carousel displaying special memories with automatic slideshow.
- **Love Letter**: An interactive envelope that opens to reveal a special message.
- **Background Effects**: Floating hearts animation that creates a romantic atmosphere.
- **Music Player**: Background music player with "Heat Waves" by Glass Animals.
- **Daily Romantic Message**: Unique love messages that change each day.
- **Responsive Design**: Optimized for both desktop and mobile viewing.

## 🛠️ Technologies Used

- **React 19**
- **TypeScript**
- **Vite** - For fast development and building
- **Ant Design** - For UI components
- **CSS** - Custom styling for components
- **GitHub Actions** - For CI/CD pipeline
- **GitHub Pages** - For hosting

## 📦 Project Structure

```
src/
├── assets/     # Images for the carousel
├── components/ # React components
│   ├── Timeline.tsx
│   ├── TogetherTimer.tsx
│   ├── Carrossel.tsx
│   ├── Carta.tsx
│   ├── HeartBackground.tsx
│   ├── MusicPlayer.tsx
│   ├── MensagemRomantica.tsx
│   └── Footer.tsx
├── css/        # Component styles
└── main.tsx    # Application entry point
```

## 🚀 Installation & Setup

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/Momentos-Especiais.git
cd Momentos-Especiais
```

2. **Install dependencies**

```bash
npm install
```

3. **Run development server**

```bash
npm run dev
```

4. **Build for production**

```bash
npm run build
```

## 💻 Development

- The project is configured with ESLint for code quality
- TypeScript is used for type safety
- Components are organized by functionality

## 🌐 Deployment

The application is configured to automatically deploy to GitHub Pages using GitHub Actions. When new changes are pushed to the main branch, the workflow:

1. Checks out the code
2. Sets up Node.js
3. Installs dependencies
4. Builds the project
5. Deploys to the gh-pages branch

## 🎨 Customization

To personalize this project for your own relationship:

1. Edit the timeline events in `src/components/Timeline.tsx`
2. Replace the photos in the `src/assets/` folder
3. Adjust the starting date in `src/components/TogetherTimer.tsx`
4. Modify the love letter content in `src/components/Carta.tsx`
5. Change the background music in the `public/music/` directory

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Author

- Pedro Bolson

---

Made with ❤️ for someone special.