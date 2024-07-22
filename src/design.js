import _ from 'lodash';
import './styles/main.scss';


document.addEventListener('DOMContentLoaded', function() {
  const colorBlocks = document.querySelectorAll('.color');

  colorBlocks.forEach(block => {
      const className = block.classList[1]; // Assuming the second class is the color class
      const classWithoutColorPrefix = className.replace('color-', ''); // Remove 'color-' prefix
      const computedColor = getComputedStyle(block).getPropertyValue(`--${className}`).trim();
      
      block.style.backgroundColor = computedColor;
      block.setAttribute('data-label', `${classWithoutColorPrefix}:`); // Set data attribute with class name without 'color-' prefix and value
        block.setAttribute('data-value', computedColor); // Set data attribute with computed color value
    });
});