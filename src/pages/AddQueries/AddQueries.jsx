import { Link } from 'react-router-dom';
import img1 from '../../assets/banner/6.jpg';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Autoplay } from 'swiper/modules';
import Swal from 'sweetalert2';

const AddQueries = () => {
  const handleAddCoffee = (e) => {
    e.preventDefault();
    const dta = e.target;
    const name = dta.name.value;
    const chef = dta.chef.value;
    const supplier = dta.supplier.value;
    const taste = dta.taste.value;
    const category = dta.category.value;
    const details = dta.details.value;
    const photo = dta.photo.value;
    const price = dta.price.value;
    const formData = {
      name,
      chef,
      supplier,
      taste,
      category,
      photo,
      price,
      details,
    };
    // console.log(formData);
    fetch('https://coffee-store-serve-side.vercel.app/coffees', {
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
      <div className="w-11/12 lg:w-1/2 mx-auto my-10">
        <div className="w-full rounded-[5px] py-4 md:py-6 px-4 md:px-8 lg:px-20 mb-28 border-2 border-mClr">
          <div>
            <h1 className="text-[40px] text-slate-800 dark:text-slate-100 text-center">
              Add New Queries
            </h1>
            <p className="max-w-[650px] text-center text-slate-700 dark:text-slate-200 text-opacity-70 sm:text-lg font-normal sm:leading-[30px] mx-auto pt-2 pb-10">
              Share your product query and discover alternatives. Your input
              helps build a diverse knowledge base for informed decisions.
            </p>
          </div>
          <div>
            <form
              className="flex flex-col gap-5 w-full"
              onSubmit={handleAddCoffee}
            >
              <div className="relative w-full rounded-lg">
                <input
                  className="peer rounded-lg border border-[#1B8EF8] bg-transparent px-4 py-2 text-[#1B8EF8] focus:outline-none w-full"
                  type="text"
                  placeholder=""
                  name="name"
                  id="navigate_ui_input_33"
                />
                <label
                  className="absolute -top-2 left-[10px] rounded-md px-2 text-xs text-slate-400 duration-300 peer-placeholder-shown:left-[14px] peer-placeholder-shown:top-3  peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:left-[10px] peer-focus:bg-sky-300 peer-focus:text-xs peer-focus:text-sky-800 dark:peer-focus:text-sky-400 dark:peer-focus:bg-[#0F172A]"
                  htmlFor="navigate_ui_input_33"
                >
                  Product Name
                </label>
              </div>

              <button className="w-full py-1 bg-[#D2B48C] rounded-[5px] border-2 border-primaryColor text-primaryColor text-lg font-bold sm:text-2xl mb-5 md:mb-0 active:-skew-x-[30deg] duration-200">
                Add Coffee
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddQueries;
