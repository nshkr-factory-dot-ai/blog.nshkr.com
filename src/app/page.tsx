import Link from "next/link";
import Layout from "@/components/Layout";

export default function Home() {
  return (
    <Layout>
      <main className="container mx-auto px-4 py-12">
        <div className="grid gap-8">
          {/* Featured Post */}
          <article className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Welcome to My Blog
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              This is a featured post that introduces my blog. Here I&apos;ll be sharing my thoughts on technology,
              programming, and other interesting topics.
            </p>
            <Link href="/posts/welcome" className="text-blue-600 dark:text-blue-400 hover:underline">
              Read more →
            </Link>
          </article>

          {/* Recent Posts */}
          <section>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Recent Posts
            </h3>
            <div className="grid gap-6 md:grid-cols-2">
              {/* Post 1 */}
              <article className="border dark:border-gray-800 rounded-lg p-6">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Getting Started with Next.js
                </h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Learn how to build modern web applications with Next.js, React, and TypeScript.
                </p>
                <Link href="/posts/nextjs" className="text-blue-600 dark:text-blue-400 hover:underline">
                  Read more →
                </Link>
              </article>

              {/* Post 2 */}
              <article className="border dark:border-gray-800 rounded-lg p-6">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  The Power of TypeScript
                </h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Discover why TypeScript is becoming the standard for large-scale JavaScript applications.
                </p>
                <Link href="/posts/typescript" className="text-blue-600 dark:text-blue-400 hover:underline">
                  Read more →
                </Link>
              </article>
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
}
