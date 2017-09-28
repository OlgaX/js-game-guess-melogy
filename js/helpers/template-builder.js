const templateBuilder = (templateString) => {
  let template = document.createElement(`template`);
  template.innerHTML = templateString;
  return template.content;
};

export default templateBuilder;
