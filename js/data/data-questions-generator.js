import dataSongs from './data-songs';

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function compareRandom(a, b) {
  return Math.random() - 0.5;
}

const dataQuestionsGenerator = (totalQuestions = 10) => {
  if (!isNumeric(totalQuestions) || totalQuestions < 1) {
    return false;
  }

  let dataQuestions = [];

  const randomArtists = [];


  for (let i = 0; i < totalQuestions; i++) {
    const totalSongs = dataSongs.length;
    const rand = Math.random();

    if (rand < 0.5) {
      const songs = [];

      const randomSongs = [];

      while (songs.length < 3) {
        const randomSong = getRandomInt(0, totalSongs - 1);

        const inRandomArtists = (randomArtists.find((artist) => artist === randomSong)) >= 0;
        const inRandomSongs = (randomSongs.find((artist) => artist === randomSong)) >= 0;

        if (!inRandomArtists && !inRandomSongs) {
          if (songs.length === 0) {
            randomArtists.push(randomSong);
          }
          randomSongs.push(randomSong);
          songs.push(dataSongs[randomSong]);
        }
      }

      dataQuestions.push({
        questionType: `artist`,
        answer: songs[0],
        variants: songs.sort(compareRandom)
      });
    } else {
      const songs = [];

      const randomSongs = [];

      while (songs.length < 4) {
        const randomSong = getRandomInt(0, totalSongs - 1);

        const inRandomSongs = randomSongs.find((artist) => artist === randomSong) >= 0;

        if (!inRandomSongs) {
          randomSongs.push(randomSong);
          songs.push(dataSongs[randomSong]);
        }
      }

      dataQuestions.push({
        questionType: `genre`,
        answer: songs.filter((song) => song.genre === songs[0].genre),
        variants: songs.sort(compareRandom)
      });
    }
  }

  return dataQuestions;
};

export default dataQuestionsGenerator;
