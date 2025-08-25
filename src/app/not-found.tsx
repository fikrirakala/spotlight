import Link from "next/link";

import Container from "@/components/container";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex h-full items-center pt-16 sm:px-8 sm:pt-32">
      <Container>
        <div className="flex flex-col items-center">
          <p className="text-muted-foreground text-base font-semibold">404</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Page not found
          </h1>
          <p className="text-muted-foreground mt-4 text-base">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <Button asChild variant="secondary" className="mt-4">
            <Link href="/">Go back home</Link>
          </Button>
        </div>
      </Container>
    </div>
  );
}
