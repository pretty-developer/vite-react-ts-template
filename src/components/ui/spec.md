
# UI Components Specification

This document provides specifications for all UI components in the `components/ui` folder. Use this reference instead.

## Basic Components

### Button
**File:** `button.tsx`  
**Exports:** `Button`, `buttonVariants`  
**Usage:** `<Button variant="outline" size="sm">Click Me</Button>`  
**Props:**
- `variant`: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" (default: "default")
- `size`: "default" | "sm" | "lg" | "icon" (default: "default")
- `asChild`: boolean (default: false)
- Extends: React.ButtonHTMLAttributes

### Input
**File:** `input.tsx`  
**Exports:** `Input`  
**Usage:** `<Input placeholder="Enter text..." />`  
**Props:**
- Extends: React.InputHTMLAttributes (all standard input props)
- No additional props

### Label
**File:** `label.tsx`  
**Exports:** `Label`  
**Usage:** `<Label htmlFor="input-id">Label Text</Label>`  
**Props:**
- Extends: React.LabelHTMLAttributes

### Textarea
**File:** `textarea.tsx`  
**Exports:** `Textarea`  
**Usage:** `<Textarea placeholder="Enter text..." />`  
**Props:**
- Extends: React.TextareaHTMLAttributes

### Separator
**File:** `separator.tsx`  
**Exports:** `Separator`  
**Usage:** `<Separator orientation="horizontal" />`  
**Props:**
- `orientation`: "horizontal" | "vertical" (default: "horizontal")
- `decorative`: boolean (default: false)

## Card Components

### Card
**File:** `card.tsx`  
**Exports:** `Card`, `CardHeader`, `CardFooter`, `CardTitle`, `CardDescription`, `CardContent`  
**Usage:**
```tsx
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>Content</CardContent>
  <CardFooter>Footer</CardFooter>
</Card>
```
**Props:** All components extend React.HTMLAttributes

## Badge Components

### Badge
**File:** `badge.tsx`  
**Exports:** `Badge`, `badgeVariants`  
**Usage:** `<Badge variant="secondary">Badge</Badge>`  
**Props:**
- `variant`: "default" | "secondary" | "destructive" | "outline" (default: "default")
- Extends: React.HTMLAttributes

## Layout Components

### AspectRatio
**File:** `aspect-ratio.tsx`  
**Exports:** `AspectRatio`, `AspectRatioContent`  
**Usage:** `<AspectRatio ratio={16/9}><img src="..." /></AspectRatio>`  
**Props:**
- `ratio`: number (default: 1)

### Breadcrumb
**File:** `breadcrumb.tsx`  
**Exports:** `Breadcrumb`, `BreadcrumbList`, `BreadcrumbItem`, `BreadcrumbLink`, `BreadcrumbPage`, `BreadcrumbSeparat 
**Usage:**
```tsx
<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem><BreadcrumbLink>Home</BreadcrumbLink></BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem><BreadcrumbPage>Page</BreadcrumbPage></BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
```

### Skeleton
**File:** `skeleton.tsx`  
**Exports:** `Skeleton`  
**Usage:** `<Skeleton className="h-4 w-[250px]" />`  
**Props:**
- Extends: React.HTMLAttributes

## Interactive Components

### Checkbox
**File:** `checkbox.tsx`  
**Exports:** `Checkbox`  
**Usage:** `<Checkbox checked={checked} onCheckedChange={setChecked} />`  
**Props:**
- Extends: React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>

### Switch
**File:** `switch.tsx`  
**Exports:** `Switch`  
**Usage:** `<Switch checked={checked} onCheckedChange={setChecked} />`  
**Props:**
- Extends: React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root>

### RadioGroup
**File:** `radio-group.tsx`  
**Exports:** `RadioGroup`, `RadioGroupItem`  
**Usage:**
```tsx
<RadioGroup value={value} onValueChange={setValue}>
  <RadioGroupItem value="option1" />
