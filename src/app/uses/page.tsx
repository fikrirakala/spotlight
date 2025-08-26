import Container from "@/components/container";

import DevelopmentTools from "./sections/development-tools.mdx";
import TechStack from "./sections/tech-stack.mdx";

export default function UsesPage() {
  return (
    <div className="pt-16 sm:px-8 sm:pt-32">
      <Container>
        <header className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Software I use, gadgets I love, and other things I recommend.
          </h1>
          <p className="text-muted-foreground mt-6 text-base">
            I get asked a lot about the things I use to build software, stay
            productive, or buy to fool myself into thinking I’m being productive
            when I’m really just procrastinating. Here’s a big list of all of my
            favorite stuff.
          </p>
        </header>
        <div className="mt-16 sm:mt-20">
          <div className="space-y-20">
            <DevelopmentTools />
            <TechStack />
          </div>
        </div>
      </Container>
    </div>
  );
}
