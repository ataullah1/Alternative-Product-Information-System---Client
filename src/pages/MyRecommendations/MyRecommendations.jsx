import img1 from '../../assets/banner/9.jpg';
import { Link } from 'react-router-dom';
import MultyImgBanner from '../../components/MultyImgBanner/MultyImgBanner';

const MyRecommendations = () => {
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
              <Link to={'/my-queries'}>
                <button className="border-b border-mClr tracking-wider">
                  My Queries
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Table Part */}
      <div className="overflow-x-auto">
        <table className="min-w-[90%] shadow-md border mx-auto border-gray-100 my-6">
          <thead>
            <tr className="bg-[#0095FF] text-white">
              <th className="py-4 px-6 text-lg text-left border-b">
                Product Image
              </th>
              <th className="py-4 px-6 text-lg text-left border-b">
                Product Name
              </th>
              <th className="py-4 px-6 text-lg text-left border-b">Price</th>
              <th className="py-4 px-6 text-lg border-b text-end">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-50 border-b transition duration-300">
              <td className="py-4 px-4 flex justify-start">
                <img
                  src="https://source.unsplash.com/64x64/?microphone"
                  alt="table navigate ui"
                  className="h-16 w-16 object-cover bg-gray-300"
                />
              </td>
              <td className="py-4 px-6 border-b text-xl font-medium">
                Dual Speaker
              </td>
              <td className="py-4 px-6 border-b text-lg font-medium">$99.99</td>
              <td className="py-4 px-6 border-b text-end">
                <button className="bg-blue-500 hover:scale-110 scale-100 transition-all duration-100 text-white py-2 px-4 rounded-md">
                  Details
                </button>
              </td>
            </tr>
            <tr className="hover:bg-gray-50 border-b transition duration-300">
              <td className="py-4 px-4 flex justify-start">
                <img
                  src="https://source.unsplash.com/64x64/?phone"
                  alt="table navigate ui"
                  className="h-16 w-16 object-cover bg-gray-300"
                />
              </td>
              <td className="py-4 px-6 border-b text-xl font-medium">
                Samsung s22
              </td>
              <td className="py-4 px-6 border-b text-lg font-medium">
                $599.99
              </td>
              <td className="py-4 px-6 border-b text-end">
                <button className="bg-blue-500 hover:scale-110 scale-100 transition-all duration-100 text-white py-2 px-4 rounded-md">
                  Details
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyRecommendations;
