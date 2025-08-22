import { ChevronRight } from "lucide-react";

import { formatDate } from "@/lib/formatDate";
import { loadArticles } from "@/lib/mdx";

export default async function Articles() {
  const articles = (await loadArticles()).slice(0, 3);

  return (
    <div className="flex flex-col gap-16">
      {articles.map((article, index) => (
        <article
          key={index}
          className="group relative flex flex-col items-start"
        >
          <h2 className="text-base font-semibold tracking-tight">
            <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl dark:bg-zinc-800/50"></div>
            <a href={article.href}>
              <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
              <span className="relative z-10">{article.title}</span>
            </a>
          </h2>
          <time
            className="text-muted-foreground/70 relative z-10 order-first mb-3 flex items-center pl-3.5 text-sm"
            dateTime={article.date}
          >
            <span
              className="absolute inset-y-0 left-0 flex items-center"
              aria-hidden="true"
            >
              <span className="bg-border h-4 w-0.5 rounded-full"></span>
            </span>
            {formatDate(article.date)}
          </time>
          <p className="text-muted-foreground relative z-10 mt-2 text-sm">
            {article.description}
          </p>
          <div
            aria-hidden="true"
            className="relative z-10 mt-4 flex items-center gap-3 text-sm font-medium text-teal-500"
          >
            Read article
            <ChevronRight className="size-3" />
          </div>
        </article>
      ))}
    </div>
  );
}
