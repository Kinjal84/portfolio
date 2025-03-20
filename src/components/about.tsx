'use client';
import React, { FC } from 'react';
import ProfilePic from '../../public/images/Profile.jpg';
import Image from 'next/image';

const About: FC = () => {
  return (
    <div className="pt-[90px] pb-[100px] h-auto bg-white">
      <h2 className="lato-light text-4xl uppercase text-center">
        A little intro about me
      </h2>
      <div className="flex justify-center mt-4 mb-2 w-full h-auto">
        <Image
          src={ProfilePic}
          alt="profile"
          className="object-cover w-48 h-48 rounded-[50%]"
        />
      </div>
      <div className="w-full max-w-[650px] mt-[30px] mb-[30px] mr-auto ml-auto font-base">
        <p className="text-center">
          Hey! I&apos;m Kinjal, a web developer with a strong passion for
          front-end development and design. I&apos;m currently working at
          Scaletech Solutions Pvt. Ltd., where I strive to create visually
          appealing and seamless user experiences. My goal is to blend
          creativity with technology to build engaging and intuitive software.
        </p>
        <br />
        <p className="text-center">
          When I&apos;m not on the computer, I enjoy listening music, singing,
          and drawing.
        </p>
      </div>
    </div>
  );
};

export default About;
