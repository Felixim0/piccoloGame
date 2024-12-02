import { createStylesheet } from '../helpers/element-creation.mjs';

class AnimatedDiv extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    // Add shadow dom
    const shadow = this.attachShadow({ mode: 'closed' });

    // Link styles
    const e = createStylesheet('client/animated-div/animated-div.css');
    shadow.append(e);

    // Create a container div
    const container = document.createElement('div');
    container.id = 'card';
    container.classList.add('card');

    const someText = document.createElement('p');
    someText.textContent = 'This is a card. TEST Text is here hopefully it iwll work';
    container.appendChild(someText);

    // Append the container to the shadow root
    shadow.appendChild(container);
  }
}

customElements.define('animated-div', AnimatedDiv);
