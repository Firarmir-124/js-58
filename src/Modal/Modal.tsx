import React from 'react';
import Backdrop from "../Backdrop";
import {btnModal} from "../types";
import {motion, AnimatePresence} from "framer-motion";

interface Props extends React.PropsWithChildren{
  title: string;
  showModal: boolean;
  onCloseModal: () => void;
  btnModal: btnModal[];
}

const Modal:React.FC<Props> = ({title, showModal, onCloseModal, btnModal, children}) => {
  return (
    <AnimatePresence>
      {
        showModal && (
          <>
            <Backdrop showModal={showModal}/>
            <motion.div
              className="modal show"
              style={{display: showModal ? 'block' : 'none'}}

              initial={{ y: '-100px'}}
              animate={{ y: 0 }}
              exit={{ y: "-400px", scale: 0.5}}
              transition={{ duration: 0.5 }}
            >
              <div className="modal-dialog">
                <motion.div exit={{backgroundColor: "rgb(255,0,0)"}} className="modal-content">
                  <div className="modal-header">
                    <h1 className='modal-title fs-5'>{title}</h1>
                    <button onClick={onCloseModal} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    {children}
                  </div>
                  <div className="modal-footer">
                    {btnModal.map(item => (
                      <button onClick={item.onClick} key={item.id} className={item.type}>{item.label}</button>
                    ))}
                  </div>
                </ motion.div>
              </div>
            </motion.div>
          </>
        )
      }
    </AnimatePresence>
  );
};

export default Modal;