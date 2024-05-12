import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import img1 from '../../assets/banner/5.jpg';
import MultyImgBanner from '../../components/MultyImgBanner/MultyImgBanner';
import { PiShareFatBold } from 'react-icons/pi';
import { FaRegCommentDots } from 'react-icons/fa';
import { RiHandHeartLine } from 'react-icons/ri';
import useAuth from '../../Hooks/useAuth';
import useAxiosSec from '../../Hooks/useAxiosSec';
import QuerySkeleton from '../Loding/QuerySkeleton';
import { useQuery } from '@tanstack/react-query';
const MyQueries = () => {
  const axiosSecure = useAxiosSec();
  const { userDta } = useAuth();

  const {
    data: myData = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryFn: () => queryData(),
    queryKey: 'resent-query',
  });

  const queryData = async () => {
    const response = await axiosSecure.get(`/my-queries/${userDta.email}`);
    return response.data;
  };

  console.log(myData);

  if ((error, isError)) {
    Swal.fire({
      title: 'Oppps ....!',
      text: 'Querys data is not coming. Check your network!',
      icon: 'error',
    });
  }

  return (
    <div>
      {/*Banner part  */}
      <div className="h-72 sm:h-96 relative">
        <MultyImgBanner img1={img1} />
        <div className="absolute z-10 top-0 left-0 bg-[#00000073] w-full h-72 sm:h-96 ">
          <div className="h-full w-10/12 mx-auto flex items-center justify-center flex-col gap-8 pt-10 sm:pt-20 text-center">
            <h1 className="text-3xl sm:text-5xl text-white ">
              Explore and Add Queries
            </h1>
            <Link to={'/add-queries'}>
              <button className="py-1.5 px-8 rounded hover:-skew-x-12 bg-mClr hover:bg-transparent border-2 border-mClr duration-200 text-white font-semibold tracking-wider hover:shadow-2xl shadow-mClr hover:scale-110">
                Add Queries
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-11/12 mx-auto">
        <h1 className="text-5xl text-center py-8">My Query</h1>
        {isLoading ? (
          <QuerySkeleton />
        ) : (
          <div className="">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-4 xl:gap-6">
              {myData.map((dta) => (
                <div
                  key={dta._id}
                  className="mx-auto max-w-[400px] rounded-lg bg-white font-sans shadow-lg dark:bg-[#18181B]"
                >
                  <div className="sm:min-h-[580px] flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-0 px-4 py-4">
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
                        <div className="flex cursor-pointer flex-col gap-2 rounded-full px-4 py-3">
                          <span className="size-[3px] rounded-full bg-gray-600 dark:bg-white"></span>
                          <span className="size-[3px] rounded-full bg-gray-600 dark:bg-white"></span>
                          <span className="size-[3px] rounded-full bg-gray-600 dark:bg-white"></span>
                        </div>
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
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyQueries;
