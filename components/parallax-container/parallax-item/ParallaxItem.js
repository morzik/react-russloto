import React from 'react';

export default function ParallaxItem(props) {
    const {children} = props;

    const style = {
        position: 'absolute',
        transform: props.transform,
        transition: props.parentTransition,
        ...props.style,
    };
    if (Array.isArray(children) || typeof children === "string"){
        // в элементе лежит только текст или несколько детей. заворачиваем их в div для стилизации
        return (<div
            className="parallax-item"
            style={style}>
            {children}
        </div>)
    }else{
        // в элементе лежит только один элемент. дописываем ему нужные стили и класс
        return React.cloneElement(
            children,
            {
                ...children.props,
                ...{
                    ...{style},
                    ...{className: `${children.props.className ? children.props.className : ""} parallax-item`}
                }
            }
        );
    }
}
