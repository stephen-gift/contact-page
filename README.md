# Stephen Gift - Portfolio Website

A modern, responsive portfolio website built with Next.js, React, and TypeScript, featuring a clean design and accessible user experience.

## 🚀 Live Demo

**Repository**: [https://github.com/stephen-gift/contact-page](https://github.com/stephen-gift/contact-page)

**Live Demo**: [https://stephen-contact-page.vercel.app/](https://stephen-contact-page.vercel.app/)

## 📁 Project Structure

```
src/
├── app/
│   ├── about/
│   │   └── page.tsx              # About Me page
│   ├── contact/
│   │   └── page.tsx              # Contact Us page
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Homepage
├── components/
│   ├── forms/
│   │   └── ContactForm.tsx       # Contact form with validation
│   ├── global/
│   │   └── Container.tsx         # Layout container component
│   ├── layout/
│   │   └── Header.tsx            # Navigation header
│   └── ui/                       # UI components (Button, Input, etc.)
└── lib/
    └── validationSchema.ts       # Form validation schemas
```

## 🛠️ Technology Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom component library
- **Form Handling**: React Hook Form with Zod validation
- **Icons**: Lucide React
- **Package Manager**: Yarn

## 📄 Pages

### Homepage (`/`)

- Hero section with introduction
- Features overview
- Call-to-action buttons
- **Test IDs**:
  - `test-home-about-button`
  - `test-home-contact-button`
  - `test-home-features`
  - `test-home-footer`

### About Me (`/about`)

- Personal bio and background
- Program goals and aspirations
- Areas of growth and confidence
- Reflective notes
- **Test IDs**:
  - `test-about-page` (main wrapper)
  - `test-about-bio`
  - `test-about-goals`
  - `test-about-confidence`
  - `test-about-future-note`
  - `test-about-extra`

### Contact Us (`/contact`)

- Fully validated contact form with **dummy submission**
- Success modal with confirmation
- Contact information display
- **Test IDs**:
  - `test-contact-name` (input)
  - `test-contact-email` (input)
  - `test-contact-subject` (input)
  - `test-contact-message` (textarea)
  - `test-contact-submit` (button)
  - `test-contact-error-*` (error messages)
  - `test-contact-success` (success modal)

## 🎯 Key Features

### Contact Form with Dummy Submission

- All fields required
- Email format validation
- Message length validation (10-1000 characters)
- **Dummy API endpoint** - form simulates submission without actual email sending
- Real-time error feedback
- Accessible error messages

### Accessibility

- Semantic HTML structure
- Proper ARIA labels and descriptions
- Keyboard navigation support
- Screen reader compatible
- Focus management

### Responsive Design

- Mobile-first approach
- Flexible grid layouts
- Responsive typography
- Touch-friendly interactions

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- Yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/stephen-gift/contact-page.git
   cd contact-page
   ```

2. **Install dependencies with Yarn**

   ```bash
   yarn install
   ```

3. **Run the development server**

   ```bash
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn start` - Start production server
- `yarn lint` - Run ESLint

## 🔧 Dummy Contact Form Setup

The contact form uses a dummy API endpoint that simulates form submission:

```typescript
// In ContactForm.tsx - Dummy submission handler
fetch("/api/send", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(data)
});
```

**Note**: This is a simulation - no actual emails are sent. For production use, integrate with a real email service like:

- Resend
- SendGrid
- Nodemailer

## 🧪 Testing

The project includes comprehensive data-testid attributes for reliable testing:

```typescript
// Example test IDs used throughout the application
data-testid="test-contact-name"
data-testid="test-about-bio"
data-testid="test-home-features"
data-testid="test-contact-success"
```

## 🎨 Design System

### Colors

- **Primary Orange**: `#F16A00` - Used for accents and CTAs
- **Primary Blue**: `#34679F` - Used for icons and highlights
- **Text Colors**:
  - Primary: `#002347`
  - Secondary: `#414141`
  - Muted: `#62636C`

### Typography

- Clean, readable font stack
- Responsive font sizes
- Consistent heading hierarchy

### Components

- Reusable UI components
- Consistent spacing system
- Modular design patterns

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Customization Guide

### Update Personal Information

1. Edit `/src/app/about/page.tsx` for bio information
2. Modify contact details in `/src/app/contact/page.tsx`
3. Update the features section in `/src/app/page.tsx`

### Add Real Email Functionality

Replace the dummy contact form with real email service:

```typescript
// Replace in ContactForm.tsx
// Current dummy endpoint: "/api/send"
// Replace with real API route that integrates with your email service
```

### Modify Colors

Update the Tailwind configuration in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        orange: '#F16A00',
        blue: '#34679F'
      }
    }
  }
}
```

## 📞 Contact Information

- **Email**: info@stephengift.com
- **Location**: Lagos, Nigeria
- **Phone**: +234 812 4** \*\***

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🐛 Known Issues

- Contact form uses dummy submission (intentional for demo)
- No actual email integration in current setup

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons by [Lucide](https://lucide.dev/)
- Form validation with [Zod](https://zod.dev/)

---

**Developer**: Stephen Gift  
**Role**: Frontend Engineer  
**Specialization**: React, Next.js, TypeScript, Modern Web Development

**Last Updated**: 2025
