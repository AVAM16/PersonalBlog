import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Separator } from "./ui/separator";

export default function ProjectList() {
  return (
    <Accordion type="single" collapsible className="w-full px-5 text-2xl">
      <AccordionItem value="item-1">
        <AccordionTrigger>
          This very own website
          <p className="text-xs font-medium uppercase text-gray-500 dark:text-neutral-400 mt-2 ml-auto mr-[12px]">
            Aug 2024
          </p>
        </AccordionTrigger>
        <AccordionContent className="mr-8 ml-2">
          <div className="text-base">
            Created my personal website using Astro, Tailwind and React. Chose
            Astro for its speed and Tailwind to speed up the styling. Used React
            for the interactivity and to make it easier to create components
            using shadcn/ui. Picked TypeScript for its type safety.
            <p className="mt-2"></p>
            My focus was on creating a fast, accessible and responsive website
            with a toggable dark mode. Many React components are even loaded as
            HTML!!!
          </div>
          <Separator className="my-4 h-0.5"/>
          <div className="text-5xl text-center space-x-6">
            <i className="devicon-typescript-plain colored colored"></i>
            <i className="devicon-astro-plain colored"></i>
            <i className="devicon-tailwindcss-original colored"></i>
            <i className="devicon-react-original colored"></i>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It's animated by default, but you can disable it if you prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
