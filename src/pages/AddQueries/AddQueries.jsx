import { Link } from 'react-router-dom';
import img1 from '../../assets/banner/6.jpg';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Autoplay } from 'swiper/modules';
import Swal from 'sweetalert2';
import TextField from '@mui/material/TextField';

const AddQueries = () => {
  const handleAddQuery = (e) => {
    e.preventDefault();
    const dta = e.target;
    const productName = dta.productName.value;
    const productBrand = dta.productBrand.value;
    const productImage = dta.productImage.value;
    const queryName = dta.queryName.value;
    const detail = dta.detail.value;
    const formData = {
      productBrand,
      productName,
      productImage,
      queryName,
      detail,
    };
    console.log(formData);

    fetch('https://coffee-store-serve-side.vercel.app/cffees', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((dta) => {
        // console.log(dta);
        if (dta.acknowledged) {
          Swal.fire({
            // position: 'top-end',
            icon: 'success',
            title: 'Your Coffee has been successfully Added',
            showConfirmButton: false,
            timer: 1200,
          });
        }
      });
    dta.reset();
  };

  return (
    <div className="">
      <div className="h-64 sm:h-72 w-full bg-red-200 relative">
        <div className="h-full w-full grid grid-cols-4 grid-rows-2">
          <div className="w-full bg-red-400 row-span-2 col-span-2">
            <Swiper
              className="mySwiper h-full"
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
            >
              <SwiperSlide
                className="h-full w-full"
                style={{
                  backgroundImage: `url(${img1})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                }}
              ></SwiperSlide>
              <SwiperSlide
                className="h-full w-full"
                style={{
                  backgroundImage: `url(${img1})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                }}
              ></SwiperSlide>
              <SwiperSlide
                className="h-full w-full"
                style={{
                  backgroundImage: `url(${img1})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                }}
              ></SwiperSlide>
            </Swiper>
          </div>
          <div className="w-full bg-yellow-400">
            <Swiper
              className="mySwiper h-full"
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
            >
              <SwiperSlide
                className="h-full w-full"
                style={{
                  backgroundImage: `url(${img1})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                }}
              ></SwiperSlide>
              <SwiperSlide
                className="h-full w-full"
                style={{
                  backgroundImage: `url(${img1})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                }}
              ></SwiperSlide>
              <SwiperSlide
                className="h-full w-full"
                style={{
                  backgroundImage: `url(${img1})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                }}
              ></SwiperSlide>
            </Swiper>
          </div>
          <div className="w-full bg-green-400">
            <Swiper
              className="mySwiper h-full"
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
            >
              <SwiperSlide
                className="h-full w-full"
                style={{
                  backgroundImage: `url(${img1})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                }}
              ></SwiperSlide>
              <SwiperSlide
                className="h-full w-full"
                style={{
                  backgroundImage: `url(${img1})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                }}
              ></SwiperSlide>
              <SwiperSlide
                className="h-full w-full"
                style={{
                  backgroundImage: `url(${img1})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                }}
              ></SwiperSlide>
            </Swiper>
          </div>
          <div className="w-full bg-emerald-800">
            <Swiper
              className="mySwiper h-full"
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
            >
              <SwiperSlide
                className="h-full w-full"
                style={{
                  backgroundImage: `url(${img1})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                }}
              ></SwiperSlide>
              <SwiperSlide
                className="h-full w-full"
                style={{
                  backgroundImage: `url(${img1})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                }}
              ></SwiperSlide>
              <SwiperSlide
                className="h-full w-full"
                style={{
                  backgroundImage: `url(${img1})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                }}
              ></SwiperSlide>
            </Swiper>
          </div>
          <div className="w-full bg-purple-500">
            <Swiper
              className="mySwiper h-full"
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
            >
              <SwiperSlide
                className="h-full w-full"
                style={{
                  backgroundImage: `url(${img1})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                }}
              ></SwiperSlide>
              <SwiperSlide
                className="h-full w-full"
                style={{
                  backgroundImage: `url(${img1})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                }}
              ></SwiperSlide>
              <SwiperSlide
                className="h-full w-full"
                style={{
                  backgroundImage: `url(${img1})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                }}
              ></SwiperSlide>
            </Swiper>
          </div>
        </div>
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
        <div className="w-full rounded-[5px] py-4 md:py-6 px-4 md:px-8 lg:px-20 mb-28 border-2 border-mClr">
          <div>
            <h1 className="text-[40px] text-slate-800 dark:text-slate-100 text-center">
              Add New Queries
            </h1>
            <p className="max-w-[650px] text-center text-slate-700 dark:text-slate-200 text-opacity-70 sm:text-lg font-normal mx-auto pt-2 pb-10">
              Share your product query and discover alternatives. Your input
              helps build a diverse knowledge base for informed decisions.
            </p>
          </div>
          <div>
            <form
              className="flex flex-col gap-5 w-full"
              onSubmit={handleAddQuery}
            >
              <TextField
                id="outlined-textarea"
                label="Product Name"
                placeholder="Product Name"
                multiline
                required
                name="productName"
                className="text-3xl"
              />
              <TextField
                id="outlined-textarea"
                label="Product Brand"
                placeholder="Brand Name"
                multiline
                required
                name="productBrand"
                className="text-3xl"
              />
              <TextField
                id="outlined-textarea"
                label="Product Image URL"
                placeholder="Product Photo"
                multiline
                required
                name="productImage"
                className="text-3xl"
              />
              <TextField
                id="outlined-textarea"
                label="Query Title"
                placeholder="Better Product Name"
                multiline
                required
                name="queryName"
                className="text-3xl"
              />
              <TextField
                id="outlined-textarea"
                label="Boycoing Reason Details"
                placeholder="Explain in detail why you are boycotting this product..."
                multiline
                required
                name="detail"
                className="text-3xl"
              />

              <input
                className="w-full py-1.5 bg-mClr rounded border-2 border-mClr text-white text-lg font-bold sm:text-xl mb-5 hover:-skew-x-12 duration-300 active:scale-95 hover:bg-transparent hover:text-mClr"
                type="submit"
                value=" Add Query"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddQueries;
