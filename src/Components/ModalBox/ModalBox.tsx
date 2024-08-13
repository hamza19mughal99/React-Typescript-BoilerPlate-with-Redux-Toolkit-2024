import { ReactNode } from "react";
import { Modal } from 'react-bootstrap';

interface IModal {
    children: ReactNode
    show: boolean
    heading: string
    handleClose: () => void
}

const ModalBox = ({ children, show, handleClose, heading }: IModal) => {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>
                    {heading}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {children}
            </Modal.Body>
        </Modal>
    )
}
export default ModalBox;