import { useState } from "react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu as MIcon } from "lucide-react";

interface NavProps {
  pageTitle: string;
}

export default function MobileNav({ pageTitle }: NavProps) {
  const [open, setOpen] = useState(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild className="">
        <Button variant="ghost" size="icon" className="md:hidden">
          <MIcon />
        </Button>
      </SheetTrigger>

      <SheetContent side="top">
        <div className="flex flex-col">
          <Button
            asChild
            variant="link"
            onClick={() => {
              setOpen(false);
            }}
            className={`${pageTitle === "Experience" ? "text-blue-500" : ""}`}
          >
            <a href="/experience">Experience</a>
          </Button>
          <Button
            asChild
            variant="link"
            onClick={() => {
              setOpen(false);
            }}
            className={`${pageTitle === "My Projects" ? "text-blue-500" : ""}`}
          >
            <a href="/projects">Projects</a>
          </Button>
          <Button
            asChild
            variant="link"
            onClick={() => {
              setOpen(false);
            }}
            className={`${pageTitle === "The News" ? "text-blue-500" : ""}`}
          >
            <a href="/thenews">News</a>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
