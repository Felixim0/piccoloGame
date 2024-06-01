function checkAndSet(elementName, defaultValue) {
  const key = localStorage.getItem(elementName);
  if (!key) {
    localStorage.setItem(elementName, JSON.stringify(defaultValue));
  }
}

export function getNames() {
  checkAndSet('names', []);
  return JSON.parse(localStorage.getItem('names'));
}

export function addName(newName) {
  checkAndSet('names', []);

  const names = getNames();
  names.push(newName);

  localStorage.setItem('names', JSON.stringify(names));
}

export function clearNames() {
  localStorage.setItem('names', []);
}

export function removeLastNameFromLocalStorage() {
  const names = getNames();
  names.pop();
  clearNames();
  for (const nameToAdd of names) {
    addName(nameToAdd);
  }
}
