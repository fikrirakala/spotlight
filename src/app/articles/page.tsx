import { type Metadata } from "next";

import { ChevronRight } from "lucide-react";

import Container from "@/components/container";
import { formatDate } from "@/lib/formatDate";
import { loadArticles } from "@/lib/mdx";

export const metadata: Metadata = {
  title: "Articles",
  description: "Stay up-to-date with the latest news.",
};

export default async function Articles() {
  const articles = await loadArticles();
  return (
    <div className="pt-16 sm:px-8 sm:pt-32">
      <Container>
        <header className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Writing on software design, company building, and the aerospace
            industry.
          </h1>
          <p className="text-muted-foreground mt-6 text-base">
            All of my long-form thoughts on programming, leadership, product
            design, and more, collected in chronological order.
          </p>
        </header>
        <div className="mt-16 sm:mt-20">
          <div className="border-border/50 md:border-l md:pl-6">
            <div className="flex max-w-3xl flex-col space-y-16">
              {articles.map((article, index) => (
                <article
                  key={index}
                  className="md:grid md:grid-cols-4 md:items-baseline"
                >
                  <div className="group relative flex flex-col items-start md:col-span-3">
                    <h2 className="text-base font-semibold tracking-tight">
                      <div className="bg-muted/50 absolute -inset-x-4 -inset-y-6 z-0 scale-95 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl"></div>
                      <a href={article.href}>
                        <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
                        <span className="relative z-10">{article.title}</span>
                      </a>
                    </h2>
                    <time
                      className="text-muted-foreground/70 relative z-10 order-first mb-3 flex items-center pl-3.5 text-sm md:hidden"
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
                      className="relative z-10 mt-4 flex items-center gap-2 text-sm font-medium text-teal-500"
                    >
                      Read article
                      <ChevronRight className="size-3" />
                    </div>
                  </div>
                  <time
                    className="text-muted-foreground/70 relative z-10 order-first mt-1 mb-3 flex items-center text-sm max-md:hidden"
                    dateTime={article.date}
                  >
                    {formatDate(article.date)}
                  </time>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
