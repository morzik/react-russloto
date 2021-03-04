import React, {useEffect, useState, createRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import styles from './ParallaxContainer.module.scss';
import getId from '../../utils/getId';
import * as PropTypes from "prop-types";
import {
  saveRef, getControllerValueHelper, requestPlugin, unsubscribe,
} from '../../redux/reducer/controller';
import {intersectionObserver} from "../controller/controller";

import mousePlugin from "./plugins/mousePlugin";
import scrollPlugin from "./plugins/scrollPlugin";
import orientationPlugin from "./plugins/orientationPlugin.js";

const defaults = {
  maximum: {x: 0, y: 0},
  touch: false,
  mouse: true,
  orientation: false,
  scroll: false,
  global: true, // если true то mousecontroller и scrollcontroller будут вешаться на window вместо контейнера
  referencePoint: {x: 0.5, y: 0.5},
  cameraPosition: 1,
  type: "default"
};

const pluginSettings = {
  default: (settings) => {
    return [
      {
        plugin: mousePlugin,
        type: "MouseController",
        activationProps: ["mouse", "touch"],
        props: {
          noMouse: !settings.mouse,
          noTouch: !settings.touch,
          window: settings.global,
          catching: settings.catching
        }
      },
      {
        plugin: orientationPlugin,
        type: "OrientationController",
        activationProps: ["orientation"]
      },
      {
        plugin: scrollPlugin,
        type: "ScrollController",
        activationProps: ["scroll"],
        props: {window: settings.global}
      }
    ]
  }
};

function ParallaxContainer(props) {

  const setValues = useSelector((state) => state.controllerReducer);

  const settings = {...defaults, ...props};

  const ref = createRef();

  const [id, setId] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [plugins] = useState(pluginSettings[settings.type](settings));

  const dispatch = useDispatch();

  useEffect(() => {
    // onMount
    const newId = getId();
    setId(newId);
    saveRef(ref.current, newId);

    let pluginWasActivated = false;
    saveRef(ref.current, newId);
    // подписываемся на плагины
    plugins.forEach(plugin => {
      let activatePlugin = plugin.activationProps === undefined || plugin.activationProps.length === 0;
      if (!activatePlugin) {
        plugin.activationProps.forEach(prop => {
          if (settings[prop]) activatePlugin = true;
        });
      }
      if (activatePlugin) {
        dispatch(requestPlugin({plugin: plugin.type, uuid: newId || id, props: plugin.props}));
      }
      pluginWasActivated = pluginWasActivated || activatePlugin;
    });
    if (!pluginWasActivated) console.warn("ParallaxContainer: no plugin is activated");

    // Intersection observer, чтобы откючать параллакс когда контейнер не виден
    ref.current.addEventListener("controller-intersection-observer:visibility", ({detail}) => {
      setIsVisible(detail);
    });

    const observeredElement = ref.current;

    intersectionObserver.observe(observeredElement);
    return () => {
      intersectionObserver.unobserve(observeredElement);
      // убираем реф из хранилища
      saveRef(undefined, newId);
      // отписываемся от плагинов. если элемент был последним подписчиком, плагин будет удалён
      plugins.forEach(plugin => {
        dispatch(unsubscribe({plugin: plugin.type, uuid: newId || id}));
      });
    };
  }, []);

  const controllers = [];
  plugins.forEach(plugin => {
    controllers[plugin.type] = getControllerValueHelper(setValues.plugins, id, plugin.type);
  });

  return (
    <div
      className={styles["parallax-container"]}
      ref={ref}
      style={props.style}
    >
      {React.Children.map(props.children, (child) => {
        if (!isVisible) return child;
        let transform;
        const {depth} = child.props;

        let coords = {...settings.maximum};

        plugins.forEach(plugin => {
          coords = plugin.plugin(coords, controllers, settings, depth);
        });

        transform = `translate3d(${coords.x}px, ${coords.y}px, 0) rotate(0.0001deg)`;

        const props = {
          transform
        };

        if (React.isValidElement(child)) {
          return React.cloneElement(child, {...child.props, ...props});
        }
        return child;
      })}
    </div>
  );
}

ParallaxContainer.propTypes = {
  /**
   * Максимальное смещение параллакса
   */
  maximum: PropTypes.object,
  touch: PropTypes.bool,
  mouse: PropTypes.bool,
  /**
   * Тип контейнера. По нему компонент будет забирать настройки плагинов из pluginSettings.
   * Если этот проп не указан, то будет использоваться настройка default
   */
  type: PropTypes.string,
  /**
   * Параллакс на акселерометр (если включен, то приоритетнее мыши и тача)
   */
  orientation: PropTypes.bool,
  /**
   * Параллакс на Скролл
   */
  scroll: PropTypes.bool,
  /**
   * Глобальный. Если true, то слушатели будут ставиться на window, если false то на контейнер
   */
  global: PropTypes.bool,
  /**
   * Центр смещения
   */
  referencePoint: PropTypes.object,
  /**
   * Позиция камеры по глубине (0-1). Чтобы указать элементам ParallaxItem
   * положение относительно камеры задайте им проп depth (0-1)
   */
  cameraPosition: PropTypes.number,
  /**
   * Догоняние (0-1). Пробрасывает в запрос MouseController проп catching с данным значением
   */
  catching: PropTypes.number
};
ParallaxContainer.displayName = "ParallaxContainer";

ParallaxContainer.defaultProps = defaults;

export default ParallaxContainer;
