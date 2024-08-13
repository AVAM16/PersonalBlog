import { Button } from "./ui/button";

interface NavProps {
  pageTitle: string;
}

export default function Nav({ pageTitle }: NavProps) {
  return (
    <div className="mr-4 hidden gap-2 md:flex">
        <Button asChild variant="secondary" className={`text-xl shadow-md dark:shadow-white shadow-black ${pageTitle === "Home" ? "text-blue-500" : ""}`}>
          <a href="/">My Blog</a>
        </Button>
        <Button asChild variant="ghost" className={`${pageTitle === "Experience" ? "text-blue-500" : ""}`}>
          <a href="/experience">Experience</a>
        </Button>
        <Button asChild variant="ghost" className={`${pageTitle === "My Projects" ? "text-blue-500" : ""}`}>
          <a href="/projects">Projects</a>
        </Button>
        <Button asChild variant="ghost" className={`${pageTitle === "The News" ? "text-blue-500" : ""}`}>
          <a href="/thenews">News</a>
        </Button>
    </div>
  );
}