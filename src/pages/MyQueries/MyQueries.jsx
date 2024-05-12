import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import img1 from '../../assets/banner/5.jpg';
import MultyImgBanner from '../../components/MultyImgBanner/MultyImgBanner';
import useAuth from '../../Hooks/useAuth';
import useAxiosSec from '../../Hooks/useAxiosSec';
import QuerySkeleton from '../Loding/QuerySkeleton';
import { useQuery } from '@tanstack/react-query';
import MyQuery from './MyQuery';
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
    queryKey: 'my-query',
  });

  const queryData = async () => {
    const response = await axiosSecure.get(`/my-queries/${userDta.email}`);
    return response.data;
  };

  // console.log(myData);

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
        <div className="text-center">
          <h1 className="text-3xl sm:text-5xl text-center my-12 text-slate-900 dark:text-white border-b-2 px-4 md:border-b-4 border-mClr inline-block">
            My added queries
          </h1>
        </div>
        {isLoading ? (
          <QuerySkeleton />
        ) : (
          <div className="">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-4 xl:gap-6">
              {myData.map((dta) => (
                <MyQuery key={dta._id} dta={dta} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyQueries;
