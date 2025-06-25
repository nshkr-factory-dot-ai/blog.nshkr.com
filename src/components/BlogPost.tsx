interface BlogPostProps {
  title: string;
  date: string;
  content: string;
  author: string;
}

export default function BlogPost({ title, date, content, author }: BlogPostProps) {
  return (
    <article className="max-w-2xl mx-auto">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
          {title}
        </h1>
        <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
          <time dateTime={date}>{new Date(date).toLocaleDateString()}</time>
          <span>•</span>
          <span>{author}</span>
        </div>
      </header>
      <div 
        className="prose dark:prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </article>
  );
} 