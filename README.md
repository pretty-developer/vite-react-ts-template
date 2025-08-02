# Vite + React + TypeScript + Tailwind CSS + Radix UI Template

A comprehensive, production-ready template for building modern React applications with 35+ pre-built UI components.

## 🚀 Features

- **⚡ Vite 7.0.6** - Lightning fast build tool and development server
- **⚛️ React 19** - Latest React with modern features and hooks
- **🔷 TypeScript** - Type-safe development with full IntelliSense
- **🎨 Tailwind CSS 3.3.0** - Utility-first CSS framework
- **♿ Radix UI** - Accessible, unstyled UI primitives
- **📦 35+ UI Components** - Ready-to-use, accessible components
- **🔍 ESLint** - Code linting and formatting
- **📱 Responsive Design** - Mobile-first approach
- **🌙 Dark Mode Ready** - Built-in dark mode support
- **♿ Accessibility** - WCAG compliant components

## 📦 Component Library

The template includes 35+ pre-built UI components organized into categories:

### Basic Components
- `button.tsx` - Button with multiple variants
- `input.tsx` - Form input field
- `label.tsx` - Form label
- `badge.tsx` - Status badges
- `card.tsx` - Card container
- `separator.tsx` - Visual divider
- `skeleton.tsx` - Loading skeleton

### Interactive Components
- `checkbox.tsx` - Checkbox input
- `switch.tsx` - Toggle switch
- `radio-group.tsx` - Radio buttons
- `slider.tsx` - Range slider
- `progress.tsx` - Progress bar
- `textarea.tsx` - Multi-line input

### Complex Components
- `accordion.tsx` - Collapsible sections
- `tabs.tsx` - Tab navigation
- `avatar.tsx` - User avatar
- `breadcrumb.tsx` - Navigation breadcrumbs
- `table.tsx` - Data table
- `calendar.tsx` - Date picker

### Overlay Components
- `dialog.tsx` - Modal dialogs
- `alert-dialog.tsx` - Confirmation dialogs
- `dropdown-menu.tsx` - Dropdown menus
- `select.tsx` - Select dropdown
- `popover.tsx` - Popover content
- `tooltip.tsx` - Tooltips

### Navigation & Layout
- `navigation-menu.tsx` - Navigation menu
- `menubar.tsx` - Menu bar
- `context-menu.tsx` - Context menus
- `sheet.tsx` - Side panels
- `scroll-area.tsx` - Custom scroll areas
- `aspect-ratio.tsx` - Aspect ratio container

### Feedback & Notifications
- `toast.tsx` - Toast notifications
- `use-toast.ts` - Toast hook
- `hover-card.tsx` - Hover cards
- `toggle.tsx` - Toggle button
- `toggle-group.tsx` - Toggle group

## 🛠️ Quick Start

### Prerequisites
- Node.js 20.19.0 or higher
- npm or yarn

### Installation

1. **Clone the template**
   ```bash
   git clone <repository-url>
   cd vite-react-ts-tempalte
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5055`

## 📖 Usage

### Importing Components

```tsx
import { Button } from './components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card'
import { Input } from './components/ui/input'
```

### Using Components

```tsx
function MyComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>My Form</CardTitle>
      </CardHeader>
      <CardContent>
        <Input placeholder="Enter your name" />
        <Button>Submit</Button>
      </CardContent>
    </Card>
  )
}
```

### Component Variants

Most components support multiple variants:

```tsx
// Button variants
<Button>Default</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>

// Badge variants
<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="destructive">Destructive</Badge>
<Badge variant="outline">Outline</Badge>
```

## 🛠️ Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run ESLint
npm run lint

# Type check
npm run type-check
```

## 📁 Project Structure

```
vite-react-ts-tempalte/
├── src/
│   ├── components/
│   │   └── ui/           # 35+ UI components
│   │       ├── button.tsx
│   │       ├── input.tsx
│   │       ├── card.tsx
│   │       └── ...       # 32 more components
│   ├── lib/
│   │   └── utils.ts      # Utility functions
│   ├── App.tsx           # Main app component
│   ├── main.tsx          # App entry point
│   └── index.css         # Global styles
├── public/               # Static assets
├── package.json          # Dependencies & scripts
├── tailwind.config.js    # Tailwind configuration
├── postcss.config.js     # PostCSS configuration
├── vite.config.ts        # Vite configuration
├── tsconfig.json         # TypeScript configuration
└── eslint.config.js      # ESLint configuration
```

## 🎨 Customization

### Tailwind CSS Configuration

Customize colors, spacing, and other design tokens in `tailwind.config.js`:

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        // Your custom colors
      },
      spacing: {
        // Your custom spacing
      }
    }
  }
}
```

### Component Styling

Modify component styles in individual component files under `src/components/ui/`:

```tsx
// src/components/ui/button.tsx
const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        // Add your custom variants
      }
    }
  }
)
```

### Adding New Components

1. Create new components in `src/components/ui/`
2. Export them from `src/components/ui/index.ts`
3. Import and use in your app

## 🔧 Configuration Files

### Vite Configuration (`vite.config.ts`)
```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5055,
    open: true
  }
})
```

### Tailwind Configuration (`tailwind.config.js`)
```js
module.exports = {
  darkMode: ["class"],
  content: [
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      // Custom theme extensions
    }
  },
  plugins: [require("tailwindcss-animate")]
}
```

### TypeScript Configuration (`tsconfig.json`)
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

## 📦 Dependencies

### Core Dependencies
- `react` - React library
- `react-dom` - React DOM
- `vite` - Build tool
- `@vitejs/plugin-react` - Vite React plugin

### UI Dependencies
- `@radix-ui/react-*` - Radix UI primitives
- `class-variance-authority` - Component variants
- `clsx` - Conditional classes
- `tailwind-merge` - Tailwind class merging
- `lucide-react` - Icons

### Styling Dependencies
- `tailwindcss` - CSS framework
- `autoprefixer` - CSS autoprefixer
- `tailwindcss-animate` - Tailwind animations

### Development Dependencies
- `typescript` - TypeScript
- `@types/react` - React types
- `@types/react-dom` - React DOM types
- `eslint` - Code linting
- `@typescript-eslint/*` - TypeScript ESLint

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

The build output will be in the `dist/` directory.

### Deploy to Vercel
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Deploy to Netlify
1. Build your project: `npm run build`
2. Upload the `dist/` folder to Netlify

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- [Radix UI](https://www.radix-ui.com/) - Accessible UI primitives
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Vite](https://vitejs.dev/) - Fast build tool
- [shadcn/ui](https://ui.shadcn.com/) - Component inspiration

## 📞 Support

If you have any questions or need help, please open an issue on GitHub.

---

**Happy coding! 🎉**
