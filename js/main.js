let currentTemplate = 0;

const output = document.querySelector(`.main`);

const templates = document.querySelector(`#templates`);
const templatesClone = document.importNode(templates.content, true);

const templatesNames = [
  `.main--welcome`,
  `.main--level-artist`,
  `.main--level-genre`,
  `.main--result`
];

const templatesArr = [];

templatesNames.forEach((selector) => templatesArr.push(...templatesClone.querySelectorAll(selector)));

const templatesTotal = templatesArr.length;

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function showTemplate(index) {
  if (!isNumeric(+index)) {
    return false;
  }

  currentTemplate = +index;

  if (currentTemplate >= templatesTotal) {
    currentTemplate = 0;
  } else if (currentTemplate < 0) {
    currentTemplate = templatesTotal - 1;
  }

  output.innerHTML = ``;
  output.appendChild(templatesArr[currentTemplate]);
  return currentTemplate;
}

showTemplate(currentTemplate);

document.addEventListener(`keyup`, function (e) {
  if (e.altKey && e.keyCode === 39) {
    showTemplate(currentTemplate + 1);
  } else if (e.altKey && e.keyCode === 37) {
    showTemplate(currentTemplate - 1);
  }
});
