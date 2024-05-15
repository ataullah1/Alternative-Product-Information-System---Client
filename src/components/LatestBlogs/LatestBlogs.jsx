import { MdOutlineArrowOutward } from 'react-icons/md';
import img1 from '../../assets/banner/4.jpg';
import Marquee from 'react-fast-marquee';
const LatestBlogs = () => {
  return (
    <div className="">
      <div className="text-center">
        <h1 className="text-center text-slate-800 dark:text-slate-100 text-3xl md:text-5xl pt-20 mb-16 border-b-2 border-mClr inline-block">
          Latest Blog
        </h1>
      </div>
      <div>
        <Marquee speed={60}>
          <div className="w-[380px] md:w-[550px] shadow-xl mr-8">
            <div
              className="h-52  sm:h-64 w-full bg-cover bg-center rounded-t-md"
              style={{ backgroundImage: `url(${img1})` }}
            ></div>
            <div className="border p-3 rounded-b-md">
              <div className="py-3 flex items-start">
                <h1 className="text-3xl text-slate-800 dark:text-slate-100">
                  Lorem ipsum dolor sit amet consectetur.
                </h1>
                <button className="text-3xl hover:scale-110 duration-200 hover:translate-x-1 hover:-translate-y-1 text-slate-900 dark:text-slate-50 ">
                  <MdOutlineArrowOutward />
                </button>
              </div>
              <p className="text-slate-600 dark:text-slate-200">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                quo quaerat tempore debitis ipsa dolores rerum veritatis, id,
                et, velit quis doloremque ipsam consequatur reiciendis!
              </p>
              <div className="flex items-center gap-2 mt-3">
                <button className="text-balance px-6 py-1.5 bg-[#68701586] rounded text-white">
                  #foods
                </button>
                <button className="text-balance px-6 py-1.5 bg-[#6fe88987] rounded text-white">
                  #elactronic
                </button>
                <button className="text-balance px-6 py-1.5 bg-[#0c8f8da8] rounded text-white">
                  #fashion
                </button>
              </div>
            </div>
          </div>
          <div className="w-[380px] md:w-[550px] shadow-xl mr-8">
            <div
              className="h-52  sm:h-64 w-full bg-cover bg-center rounded-t-md"
              style={{ backgroundImage: `url(${img1})` }}
            ></div>
            <div className="border p-3 rounded-b-md">
              <div className="py-3 flex items-start">
                <h1 className="text-3xl text-slate-800 dark:text-slate-100">
                  Lorem ipsum dolor sit amet consectetur.
                </h1>
                <button className="text-3xl hover:scale-110 duration-200 hover:translate-x-1 hover:-translate-y-1 text-slate-900 dark:text-slate-50 ">
                  <MdOutlineArrowOutward />
                </button>
              </div>
              <p className="text-slate-600 dark:text-slate-200">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                quo quaerat tempore debitis ipsa dolores rerum veritatis, id,
                et, velit quis doloremque ipsam consequatur reiciendis!
              </p>
              <div className="flex items-center gap-2 mt-3">
                <button className="text-balance px-6 py-1.5 bg-[#68701586] rounded text-white">
                  #foods
                </button>
                <button className="text-balance px-6 py-1.5 bg-[#6fe88987] rounded text-white">
                  #elactronic
                </button>
                <button className="text-balance px-6 py-1.5 bg-[#0c8f8da8] rounded text-white">
                  #fashion
                </button>
              </div>
            </div>
          </div>
          <div className="w-[380px] md:w-[550px] shadow-xl mr-8">
            <div
              className="h-52  sm:h-64 w-full bg-cover bg-center rounded-t-md"
              style={{ backgroundImage: `url(${img1})` }}
            ></div>
            <div className="border p-3 rounded-b-md">
              <div className="py-3 flex items-start">
                <h1 className="text-3xl text-slate-800 dark:text-slate-100">
                  Lorem ipsum dolor sit amet consectetur.
                </h1>
                <button className="text-3xl hover:scale-110 duration-200 hover:translate-x-1 hover:-translate-y-1 text-slate-900 dark:text-slate-50 ">
                  <MdOutlineArrowOutward />
                </button>
              </div>
              <p className="text-slate-600 dark:text-slate-200">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                quo quaerat tempore debitis ipsa dolores rerum veritatis, id,
                et, velit quis doloremque ipsam consequatur reiciendis!
              </p>
              <div className="flex items-center gap-2 mt-3">
                <button className="text-balance px-6 py-1.5 bg-[#68701586] rounded text-white">
                  #foods
                </button>
                <button className="text-balance px-6 py-1.5 bg-[#6fe88987] rounded text-white">
                  #elactronic
                </button>
                <button className="text-balance px-6 py-1.5 bg-[#0c8f8da8] rounded text-white">
                  #fashion
                </button>
              </div>
            </div>
          </div>
          
        </Marquee>
      </div>
    </div>
  );
};

export default LatestBlogs;
