import {useSelector} from "react-redux";
import React from "react";
import {CSSTransition, TransitionGroup} from "react-transition-group";

function ModalController({modalStorage}){
    useSelector(data=>data.modalReducer);
    const modals = modalStorage ? modalStorage.map((val) =>
      <CSSTransition key={val.id} classNames={'custom-modal'} timeout={{enter:500, exit:500}}>
        {val.modal}
      </CSSTransition>
    ) : <></>;

    return (
        <TransitionGroup component={null}>
            {modals}
        </TransitionGroup>
    )
}

export default ModalController;
