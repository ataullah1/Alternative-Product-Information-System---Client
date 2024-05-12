import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import img1 from '../../assets/banner/5.jpg';
import MultyImgBanner from '../../components/MultyImgBanner/MultyImgBanner';
const MyQueries = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const queryData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/my-queries`
        );
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
        Swal.fire({
          title: 'Oppps ....!',
          text: 'Querys data is not coming. Check your network!',
          icon: 'error',
        });
      }
    };
    queryData();
  }, []);
  console.log(data);

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
      <div>
        <h1 className="text-5xl text-center py-8">My Query</h1>
        <div></div>
      </div>
    </div>
  );
};

export default MyQueries;
