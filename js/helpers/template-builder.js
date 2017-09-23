const templateBuilder = (templateString) => {
  let template = document.createElement(`template`);
  template.innerHTML = templateString;
  return document.importNode(template.content, true);
};

export default templateBuilder;
