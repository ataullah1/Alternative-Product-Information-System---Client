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
      <div className="w-11/12 lg:w-10/12 mx-auto my-10">
        <div className="w-full bg-[#F4F3F0] rounded-[5px] py-6 md:py-14 px-4 md:px-8 lg:px-16 mb-28 space-y-5">
          <h1 className="text-[45px] text-primaryColor text-center">
            Add New Queries
          </h1>
          <p className="max-w-[932px] text-center text-stone-900 text-opacity-70 sm:text-lg font-normal sm:leading-[30px] mx-auto">
            It is a long established fact that a reader will be distraceted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>
          <div>
            <form className="flex flex-col gap-5" onSubmit={handleAddCoffee}>
              <div className="flex flex-col md:flex-row gap-5">
                <div className="flex flex-col gap-2 w-full md:w-1/2">
                  <label className="text-stone-900 text-opacity-80 text-lg font-semibold">
                    Name
                  </label>
                  <input
                    required
                    className="text-stone-900 placeholder-opacity-60 text-base font-normal py-2 px-4 rounded-md w-full outline-none"
                    type="text"
                    name="name"
                    placeholder="Enter coffee name"
                  />
                </div>
                <div className="flex flex-col gap-2 w-full md:w-1/2">
                  <label className="text-stone-900 text-opacity-80 text-lg font-semibold">
                    Chef
                  </label>
                  <input
                    required
                    className="text-stone-900 placeholder-opacity-60 text-base font-normal py-2 px-4 rounded-md w-full outline-none"
                    type="text"
                    name="chef"
                    placeholder="Enter coffee chef"
                  />
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-5">
                <div className="flex flex-col gap-2 w-full md:w-1/2">
                  <label className="text-stone-900 text-opacity-80 text-lg font-semibold">
                    Supplier
                  </label>
                  <input
                    required
                    className="text-stone-900 placeholder-opacity-60 text-base font-normal py-2 px-4 rounded-md w-full outline-none"
                    type="text"
                    name="supplier"
                    placeholder="Enter coffee supplier"
                  />
                </div>
                <div className="flex flex-col gap-2 w-full md:w-1/2">
                  <label className="text-stone-900 text-opacity-80 text-lg font-semibold">
                    Taste
                  </label>
                  <input
                    required
                    className="text-stone-900 placeholder-opacity-60 text-base font-normal py-2 px-4 rounded-md w-full outline-none"
                    type="text"
                    name="taste"
                    placeholder="Enter coffee taste"
                  />
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-5">
                <div className="flex flex-col gap-2 w-full md:w-1/2">
                  <label className="text-stone-900 text-opacity-80 text-lg font-semibold">
                    Category
                  </label>
                  <input
                    required
                    className="text-stone-900 placeholder-opacity-60 text-base font-normal py-2 px-4 rounded-md w-full outline-none"
                    type="text"
                    name="category"
                    placeholder="Enter coffee category"
                  />
                </div>
                <div className="flex flex-col gap-2 w-full md:w-1/2">
                  <label className="text-stone-900 text-opacity-80 text-lg font-semibold">
                    Price
                  </label>
                  <input
                    required
                    className="text-stone-900 placeholder-opacity-60 text-base font-normal py-2 px-4 rounded-md w-full outline-none"
                    type="text"
                    name="price"
                    placeholder="Enter coffee price"
                  />
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-5">
                <div className="flex flex-col gap-2 w-full md:w-1/2">
                  <label className="text-stone-900 text-opacity-80 text-lg font-semibold">
                    Photo
                  </label>
                  <input
                    required
                    className="text-stone-900 placeholder-opacity-60 text-base font-normal py-2 px-4 rounded-md w-full outline-none"
                    type="text"
                    name="photo"
                    placeholder="Enter photo URL"
                  />
                </div>
                <div className="flex flex-col gap-2 w-full md:w-1/2">
                  <label className="text-stone-900 text-opacity-80 text-lg font-semibold">
                    Details
                  </label>
                  <textarea
                    className="text-stone-900 placeholder-opacity-60 text-base font-normal py-2 px-4 rounded-md w-full outline-none min-h-10 h-10"
                    name="details"
                    placeholder="Enter coffee details"
                  ></textarea>
                  {/* <input
                    required
                    className="text-stone-900 placeholder-opacity-60 text-base font-normal py-2 px-4 rounded-md w-full outline-none"
                    type="text"
                    name="details"
                    placeholder="Enter coffee details"
                  /> */}
                </div>
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
