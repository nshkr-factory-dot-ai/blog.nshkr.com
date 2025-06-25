import Layout from "@/components/Layout";

export default function About() {
  return (
    <Layout>
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            About Me
          </h2>
          <div className="prose dark:prose-invert">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Hi! I&apos;m a software developer passionate about web development, technology, and sharing knowledge
              with others. This blog is where I document my journey and share insights about the tools and
              technologies I work with.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              I specialize in:
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-4">
              <li>Next.js and React</li>
              <li>TypeScript</li>
              <li>Full-stack Development</li>
              <li>Cloud Architecture</li>
            </ul>
            <p className="text-gray-600 dark:text-gray-300">
              Feel free to reach out if you want to discuss technology, collaborate on projects, or just chat
              about software development!
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
} 