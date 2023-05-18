import React from "react";

const Modal = (props) => {
    if(!props.openModal) return null
    return (
        <>
        <div className="box-1"></div>
        <div className="box">
            <h2>teste</h2>
            <h3>afs fass sffsdddgs  sffafafafaf
                 fawsfsfaf f esdsfsd sfsdg ete grr esswegessegse wge sssggss wesgsgssg
                  sdgeg erer 
                    wegsgddre gerrgdgd gd
                    afs fass sffsdddgs  sffafafafaf
                 fawsfsfaf f esdsfsd sfsdg ete grr esswegessegse wge sssggss wesgsgssg
                  sdgeg erer 
                    wegsgddre gerrgdgd gd
            </h3>
            <button onClick={props.onClose}>Back</button>
        </div>
        </>
    )
}

export default Modal;