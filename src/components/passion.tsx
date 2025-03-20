'use client';
import React, { FC } from 'react';
import { BulbIcon, CodeIcon, LaptopIcon } from '@/shared/icons/icons';

const Passion: FC = () => {
  return (
    <div className="pt-[90px] pb-[100px] h-auto">
      <h2 className="lato-light text-4xl uppercase text-center mb-8">
        What I Do
      </h2>
      <div className="flex container m-auto h-auto justify-center w-full">
        <div className="cards flex w-full">
          {PASSION_CARDS.map(({ title, svgIcon, description }) => {
            return (
              <div
                key={title}
                className="card flex flex-col w-1/3 items-center mt-2 p-5"
              >
                <div className="mb-6 rounded-[50%] bg-slate-700 w-36 h-36 flex justify-center items-center group">
                  {svgIcon}
                </div>
                <p className="mb-4 lato-regular">{title}</p>
                <p className="w-full max-w-[400px] text-center lato-light tracking-wide">
                  {description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Passion;

const PASSION_CARDS = [
  {
    title: 'DESIGN',
    description:
      "Design isn't just what a product looks like and feels like on the outside. Design encompasses the internal functionality of a product as well as the overall user  experience. I strive to design interfaces and experiences that people can enjoy on all digital mediums.",
    svgIcon: (
      <LaptopIcon className="group-hover:transform-[rotate(360deg)] transition-all ease duration-700" />
    ),
  },
  {
    title: 'DEVELOPMENT',
    description:
      "Design isn't just what a product looks like and feels like on the outside. Design encompasses the internal functionality of a product as well as the overall user  experience. I strive to design interfaces and experiences that people can enjoy on all digital mediums.",
    svgIcon: (
      <CodeIcon className="group-hover:transform-[rotate(360deg)] transition-all ease duration-700" />
    ),
  },
  {
    title: 'INVOLVEMENT',
    description:
      "Design isn't just what a product looks like and feels like on the outside. Design encompasses the internal functionality of a product as well as the overall user experience. I strive to design interfaces and experiences that people can enjoy on all digital mediums.",
    svgIcon: (
      <BulbIcon className="group-hover:transform-[rotate(360deg)] transition-all ease duration-700" />
    ),
  },
];
