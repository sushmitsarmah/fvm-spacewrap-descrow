import { Player } from '@livepeer/react';
 
const playbackId =
  '0b2by6taosbwlnhj';
 
import Pikachu from './banker.png';
 
const PosterImage = () => {
  return (
    <img
      src={Pikachu}
      layout="fill"
      objectFit="cover"
      priority
      placeholder="blur"
    />
  );
};
 
const LiveVideo = () => {
  return (
    <Player
      title="Waterfalls"
      playbackId={playbackId}
      showPipButton
      showTitle={false}
      aspectRatio="16to9"
      poster={<PosterImage />}
      controls={{
        autohide: 3000,
      }}
      theme={{
        borderStyles: { containerBorderStyle: 'hidden' },
        radii: { containerBorderRadius: '10px' },
      }}
    />
  );
};

export default LiveVideo;