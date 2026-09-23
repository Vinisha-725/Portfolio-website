# Vinisha Sahoo | Portfolio Website

A modern, professional portfolio website built with Next.js, React, TypeScript, and Tailwind CSS.

## Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Dark/Light Mode**: Toggle between dark and light themes via the terminal
- **Interactive Terminal**: A fun terminal component with easter eggs and navigation commands
- **Animated Background**: Canvas-based animated background with gradient blobs and particles
- **Project Showcase**: Clickable project cards with detailed modal views
- **Contact Form**: Functional contact form with email integration via Formspree
- **Smooth Animations**: Fade-in animations and smooth scrolling throughout

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Custom Canvas animations + CSS transitions
- **Email**: Formspree for contact form

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Vinisha-725/Portfolio-website.git
cd Portfolio-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
portfolio/
├── src/
│   ├── app/              # Next.js app directory
│   │   ├── globals.css   # Global styles and theme variables
│   │   ├── layout.tsx    # Root layout
│   │   └── page.tsx      # Main page
│   ├── components/       # React components
│   │   ├── About.tsx
│   │   ├── Background.tsx
│   │   ├── Contact.tsx
│   │   ├── ContactModal.tsx
│   │   ├── Education.tsx
│   │   ├── Experience.tsx
│   │   ├── FadeIn.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── Projects.tsx
│   │   ├── ProjectModal.tsx
│   │   ├── SectionHeading.tsx
│   │   ├── Skills.tsx
│   │   └── Terminal.tsx
│   └── data/             # Data files
│       ├── projects.ts
│       ├── skills.ts
│       └── socials.ts
├── public/               # Static assets
├── tailwind.config.js    # Tailwind configuration
└── package.json          # Dependencies
```

## Terminal Commands

The interactive terminal in the About section supports the following commands:

- `whoami` - Display user information
- `skills` - List skills and technologies
- `contact` - Show contact information
- `dark` - Switch to dark mode
- `light` - Switch to light mode

Try typing secret words like "vinisha", "secret", "matrix", "magic", or "wonder" for easter eggs!

## Contact Form

The contact form uses Formspree for email delivery. To set it up:

1. Create an account at [formspree.io](https://formspree.io)
2. Create a new form with your email
3. Replace the form ID in `src/components/ContactModal.tsx` (line 28) with your actual form ID

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com/new)
3. Follow the deployment prompts

### Other Platforms

Build the project:
```bash
npm run build
```

Start the production server:
```bash
npm start
```

## Customization

### Updating Content

- **Projects**: Edit `src/data/projects.ts`
- **Skills**: Edit `src/data/skills.ts`
- **Social Links**: Edit `src/data/socials.ts`

### Styling

- **Colors**: Modify CSS variables in `src/app/globals.css`
- **Background Animation**: Edit `src/components/Background.tsx`
- **Tailwind Config**: Update `tailwind.config.js`

## License

This project is open source and available under the MIT License.

## Contact

- **GitHub**: [Vinisha-725](https://github.com/Vinisha-725)
- **LinkedIn**: [Vinisha Sahoo](https://www.linkedin.com/in/vinisha-sahoo/)
- **Email**: vinisha.sahoo@gmail.com
