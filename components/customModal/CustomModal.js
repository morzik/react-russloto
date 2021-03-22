import React from "react";
import PropTypes from 'prop-types';
import {closeModal} from "../../redux/reducer/modals";
import {useDispatch} from "react-redux";
import {TransitionGroup, CSSTransition} from "react-transition-group";

const CustomModal = (props) => {
  const dispatch = useDispatch();
  return (
    <TransitionGroup>
      <div className={`custom-modal ${props.animation} ${props.horizontalPosition} ${props.verticalPosition}`}>
        <div className={"custom-modal__bg"}/>
        <div className={"custom-modal__block"}>
          <div className={"custom-modal__content"}>
            <div className={"custom-modal__close-btn"} onClick={() => {
              dispatch(closeModal({all: true}))
            }}>
              <div className={"custom-modal__close-btn-icon"}/>
            </div>
            {props.children}
          </div>
        </div>
      </div>
    </TransitionGroup>
  )
};

CustomModal.propTypes = {
  /*
   * fade
   * scale
   * slide-right
   * slide-in
   * fall
   * side-fall
   * flip-horiz
   * flip-vert
   * super-scale
   * rotate-left
   */
  animation: PropTypes.string,
  /*
   * custom-modal_left
   * custom-modal_right
   * custom-modal_center
   */
  horizontalPosition: PropTypes.string,
  /*
   * custom-modal_top
   * custom-modal_bottom
   * custom-modal_middle
   */
  verticalPosition: PropTypes.string
};

export default CustomModal;
