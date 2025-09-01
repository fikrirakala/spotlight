import Image from "next/image";

import { BriefcaseBusiness } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import airbnb from "@/images/work/airbnb.svg";
import facebook from "@/images/work/facebook.svg";
import planetaria from "@/images/work/planetaria.svg";
import starbucks from "@/images/work/starbucks.svg";

const works = [
  {
    company: "Planetaria",
    role: "CEO",
    date: "2019 - Present",
    image: planetaria,
  },
  {
    company: "Airbnb",
    role: "Product Designer",
    date: "2014 - 2019",
    image: airbnb,
  },
  {
    company: "Facebook",
    role: "iOS Software Engineer",
    date: "2011 - 2014",
    image: facebook,
  },
  {
    company: "Starbucks",
    role: "Shift Supervisor",
    date: "2008 - 2011",
    image: starbucks,
  },
];

export default function Work() {
  return (
    <Card className="border-border/50 bg-background shadow-none">
      <CardHeader>
        <CardTitle className="flex items-center gap-3 text-sm">
          <BriefcaseBusiness className="text-muted-foreground size-5" /> Work
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ol className="space-y-4">
          {works.map((work) => (
            <li key={work.company} className="flex gap-4">
              <div className="dark:bg-muted relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full border shadow-md">
                <Image
                  src={work.image}
                  alt={work.company}
                  className="h-7 w-7"
                />
              </div>
              <dl className="flex flex-auto flex-wrap gap-x-2">
                <dt className="sr-only">Company</dt>
                <dd className="w-full flex-none text-sm font-medium">
                  {work.company}
                </dd>
                <dt className="sr-only">Role</dt>
                <dd className="text-muted-foreground text-xs">{work.role}</dd>
                <dt className="sr-only">Date</dt>
                <dd
                  className="text-muted-foreground ml-auto text-xs"
                  aria-label={work.date}
                >
                  {work.date}
                </dd>
              </dl>
            </li>
          ))}
        </ol>
      </CardContent>
      <CardFooter>
        <Button variant="secondary" className="w-full">
          Download CV
        </Button>
      </CardFooter>
    </Card>
  );
}
