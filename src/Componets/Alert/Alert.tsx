import React from 'react';
import {motion, AnimatePresence} from 'framer-motion';

interface Props extends React.PropsWithChildren{
  type: string;
  showAlert: boolean;
  closeAlert?: () => void;
}

const Alert:React.FC<Props> = ({type, showAlert, closeAlert, children}) => {
  const classList = `alert alert-${type} alert-dismissible fade show`;

  const notificationVariants = {
    initial: {
      opacity: 0,
      y: 100,
      scale: 0.2,
      transition: { duration: 0.1 },
    },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
    exit: {
      opacity: 0,
      transition: { ease: "easeOut", duration: 0.15 },
    }
  };


  return (
    <AnimatePresence>
      {
        showAlert && (
          <motion.div
            className={classList}
            role="alert"
            style={{display: showAlert ? 'block' : "none"}}

            variants={notificationVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {children}
            {
              closeAlert === undefined ? null :
                <button onClick={closeAlert} type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            }
          </motion.div>
        )
      }
    </AnimatePresence>
  );
};

export default Alert;