import React from 'react';
import Image from 'next/image';
import SplitwiseApp from '../../public/images/splitwise-app.png';
import Link from 'next/link';

const Work = () => {
  return (
    <div className="pt-[90px] pb-[100px] h-auto bg-white">
      <div className="container m-auto">
        <h2 className="lato-light text-4xl uppercase text-center">Work</h2>
        <div className="flex flex-wrap my-10 gap-5">
          <div className="w-full max-w-[calc(1/3*100%-14px)] border-[0.5px] border-slate-300 shadow-slate-200 relative group cursor-pointer">
            <div>
              <Image
                src={SplitwiseApp}
                alt="splitwise-app"
                className="object-cover"
              />
            </div>
            <div className="absolute top-0 left-0 flex justify-center items-center opacity-0 w-full h-0 bg-slate-900/80 group-hover:opacity-100 group-hover:h-full transition-all ease duration-700">
              <div className="justify-center items-center hidden group-hover:flex group-hover:flex-col transition-all">
                <div className="p-7 lato-regular text-center text-white">
                  <p className="lato-regular text-xl text-center text-cyan-500 uppercase">
                    Splitwise App
                  </p>
                  Splitwise streamlines expense sharing, ensuring fair
                  reimbursements across groups. It supports multiple currencies
                  and seamless payment integrations.
                </div>
                <button
                  type="button"
                  className="border-2 border-cyan-600 text-cyan-600 py-2 px-4 transition-all ease duration-700 cursor-pointer hover:bg-cyan-600 hover:text-white"
                >
                  Visit Site
                </button>
              </div>
            </div>
          </div>

          <div className="w-full max-w-[calc(1/3*100%-14px)] border-[0.5px] border-slate-300 shadow-slate-200 group relative cursor-pointer transition-all duration-700 ease-in-out">
            <Image
              src={SplitwiseApp}
              alt="splitwise-app"
              className="object-cover"
            />
            <div className="absolute top-0 bottom-0 flex items-end w-full h-full bg-transparent bg-opacity-70 transition-opacity duration-700 ease-in-out opacity-0 group-hover:opacity-100 group-hover:bg-black/80">
              <div className="flex flex-col justify-start w-full p-7 lato-light text-slate-50 transition-all duration-700 ease-in-out transform translate-y-5 group-hover:translate-y-0">
                <p className="lato-regular text-left text-xl mb-4 text-cyan-500 uppercase">
                  Splitwise App
                </p>
                <div className="opacity-0 transition-opacity duration-700 ease-in-out group-hover:opacity-100">
                  <p>
                    Splitwise streamlines expense sharing, ensuring fair
                    reimbursements across groups. It supports multiple
                    currencies and seamless payment integrations.
                  </p>
                  <Link href={''} className="text-cyan-500 cursor-pointer">
                    Visit Site
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
