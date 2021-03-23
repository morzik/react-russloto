import {useSelector} from "react-redux";
import React from "react";
import {CSSTransition, TransitionGroup} from "react-transition-group";

function ModalController({modalStorage}){
    useSelector(data=>data.modalReducer);
    const modals = modalStorage ? modalStorage.map((val) =>
      <CSSTransition key={val.id} classNames={'fade-modal'} timeout={300}>
        <React.Fragment>
            {val.modal}
        </React.Fragment>
      </CSSTransition>
    ) : <></>;

    return (
        <TransitionGroup>
            {modals}
        </TransitionGroup>
    )
}

export default ModalController;
