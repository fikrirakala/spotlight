import { Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function Newsletter() {
  return (
    <Card className="border-border/50 bg-background shadow-none">
      <CardHeader>
        <CardTitle className="flex items-center gap-3 text-sm">
          <Mail className="text-muted-foreground size-5" /> Stay up to date
        </CardTitle>
        <CardDescription className="mt-2">
          Get notified when I publish something new, and unsubscribe at any
          time.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex w-full items-center gap-4">
            <Input
              type="email"
              placeholder="Email"
              className="focus-visible:border-teal-400 focus-visible:ring-teal-500/10"
            />
            <Button type="submit">Join</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
