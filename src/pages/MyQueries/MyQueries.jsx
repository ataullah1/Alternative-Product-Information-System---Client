import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const MyQueries = () => {
  const [currentSlider, setCurrentSlider] = useState(0);
  const carouselImages = [
    'https://source.unsplash.com/1200x540/?product',
    'https://source.unsplash.com/1200x540/?oil',
    'https://source.unsplash.com/1200x540/?fation',
    'https://source.unsplash.com/1200x540/?business',
    'https://source.unsplash.com/1200x540/?shop',
  ];
  const prevSlider = () =>
    setCurrentSlider((currentSlider) =>
      currentSlider === 0 ? carouselImages.length - 1 : currentSlider - 1
    );
  const nextSlider = useCallback(
    () =>
      setCurrentSlider((currentSlider) =>
        currentSlider === carouselImages.length - 1 ? 0 : currentSlider + 1
      ),
    [carouselImages.length]
  );

  // if you don't want to change the slider automatically then you can just remove the useEffect
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlider();
    }, 3000);
    return () => clearInterval(intervalId);
  }, [nextSlider]);
  return (
    <div className="relative">
      {/*Banner part  */}
      <div className="w-full h-72 sm:h-96 relative overflow-hidden">
        {/* dots */}
        <div className="z-20 absolute bottom-3 left-1/2 -translate-x-1/2">
          <div className="flex justify-center items-center rounded-full w-full gap-1">
            {carouselImages.map((_, inx) => (
              <button
                key={_}
                onClick={() => setCurrentSlider(inx)}
                className={`rounded-full duration-500 bg-white ${
                  currentSlider === inx ? 'w-8' : 'w-2'
                } h-2`}
              ></button>
            ))}
          </div>
        </div>
        {/* arrow left */}
        <button
          onClick={prevSlider}
          className="absolute top-1/2 left-3 z-50 flex justify-center items-center bg-white rounded-full w-6 h-6 md:w-8 md:h-8"
        >
          <svg
            className="w-4 h-4 md:w-6 md:h-6 icon"
            viewBox="0 0 1024 1024"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
          >
            <g strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                fill="#0095FF"
                d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"
              ></path>
            </g>
          </svg>
        </button>
        {/* arrow right */}
        <button
          onClick={nextSlider}
          className="absolute top-1/2 z-50 right-3  flex justify-center items-center bg-white rounded-full w-6 h-6 md:w-8 md:h-8"
        >
          <svg
            className="w-4 h-4 md:w-6 md:h-6 icon"
            viewBox="0 0 1024 1024"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
            transform="rotate(180)"
          >
            <g strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                fill="#0095FF"
                d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"
              ></path>
            </g>
          </svg>
        </button>

        {/* Carousel container */}
        <div className="relative">
          <div
            className="ease-linear duration-500 flex transform-gpu"
            style={{ transform: `translateX(-${currentSlider * 100}%)` }}
          >
            {/* sliders */}
            {carouselImages.map((slide, inx) => (
              <img
                key={slide}
                src={slide}
                className="min-w-full h-72 sm:h-96 bg-black/20 object-cover"
                alt={`Slider - ${inx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-0 bg-[#00000073] w-full h-72 sm:h-96 ">
        <div className="h-full w-10/12 mx-auto flex items-center justify-center flex-col gap-8 pt-20">
          <h1 className="text-5xl text-white ">My Queries Page</h1>
          <Link to={'/add-queries'}>
            <button className="py-1.5 px-8 rounded hover:-skew-x-12 bg-mClr hover:bg-transparent border-2 border-mClr duration-200 text-white font-semibold tracking-wider">
              Add Queries
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyQueries;
