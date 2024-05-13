import { Link, useParams } from 'react-router-dom';
import useAxiosSec from '../../Hooks/useAxiosSec';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import Loding from '../Loding/Loding';
import img1 from '../../assets/banner/8.jpg';
import MultyImgBanner from '../../components/MultyImgBanner/MultyImgBanner';
import { FiExternalLink } from 'react-icons/fi';

const QueryDetails = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSec();
  const {
    data = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryFn: () => queryData(),
    queryKey: [`query-${id}`],
  });

  const queryData = async () => {
    const { data } = await axiosSecure.get(`/query-details/${id}`);
    return data;
  };
  console.log(data);

  if ((error, isError)) {
    Swal.fire({
      title: 'Oppps ....!',
      text: 'Querys details data is not coming. Check your network!',
      icon: 'error',
    });
  }

  if (isLoading) {
    return <Loding />;
  }
  return (
    <div>
      {/* Banner Part */}
      <div className="h-64 sm:h-72 w-full bg-red-200 relative">
        <MultyImgBanner img1={img1} />
        <div className="absolute z-10 top-0 left-0 bg-[#00000073] w-full h-full">
          <div className="h-full w-10/12 mx-auto flex items-center justify-center pt-10 sm:pt-20 text-center">
            <div className="flex items-center justify-center gap-1 text-2xl sm:text-3xl font-bold text-white ">
              <Link to={'/'}>
                <button className="border-b border-mClr tracking-wider">
                  Home
                </button>
              </Link>
              <button className="">/</button>
              <Link to={'/queries'}>
                <button className="border-b border-mClr tracking-wider">
                  All Queries
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex items-start w-11/12 mx-auto gap-5 mt-10">
        <div className="w-full md:w-3/5 p-4 border rounded-md">
          {/* Card Details */}
          <div>
            <div
              className="w-full h-96 rounded-md"
              style={{
                backgroundImage: `url(${data.productImage})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
              }}
            ></div>
            <div className="">
              <h1 className="text-[45px] pt-5 text-mClr">{data.queryTitle}</h1>
              <h1 className="underline text-4xl text-slate-800 pt-3 dark:text-white">
                {data.productName}
              </h1>
              <h1 className="text-2xl text-teal-600 py-3">
                <span className="font-bold text-slate-800 dark:text-slate-200">
                  Brand :{' '}
                </span>
                {data.productBrand}
              </h1>
              <p className="pt-3 pb-2 text-slate-800 text-xl font-semibold dark:text-slate-200">
                Reasons to seek alternatives:
              </p>
              <p className="text-lg leading-7 text-slate-800 dark:text-slate-300">
                {data.details}
              </p>
              <hr className="mb-4 mt-7" />
              {/* Posted Author */}
              <h1 className="text-3xl text-slate-800 border-b-2 border-mClr inline-block pr-3 pl-1 mb-5 dark:text-white">
                Posted By:
              </h1>
              <div className="bg-gray-300 dark:bg-slate-900 rounded-md flex items-center justify-between gap-2">
                {/* Avatar image  */}
                <div className="h-20 flex items-center gap-3">
                  <img
                    className="h-full w-20 rounded-sm border-2 border-mClr"
                    src={data.userImg}
                    alt="card navigate ui"
                  />
                  <div className="flex flex-col justify-start h-full py-2">
                    <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-100 capitalize">
                      {data.userName}
                    </h2>
                    <p className="text-slate-800 dark:text-slate-300">
                      {data.userEmail}
                    </p>
                  </div>
                </div>
                {/* Setting button */}
                <div className="pr-6">
                  <p className="text-slate-800 dark:text-slate-300">
                    <span className="font-semibold"> Date:</span>{' '}
                    {data.dateTime.slice(0, 10)}
                  </p>
                  <p className="text-slate-800 dark:text-slate-300">
                    <span className="font-semibold">Time:</span>{' '}
                    {data.dateTime.slice(11, 20)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-2/5 p-4 bg-green-400 border rounded-md"></div>
      </div>
    </div>
  );
};

export default QueryDetails;
