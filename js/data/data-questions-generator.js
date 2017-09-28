import dataSongs from './data-songs';
import templateNames from '../helpers/template-names';

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function compareRandom(a, b) {
  return Math.random() - 0.5;
}

function CustomException(value, message) {
  this.value = value;
  this.message = message;
  this.toString = () => {
    return `${this.value} => ${this.message}`;
  };
}

const dataQuestionsGenerator = (totalQuestions = 10) => {
  const maxQuestions = 10;

  if (!isNumeric(totalQuestions) || totalQuestions < 1 || totalQuestions > maxQuestions) {
    throw new CustomException(totalQuestions, `is not numeric`);
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
        questionType: templateNames.ARTIST,
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
        questionType: templateNames.GENRE,
        answer: songs.filter((song) => song.genre === songs[0].genre),
        variants: songs.sort(compareRandom)
      });
    }
  }

  return dataQuestions;
};

export default dataQuestionsGenerator;
