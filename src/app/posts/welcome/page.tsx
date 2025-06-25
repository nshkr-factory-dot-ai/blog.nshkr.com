import Layout from "@/components/Layout";
import BlogPost from "@/components/BlogPost";

export default function WelcomePost() {
  const post = {
    title: "Welcome to My Blog",
    date: "2024-03-24",
    author: "John Doe",
    content: `
      <p>Welcome to my blog! I'm excited to start sharing my thoughts and experiences with you all. This blog will be a place where I discuss various topics in technology, programming, and software development.</p>
      
      <h2>What to Expect</h2>
      <p>Here are some of the topics I plan to cover:</p>
      <ul>
        <li>Web Development best practices</li>
        <li>React and Next.js tutorials</li>
        <li>TypeScript tips and tricks</li>
        <li>Software architecture discussions</li>
        <li>Developer productivity tools</li>
      </ul>
      
      <h2>Why I Started This Blog</h2>
      <p>I believe in the power of sharing knowledge. Throughout my career, I've learned so much from other developers' blogs and articles. Now it's time for me to give back to the community by sharing my own experiences and insights.</p>
      
      <h2>Join the Journey</h2>
      <p>I invite you to join me on this journey of exploration and learning. Whether you're a seasoned developer or just starting out, I hope you'll find something valuable here.</p>
      
      <p>Stay tuned for more posts coming soon!</p>
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