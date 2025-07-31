import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card.tsx";

interface cardProps {
  url: string;
  title: string;
  description: string;
  date: string;
}

export default function NewsCard({ url, title, description, date }: cardProps) {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <a href={url} className="px-2">
      <Card className="w-full min-h-44 max-w-[332px] dark:hover:bg-slate-800 hover:bg-slate-100">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{formattedDate}</CardDescription>
        </CardHeader>
        <CardContent className="pb-0">
          <CardFooter>{description}</CardFooter>
        </CardContent>
      </Card>
    </a>
  );
}
