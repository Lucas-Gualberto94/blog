import React from "react";
import ReactDOM  from "react-dom";
import ScienceReligion from "./ContentBlog/ScienceReligion";

const Modal = (props) => {
    if (!props.openModal) return null

    return ReactDOM.createPortal(
        <>
            <div className="box-1"></div>
            <div className="box">
                <ScienceReligion />
                <button onClick={props.onClose}>Back</button>
            </div>
        </>,
        document.getElementById('portal')
    )
}

export default Modal;