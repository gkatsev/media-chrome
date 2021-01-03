import MediaChromeHTMLElement from './media-chrome-html-element.js';
import { defineCustomElement } from './utils/defineCustomElement.js';

const template = document.createElement('template');

template.innerHTML = `
  <style>
    :host {
      display: block;
      position: relative;
      width: 100%;
      border: 1px solid #f00;
      background-color: #000;
    }
  </style>
  <slot></slot>
`;

class MediaChromeMenu extends MediaChromeHTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  mediaSetCallback(media) {

  }
}

defineCustomElement('media-chrome-menu', MediaChromeMenu);

export default MediaChromeMenu;