</RadioGroup>
```
**Props:**
- `RadioGroup`: Extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
- `RadioGroupItem`: Extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>

### Progress
**File:** `progress.tsx`  
**Exports:** `Progress`  
**Usage:** `<Progress value={33} />`  
**Props:**
- `value`: number (0-100)
- Extends: React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>

### Slider
**File:** `slider.tsx`  
**Exports:** `Slider`  
**Usage:** `<Slider defaultValue={[50]} max={100} step={1} />`  
**Props:**
- Extends: React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>

### Toggle
**File:** `toggle.tsx`  
**Exports:** `Toggle`, `toggleVariants`  
**Usage:** `<Toggle variant="outline" size="sm">Toggle</Toggle>`  
**Props:**
- `variant`: "default" | "outline" (default: "default")
- `size`: "default" | "sm" | "lg" (default: "default")
- `pressed`: boolean
- `onPressedChange`: (pressed: boolean) => void

### ToggleGroup
**File:** `toggle-group.tsx`  
**Exports:** `ToggleGroup`, `ToggleGroupItem`  
**Usage:**
```tsx
<ToggleGroup type="single" value={value} onValueChange={setValue}>
  <ToggleGroupItem value="a">A</ToggleGroupItem>
</ToggleGroup>
```
**Props:**
- `ToggleGroup`: type: "single" | "multiple", value, onValueChange
- `ToggleGroupItem`: value, Extends React.ComponentPropsWithoutRef

## Complex Components

### Avatar
**File:** `avatar.tsx`  
**Exports:** `Avatar`, `AvatarFallback`, `AvatarImage`  
**Usage:**
```tsx
<Avatar>
  <AvatarImage src="..." />
  <AvatarFallback>JD</AvatarFallback>
</Avatar>
```

### Accordion
**File:** `accordion.tsx`  
**Exports:** `Accordion`, `AccordionContent`, `AccordionItem`, `AccordionTrigger`  
**Usage:**
```tsx
<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Trigger</AccordionTrigger>
    <AccordionContent>Content</AccordionContent>
  </AccordionItem>
</Accordion>
```
**Props:**
- `Accordion`: type: "single" | "multiple", collapsible?: boolean
- `AccordionItem`: value: string
- `AccordionTrigger`: Extends React.ComponentPropsWithoutRef
- `AccordionContent`: Extends React.ComponentPropsWithoutRef

### Tabs
**File:** `tabs.tsx`  
**Exports:** `Tabs`, `TabsContent`, `TabsList`, `TabsTrigger`  
**Usage:**
```tsx
<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">Content</TabsContent>
</Tabs>
```
**Props:**
- `Tabs`: defaultValue?: string, value?: string, onValueChange?: (value: string) => void
- `TabsList`: Extends React.ComponentPropsWithoutRef
- `TabsTrigger`: value: string, Extends React.ComponentPropsWithoutRef
- `TabsContent`: value: string, Extends React.ComponentPropsWithoutRef

### Collapsible
**File:** `collapsible.tsx`  
**Exports:** `Collapsible`, `CollapsibleTrigger`, `CollapsibleContent`  
**Usage:**
```tsx
<Collapsible open={open} onOpenChange={setOpen}>
  <CollapsibleTrigger>Trigger</CollapsibleTrigger>
  <CollapsibleContent>Content</CollapsibleContent>
</Collapsible>
```
**Props:**
- `Collapsible`: open?: boolean, onOpenChange?: (open: boolean) => void
- `CollapsibleTrigger`: Extends React.ComponentPropsWithoutRef
- `CollapsibleContent`: Extends React.ComponentPropsWithoutRef

### ScrollArea
**File:** `scroll-area.tsx`  
**Exports:** `ScrollArea`, `ScrollBar`  
**Usage:**
```tsx
<ScrollArea className="h-[200px] w-[350px]">
  Content
  <ScrollBar />
