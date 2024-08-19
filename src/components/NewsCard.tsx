import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

interface cardProps {
    url: string;
    title: string;
}

export default function NewsCard({ url, title }: cardProps) {
    return (
        <a href={url} className="block">
            <Card className="w-[350px]">
                <CardHeader>
                    <CardTitle>{title}</CardTitle>
                </CardHeader>
            </Card>
        </a>
    );
}