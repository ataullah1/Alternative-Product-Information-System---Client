import { useParams } from 'react-router-dom';
import useAxiosSec from '../../Hooks/useAxiosSec';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import Loding from '../Loding/Loding';

const QueryDetails = () => {
  const id = useParams();
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
      <h1 className="text-6xl pt-36">Hellooooooooooo</h1>
    </div>
  );
};

export default QueryDetails;
