import Layout from "@/components/Layout";
import BlogPost from "@/components/BlogPost";

export default function TypeScriptPost() {
  const post = {
    title: "The Power of TypeScript",
    date: "2024-03-24",
    author: "John Doe",
    content: `
      <p>TypeScript has revolutionized how we write JavaScript applications. In this post, we'll explore why TypeScript is becoming the standard for large-scale JavaScript applications and how it can improve your development experience.</p>
      
      <h2>What is TypeScript?</h2>
      <p>TypeScript is a strongly typed programming language that builds on JavaScript. It adds optional static types, classes, and modules to JavaScript, making it easier to write and maintain large applications.</p>
      
      <h2>Key Benefits</h2>
      <p>Here are some of the main advantages of using TypeScript:</p>
      <ul>
        <li>Better IDE support with intelligent code completion</li>
        <li>Early error detection during development</li>
        <li>Improved code maintainability</li>
        <li>Enhanced refactoring capabilities</li>
        <li>Better documentation through type definitions</li>
      </ul>
      
      <h2>Basic Types</h2>
      <p>TypeScript includes several basic types:</p>
      <pre><code>// Basic types
let isDone: boolean = false;
let decimal: number = 6;
let color: string = "blue";
let list: number[] = [1, 2, 3];
let tuple: [string, number] = ["hello", 10];</code></pre>
      
      <h2>Interfaces</h2>
      <p>Interfaces are one of TypeScript's most powerful features:</p>
      <pre><code>interface User {
  name: string;
  age: number;
  email?: string; // Optional property
}

function greet(user: User) {
  console.log(\`Hello, \${user.name}!\`);
}</code></pre>
      
      <h2>Type Inference</h2>
      <p>TypeScript can infer types automatically:</p>
      <pre><code>// Type inference
let message = "hello"; // TypeScript knows this is a string
let numbers = [1, 2, 3]; // TypeScript knows this is number[]</code></pre>
      
      <h2>Getting Started</h2>
      <p>To start using TypeScript in your project:</p>
      <pre><code>npm install typescript --save-dev
npx tsc --init # Creates tsconfig.json</code></pre>
      
      <h2>Best Practices</h2>
      <p>Here are some TypeScript best practices:</p>
      <ul>
        <li>Use interfaces for object shapes</li>
        <li>Enable strict mode in tsconfig.json</li>
        <li>Avoid using 'any' type when possible</li>
        <li>Use type inference when types are obvious</li>
        <li>Document complex types with JSDoc comments</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>TypeScript is more than just a typed version of JavaScript—it's a powerful tool that can help you write better, more maintainable code. As more companies and projects adopt TypeScript, it's becoming an essential skill for modern web development.</p>
      
      <p>Stay tuned for more advanced TypeScript topics in future posts!</p>
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