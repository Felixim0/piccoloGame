// Set deFault values, if attrebutes are undeffined
export function dFault(t, attributeName, valueOnUndeffined) {
  if (t.hasAttribute(attributeName)) {
    if (t.getAttribute(attributeName) === 'undefined') {
      return valueOnUndeffined;
    }
    return t.getAttribute(attributeName);
  } else {
    return valueOnUndeffined;
  }
}

// Shorthand for document.createElement()
export function crEl(el, elementId = null) {
  const newElement = document.createElement(el);

  if (elementId !== null) {
    newElement.id = elementId;
  }
  return newElement;
}

export function appendClass(items, classString) {
  for (const i of items) {
    i.classList.add(classString);
  }
}

export function removeClass(items, classString) {
  for (const i of items) {
    i.classList.remove(classString);
  }
}

export function toggleClass(items, classString) {
  for (const i of items) {
    i.classList.toggle(classString);
  }
}

export function createStylesheet(location) {
  const e = document.createElement('link');
  e.setAttribute('rel', 'stylesheet');
  e.setAttribute('type', 'text/css');
  e.setAttribute('href', location);
  return e;
}

export function addMultipleStylesheets(prefix, fileNames, className) {
  const stylesContainer = document.querySelector('#styles');
  for (const stylesheet of fileNames) {
    const location = prefix + stylesheet + '.css';
    const e = createStylesheet(location);
    appendClass([e], className);
    stylesContainer.append(e);
  }
}

// Application Specific helpers
export function generateCardElements() {
  const container = crEl('div', 'card-component-container');
  const header = crEl('h1', 'card-title');
  const desc = crEl('h3', 'card-description');

  container.append(header, desc);
  return container;
}

export function placeNewName(name) {
  const container = document.querySelector('#names-container');

  // Create new name list item
  const newNameElement = crEl('li');
  newNameElement.textContent = name;
  newNameElement.id = name;

  container.append(newNameElement);
}
