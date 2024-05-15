// import img1 from '../../assets/banner/4.jpg';

const PopulerQuery = () => {
  return (
    <div>
      <h1 className="text-2xl sm:text-4xl text-slate-800 dark:text-slate-100 text-center pt-28 pb-10">
        Trending Query Products
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        <div className="relative h-64 sm:h-80 pb-10 w-full rounded-md">
          <div
            className="h-full w-full rounded-md bg-cover bg-center bg-no-repeat bg-gray-200"
            style={{
              backgroundImage: `url('https://img.freepik.com/free-photo/yellow-car-gas-station_23-2150697544.jpg?t=st=1715780488~exp=1715784088~hmac=5b3ebde7b61c2e6087df1bd84f6043f3de636c97f95fc38d2184a05132142d41&w=900')`,
            }}
          ></div>
          <h1 className="text-xl text-center w-11/12 mx-auto absolute bottom-1 bg-[#e2e8f0e9] rounded-md left-1/2 -translate-x-1/2 text-slate-800 p-2">
            What car can be taken without alternative words?
          </h1>
        </div>
        <div className="relative h-64 sm:h-80 pb-10 w-full rounded-md">
          <div
            className="h-full w-full rounded-md bg-cover bg-center bg-no-repeat bg-gray-200"
            style={{
              backgroundImage: `url('https://img.freepik.com/free-photo/crispy-fried-chicken-plate-with-salad-carrot_1150-20212.jpg?t=st=1715780290~exp=1715783890~hmac=d896d3588e08a3968324df75b099e8493941a07d6497130799812400ced4660c&w=900')`,
            }}
          ></div>
          <h1 className="text-xl text-center w-11/12 mx-auto absolute bottom-1 bg-[#e2e8f0e9] rounded-md left-1/2 -translate-x-1/2 text-slate-800 p-2">
            Healthier substitutes for Fast Food Burgers?
          </h1>
        </div>
        <div className="relative h-64 sm:h-80 pb-10 w-full rounded-md">
          <div
            className="h-full w-full rounded-md bg-cover bg-center bg-no-repeat bg-gray-200"
            style={{
              backgroundImage: `url('https://img.freepik.com/free-photo/camera-photography-design-studio-editing-concept_53876-42954.jpg?t=st=1715779415~exp=1715783015~hmac=146f7fb51157de6ff064e4da0e98d6ccc250931e001aacf51d04c3f73e4b4418&w=740')`,
            }}
          ></div>
          <h1 className="text-xl text-center w-11/12 mx-auto absolute bottom-1 bg-[#e2e8f0e9] rounded-md left-1/2 -translate-x-1/2 text-slate-800 p-2">
            Any better alternatives to Dell XPS 13 ultrabooks?
          </h1>
        </div>
        <div className="relative h-64 sm:h-80 pb-10 w-full rounded-md">
          <div
            className="h-full w-full rounded-md bg-cover bg-center bg-no-repeat bg-gray-200"
            style={{
              backgroundImage: `url('https://img.freepik.com/free-photo/preventive-coronavirus-vaccine-bottles_23-2148920757.jpg?t=st=1715780980~exp=1715784580~hmac=35a5689f23726ca5352de6aa70dd1a050d66cffdfaf045d706f2c637984cc170&w=740')`,
            }}
          ></div>
          <h1 className="text-xl text-center w-11/12 mx-auto absolute bottom-1 bg-[#e2e8f0e9] rounded-md left-1/2 -translate-x-1/2 text-slate-800 p-2">
            Are other vaccines viable alternatives?
          </h1>
        </div>
      </div>
    </div>
  );
};

export default PopulerQuery;
