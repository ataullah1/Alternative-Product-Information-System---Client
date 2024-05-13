import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import TextField from '@mui/material/TextField';
import useAuth from '../../Hooks/useAuth';
import img1 from '../../assets/banner/6.jpg';
import MultyImgBanner from '../../components/MultyImgBanner/MultyImgBanner';
import useAxiosSec from '../../Hooks/useAxiosSec';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const AddQueries = () => {
  const axiosSecure = useAxiosSec();
  const dateTime = new Date().toLocaleString('en-BD', {
    timeZone: 'Asia/Dhaka',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true, // Include AM/PM indicator
  });
  // console.log(dateTime); // Output: 11/05/2024 11:42 PM (assuming current Bangladesh time)
  const { userDta } = useAuth();
  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation({
    mutationFn: async ({ formData }) => {
      const { data } = await axiosSecure.post(`/queries`, formData);
      console.log(data);
    },
    onError: () => {
      Swal.fire({
        title: 'Oppps ....!',
        text: 'Can not post query. Check your network !',
        icon: 'error',
      });
    },
    onSuccess: () => {
      Swal.fire({
        icon: 'success',
        title: 'Good Job',
        text: 'Your Query has been successfully posted.',
        timer: 2200,
      });
      queryClient.invalidateQueries({ queryKey: ['my-query'] });
      console.log('Updated Query');
    },
  });

  const handleAddQuery = async (e) => {
    e.preventDefault();
    const dta = e.target;
    const productName = dta.productName.value;
    const productBrand = dta.productBrand.value;
    const productImage = dta.productImage.value;
    const queryTitle = dta.queryTitle.value;
    const details = dta.detail.value;
    const userName = userDta.displayName;
    const userEmail = userDta.email;
    const userImg = userDta.photoURL;
    const recommendationCount = 0;

    const formData = {
      productName,
      productBrand,
      productImage,
      queryTitle,
      details,
      userName,
      userEmail,
      userImg,
      dateTime,
      recommendationCount,
    };
    // console.log(formData);
    await mutateAsync({ formData });
    dta.reset();
  };

  return (
    <div className="">
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
      <div className="w-11/12 lg:w-[700px] mx-auto my-10">
        <div className="w-full rounded-[5px] py-4 md:py-6 px-4 md:px-8 lg:px-20 mb-28 border-2 border-mClr dark:bg-slate-300">
          <div>
            <h1 className="text-[40px] text-slate-800 dark:text-slate-800 text-center">
              Add New Queries
            </h1>
            <p className="text-center text-slate-600 dark:text-slate-600 sm:text-lg font-normal mx-auto pt-2 pb-10">
              Share your product query and discover alternatives. Your input
              helps build a diverse knowledge base for informed decisions.
            </p>
          </div>
          <div>
            <form
              className="flex flex-col gap-5 w-full dark:text-white"
              onSubmit={handleAddQuery}
            >
              <TextField
                id="outlined-textarea"
                label="Product Name"
                placeholder="Product Name"
                required
                name="productName"
              />
              <TextField
                id="outlined-textarea"
                label="Product Brand"
                placeholder="Brand Name"
                required
                name="productBrand"
                className="text-3xl"
              />
              <TextField
                id="outlined-textarea"
                label="Product Image URL"
                placeholder="Product Photo"
                required
                name="productImage"
                className="text-3xl"
              />
              <TextField
                id="outlined-textarea"
                label="Query Title"
                placeholder="Enter your query title."
                required
                name="queryTitle"
                className="text-3xl"
              />
              <TextField
                id="outlined-textarea"
                label="Boycoing Reason Details"
                placeholder="Explain in detail why you are boycotting this product..."
                required
                name="detail"
                multiline
                rows={3}
                className="text-3xl"
              />

              <input
                className="w-full py-1.5 bg-mClr rounded border-2 border-mClr text-white text-lg font-bold sm:text-xl mb-5 hover:-skew-x-12 duration-300 active:scale-95 hover:bg-transparent hover:text-mClr"
                type="submit"
                value="Add Query"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddQueries;
