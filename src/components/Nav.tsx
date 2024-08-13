import { Button } from "./ui/button";
import { buttonVariants } from "@/components/ui/button"


export default function Nav() {
  return (
    <div className="mr-4 hidden gap-2 md:flex">
        <a href="/experience"><Button variant="ghost">Experience</Button></a>
        <a href="/projects"><Button variant="ghost">Projects</Button></a>
        <a href="/thenews"><Button variant="ghost">News</Button></a>
    </div>
  );
}