import React from 'react';
import {motion, AnimatePresence} from "framer-motion";

interface Props {
  showModal: boolean;
}

const Backdrop:React.FC<Props> = ({showModal}) => {
  const variants = {
    visible: {
      opacity: 0.5,
      transition: {
        when: "beforeChildren",
        duration: 0.3,
        delayChildren: 0.4
      }
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
        duration: 0.3,
        delay: 0.1
      }
    }
  };


  return (
    <AnimatePresence>
      {
        showModal && (
          <motion.div
            className='modal-backdrop show'
            style={{display: showModal ? 'block' : 'none'}}
            variants={variants}
            initial='hidden'
            animate='visible'
            exit='hidden'
          />
        )
      }
    </AnimatePresence>
  );
};

export default Backdrop;