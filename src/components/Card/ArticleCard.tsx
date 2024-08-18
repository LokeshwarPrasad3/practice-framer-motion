import React, { useEffect, useState } from "react";
import ArticleLoader from "../Loader/ArticleLoader";
import { motion } from "framer-motion";

interface ArticleCardType {
  title: string;
  date: string;
  authorName: string;
  imageUrl: string;
  authorImageUrl: string;
}

const preloadImage = (src: string) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = src;
    img.onload = resolve;
    img.onerror = reject;
  });
};

const FADE_UP_VARIENT = {
  initial: { opacity: 0, y: 30 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
    },
  },
};

const FLIP_LEFT_VARIENT = {
  initial: { opacity: 0, rotateY: -90 },
  whileInView: {
    opacity: 1,
    rotateY: 0,
    transition: {
      duration: 0.3,
    },
  },
  whileHover: {
    scale: 1.05,
    transition: {
      duration: 0.3,
    },
  },
  whileTap: {
    scale: 0.95,
    transition: {
      duration: 0.3,
    },
  },
};

const ArticleCard: React.FC<ArticleCardType> = ({
  title,
  date,
  authorName,
  imageUrl,
  authorImageUrl,
}) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadImage = async () => {
      try {
        await Promise.all([
          preloadImage(imageUrl),
          preloadImage(authorImageUrl),
        ]);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };
    loadImage();
  }, [imageUrl, authorImageUrl, setIsLoading]);

  return (
    <>
      {!isLoading ? (
        <motion.div
          // variants={FADE_UP_VARIENT}
          variants={FLIP_LEFT_VARIENT}
          initial="initial"
          whileInView="whileInView"
          whileHover="whileHover"
          whileTap="whileTap"
          className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
          <article className="overflow-hidden rounded-lg bg-[#ededed] shadow-lg dark:bg-[#452d6e]">
            <p>
              <img
                alt="Placeholder"
                className="block h-auto w-full"
                src={imageUrl}
                loading="lazy"
              />
            </p>
            <header className="flex items-center justify-between leading-tight p-2 md:p-4">
              <h1 className="text-lg">
                <p className="no-underline font-medium ">{title}</p>
              </h1>
              <p className="text-sm">{date}</p>
            </header>
            <footer className="flex items-center justify-between leading-none p-2 md:p-4">
              <a className="flex items-center no-underline font-medium ">
                <img
                  alt="Placeholder"
                  className="block rounded-full"
                  src={authorImageUrl}
                  loading="lazy"
                />
                <p className="ml-2 text-sm">{authorName}</p>
              </a>
              <a className="no-underline hover:text-red-dark">
                <span className="hidden">Like</span>
                <i className="fa fa-heart"></i>
              </a>
            </footer>
          </article>
        </motion.div>
      ) : (
        <ArticleLoader />
      )}
    </>
  );
};

export default ArticleCard;
