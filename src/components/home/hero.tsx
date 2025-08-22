import Container from "../Container";

export default function Hero() {
  return (
    <div className="pt-32 sm:px-8">
      <Container>
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Software designer, founder, and amateur astronaut.
          </h1>
          <p className="text-muted-foreground mt-6 text-base">
            I’m Spencer, a software designer and entrepreneur based in New York
            City. I’m the founder and CEO of Planetaria, where we develop
            technologies that empower regular people to explore space on their
            own terms.
          </p>
        </div>
      </Container>
    </div>
  );
}
