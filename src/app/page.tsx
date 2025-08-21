import { type Metadata } from "next";

import Hero from "@/components/home/hero";

export const metadata: Metadata = {
  description:
    "We are a development studio working at the intersection of design and technology.",
};

export default function Home() {
  return (
    <>
      <Hero />
    </>
  );
}
