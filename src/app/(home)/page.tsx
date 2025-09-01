import Container from "@/components/container";

import Articles from "./components/articles";
import Gallery from "./components/gallery";
import Hero from "./components/hero";
import Newsletter from "./components/newsletter";
import Work from "./components/work";

export default function Home() {
  return (
    <>
      <Hero />
      <Gallery />
      <div className="pt-24 sm:px-8 md:pt-28">
        <Container>
          <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
            {/* Articles */}
            <Articles />

            <div className="space-y-10 lg:pl-16 xl:pl-24">
              {/* NewsLetter */}
              <Newsletter />

              {/* Work */}
              <Work />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
