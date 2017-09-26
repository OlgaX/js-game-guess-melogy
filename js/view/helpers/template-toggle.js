const output = document.querySelector(`.main`);

const templateToggle = (template) => {
  output.innerHTML = ``;
  return output.appendChild(template);
};

export default templateToggle;
