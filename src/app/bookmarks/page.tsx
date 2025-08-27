import Container from "@/components/container";

import BookmarkArticles from "./sections/articles.mdx";
import BookmarkTools from "./sections/tools.mdx";
import BookmarkVideos from "./sections/videos.mdx";

export default function BookmarksPage() {
  return (
    <div className="pt-16 sm:px-8 sm:pt-32">
      <Container>
        <header className="max-w-2xl">
          <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Bookmarks
          </h1>
          <p className="text-muted-foreground mt-6 text-base">
            A collection of interesting links, articles, and resources I&apos;ve
            saved.
          </p>
        </header>
        <div className="mt-16 sm:mt-20">
          <div className="space-y-20">
            <BookmarkTools />
            <BookmarkArticles />
            <BookmarkVideos />
          </div>
        </div>
      </Container>
    </div>
  );
}
