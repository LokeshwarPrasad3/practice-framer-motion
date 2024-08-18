import { AnimatePresence, motion } from "framer-motion";
import { FC, useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";

const SCALE_MODAL_VARIENT = {
  initial: { opacity: 1, scale: 0 },
  animate: {
    opacity: 1,
    scale: 1,
  },
  exit: { opacity: 1, scale: 0 },
};

const ITEM_STAGGER_VARIANT = {
  initial: { opacity: 0, scale: 0, x: 100 },
  animate: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  exit: { opacity: 0, scale: 0 },
};

const ProfileModal: FC = () => {
  const [isModelShow, setIsModalShow] = useState(false);

  return (
    <>
      <div className="">
        <motion.div
          className="select-none absolute shadow-md top-1 z-50 right-1  m-3 p-2 w-fit h-fit cursor-pointer rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-100 ease-in"
          onClick={() => setIsModalShow(!isModelShow)}>
          <FaRegUserCircle className="text-3xl" />
        </motion.div>
        <div
          className={`absolute bg-black inset-0 opacity-50 z-0 ${
            isModelShow ? "block" : "hidden"
          } `}></div>
      </div>
      <AnimatePresence>
        {isModelShow && (
          <motion.div
            className="modal_container absolute top-16 sm:right-4 z-50 w-full max-w-full md:max-w-md p-3 mx-auto my-auto rounded-xl shadow-lg bg-white"
            variants={SCALE_MODAL_VARIENT}
            initial="initial"
            animate="animate"
            exit="exit">
            <motion.div>
              <motion.div className="text-center flex-auto justify-center leading-6">
                <motion.div
                  variants={ITEM_STAGGER_VARIANT}
                  initial="initial"
                  animate="animate"
                  exit="exit">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-10 flex items-center text-purple-500 mx-auto"
                    viewBox="0 0 20 20"
                    fill="currentColor">
                    <path
                      fill-rule="evenodd"
                      d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </motion.div>
                <motion.div
                  variants={ITEM_STAGGER_VARIANT}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="text-md text-gray-500 px-2">
                  Do you really want to exit without saving your work?
                </motion.div>
              </motion.div>
              <motion.div className="p-3 text-center space-x-4 md:block">
                <motion.button
                  variants={ITEM_STAGGER_VARIANT}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  whileHover={{ scale: 1.1 }}
                  onClick={() => setIsModalShow(false)}
                  className="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-md hover:shadow-lg hover:bg-gray-100">
                  Save
                </motion.button>
                <motion.button
                  variants={ITEM_STAGGER_VARIANT}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  whileHover={{ scale: 1.1 }}
                  onClick={() => setIsModalShow(false)}
                  className="mb-2 md:mb-0 bg-purple-500 border border-purple-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-md hover:shadow-lg hover:bg-purple-600">
                  Close
                </motion.button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProfileModal;
