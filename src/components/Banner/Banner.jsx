// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation, Keyboard } from 'swiper/modules';

// image input
import slide1 from '../../assets/banner/1.jpg';
import slide2 from '../../assets/banner/2.jpg';
import slide3 from '../../assets/banner/3.jpg';
import slide4 from '../../assets/banner/4.jpg';
import slide5 from '../../assets/banner/5.jpg';
import slide6 from '../../assets/banner/6.jpg';

// import Nav from '../Nav/Nav';
import { FaSearch } from 'react-icons/fa';

const Banner = () => {
  return (
    <div className="relative text-white">
      {/* <div className="fixed w-full max-w-[1500px] mx-auto z-50">
        <Nav />
      </div> */}

      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3300,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        keyboard={{
          enabled: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation, Keyboard]}
        className="mySwiper h-[400px] md:min-h-screen"
      >
        <SwiperSlide>
          <div
            className="h-[400px] md:min-h-screen relative overflow-hidden bg-cover bg-no-repeat p-12 text-center"
            style={{
              backgroundImage: `url(${slide1})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <div
              className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
              style={{ backgroundColor: ' rgba(0, 0, 0, 0.6)' }}
            >
              <div className="flex h-full items-center justify-center relative">
                <div className="text-white px-4 max-w-[800px]">
                  <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold">
                    Buy the property of your choice.
                  </h1>
                  <p className="max-w-[700px] mx-auto p-4 text-base md:text-lg">
                    {`Explore SnowyNest's curated listings to effortlessly find and purchase the ideal property that matches your preferences and fits your lifestyle perfectly.`}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="h-[400px] md:min-h-screen relative overflow-hidden  bg-cover bg-no-repeat p-12 text-center"
            style={{
              backgroundImage: `url(${slide2})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <div
              className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
              style={{ backgroundColor: ' rgba(0, 0, 0, 0.6)' }}
            >
              <div className="flex h-full items-center justify-center relative">
                <div className="text-white px-4 max-w-[800px]">
                  <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold">
                    Your Property, Our Priority.
                  </h1>
                  <p className="max-w-[700px] mx-auto p-4 text-base md:text-lg">
                    Your property aspirations are our top priority at SnowyNest.
                    Trust us to prioritize your needs and guide you to your
                    perfect home.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="h-[400px] md:min-h-screen relative overflow-hidden  bg-cover bg-no-repeat p-12 text-center"
            style={{
              backgroundImage: `url(${slide3})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <div
              className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
              style={{ backgroundColor: ' rgba(0, 0, 0, 0.6)' }}
            >
              <div className="flex h-full items-center justify-center relative">
                <div className="text-white px-4 max-w-[800px]">
                  <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold">
                    Discover Your Dream Home at SnowyNest!
                  </h1>
                  <p className="max-w-[700px] mx-auto p-4 text-base md:text-lg">
                    Discover Your Dream Home at SnowyNest! Explore our diverse
                    range of properties and find the perfect place to call your
                    own.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="h-[400px] md:min-h-screen relative overflow-hidden  bg-cover bg-no-repeat p-12 text-center"
            style={{
              backgroundImage: `url(${slide4})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <div
              className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
              style={{ backgroundColor: ' rgba(0, 0, 0, 0.6)' }}
            >
              <div className="flex h-full items-center justify-center relative">
                <div className="text-white px-4 max-w-[800px]">
                  <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold">
                    Find Your Perfect Property Today!
                  </h1>
                  <p className="max-w-[700px] mx-auto p-4 text-base md:text-lg">
                    Find Your Perfect Property Today! Start your journey to
                    homeownership with SnowyNest and uncover the ideal living
                    space for you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="h-[400px] md:min-h-screen relative overflow-hidden  bg-cover bg-no-repeat p-12 text-center"
            style={{
              backgroundImage: `url(${slide5})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <div
              className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
              style={{ backgroundColor: ' rgba(0, 0, 0, 0.6)' }}
            >
              <div className="flex h-full items-center justify-center relative">
                <div className="text-white px-4 max-w-[800px]">
                  <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold">
                    Your Gateway to Home Bliss!
                  </h1>
                  <p className="max-w-[700px] mx-auto p-4 text-base md:text-lg">
                    Your Gateway to Home Bliss! Experience the joy of finding
                    your dream home with us. Begin your search now!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="h-[400px] md:min-h-screen relative overflow-hidden  bg-cover bg-no-repeat p-12 text-center"
            style={{
              backgroundImage: `url(${slide6})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <div
              className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
              style={{ backgroundColor: ' rgba(0, 0, 0, 0.6)' }}
            >
              <div className="flex h-full items-center justify-center relative">
                <div className="text-white px-4 max-w-[800px]">
                  <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold">
                    Your Home Awaits at SnowyNest!
                  </h1>
                  <p className="max-w-[700px] mx-auto p-4 text-base md:text-lg">
                    Unlock Endless Possibilities with SnowyNest! Let SnowyNest
                    guide you to the home of your dreams. Your next adventure
                    starts here!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="w-10/12 sm:w-3/4 lg:w-1/2 absolute top-[65%] left-1/2 -translate-x-1/2 z-10">
        <div className="relative">
          <input
            type="text"
            name="search"
            className="w-full h-12 rounded-full outline-none bg-transparent border-2 my-7 px-7 placeholder-slate-300 text-white"
            placeholder="Search Your Keyword"
          />
          <span className="absolute cursor-pointer top-1/2 -translate-y-1/2 right-5 md:right-10 text-redLi ">
            <FaSearch />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
