import Container from "@/components/container";
import { MDXComponents } from "@/components/mdx/mdx-components";
import { formatDate } from "@/lib/formatDate";
import { type Article, type MDXEntry } from "@/lib/mdx";

export default async function BlogArticleWrapper({
  article,
  children,
}: {
  article: MDXEntry<Article>;
  children: React.ReactNode;
}) {
  return (
    <div className="pt-16 sm:px-8 lg:pt-32">
      <Container>
        <div className="xl:relative">
          <div className="mx-auto max-w-2xl">
            <article>
              <header className="flex flex-col">
                <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
                  {article.title}
                </h1>
                <time
                  dateTime={article.date}
                  className="text-muted-foreground/50 order-first flex items-center text-base"
                >
                  <span className="bg-border h-4 w-0.5 rounded-full"></span>
                  <span className="ml-3">{formatDate(article.date)}</span>
                </time>
              </header>
              <MDXComponents.wrapper>{children}</MDXComponents.wrapper>
            </article>
          </div>
        </div>
      </Container>
    </div>
  );
}
