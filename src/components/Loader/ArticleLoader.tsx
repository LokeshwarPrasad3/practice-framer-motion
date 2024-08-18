import { motion } from "framer-motion";

const ArticleLoader = () => {
  return (
    <motion.div
      className="animate-pulse my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 ">
      <article className="overflow-hidden rounded-lg shadow-lg bg-slate-300 dark:bg-slate-800">
        <div className="h-[194px] rounded-t-md w-full bg-slate-400 dark:bg-slate-600 ">
          <div className="block h-auto w-full"></div>
        </div>
        <header className="flex items-center justify-between leading-tight w-full py-2 md:py-4 px-3 rounded-md">
          <h1 className=" h-10 w-full bg-slate-400 dark:bg-slate-600 rounded-md"></h1>
        </header>
        <footer className="flex items-center justify-between leading-none w-full p-2 md:p-4 rounded-b-md">
          <div className="flex items-center no-underline font-medium text-black h-10 w-10 rounded-full bg-slate-400 dark:bg-slate-600">
            <div className="block rounded-full"></div>
            <p className="ml-2 text-sm"></p>
          </div>
          <a className="no-underline text-grey-darker h-10 w-4/5 rounded-md hover:text-red-dark bg-slate-400 dark:bg-slate-600">
            <span className="hidden"></span>
            <i className="fa fa-heart"></i>
          </a>
        </footer>
      </article>
    </motion.div>
  );
};

export default ArticleLoader;