</ScrollArea>
```

### Table
**File:** `table.tsx`  
**Exports:** `Table`, `TableHeader`, `TableBody`, `TableFooter`, `TableHead`, `TableRow`, `TableCell`, `TableCaption` 
**Usage:**
```tsx
<Table>
  <TableCaption>Caption</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead>Header</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>Cell</TableCell>
    </TableRow>
  </TableBody>
</Table>
```

## Dialog Components

### Dialog
**File:** `dialog.tsx`  
**Exports:** `Dialog`, `DialogContent`, `DialogDescription`, `DialogFooter`, `DialogHeader`, `DialogTitle`, `DialogTr 
**Usage:**
```tsx
<Dialog open={open} onOpenChange={setOpen}>
  <DialogTrigger>Open</DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Title</DialogTitle>
      <DialogDescription>Description</DialogDescription>
    </DialogHeader>
    Content
    <DialogFooter>Footer</DialogFooter>
  </DialogContent>
</Dialog>
```
**Props:**
- `Dialog`: open?: boolean, onOpenChange?: (open: boolean) => void
- All other components extend React.ComponentPropsWithoutRef

### AlertDialog
**File:** `alert-dialog.tsx`  
**Exports:** `AlertDialog`, `AlertDialogAction`, `AlertDialogCancel`, `AlertDialogContent`, `AlertDialogDescription`, 
**Usage:** Similar to Dialog but for alerts with Action/Cancel buttons

### Sheet
**File:** `sheet.tsx`  
**Exports:** `Sheet`, `SheetContent`, `SheetDescription`, `SheetFooter`, `SheetHeader`, `SheetTitle`, `SheetTrigger`  
**Usage:** Similar to Dialog but slides in from side

## Menu Components

### DropdownMenu
**File:** `dropdown-menu.tsx`  
**Exports:** `DropdownMenu`, `DropdownMenuContent`, `DropdownMenuItem`, `DropdownMenuTrigger`  
**Usage:**
```tsx
<DropdownMenu>
  <DropdownMenuTrigger>Trigger</DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem>Item</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
```

### Select
**File:** `select.tsx`  
**Exports:** `Select`, `SelectContent`, `SelectItem`, `SelectTrigger`, `SelectValue`  
**Usage:**
```tsx
<Select value={value} onValueChange={setValue}>
  <SelectTrigger>
    <SelectValue placeholder="Select option" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="option1">Option 1</SelectItem>
  </SelectContent>
</Select>
```
**Props:**
- `Select`: value?: string, onValueChange?: (value: string) => void
- `SelectTrigger`: Extends React.ComponentPropsWithoutRef
- `SelectValue`: placeholder?: string, Extends React.ComponentPropsWithoutRef
- `SelectContent`: position?: "popper" | "item", Extends React.ComponentPropsWithoutRef
- `SelectItem`: value: string, Extends React.ComponentPropsWithoutRef

### Popover
**File:** `popover.tsx`  
**Exports:** `Popover`, `PopoverContent`, `PopoverTrigger`  
**Usage:**
```tsx
<Popover open={open} onOpenChange={setOpen}>
  <PopoverTrigger>Trigger</PopoverTrigger>
  <PopoverContent>Content</PopoverContent>
</Popover>
```
**Props:**
- `Popover`: open?: boolean, onOpenChange?: (open: boolean) => void
- `PopoverTrigger`: Extends React.ComponentPropsWithoutRef
- `PopoverContent`: side?: "top" | "right" | "bottom" | "left", Extends React.ComponentPropsWithoutRef

### Tooltip
**File:** `tooltip.tsx`  
**Exports:** `Tooltip`, `TooltipContent`, `TooltipProvider`, `TooltipTrigger`  
**Usage:**
```tsx
<TooltipProvider>
  <Tooltip>
    <TooltipTrigger>Trigger</TooltipTrigger>
    <TooltipContent>Tooltip text</TooltipContent>
  </Tooltip>
</TooltipProvider>
```

