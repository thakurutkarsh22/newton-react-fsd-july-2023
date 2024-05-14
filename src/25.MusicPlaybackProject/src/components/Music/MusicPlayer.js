import { useContext } from "react";
import useUser from "../../customHooks/useUser";
import { UserContext } from "../../providers/UserProvider";

function MusicPlayer(props) {
  const { title, _id, audio_url, thumbnail } = props;
  const { getToken } = useContext(UserContext);

  const isFavSong = true;

  return (
    <>
      <div className="music-player" id={_id}>
        <img className="music-player-image" src={thumbnail} />
        <div className="music-title">{title}</div>
        <audio controls src={audio_url}></audio>
        {!isFavSong && getToken && <i class="fa-regular fa-heart"></i>}
        {isFavSong && getToken && <i class="fa-solid fa-heart"></i>}
        <i class="fa-regular fa-heart"></i>
      </div>
    </>
  );
}

export default MusicPlayer;
