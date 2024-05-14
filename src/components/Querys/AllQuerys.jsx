import { useQuery } from '@tanstack/react-query';
import useAxios from '../../Hooks/useAxios';
import QueryCard from './QueryCard';
import Swal from 'sweetalert2';
import AllQuerySkeleton from '../../pages/Loding/AllQuerySkeleton';
import MultyImgBanner from '../MultyImgBanner/MultyImgBanner';
import { Link } from 'react-router-dom';
import img1 from '../../assets/banner/1.jpg';
import { Search } from '@mui/icons-material';
import { Dropdown } from 'flowbite-react';
import { useState } from 'react';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';
import { TfiLayoutColumn2Alt, TfiLayoutColumn3Alt } from 'react-icons/tfi';
import { RiLayoutBottom2Fill } from 'react-icons/ri';
const AllQuerys = () => {
  // Get all query data
  const axiosFetch = useAxios();
  let {
    data: datas = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryFn: () => queryData(),
    queryKey: ['all-query'],
  });
  const queryData = async () => {
    const { data } = await axiosFetch(`/all-queries`);
    return data;
  };
  if ((error, isError)) {
    Swal.fire({
      title: 'Oppps ....!',
      text: 'Querys data is not coming. Check your network!',
      icon: 'error',
    });
  }
  // end all query data geting ==========

  // Sorting order =============
  const [sortDta, setSortDta] = useState(null);
  if (sortDta === 'default') {
    console.log('default');
    const sorting = datas.sort((a, b) => {
      const datA = new Date(a.dateTime);
      const datB = new Date(b.dateTime);
      return datB - datA;
    });
    datas = sorting;
  } else if (sortDta === 'dateTimeDown') {
    console.log('dateTime');
    const sorting = datas.sort((a, b) => {
      const datA = new Date(a.dateTime);
      const datB = new Date(b.dateTime);
      return datB - datA;
    });
    datas = sorting;
  } else if (sortDta === 'dateTimeUp') {
    console.log('dateTime');
    const sorting = datas.sort((a, b) => {
      const datA = new Date(a.dateTime);
      const datB = new Date(b.dateTime);
      return datA - datB;
    });
    datas = sorting;
  } else if (sortDta === 'recommendationDown') {
    console.log('recommendation');
    const sorting = datas.sort(
      (a, b) => b.recommendationCount - a.recommendationCount
    );
    datas = sorting;
  } else if (sortDta === 'recommendationUp') {
    console.log('recommendationUp');
    const sorting = datas.sort(
      (a, b) => a.recommendationCount - b.recommendationCount
    );
    datas = sorting;
  }
  // End Sorting order============

  return (
    <div className="">
      <div className="mb-10">
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
                <Link to={''}>
                  <button className="border-b border-mClr tracking-wider">
                    All Querys
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-11/12 mx-auto">
        {/* Order Action layout  */}
        <div className="flex items-center justify-between">
          {/* Sorting Dropdown Button  */}
          <div>
            <Dropdown label="Sort By Query" className="">
              <Dropdown.Item onClick={() => setSortDta('default')}>
                Default
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item onClick={() => setSortDta('dateTimeDown')}>
                <span className="flex items-center gap-2">
                  Date & Time
                  <span>
                    <FaArrowDown />
                  </span>
                </span>
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setSortDta('dateTimeUp')}>
                <span className="flex items-center gap-2">
                  Date & Time
                  <span>
                    <FaArrowUp />
                  </span>
                </span>
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item onClick={() => setSortDta('recommendationDown')}>
                <span className="flex items-center gap-2">
                  Recommendation
                  <span>
                    <FaArrowDown />
                  </span>
                </span>
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setSortDta('recommendationUp')}>
                <span className="flex items-center gap-2">
                  Recommendation
                  <span>
                    <FaArrowUp />
                  </span>
                </span>
              </Dropdown.Item>
            </Dropdown>
          </div>
          {/* End Sorting dropdown  */}

          {/* Start Layout Button  action */}
          <div className=''>
            <button>
              <TfiLayoutColumn3Alt />
            </button>
            <button>
              <TfiLayoutColumn2Alt />
            </button>
            <button>
              <RiLayoutBottom2Fill />
            </button>
          </div>
          {/* end Layout Button  action */}

          {/* Start Searching  */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search keyword"
              className="py-1.5 px-4 w-72 outline-none border-2 border-mClr bg-transparent rounded text-slate-700 dark:text-slate-100 pr-10"
            />
            <span className="absolute top-1/2 -translate-y-1/2 cursor-pointer text-slate-700 dark:text-slate-100 px-3 py-1 right-0">
              <Search />
            </span>
          </div>
          {/* End Searching  */}
        </div>
        <div className="w-full h-[1px] bg-gray-400 mt-3 mb-7"></div>
        {/* Start main Card Layout  */}
        <div>
          {isLoading ? (
            <AllQuerySkeleton
              crt={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
              h={60}
              w={'40%'}
            />
          ) : (
            <div className="max-w-[500px] mx-auto sm:max-w-max grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-4 xl:gap-6">
              {datas.map((dta) => (
                <QueryCard dta={dta} key={dta._id} />
              ))}
            </div>
          )}
        </div>
        {/* End main Card Layout  */}
      </div>
    </div>
  );
};

export default AllQuerys;