### ContextMenu
**File:** `context-menu.tsx`  
**Exports:** `ContextMenu`, `ContextMenuContent`, `ContextMenuItem`, `ContextMenuTrigger`  
**Usage:**
```tsx
<ContextMenu>
  <ContextMenuTrigger>Right click me</ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuItem>Item</ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>
```

### Menubar
**File:** `menubar.tsx`  
**Exports:** `Menubar`, `MenubarContent`, `MenubarItem`, `MenubarTrigger`  
**Usage:**
```tsx
<Menubar>
  <MenubarTrigger>File</MenubarTrigger>
  <MenubarContent>
    <MenubarItem>New</MenubarItem>
  </MenubarContent>
</Menubar>
```

### NavigationMenu
**File:** `navigation-menu.tsx`  
**Exports:** `NavigationMenu`, `NavigationMenuContent`, `NavigationMenuItem`, `NavigationMenuLink`, `NavigationMenuLi 
**Usage:**
```tsx
<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Item</NavigationMenuTrigger>
      <NavigationMenuContent>
        <NavigationMenuLink>Link</NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>
```

### HoverCard
**File:** `hover-card.tsx`  
**Exports:** `HoverCard`, `HoverCardContent`, `HoverCardTrigger`  
**Usage:**
```tsx
<HoverCard>
  <HoverCardTrigger>Trigger</HoverCardTrigger>
  <HoverCardContent>Content</HoverCardContent>
</HoverCard>
```

## Toast Components

### Toast
**File:** `toast.tsx`  
**Exports:** `Toast`, `ToastProvider`, `ToastViewport`, `ToastTitle`, `ToastDescription`, `ToastClose`, `ToastAction` 
**Usage:**
```tsx
<ToastProvider>
  <Toast>
    <ToastTitle>Title</ToastTitle>
    <ToastDescription>Description</ToastDescription>
    <ToastClose />
    <ToastAction altText="Action">Action</ToastAction>
  </Toast>
  <ToastViewport />
</ToastProvider>
```
**Props:**
- `Toast`: variant?: "default" | "destructive", Extends React.ComponentPropsWithoutRef
- `ToastAction`: altText: string, Extends React.ComponentPropsWithoutRef
- Others extend React.ComponentPropsWithoutRef

### useToast Hook
**File:** `use-toast.ts`  
**Exports:** `useToast`, `toast`  
**Usage:**
```tsx
const { toast } = useToast()
toast({
  title: "Title",
  description: "Description",
  variant: "destructive"
})
```
**Toast Options:**
- `title?: React.ReactNode`
- `description?: React.ReactNode`
- `variant?: "default" | "destructive"`
- `action?: ToastActionElement`
- `open?: boolean`
- `onOpenChange?: (open: boolean) => void`

## Calendar Component

### Calendar
**File:** `calendar.tsx`  
**Exports:** `Calendar`  
**Usage:** `<Calendar mode="single" selected={date} onSelect={setDate} />`  
**Props:**
- `mode`: "single" | "multiple" | "range"
- `selected`: Date | Date[] | DateRange
- `onSelect`: (date: Date | Date[] | DateRange | undefined) => void
- `disabled`: Date[] | ((date: Date) => boolean)
- `initialFocus`: boolean

## Additional Components

### Checkbox, Switch, RadioGroup, Progress, Slider, Toggle, ToggleGroup
These components follow standard form control patterns with appropriate props for their functionality.

### All Dialog/Menu Components
These components are built on Radix UI primitives and follow consistent patterns for accessibility and behavior.

## Notes

- All components use the `cn` utility from `../../lib/utils` for className merging
- Components with variants use `class-variance-authority` (cva) for styling
- Radix UI primitives are used for complex interactive components
- All components support standard HTML attributes through prop spreading
- Components are built with accessibility in mind
- TypeScript interfaces extend appropriate HTML element props