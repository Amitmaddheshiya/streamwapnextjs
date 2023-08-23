import VideoJs from "video.js";
import "videojs-hotkeys";
import "videojs-contrib-quality-levels";
import "videojs-hls-quality-selector";
import "videojs-seek-buttons";
import 'video.js/dist/video-js.css';
import "videojs-seek-buttons/dist/videojs-seek-buttons.css";
import '@videojs/themes/dist/city/index.css';
import '@videojs/themes/dist/fantasy/index.css';
import '@videojs/themes/dist/forest/index.css';
import '@videojs/themes/dist/sea/index.css';

import {
  useRef,
  useEffect
} from "react";

const index = ()=>{
  const video = useRef();
  const player = useRef(null);

  const options = {
    autoplay: false,
    controls: true,
    sources: [
      {
        src: '/index.m3u8',
        type: "application/x-mpegURL"
      }
    ],
    fluid: true,
    playbackRates: [0.5,1,1.5,2,2.5]
  }

  const onReady = (player)=>{
    player.hotkeys({
      alwaysCaptureHotkeys: true,
      seekStep: 10,
      enableVolumeScroll: true
    });

    player.seekButtons({
      forward: 10,
      back: 10
    });
    player.hlsQualitySelector({
      displayCurrentQuality: true
    });
  }

  useEffect(()=>{
    player.current = VideoJs(video.current,options,()=>onReady(player.current));
    return ()=>{
      player.current.dispose();
      player.current = null;
    }
  },[]);

  const update = ()=>{
    player.current.src({
      src: '/test.mp4',
      type: 'video/mp4'
    });
  }

  const uploadAndPlay = (e)=>{
    const input = e.target;
    const file = input.files[0];
    const url = URL.createObjectURL(file);
    player.current.src({
      src: url,
      type: 'video/mp4'
    });
  }

  const design = (
    <>
      <div className="w-9/12">
        <video ref={video} className="video-js vjs-big-play-centered vjs-theme-city" />
      </div>
    </>
  );
  return design;
}

export default index;
