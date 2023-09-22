import { useEffect } from "react";
import LinkNavBar from "./LinkNavBar";
import { useDispatch, useSelector } from "react-redux";
import { setAlbum } from "../redux/actions";
import AlbumList from "./AlbumList";

const HomePage = () => {
  const home = useSelector((state) => state.home.content);

  const dispatch = useDispatch();

  let rockArtists = ["queen", "u2", "thepolice", "eagles", "thedoors", "oasis", "thewho", "bonjovi"];

  let popArtists = ["maroon5", "coldplay", "onerepublic", "jamesblunt", "katyperry", "arianagrande"];

  let hipHopArtists = ["eminem", "snoopdogg", "lilwayne", "drake", "kanyewest"];

  let rockRandomArtists = [];
  let popRandomArtists = [];
  let hipHopRandomArtists = [];
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleArtist = async (artistName) => {
    try {
      let response = await fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=" + artistName, {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": "347ef859a8msh40eb9265293372cp1dd2b6jsn8a5bcce294cd",
          "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
        },
      }); // gets the information
      if (response.ok) {
        let data = await response.json();
        let result = await data.data;
        // console.log(result);
        dispatch(setAlbum(result[0]));
      } else {
        console.log("error");
      }
    } catch (err) {
      console.log(err);
    }
  };
  const artistGenerator = async () => {
    while (rockRandomArtists.length < 4) {
      let artist = rockArtists[Math.floor(Math.random() * rockArtists.length)]; // select an element from the array with an index between 0 and 7
      if (!rockRandomArtists.includes(artist)) {
        rockRandomArtists.push(artist); // pushes the artist in the array
      }
    }

    while (popRandomArtists.length < 4) {
      let artist = popArtists[Math.floor(Math.random() * popArtists.length)];
      if (!popRandomArtists.includes(artist)) {
        popRandomArtists.push(artist);
      }
    }

    while (hipHopRandomArtists.length < 4) {
      let artist = hipHopArtists[Math.floor(Math.random() * hipHopArtists.length)];
      if (!hipHopRandomArtists.includes(artist)) {
        hipHopRandomArtists.push(artist);
      }
    }

    for (let j = 0; j < rockRandomArtists.length; j++) await handleArtist(rockRandomArtists[j], "#rockSection");

    for (let k = 0; k < popRandomArtists.length; k++) await handleArtist(popRandomArtists[k], "#popSection");

    for (let l = 0; l < hipHopRandomArtists.length; l++) await handleArtist(hipHopRandomArtists[l], "#hipHopSection");
  };

  useEffect(() => {
    artistGenerator();
  }, []);
  return (
    <>
      <LinkNavBar />
      <AlbumList title="Rock Classic" />
      <AlbumList title="Pop Culture" />
      <AlbumList title="Hip Hop" />
    </>
  );
};

export default HomePage;
