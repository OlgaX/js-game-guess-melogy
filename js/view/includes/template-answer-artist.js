import templateBuilder from '../helpers/template-builder';

const templateAnswerArtist = (song) => {
  const template = `
    <div class="js-show-next-screen main-answer-wrapper">
      <input class="main-answer-r" type="radio" id="answer-${song.id}" name="answer" value="val-${song.id}" />
      <label class="main-answer" for="answer-${song.id}">
        <img class="main-answer-preview" src="./music/${song.img}">
        ${song.artist}
      </label>
    </div>
`;

  return templateBuilder(template);
};

export default templateAnswerArtist;
