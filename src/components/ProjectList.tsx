import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";

export default function ProjectList() {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full px-7 text-lg sm:text-2xl"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>
          This very own website
          <p className="text-xs font-medium uppercase text-gray-500 dark:text-neutral-400 m ml-auto mr-[12px] pl-2">
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
          <Separator className="my-4 h-0.5 bg-blue-200" />
          <div className="text-5xl text-center space-x-6">
            <i className="devicon-typescript-plain colored"></i>
            <i className="devicon-astro-plain colored"></i>
            <i className="devicon-tailwindcss-original colored"></i>
            <i className="devicon-react-original colored"></i>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>
          Archive of my LEIC-T projects
          <p className="text-xs font-medium uppercase text-gray-500 dark:text-neutral-400 ml-auto mr-[12px] pl-2">
            Sep 2021 - Jun 2024
          </p>
        </AccordionTrigger>
        <AccordionContent className="mr-8 ml-2">
          <div className="text-base">
            A collection of most of the projects I've done during my time at
            LEIC-T. They can be of great help to future students or anyone
            interested in my work. They spread across many areas and are marked
            as Public Archives.
          </div>
          <div className="flex justify-center items-center py-3">
            <a
              href="https://github.com/AVAM16?tab=repositories&q=&type=archived&language=&sort="
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="sm" className="flex items-center space-x-2">
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  className="fill-current"
                >
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
                </svg>
                <span className="ml-1">Public Archives</span>
              </Button>
            </a>
          </div>
          <Separator className="mt-4 mb-2 h-0.5 bg-blue-200" />
          <div className="text-5xl text-center space-x-6 space-y-2 flex flex-wrap justify-center">
            <i className="devicon-javascript-plain colored mt-2"></i>
            <i className="devicon-c-plain colored"></i>
            <i className="devicon-cplusplus-plain colored"></i>
            <i className="devicon-java-plain colored"></i>
            <i className="devicon-python-plain colored"></i>
            <i className="devicon-postgresql-plain colored"></i>
            <i className="devicon-rstudio-plain colored"></i>
            <i className="devicon-groovy-plain colored"></i>
            <i className="devicon-jupyter-plain colored"></i>
            <i className="devicon-prolog-plain colored"></i>
            <i className="devicon-git-plain colored"></i>
            <i className="devicon-spring-original colored"></i>
            <i className="devicon-vuejs-plain colored"></i>
            <i className="devicon-threejs-original"></i>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>
          ESP32-RaspberryPi
          <p className="text-xs font-medium uppercase text-gray-500 dark:text-neutral-400 m ml-auto mr-[12px] pl-2">
            Aug 2023
          </p>
        </AccordionTrigger>
        <AccordionContent className="mr-8 ml-2">
          <div className="text-base">
            Development of a low-level C program in a ESP32 chip to monitor the
            state of Health of a baterry using BLE. Development of a Python
            program to interact with the multiple ESP32 chips using BLE. Sending
            the data to Zabbix as well as getting the values' history.
            <p className="mt-2"></p>
            This project was developed in the context of the course of my Summer
            Internship at Thales Portugal / GTSPT.
          </div>
          <div className="flex justify-center items-center py-3">
            <a
              href="https://github.com/AVAM16/ESP32-RaspberryPi-Public"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="sm" className="flex items-center space-x-2">
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  className="fill-current"
                >
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
                </svg>
                <span className="ml-1">Source Code</span>
              </Button>
            </a>
          </div>
          <Separator className="my-4 h-0.5 bg-blue-200" />
          <div className="text-5xl text-center space-x-6">
            <i className="devicon-embeddedc-plain"></i>
            <i className="devicon-python-plain colored"></i>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
