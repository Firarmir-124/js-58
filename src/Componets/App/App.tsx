import React, {useState} from 'react';
import Modal from "../Modal/Modal";
import Alert from "../Alert/Alert";
import {motion} from "framer-motion";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const openModal = () => setShowModal(true);
  const onCloseModal = () => setShowModal(false);


  const continueModal = () => alert('Вы нажали continue !');
  const canselModal = () => setShowModal(false)

  const btnModal = [
    {id: Math.floor(Math.random() * Date.now()), type: 'primary', label: 'Continue', onClick: continueModal},
    {id: Math.floor(Math.random() * Date.now()), type: 'danger', label: 'Close', onClick: canselModal}
  ]

  const openAlert = () => setShowAlert(true);
  const closeAlert = () => setShowAlert(false);


  return (
    <div className="App p-2">
      <Modal
        btnModal={btnModal}
        onCloseModal={onCloseModal}
        showModal={showModal}
        title='Первая модалка'
      >
        <p className='px-2'>Modal</p>
      </Modal>

      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={openModal}
        className='btn btn-primary d-block mb-2'
      >
        Модальное окно
      </motion.button>

      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={openAlert}
        className='btn btn-primary d-block mb-2'
      >
        Alert
      </motion.button>

      <Alert closeAlert={closeAlert} showAlert={showAlert} type='primary'>Hello world</Alert>
    </div>
  );
}

export default App;
