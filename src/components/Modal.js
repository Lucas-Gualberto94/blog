import React from "react";
import ReactDOM from "react-dom";
import ConfidenceScience from './ContentBlog/ConfidenceScience';
import ScienceReligion from './ContentBlog/ScienceReligion';


const Modal = (props) => {
    if (!props.isOpen) return null; 
    
    /*if (props.getId === '01') {
        return <ConfidenceScience />;   
    } else {
        return <ScienceReligion />;   
    }

    else if (otherCase) {
          return (
            <div>otherCase</div>
          )
        }
    */

    return ReactDOM.createPortal(
        <>
            <div className="box-1"></div>
            <div className="box">
            {(() => {
        if (props.getId === '01') {
          return (
            <div><ConfidenceScience /></div>
          )
        }  else {
          return (
            <div><ScienceReligion /></div>
          )
        }
      })()}
                    
                <button onClick={props.onClose}>Back</button>
            </div>
        </>,
        document.getElementById('portal')
    )
}

export default Modal;