import React, {useState, useCallback} from "react";
import * as PropTypes from "prop-types";

const defaults = {
  up: "button_up",
  down: "button_down",
  hover: "button_hover",
  tag: "div"
};

const Button = (props) => {
  const [pressed, setPressed] = useState(false);
  const [hover, setHover] = useState(false);
  const settings = {...defaults, ...props};
  const Tag = settings.tag;

  const pressedOn = useCallback(() => setPressed(true),[]);
  const pressedOff = useCallback(() => setPressed(false),[]);
  const hoverOn = useCallback(() => setHover(true),[]);
  const hoverOff = useCallback(() => setHover(false),[]);
  return (
    <Tag
        {...props}
        className = {
          `button ${pressed ? settings.down : hover ? settings.hover : settings.up} ${props.className || ""}`
        }
        onMouseUp={pressedOff}
        onMouseDown={pressedOn}
        onMouseMove={hoverOn}
        onMouseLeave={hoverOff}

        onTouchStart={pressedOn}
        onTouchEnd={pressedOff}
        onTouchCancel={pressedOff}
    >
    {props.children}
  </Tag>)
};

Button.defaultProps = defaults;

Button.propTypes = {
  /**
   * Все пропы пробрасываются. Так что можно сделать кнопку с тегом a и пробросить проп href, для получения ссылки
   */
  tag: PropTypes.string,
  /**
   * Класс по умолчанию
   */
  up: PropTypes.string,
  /**
   * Класс когда кнопка нажата
   */
  down: PropTypes.string,
  /**
   * Класс на ховер
   */
  hover: PropTypes.string,
};

export default Button;

