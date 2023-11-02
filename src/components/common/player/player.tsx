type PlayerProps = {
  autoPlay: boolean;
  muted: boolean;
  videoLink: string;
};

function Player(props: PlayerProps) {
  return (
    <video
      src={props.videoLink} width="280" height="175"
      autoPlay={props.autoPlay}
      muted={props.muted}
    >
    </video>
  );
}

export default Player;
