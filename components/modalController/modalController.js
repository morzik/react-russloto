import {useSelector} from "react-redux";
import React from "react";

function ModalController({modalStorage}){
    useSelector(data=>data.modalReducer);
    const modals = modalStorage ? modalStorage.map((val) =>
        <React.Fragment key={val.id}>
            {val.modal}
        </React.Fragment>
    ) : <></>;

    return (
        <>
            {modals}
        </>
    )
}

export default ModalController;