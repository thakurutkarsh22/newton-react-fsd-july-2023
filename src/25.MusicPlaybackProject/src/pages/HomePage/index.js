import { useEffect, useState } from "react";
import Loader from "../../components/commonUI/Loader/Loader";
import MusicPlayer from "../../components/Music/MusicPlayer";

function HomePage() {
  const [musicList, setMusicList] = useState([]);
  const [loading, setLoading] = useState(false);

  const [selectedMusic, setSelectedMusic] = useState({
    title: "",
    _id: "",
    audio_url: "",
    thumbnail: "",
  });

  console.log(musicList);

  useEffect(() => {
    async function fetchSongs() {
      setLoading(true);
      const url = "https://academics.newtonschool.co/api/v1/music/song";
      const myHeaders = new Headers();
      myHeaders.append("projectId", "8nbih316dv01");

      const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };

      const response = await fetch(url, requestOptions);
      const result = await response.json();
      const data = result.data;

      setMusicList(data);
      setLoading(false);
    }

    try {
      fetchSongs(); // 15sec
    } catch (error) {
      // here I will handle my errors
    }
  }, []);

  return (
    <>
      <h1>Home page</h1>
      {loading && <Loader />}
      {!loading && (
        <section>
          {musicList.map((music) => {
            const { title, _id, audio_url, thumbnail } = music;
            {
              /* TODO: music card */
            }
            return (
              <div
                onClick={() =>
                  setSelectedMusic({
                    title,
                    _id,
                    audio_url,
                    thumbnail,
                  })
                }
              >
                {title} - {_id}
              </div>
            );
          })}
        </section>
      )}
      {selectedMusic && (
        <MusicPlayer
          title={selectedMusic.title}
          _id={selectedMusic._id}
          audio_url={selectedMusic.audio_url}
          thumbnail={selectedMusic.thumbnail}
        />
      )}
    </>
  );
}

export default HomePage;
