# 🚀 NSHKR Blog Template

A modern static blog template powered by **Directus CMS** and **Next.js**.

## ✨ Features

- 🎨 **4 Built-in Themes** (Default, Minimal, Magazine, Dark)
- 📝 **Directus CMS Integration** for content management
- 🔄 **Auto-deployment** to GitHub Pages
- 📱 **Responsive Design** with Tailwind CSS
- ⚡ **Static Site Generation** for fast loading
- 🔧 **TypeScript** for type safety

## 🚀 Quick Start

### 1. Use This Template
Click "Use this template" to create your blog repository.

### 2. Set Up Your CMS
Deploy your Directus CMS and add these GitHub Secrets:
- `CMS_API_URL` - Your Directus instance URL
- `CMS_API_TOKEN` - API token for authentication

### 3. Configure Domain
Set up your custom domain in GitHub Pages settings.

## 🎨 Themes

Switch themes by modifying the layout component:

```tsx
<Layout theme="minimal">  // default | minimal | magazine | dark
  {children}
</Layout>
```

## 📝 Content Management

Create these collections in your Directus CMS:

### Required:
- **blog_posts** - Your blog content
- **site_settings** - Site configuration

### Optional:
- **authors** - Author profiles
- **categories** - Post categories
- **contact_forms** - Contact submissions

## 🔧 Customization

### Colors & Styling
Edit `src/lib/theme.ts` to customize themes.

### Layout
Modify `src/components/theme/Layout.tsx` for structure changes.

### Content Types
Update `src/lib/cms.ts` to match your Directus collections.

## 📦 Template Repository

To create your own template:

1. Fork this repository
2. Customize themes and components
3. Enable "Template repository" in GitHub settings
4. Others can use your custom template

## 🤝 Contributing

Feel free to submit issues and enhancement requests!
