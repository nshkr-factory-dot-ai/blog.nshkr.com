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
              ASKA: Adaptive Secure Kernel Architecture
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              NSHkr.com is proud to announce ASKA, a groundbreaking security framework that represents a paradigm shift in secure computing. ASKA combines hardware-enforced isolation, dynamic trust management, and AI-driven security to create a robust, adaptable platform for high-assurance operations.
            </p>
            <Link href="/posts/aska" className="text-blue-600 dark:text-blue-400 hover:underline">
              Read more →
            </Link>
          </article>

          {/* Recent Posts */}
          <section>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Recent Updates
            </h3>
            <div className="grid gap-6 md:grid-cols-2">
              {/* Post 1 */}
              <article className="border dark:border-gray-800 rounded-lg p-6">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  GUARDRAIL: Securing Model Context Protocol
                </h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Introducing GUARDRAIL, our comprehensive security framework designed to address information flow security challenges in LLM application ecosystems using the Model Context Protocol (MCP).
                </p>
                <Link href="/posts/guardrail" className="text-blue-600 dark:text-blue-400 hover:underline">
                  Read more →
                </Link>
              </article>

              {/* Post 2 */}
              <article className="border dark:border-gray-800 rounded-lg p-6">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Personal Security Mesh: Beyond Traditional Network Security
                </h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Explore our novel concept of Personal Security Mesh, which reframes security as an adaptive, interconnected fabric that surrounds the individual and their digital life.
                </p>
                <Link href="/posts/security-mesh" className="text-blue-600 dark:text-blue-400 hover:underline">
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
