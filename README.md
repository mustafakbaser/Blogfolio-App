# BlogFolio - Modern Blog & Portfolio Template

A modern, responsive blog and portfolio template built with React, TypeScript, and Tailwind CSS. Features a beautiful dark mode, SEO optimization, and a clean, professional design.

![BlogFolio Preview](https://res.cloudinary.com/mustafakbaser/image/upload/v1751882498/blogfolio-1_qsqnoq.png)

## ✨ Features

### 🎨 Design & UI
- Modern and clean user interface
- Fully responsive design for all devices
- Smooth animations and transitions
- Beautiful dark mode with system preference detection
- Custom code syntax highlighting
- Loading states and animations
- Toast notifications for actions

### 📱 Core Features
- **Blog System**
  - Category filtering
  - Search functionality
  - Reading time estimation
  - Related posts
  - Social sharing
  - Code block highlighting
  - Author information

- **Portfolio Section**
  - Project showcase
  - Skills visualization
  - Experience timeline
  - Technology stack display

- **Contact Form**
  - Form validation
  - Success/error handling
  - Loading states
  - Contact information display

### 🛠 Technical Features
- Built with React 18 and TypeScript
- Tailwind CSS for styling
- SEO optimization with React Helmet
- Dark mode support
- Cookie consent management
- Responsive images
- Performance optimized
- Clean and maintainable code structure

## 🚀 Getting Started

### Prerequisites
- Node.js 18 or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/mustafakbaser/Blogfolio-App.git
```

2. Install dependencies:
```bash
cd Blogfolio-App
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📁 Project Structure

```
src/
├── components/        # Reusable UI components
├── pages/            # Page components
├── hooks/            # Custom React hooks
├── utils/            # Utility functions
├── types/            # TypeScript type definitions
├── data/            # Static data and content
└── lib/             # Core functionality and services
```

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory:

```env
VITE_API_URL=your_api_url
VITE_GA_TRACKING_ID=your_ga_tracking_id
```

### Blog Posts
Add or modify blog posts in `src/data/blogPosts.ts`.^

**Developer's Recommendation:** If you want your blog to have a structured and expandable content management structure, then I would suggest going with a Headless CMS. Putting a Headless CMS in front of GraphQL or REST APIs for content delivery and integration with any head frameworks. The way you set this up makes your blog more dynamic in nature because it keeps the content management centralized and all the while enables a swift, seamless mechanism in the back-end which eventually caters to an engaging user experience.

## 🎯 Roadmap

### Planned Features
- [ ] Headless CMS integration
- [ ] Comments system
- [ ] Newsletter subscription
- [ ] MDX support for blog posts
- [ ] Internationalization (i18n)
- [ ] Image gallery for portfolio projects
- [ ] SEO improvements
- [ ] Accessibility improvements
- [ ] Search optimization
- [ ] Admin dashboard & Authentication
- [ ] Database integration
- [ ] Rich text editor for blog posts
- [ ] File upload system


## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Lucide Icons](https://lucide.dev/)

## 📧 Contact

For questions and support, please email [iletisim@mustafabaser.net](mailto:info@mustafabaser.net).