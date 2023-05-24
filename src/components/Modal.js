import React from "react";
import ReactDOM from "react-dom";
import ConfidenceScience from './ContentBlog/ConfidenceScience';
import ScienceReligion from './ContentBlog/ScienceReligion';


const Modal = (props) => {
    if (!props.isOpen) return null; 
    
    /*

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
        } else if (props.getId === '02') {
          return (
            <div><ScienceReligion /></div>
          )
        } else if (props.getId === '03') {
          return (
            <div><ScienceReligion /></div>
          )
        } else if (props.getId === '04') {
          return (
            <div><ScienceReligion /></div>
          )
        } else if (props.getId === '05') {
          return (
            <div><ScienceReligion /></div>
          )
        } else {
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