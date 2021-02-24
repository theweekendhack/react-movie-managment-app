import {useContext} from 'react';
import ModalContext from "../context/ModalContext";

const Modal = () => {

    const {modal,hideModal} = useContext(ModalContext);

    return (
        <div  className={modal.visible === true ? "" : "hide"} onClick={()=>{

            hideModal()
        }}>

        <div className="modal" >
            <div className="modal-container">{modal.msg}</div>
        </div>

    </div>
    )
}

export default Modal
