import React, {useState, useMemo, createRef}  from "react";
import styles from './ContentViewer.module.scss';
import * as PropTypes from "prop-types";
import Button from "../button/Button";

const defaults = {
  controls:{
    play: {text: "play"},
    pause: {text: "pause"},
    stop: {text: "stop"},
    reset: undefined,
    volumePlus: undefined,
    volumeMinus: undefined,
    mute: {
      onState:{
        text : "muted"
      },
      offState:{
        text : "unmuted"
      }
    },
    next : undefined,
    prev : undefined,
    playPause : undefined,
    progressLine: false,
    progressBullet: false,
    volumeLine: false,
    volumeBullet: false
  },
  controlsVisible:true,
  contentVisible:true,
  startMuted:false,
  startPlaying:true,
  startFromItem: 0,
  playlistVisible: false,
  startingVolume: 100,
  noContentImage: "",
  previews: true,
  volumePerClick: 10
  // TODO: иконка-оверлей, которая появляется над компонентом когда текущий элемент видео и оно не проигрывается
};

const buttons = [
  {prop:"play"},
  {prop:"pause"},
  {prop:"stop"},
  {prop:"reset"},
  {prop:"prev"},
  {prop:"next"},
  {prop:"volumePlus"},
  {prop:"volumeMinus"}
];

const ContentViewer = (props) => {

  const settings = {...defaults, ...props};

  const {playlist, startFromItem, startPlaying} = settings;

  const video = createRef();
  const audio = createRef();

  // eslint-disable-next-line no-unused-vars
  const [playing, setPlaying] = useState(settings.startPlaying);
  const [currentItem, setCurrentItem] = useState(playlist[startFromItem] || {});
  const [showPreview, setShowPreview] = useState(true);

  const actions = useMemo(()=>{
    return {
     play: ()=>{
       play(audio, video);
       setShowPreview(false);
       setPlaying(true)
     },
     pause: ()=>{
       pause(audio, video);
       setPlaying(false)
     },
     stop: ()=>{
       pause(audio, video);
       reset(audio, video);
       setPlaying(false)
     },
     reset: ()=>{
       reset(audio, video);
       play(audio, video);
       setShowPreview(false);
       setPlaying(true)
     },
     next: ()=>{
       const currentIndex = playlist.indexOf(currentItem);
       if (currentIndex !== playlist.length - 1){
         setCurrentItem(playlist[currentIndex + 1]);
       }
       setShowPreview(true);
       if (startPlaying){
        play(audio, video);
       }
     },
     prev: ()=>{
       const currentIndex = playlist.indexOf(currentItem);
       if (currentIndex !== 0){
         setCurrentItem(playlist[currentIndex - 1]);
       }
       setShowPreview(true);
       if (startPlaying){
         play(audio, video);
       }
     }
    }
  }, [currentItem, audio, video]);


  // TODO: volume(кнопками и линией)
  // TODO: progress?
  const controls =
      <div className="content-viewer__controls">
        <div className="content-viewer__controls-buttons">
          {buttons.map((value, index) => {
            // TODO: отрисовка кнопок с состоянием
            return value && <ControlsSimpleButton
                key={index}
                className={`content-viewer__controls-buttons-${value.prop} content-viewer__controls-buttons-button`}
                data={ settings.controls[value.prop]}
                onClick={actions[value.prop]}
            />
          })}
        </div>
      </div>;

  const content =
      <div className="content-viewer__content">
        {
          // показываем картинку для изображений и аудио. для видео превью пока оно не начало проигрыватся
          (!currentItem.video || showPreview) &&
            <img className="content-viewer__content-image" alt="" src={currentItem.image}/>
        }
        {
          (currentItem.video) &&
          <video
              ref={video}
              className={
                `content-viewer__content-video 
                ${showPreview ? styles["content-viewer__content-video_hidden"] : ""}`}
              src={currentItem.video}>
            <track src={currentItem.captions} kind="captions"/>
          </video>
        }
        {
          (currentItem.audio) &&
          <audio ref={audio} className="content-viewer__content-audio" src={currentItem.audio}>
            <track src={currentItem.captions} kind="captions"/>
          </audio>
        }
      </div>;

  // TODO: playlist
  const playlistItems =
      <div className="content-viewer__playlist">
      </div>;
  return(
    <div className={`${styles["content-viewer"] || ""} ${props.className || ""} content-viewer`}>
      {settings.contentVisible && content}
      {settings.controlsVisible && controls}
      {settings.playlistVisible && playlistItems}
    </div>
  )
};

function ControlsSimpleButton({data, className, onClick}){
  return (
      data.icon ? <Button onClick={onClick} className={className}><img src={data.icon} alt=""/>{data.text}</Button> :
          <Button onClick={onClick} className={className}>{data.text}</Button>
  )
}

function pause(audio, video){
  audio.current && audio.current.pause();
  video.current && video.current.pause();
}

function play(audio, video){
  console.log("PLAY", video.current);
  audio.current && audio.current.play();
  video.current && video.current.play();
}

function reset(audio, video){
  if (audio.current) audio.current.currentTime = 0;
  if (video.current) video.current.currentTime = 0;
}



ContentViewer.propTypes = {
  /**
   * Элементы управления
   */
  controls: PropTypes.object,
  /**
   * Видимость элементов управления
   */
  controlsVisible: PropTypes.bool,
  /**
   * Видимость окна контента (для аудиоплеера)
   */
  contentVisible:PropTypes.bool,
  /**
   * Начать с отключенным звуком
   */
  startMuted:PropTypes.bool,
  /**
   * Начать проигрывая контент
   */
  startPlaying:PropTypes.bool,
  /**
   * Номер элемента плейлиста, с которого начинается воспроизведение
   */
  startFromItem: PropTypes.number,
  /**
   * Видимость плейлиста
   */
  playlistVisible: PropTypes.bool,
  /**
   * Изначальная громкость
   */
  startingVolume: PropTypes.number,
  /**
   * Изображение которое будет отображаться если нет контента
   */
  noContentImage: PropTypes.string,
  /**
   * Показывать ли превью видео до начала проигрывания
   */
  previews: PropTypes.bool,
  /**
   * Значение на которое изменяется громкость при клике на кнопки увеличения и уменьшения громкости
   */
  volumePerClick: PropTypes.number,
};

ContentViewer.displayName = "ParallaxContainer";

ContentViewer.defaultProps = defaults;

export default ContentViewer;
