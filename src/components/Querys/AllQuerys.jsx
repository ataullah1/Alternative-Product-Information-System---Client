import { useQuery } from '@tanstack/react-query';
import useAxios from '../../Hooks/useAxios';
import QueryCard from './QueryCard';
import Swal from 'sweetalert2';
import AllQuerySkeleton from '../../pages/Loding/AllQuerySkeleton';

const AllQuerys = () => {
  const axiosFetch = useAxios();
  const {
    data: datas = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryFn: () => queryData(),
    queryKey: 'all-query',
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
  if (isLoading) {
    return (
      <AllQuerySkeleton crt={[1, 2, 3, 4, 5, 6, 7, 8, 9]} h={60} w={'40%'} />
    );
  }
  return (
    <div className="">
      <div className="w-11/12 mx-auto">
        <div className="max-w-[500px] mx-auto sm:max-w-max grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-4 xl:gap-6">
          {datas.map((dta) => (
            <QueryCard dta={dta} key={dta._id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllQuerys;
