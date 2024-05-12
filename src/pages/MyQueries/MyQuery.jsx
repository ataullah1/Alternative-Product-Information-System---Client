import { PiShareFatBold } from 'react-icons/pi';
import { FaRegCommentDots } from 'react-icons/fa';
import { RiHandHeartLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { HiDotsVertical } from 'react-icons/hi';
import { useState } from 'react';
import { MdDeleteForever } from 'react-icons/md';
import { TbEdit } from 'react-icons/tb';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { IoCloseSharp } from 'react-icons/io5';

const MyQuery = ({ dta, handleDelete }) => {
  const [menu, setMenu] = useState(false);

  return (
    <div
      className="mx-auto min-w-full max-w-[500px] rounded-lg bg-white font-sans shadow-lg dark:bg-[#18181B]"
      // onClick={() => setMenu(false)}
    >
      <div className="sm:min-h-[580px] flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between gap-0 px-4 py-4 relative">
            {/* Avatar image  */}
            <div className="flex items-center gap-3">
              <img
                width={90}
                height={90}
                className="h-16 w-16 rounded-full bg-black/40 border-2 border-mClr"
                src={dta.userImg}
                alt="card navigate ui"
              />
              <div className="flex flex-col">
                <h2 className="text-xl font-semibold text-slate-800 dark:text-white/90 capitalize">
                  {dta.userName}
                </h2>
                <p className="text-gray-400">{dta.dateTime}</p>
              </div>
            </div>
            {/* Setting button */}
            <div
              className="flex cursor-pointer flex-col gap-2 rounded-full text-stone-900 dark:text-white text-2xl py-5 px-2"
              onClick={() => setMenu(!menu)}
            >
              {menu ? (
                <span>
                  <IoCloseSharp />
                </span>
              ) : (
                <span>
                  <HiDotsVertical />
                </span>
              )}
            </div>
            {menu && (
              <div className="absolute top-16 right-8 bg-slate-800 dark:bg-slate-700 rounded-md flex flex-col z-30 text-lg text-white">
                <button
                  className="py-2 pl-6 pr-10 hover:bg-mClr hover:text-white flex items-center gap-2 rounded-t-md"
                  onClick={() => setMenu(!menu)}
                >
                  <span className="text-2xl">
                    <AiOutlineInfoCircle />
                  </span>
                  Details
                </button>
                <button
                  className="py-2 pl-6 pr-10 hover:bg-mClr hover:text-white flex items-center gap-2"
                  onClick={() => setMenu(!menu)}
                >
                  <span className="text-2xl">
                    <TbEdit />
                  </span>
                  Update
                </button>
                <div onClick={() => setMenu(!menu)} className="">
                  <button
                    className="py-2 pl-6 pr-10 hover:bg-sClr hover:text-white flex items-center gap-2 w-full rounded-b-md"
                    onClick={() => handleDelete(dta._id)}
                  >
                    <span className="text-2xl">
                      <MdDeleteForever />
                    </span>
                    Delete
                  </button>
                </div>
              </div>
            )}
          </div>
          {/* Post Image */}
          <div className="flex flex-col gap-1">
            <div className="overflow-hidden">
              <div
                className="w-full h-56 hover:scale-110 duration-[2.5s]"
                style={{
                  backgroundImage: `url(${dta.productImage})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                }}
              ></div>
            </div>
          </div>
          {/* Post content */}
          <div className="mt-3 space-y-2 px-4">
            <h1 className="text-xl text-mClr">{dta.queryTitle}</h1>
            <h2 className="text-2xl font-semibold text-slate-800 dark:text-white/90">
              {dta.productName}
            </h2>
            <p className="text-base text-gray-500 dark:text-white/50">
              {dta.details.slice(0, 130)}...{' '}
              <Link
                className="cursor-pointer text-[#3e96d4]"
                to={'/query-details'}
              >
                See more
              </Link>
            </p>
          </div>
        </div>
        {/* icons */}
        <div className="mt-4 flex justify-between px-4 pb-4">
          <Link
            to={'/query-details'}
            className="flex items-center gap-2 text-lg font-semibold text-slate-800 dark:text-white/90"
          >
            <span className="text-2xl">
              <RiHandHeartLine />
            </span>
            <h2 className="">40K</h2>
          </Link>
          <Link
            to={'/query-details'}
            className="flex items-center gap-2 text-lg font-semibold text-slate-800 dark:text-white/90"
          >
            <span className="text-2xl">
              <FaRegCommentDots />
            </span>
            <h2 className="">40</h2>
          </Link>
          <Link
            to={'/query-details'}
            className="flex items-center gap-1 text-lg font-semibold text-slate-800 dark:text-white/90"
          >
            <span className="text-2xl">
              <PiShareFatBold />
            </span>
            <h2 className="">40</h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyQuery;
MyQuery.propTypes = {
  dta: PropTypes.object,
  handleDelete: PropTypes.func,
};
