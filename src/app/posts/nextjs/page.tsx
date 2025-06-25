import Layout from "@/components/Layout";
import BlogPost from "@/components/BlogPost";

export default function NextJsPost() {
  const post = {
    title: "Getting Started with Next.js",
    date: "2024-03-24",
    author: "John Doe",
    content: `
      <p>Next.js has become one of the most popular frameworks for building React applications. In this post, we'll explore why Next.js is a great choice and how to get started with it.</p>
      
      <h2>Why Next.js?</h2>
      <p>Next.js offers several key features that make it stand out:</p>
      <ul>
        <li>Server-side rendering (SSR) and static site generation (SSG)</li>
        <li>File-based routing</li>
        <li>API routes</li>
        <li>Built-in image optimization</li>
        <li>Zero-config setup</li>
      </ul>
      
      <h2>Setting Up a Next.js Project</h2>
      <p>Getting started with Next.js is incredibly simple. Just run:</p>
      <pre><code>npx create-next-app@latest my-app</code></pre>
      
      <p>This command will create a new Next.js project with all the necessary dependencies and a basic project structure.</p>
      
      <h2>Project Structure</h2>
      <p>A typical Next.js project includes:</p>
      <ul>
        <li><code>app/</code> - Your application pages and components</li>
        <li><code>public/</code> - Static assets like images</li>
        <li><code>components/</code> - Reusable React components</li>
        <li><code>styles/</code> - CSS and styling files</li>
      </ul>
      
      <h2>Creating Pages</h2>
      <p>Next.js uses a file-based routing system. To create a new page, simply add a new file in the <code>app</code> directory:</p>
      <pre><code>// app/about/page.tsx
export default function About() {
  return (
    <div>
      <h1>About Us</h1>
      <p>Welcome to our site!</p>
    </div>
  );
}</code></pre>
      
      <h2>Next Steps</h2>
      <p>Once you have your project set up, you can:</p>
      <ul>
        <li>Add styling with Tailwind CSS or CSS Modules</li>
        <li>Create API routes in the <code>app/api</code> directory</li>
        <li>Implement dynamic routes</li>
        <li>Add authentication</li>
        <li>Deploy your application</li>
      </ul>
      
      <p>Next.js provides excellent documentation and a growing ecosystem of tools and plugins. Stay tuned for more in-depth tutorials on specific Next.js features!</p>
    `
  };

  return (
    <Layout>
      <main className="container mx-auto px-4 py-12">
        <BlogPost {...post} />
      </main>
    </Layout>
  );
} 