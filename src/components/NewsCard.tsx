import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
    <a href={url} className="block">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{formattedDate}</CardDescription>
        </CardHeader>
        <CardContent>
          <CardFooter>{description}</CardFooter>
        </CardContent>
      </Card>
    </a>
  );
}
