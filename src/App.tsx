function App() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-4xl space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight">Vite + React + TypeScript + Tailwind CSS + Radix UI Template</h1>
          <p className="text-muted-foreground mt-2">A comprehensive, production-ready template with 35+ UI components</p>
        </div>

        <div className="space-y-6">
          {/* Template Overview */}
          <div className="rounded-lg border bg-card p-6">
            <h2 className="text-2xl font-semibold mb-4">🚀 Template Overview</h2>
            <p className="text-muted-foreground mb-4">
              This template provides a complete foundation for building modern React applications with:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><strong>Vite 7.0.6</strong> - Fast build tool and development server</li>
              <li><strong>React 19</strong> - Latest React with modern features</li>
              <li><strong>TypeScript</strong> - Type-safe development</li>
              <li><strong>Tailwind CSS 3.3.0</strong> - Utility-first CSS framework</li>
              <li><strong>Radix UI</strong> - Accessible, unstyled UI primitives</li>
              <li><strong>35+ UI Components</strong> - Ready-to-use components</li>
              <li><strong>ESLint</strong> - Code linting and formatting</li>
            </ul>
          </div>

          {/* Component Library */}
          <div className="rounded-lg border bg-card p-6">
            <h2 className="text-2xl font-semibold mb-4">📦 Component Library</h2>
            <p className="text-muted-foreground mb-4">
              The template includes 35+ pre-built UI components located in <code className="bg-muted px-1 rounded">src/components/ui/</code>:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold mb-2">Basic Components</h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• <code>button.tsx</code> - Button with variants</li>
                  <li>• <code>input.tsx</code> - Form input field</li>
                  <li>• <code>label.tsx</code> - Form label</li>
                  <li>• <code>badge.tsx</code> - Status badges</li>
                  <li>• <code>card.tsx</code> - Card container</li>
                  <li>• <code>separator.tsx</code> - Visual divider</li>
                  <li>• <code>skeleton.tsx</code> - Loading skeleton</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Interactive Components</h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• <code>checkbox.tsx</code> - Checkbox input</li>
                  <li>• <code>switch.tsx</code> - Toggle switch</li>
                  <li>• <code>radio-group.tsx</code> - Radio buttons</li>
                  <li>• <code>slider.tsx</code> - Range slider</li>
                  <li>• <code>progress.tsx</code> - Progress bar</li>
                  <li>• <code>textarea.tsx</code> - Multi-line input</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Complex Components</h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• <code>accordion.tsx</code> - Collapsible sections</li>
                  <li>• <code>tabs.tsx</code> - Tab navigation</li>
                  <li>• <code>avatar.tsx</code> - User avatar</li>
                  <li>• <code>breadcrumb.tsx</code> - Navigation breadcrumbs</li>
                  <li>• <code>table.tsx</code> - Data table</li>
                  <li>• <code>calendar.tsx</code> - Date picker</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Overlay Components</h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• <code>dialog.tsx</code> - Modal dialogs</li>
                  <li>• <code>alert-dialog.tsx</code> - Confirmation dialogs</li>
                  <li>• <code>dropdown-menu.tsx</code> - Dropdown menus</li>
                  <li>• <code>select.tsx</code> - Select dropdown</li>
                  <li>• <code>popover.tsx</code> - Popover content</li>
                  <li>• <code>tooltip.tsx</code> - Tooltips</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Navigation & Layout</h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• <code>navigation-menu.tsx</code> - Navigation menu</li>
                  <li>• <code>menubar.tsx</code> - Menu bar</li>
                  <li>• <code>context-menu.tsx</code> - Context menus</li>
                  <li>• <code>sheet.tsx</code> - Side panels</li>
                  <li>• <code>scroll-area.tsx</code> - Custom scroll areas</li>
                  <li>• <code>aspect-ratio.tsx</code> - Aspect ratio container</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Feedback & Notifications</h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• <code>toast.tsx</code> - Toast notifications</li>
                  <li>• <code>use-toast.ts</code> - Toast hook</li>
                  <li>• <code>hover-card.tsx</code> - Hover cards</li>
                  <li>• <code>toggle.tsx</code> - Toggle button</li>
                  <li>• <code>toggle-group.tsx</code> - Toggle group</li>
                </ul>
              </div>
            </div>
          </div>

          {/* How to Use */}
          <div className="rounded-lg border bg-card p-6">
            <h2 className="text-2xl font-semibold mb-4">💡 How to Use Components</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">1. Import Components</h3>
                <pre className="bg-muted p-3 rounded text-sm overflow-x-auto">
{`import { Button } from './components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card'
import { Input } from './components/ui/input'`}
                </pre>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">2. Use Components</h3>
                <pre className="bg-muted p-3 rounded text-sm overflow-x-auto">
{`function MyComponent() {
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
}`}
                </pre>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">3. Available Variants</h3>
                <p className="text-muted-foreground mb-2">Most components support multiple variants:</p>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li><code>Button</code>: default, secondary, destructive, outline, ghost, link</li>
                  <li><code>Badge</code>: default, secondary, destructive, outline</li>
                  <li><code>Card</code>: default (with CardHeader, CardContent, CardTitle, CardDescription)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Development Commands */}
          <div className="rounded-lg border bg-card p-6">
            <h2 className="text-2xl font-semibold mb-4">🛠️ Development Commands</h2>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <code className="bg-muted px-2 py-1 rounded text-sm">npm run dev</code>
                <span className="text-muted-foreground">Start development server</span>
              </div>
              <div className="flex items-center space-x-2">
                <code className="bg-muted px-2 py-1 rounded text-sm">npm run build</code>
                <span className="text-muted-foreground">Build for production</span>
              </div>
              <div className="flex items-center space-x-2">
                <code className="bg-muted px-2 py-1 rounded text-sm">npm run lint</code>
                <span className="text-muted-foreground">Run ESLint</span>
              </div>
              <div className="flex items-center space-x-2">
                <code className="bg-muted px-2 py-1 rounded text-sm">npm run preview</code>
                <span className="text-muted-foreground">Preview production build</span>
              </div>
            </div>
          </div>

          {/* File Structure */}
          <div className="rounded-lg border bg-card p-6">
            <h2 className="text-2xl font-semibold mb-4">📁 File Structure</h2>
            <pre className="bg-muted p-3 rounded text-sm overflow-x-auto">
{`vite-react-ts-tempalte/
├── src/
│   ├── components/
│   │   └── ui/           # 35+ UI components
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
└── eslint.config.js      # ESLint configuration`}
            </pre>
          </div>

          {/* Customization */}
          <div className="rounded-lg border bg-card p-6">
            <h2 className="text-2xl font-semibold mb-4">🎨 Customization</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Tailwind CSS</h3>
                <p className="text-muted-foreground">Customize colors, spacing, and other design tokens in <code className="bg-muted px-1 rounded">tailwind.config.js</code></p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Component Styling</h3>
                <p className="text-muted-foreground">Modify component styles in individual component files under <code className="bg-muted px-1 rounded">src/components/ui/</code></p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Adding New Components</h3>
                <p className="text-muted-foreground">Create new components in <code className="bg-muted px-1 rounded">src/components/ui/</code> and export them from <code className="bg-muted px-1 rounded">src/components/ui/index.ts</code></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
