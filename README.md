# blog.nshkr.com

Static frontend for blog.nshkr.com - GitHub Pages site powered by our headless CMS backend.

## Overview

This is the frontend implementation for **blog.nshkr.com**, a hybrid static/dynamic blog that:

- **Static Generation**: Built with modern static site generators
- **Dynamic Content**: Fetches content from our headless CMS API
- **GitHub Pages**: Hosted on GitHub Pages for fast, reliable delivery
- **Custom Domain**: Served at `blog.nshkr.com`

## Architecture

- **Frontend**: This repository (Static site)
- **Backend**: [CMS API](https://github.com/nshkr-factory-dot-ai/cms)
- **Hosting**: GitHub Pages
- **Domain**: blog.nshkr.com
- **CDN**: GitHub's global CDN

## Tech Stack

- **Framework**: [TBD - Next.js/Astro/Hugo/Jekyll]
- **Styling**: Tailwind CSS
- **API Client**: Fetch from CMS backend
- **Build**: GitHub Actions
- **Deployment**: Automatic via GitHub Pages

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Content Flow

1. **Content Creation**: Authors create content via CMS admin interface
2. **API Delivery**: CMS exposes content via REST/GraphQL APIs
3. **Static Generation**: This site fetches content and generates static pages
4. **Deployment**: GitHub Actions builds and deploys to GitHub Pages
5. **Delivery**: Users access content at blog.nshkr.com

## Related Repositories

- [CMS Backend](https://github.com/nshkr-factory-dot-ai/cms) - Headless CMS powering this site

