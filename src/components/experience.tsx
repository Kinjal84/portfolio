'use client';
import { FC } from 'react';
import {
  BootstrapIcon,
  ClickupIcon,
  CSSIcon,
  GithubIcon,
  GraphQLIcon,
  HTMLIcon,
  JestIcon,
  JiraIcon,
  JQueryIcon,
  NextIcon,
  PostmanIcon,
  ReactIcon,
  ReduxIcon,
  SassIcon,
  TailwindCSSIcon,
  TypescriptIcon,
  VercelIcon,
  VSCodeIcon,
} from '@/shared/icons/icons';

const Experience: FC = () => {
  return (
    <div className="pt-[90px] pb-[100px] h-auto bg-white">
      <div className="container m-auto">
        <h2 className="lato-light text-4xl uppercase text-center">
          Experience
        </h2>
        <p className="text-center lato-light text-lg mt-4 w-full max-w-2xl m-auto">
          I&apos;ve been doing web development for about 3 years now, <br />
          and I&apos;m always eager to learn more in this fast paced industry.
        </p>

        <div className="flex w-full">
          <div className="w-full max-w-1/2 m-auto flex flex-col">
            <p className="uppercase text-center mt-8 mb-8">
              Technologies i&apos;ve worked with
            </p>
            <div className="flex flex-wrap">
              {TECHNOLOGY_ICONS.map(({ icon }, index) => (
                <div
                  key={index}
                  className="w-1/6 flex justify-center items-center h-28"
                >
                  {icon}
                </div>
              ))}
            </div>
          </div>
          {/* Work Experience Section */}
          <div className="w-full max-w-1/2 flex flex-col">
            <p className="uppercase text-center mt-8 mb-8">
              Where I&apos;ve worked
            </p>
            <div className="px-20 py-7 text-gray-700 ">
              <div className="mb-6">
                <h4 className="text-xl lato-regular">Scaletech</h4>
                <p className="text-gray-400 lato-regular">
                  Frontend Developer • July 2022 - Present
                </p>
                <p className="mt-2 lato-light tracking-wide">
                  Designed and developed dynamic web solutions for diverse
                  clients, specializing in React, Next.js, and responsive design
                  tailored to specific business needs. Built high-performance,
                  scalable applications with a strong focus on user experience,
                  accessibility, and optimized load times to enhance engagement
                  and usability.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-medium">Scaletech</h4>
                <p className="text-gray-400 lato-regular">
                  Frontend Intern • Jan 2022 - June 2022
                </p>
                <p className="mt-2 lato-light tracking-wide">
                  Worked on building and optimizing scalable web application
                  tasks, implementing UI/UX designs, and integrating REST APIs
                  for enhanced functionality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;

const TECHNOLOGY_ICONS = [
  {
    name: 'HTML5',
    icon: <HTMLIcon width="70px" height="70px" />,
  },
  {
    name: 'CSS3',
    icon: <CSSIcon width="70px" height="70px" />,
  },
  {
    name: 'React.js',
    icon: <ReactIcon width="70px" height="70px" />,
  },
  {
    name: 'GitHub',
    icon: <GithubIcon width="70px" height="70px" />,
  },
  {
    name: 'Tailwind CSS',
    icon: <TailwindCSSIcon width="70px" height="70px" />,
  },
  {
    name: 'Next.js',
    icon: <NextIcon width="70px" height="70px" />,
  },
  {
    name: 'JQuery',
    icon: <JQueryIcon width="70px" height="70px" />,
  },
  {
    name: 'Typescript',
    icon: <TypescriptIcon width="70px" height="70px" />,
  },
  {
    name: 'Sass',
    icon: <SassIcon width="70px" height="70px" />,
  },
  {
    name: 'Redux',
    icon: <ReduxIcon width="70px" height="70px" />,
  },
  {
    name: 'Bootstrap5',
    icon: <BootstrapIcon width="70px" height="70px" />,
  },
  {
    name: 'Jira',
    icon: <JiraIcon width="70px" height="70px" />,
  },
  {
    name: 'Clickup',
    icon: <ClickupIcon width="70px" height="70px" />,
  },
  {
    name: 'Visual Studio Code',
    icon: <VSCodeIcon width="70px" height="70px" />,
  },
  {
    name: 'Post Man',
    icon: <PostmanIcon width="70px" height="70px" />,
  },
  {
    name: 'Jest',
    icon: <JestIcon width="70px" height="70px" />,
  },
  {
    name: 'Vercel',
    icon: <VercelIcon width="70px" height="70px" />,
  },
  {
    name: 'GraphQL',
    icon: <GraphQLIcon width="70px" height="70px" />,
  },
];
