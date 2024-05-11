import { Link } from 'react-router-dom';
import blog from '../../assets/error/noDta.jpg';
const Blog = () => {
  return (
    <div className="h-screen w-full bg-white flex flex-col items-center justify-center pt-28">
      <div
        className={`h-24 w-full bg-slate-500 dark:bg-slate-900 absolute top-0 left-0 z-30`}
      ></div>
      <img className="max-h-full mb-28 relative" src={blog} alt="" />
      <Link to={'/'} className="">
        <button className="py-2 px-5 bg-mClr text-white rounded-md font-semibold absolute bottom-6 left-1/2 -translate-x-1/2 hover:bg-sClr">
          Go Back Home
        </button>
      </Link>
    </div>
  );
};

export default Blog;
