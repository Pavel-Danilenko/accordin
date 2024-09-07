/*----------PARALAX  -----------*/


const page = document.querySelector('.page');
const parallaxItems = document.querySelectorAll('.header__inset');
const defaultSpeed = 0.05;

let posX = 0, posY = 0;
let cXprocent = 0, cYprocent = 0;

page.addEventListener('mousemove', parallaxAnimation);

function parallaxAnimation(e) {
   const parallaxWidth = window.innerWidth;
   const parallaxHeight = window.innerHeight;

   const cX = e.pageX - parallaxWidth / 2;
   const cY = e.pageY - parallaxHeight / 2;

   cXprocent = cX / parallaxWidth * 100;
   cYprocent = cY / parallaxHeight * 100;
}

function setParallaxAnimationStyle() {
   const distX = cXprocent - posX;
   const distY = cYprocent - posY;

   parallaxItems.forEach(parallaxItem => {
      const speed = parallaxItem.dataset.prxSpeed ? +parallaxItem.dataset.prxSpeed : defaultSpeed;

      posX += distX * speed;
      posY += distY * speed;

      const valueX = parallaxItem.dataset.prxX ? +parallaxItem.dataset.prxX : 1;
      const valueY = parallaxItem.dataset.prxY ? +parallaxItem.dataset.prxY : 1;

      const translateX = valueX !== 0 ? posX / valueX : 0;
      const translateY = valueY !== 0 ? posY / valueY : 0;

      parallaxItem.style.transform = `translate(${translateX}%, ${translateY}%)`;
   });

   requestAnimationFrame(setParallaxAnimationStyle);
}

setParallaxAnimationStyle();

/*-----------paralax new-------------*/

"use strict"


window.addEventListener('load', windowLoad);

function windowLoad() {
   document.documentElement.classList.add('loaded');

   //mouse parallax
   const page = document.querySelector('.page');
   const parallaxItems = document.querySelectorAll('[class*="__inset"]');
   const speed = 0.05;

   let posX = 0;
   let cXprocent = 0;

   page.addEventListener('mousemove', parallaxAnimation);

   function parallaxAnimation(e) {
      const parallaxWidth = window.innerWidth;
      const cX = e.pageX - parallaxWidth / 2;
      cXprocent = cX / parallaxWidth * 100;
   }
   function setParallaxAnimationStyle(e) {
      const distX = cXprocent - posX;
      posX = posX + (distX * speed);

      parallaxItems.forEach(parallaxItem => {
         const value = parallaxItem.dataset.prxValue ?
            +parallaxItem.dataset.prxValue : 1;
         
         parallaxItem.style.cssText = `
         transform: translateX(${posX / value}%);
         `;
      });
      requestAnimationFrame(setParallaxAnimationStyle);
   }
   setParallaxAnimationStyle();

}


/*-----------------add at---------*/

document.addEventListener("DOMContentLoaded", function () {
   document.querySelectorAll('.prlx__true').forEach(element => {
      element.setAttribute('data-prx-valueX', '8'); 
      element.setAttribute('data-prx-valueY', '9');
      element.setAttribute('data-speed', '8'); //set the animation delay
      element.setAttribute('data-reverse', ''); //here we change the movement of the animation in the opposite direction; if you do not need it, just delete the line
   });
});

/*-----------prx mouse Y and X---------------*/

"use strict";

window.addEventListener('load', windowLoad);

function windowLoad() {
   //adds a class to the html tag when the page is fully rendered
   document.documentElement.classList.add('loaded');

   //set the class to the section where you want to move the mouse and have the animation happen
   const page = document.querySelector('.prlx__page');

   //add classes to the blocks you want to animate
   const parallaxItems = document.querySelectorAll('.prlx__true');

   // Validate if elements are present
   if (!page || parallaxItems.length === 0) {
      console.warn('Parallax elements are missing.');
      return;
   }

   const speed = 0.05;

   let posX = 0;
   let posY = 0;
   let cXprocent = 0;
   let cYprocent = 0;

   page.addEventListener('mousemove', parallaxAnimation);

   function parallaxAnimation(e) {
      const parallaxWidth = window.innerWidth;
      const parallaxHeight = window.innerHeight;
      const cX = e.pageX - parallaxWidth / 2;
      const cY = e.pageY - parallaxHeight / 2;
      cXprocent = cX / parallaxWidth * 100;
      cYprocent = cY / parallaxHeight * 100;
   }

   function setParallaxAnimationStyle() {
      const distX = cXprocent - posX;
      const distY = cYprocent - posY;
      posX = posX + (distX * speed);
      posY = posY + (distY * speed);

      parallaxItems.forEach(parallaxItem => {
         // Check if necessary attributes are present
         const prxValueX = parseFloat(parallaxItem.getAttribute('data-prx-valueX'));
         const prxValueY = parseFloat(parallaxItem.getAttribute('data-prx-valueY'));
         const animationDelay = parseFloat(parallaxItem.getAttribute('data-speed')) || 1;
         const isReversed = parallaxItem.hasAttribute('data-reverse');

         const delayFactor = animationDelay > 1 ? animationDelay * 100 : 0; // Adjust as needed

         parallaxItem.style.transition = `transform ${delayFactor}ms ease-out`; // Apply animation delay

         let translateX = 0;
         let translateY = 0;

         if (prxValueX !== 0) {
            translateX = (isReversed ? -posX : posX) / (prxValueX || 1);
         }

         if (prxValueY !== 0) {
            translateY = (isReversed ? -posY : posY) / (prxValueY || 1);
         }

         parallaxItem.style.transform = `translate(${translateX}%, ${translateY}%)`;
      });

      requestAnimationFrame(setParallaxAnimationStyle);
   }

   setParallaxAnimationStyle();
}


// Scroll parallax

class Parallax {
   constructor(elements) {
      if (elements.length) {
         console.log('Parallax elements:', elements);
         this.elements = Array.from(elements).map((el) => (
            new Parallax.Each(el)
         ));
      }
   }
   destroyEvents() {
      this.elements.forEach(el => {
         el.destroyEvents();
      });
   }
   setEvents() {
      this.elements.forEach(el => {
         el.setEvents();
      });
   }
}

Parallax.Each = class {
   constructor(parent) {
      this.parent = parent;
      this.elements = this.parent.querySelectorAll('[data-prlx]');
      console.log('Parent:', this.parent);
      console.log('Child elements:', this.elements);
      this.animation = this.animationFrame.bind(this);
      this.offset = 0;
      this.value = 0; // Initialize value to 0
      this.smooth = parent.dataset.prlxSmooth ? Number(parent.dataset.prlxSmooth) : 15;
      this.setEvents();
   }
   setEvents() {
      this.animationID = window.requestAnimationFrame(this.animation);
   }
   destroyEvents() {
      window.cancelAnimationFrame(this.animationID);
   }
   animationFrame() {
      const topToWindow = this.parent.getBoundingClientRect().top;
      const heightParent = this.parent.offsetHeight;
      const heightWindow = window.innerHeight;
      const positionParent = {
         top: topToWindow - heightWindow,
         bottom: topToWindow + heightParent,
      };
      const centerPoint = this.parent.dataset.prlxCenter ?
         this.parent.dataset.prlxCenter : 'center';

      console.log('Position Parent:', positionParent);
      console.log('Center Point:', centerPoint);

      if (positionParent.top < 30 && positionParent.bottom > -30) {
         switch (centerPoint) {
            case 'top':
               this.offset = -1 * topToWindow;
               break;
            case 'center':
               this.offset = (heightWindow / 2) - (topToWindow + (heightParent / 2));
               break;
            case 'bottom':
               this.offset = heightWindow - (topToWindow + heightParent);
               break;
         }
      }

      // Smooth transition for this.value
      this.value += (this.offset - this.value) / this.smooth;

      this.animationID = window.requestAnimationFrame(this.animation);

      console.log('Offset:', this.offset);
      console.log('Value:', this.value);

      this.elements.forEach(el => {
         const parameters = {
            axis: el.dataset.axis ? el.dataset.axis : 'v',
            direction: el.dataset.direction ? el.dataset.direction + '1' : '-1',
            coefficient: el.dataset.coefficient ? Number(el.dataset.coefficient) : 5,
            additionalProperties: el.dataset.properties ? el.dataset.properties : '',
         };
         console.log('Parameters:', parameters);
         this.parameters(el, parameters);
      });
   }
   parameters(el, parameters) {
      el.style.willChange = 'transform'; // Add will-change property

      if (parameters.axis === 'v') {
         el.style.transform = `translate3D(0, ${(parameters.direction * (this.value / parameters.coefficient)).toFixed(2)}px, 0) ${parameters.additionalProperties}`;
      } else if (parameters.axis === 'h') {
         el.style.transform = `translate3D(${(parameters.direction * (this.value / parameters.coefficient)).toFixed(2)}px, 0, 0) ${parameters.additionalProperties}`;
      }

      // Adjust opacity if data-opacity attribute is present
      if (el.dataset.opacity) {
         const opacity = 1 - Math.abs(this.value / 100); // Example adjustment based on scroll value
         el.style.opacity = opacity.toFixed(2);
      }
   }
};

document.addEventListener('DOMContentLoaded', () => {
   const prlxParents = document.querySelectorAll('[data-prlx-parent]');
   if (prlxParents.length) {
      console.log('Initializing Parallax');
      window.flsModules.parallax = new Parallax(prlxParents);
   } else {
      console.log('No elements with [data-prlx-parent] found');
   }
});


// scroll parallax new


document.addEventListener('DOMContentLoaded', function () {
   let elements = document.querySelectorAll('.prl-scroll');
   let parentBlock = document.querySelector('.prl-active');
   let parentBlockInView = false;
   let lastScrollValue = 0;

   function updateAnimation() {
      let parentRect = parentBlock.getBoundingClientRect();
      let windowHeight = window.innerHeight;

      if (parentRect.top < windowHeight && parentRect.bottom > 0) {
         if (!parentBlockInView) {
            parentBlockInView = true; 
         }
         lastScrollValue = window.scrollY * -1.5;
         elements.forEach(function (element) {
            element.style.marginTop = lastScrollValue + 'px';
         });
      } else {
         if (parentBlockInView) {
            elements.forEach(function (element) {
               element.style.marginTop = lastScrollValue + 'px';
            });
            parentBlockInView = false; 
         }
      }
   }

   updateAnimation();

   window.addEventListener('scroll', updateAnimation);
});

//--------------test parallax
//data-prlx-parent - можна вказати значаня за скільки почне діяти анімація
//data-prlx - parent: вказує на батьківський елемент, який керує ефектом паралакса.

//data-prlx-smooth="15": необов'язковий. Визначає коефіцієнт гладкості для ефекту паралакса. Вищі значення роблять його більш гладким.

//data-prlx - center="center": необов'язковий. Визначає центральну точку відносно вікна перегляду, де базуються обчислення ефекту паралакса ( top, centerабо bottom).

//data-prlx: вказує на дочірній елемент, який матиме ефект паралакса.

//data-axis="v": визначає вісь паралактичного руху(vдля вертикалі, hдля горизонталі).

//data-direction="-1": необов'язковий. Напрям руху паралакса ( 1або -1). Від’ємні значення інвертують напрямок.

//data-coefficient="5": необов'язковий. Керує інтенсивністю або швидкістю ефекту паралакса.

//data-3d="10" задає на скільки буде проскролено

// data-opacity - вмикає анімацію прозорості при скролі і чим більще значення тим шидше стає прощорим елемент

//---------------------------
// 3d----додає перспективу блоку з класом .perspective

document.querySelectorAll('.perspective').forEach(element => {
   let perspectiveValue = parseFloat(element.getAttribute('data-perspective')) ||
      parseFloat(element.style.perspective) || 800;

   element.style.perspective = perspectiveValue + 'px';
   element.setAttribute('data-perspective', perspectiveValue.toString());
});

//------------------------------------


/*-------------додавання атрибутів-----------------------*/
// блок який анімується
const headerInfoInner = document.querySelector('.headerInfoInner');

// Add the specified attributes
headerInfoInner.setAttribute('data-prlx', '');
headerInfoInner.setAttribute('data-axis', 'v');
headerInfoInner.setAttribute('data-direction', '1');
headerInfoInner.setAttribute('data-coefficient', '10');
headerInfoInner.setAttribute('data-opacity', '3');
headerInfoInner.setAttribute('data-3d', '10');

/*--------------------*/
// Select the element with the class .headerBg  (батьківський блок)
const headerBg = document.querySelector('.headerBg');

// Add the specified attributes
headerBg.setAttribute('data-prlx-parent', '');
headerBg.setAttribute('data-prlx-smooth', '10');
headerBg.setAttribute('data-prlx-center', 'top');

/*-------------------------------------------------------*/

//parallax

class CustomParallax {
   constructor(elements) {
      if (elements.length) {
         this.elements = Array.from(elements).map((el) => (
            new CustomParallax.Each(el)
         ));
      }
   }

   destroyEvents() {
      this.elements.forEach(el => {
         el.destroyEvents();
      });
   }

   setEvents() {
      this.elements.forEach(el => {
         el.setEvents();
      });
   }
}

CustomParallax.Each = class {
   constructor(parent) {
      this.parent = parent;
      this.elements = this.parent.querySelectorAll('[data-prlx]');
      this.animation = this.animationFrame.bind(this);
      this.offset = 0;
      this.value = 0;
      this.smooth = parent.dataset.prlxSmooth ? Number(parent.dataset.prlxSmooth) : 15;
      this.startOffset = parent.dataset.prlxParent ? Number(parent.dataset.prlxParent) : 0; // Start animation early
      this.hasOpacity = false; // Flag to track if data-opacity is present
      this.has3D = false; // Flag to track if data-3d is present

      this.initialize();
      this.setEvents();
      window.addEventListener('resize', this.onResize.bind(this));
   }

   initialize() {
      // Perform initial calculations and set styles
      this.updateOffsets(true);
      this.elements.forEach(el => {
         const parameters = {
            axis: el.dataset.axis ? el.dataset.axis : 'v',
            direction: el.dataset.direction ? el.dataset.direction + '1' : '-1',
            coefficient: el.dataset.coefficient ? Number(el.dataset.coefficient) : 5,
            additionalProperties: el.dataset.properties ? el.dataset.properties : '',
            negative: el.dataset.negative !== undefined,
            positive: el.dataset.positive !== undefined
         };
         this.parameters(el, parameters, true);
      });
   }

   onResize() {
      this.updateOffsets();
      this.elements.forEach(el => {
         const parameters = {
            axis: el.dataset.axis ? el.dataset.axis : 'v',
            direction: el.dataset.direction ? el.dataset.direction + '1' : '-1',
            coefficient: el.dataset.coefficient ? Number(el.dataset.coefficient) : 5,
            additionalProperties: el.dataset.properties ? el.dataset.properties : '',
            negative: el.dataset.negative !== undefined,
            positive: el.dataset.positive !== undefined
         };
         this.parameters(el, parameters);
      });
   }

   updateOffsets(initial = false) {
      const topToWindow = this.parent.getBoundingClientRect().top;
      const heightParent = this.parent.offsetHeight;
      const heightWindow = window.innerHeight;
      const centerPoint = this.parent.dataset.prlxCenter ? this.parent.dataset.prlxCenter : 'center';

      const startAnimationAt = this.startOffset;

      if (topToWindow < heightWindow - startAnimationAt || initial) {
         switch (centerPoint) {
            case 'top':
               this.offset = -1 * (topToWindow - startAnimationAt);
               break;
            case 'center':
               this.offset = (heightWindow / 2) - (topToWindow + (heightParent / 2)) + startAnimationAt;
               break;
            case 'bottom':
               this.offset = heightWindow - (topToWindow + heightParent) + startAnimationAt;
               break;
         }
      }

      if (!initial) {
         this.value += (this.offset - this.value) / this.smooth;
      } else {
         this.value = this.offset; // Set initial value directly
      }
   }

   setEvents() {
      this.animationID = window.requestAnimationFrame(this.animation);
   }

   destroyEvents() {
      window.cancelAnimationFrame(this.animationID);
      window.removeEventListener('resize', this.onResize.bind(this));
   }

   animationFrame() {
      this.updateOffsets();
      this.animationID = window.requestAnimationFrame(this.animation);

      // Check if any element has data-opacity attribute
      if (!this.hasOpacity) {
         this.elements.forEach(el => {
            if (el.dataset.opacity !== undefined) {
               this.hasOpacity = true;
               return;
            }
         });
      }

      // Check if any element has data-3d attribute
      if (!this.has3D) {
         this.elements.forEach(el => {
            if (el.dataset['3d'] !== undefined) {
               this.has3D = true;
               return;
            }
         });
      }

      this.elements.forEach(el => {
         const parameters = {
            axis: el.dataset.axis ? el.dataset.axis : 'v',
            direction: el.dataset.direction ? el.dataset.direction + '1' : '-1',
            coefficient: el.dataset.coefficient ? Number(el.dataset.coefficient) : 5,
            additionalProperties: el.dataset.properties ? el.dataset.properties : '',
            negative: el.dataset.negative !== undefined,
            positive: el.dataset.positive !== undefined
         };
         this.parameters(el, parameters);
      });
   }

   parameters(el, parameters, initial = false) {
      // Determine transform and opacity properties
      let transformProperty, willChangeProperties;
      let opacity = 1; // Default opacity
      let value = initial ? this.offset : this.value;

      // Calculate opacity based on scroll position and data-opacity attribute
      if (this.hasOpacity && el.dataset.opacity !== undefined) {
         const opacityAtZero = 1; // Opacity when element is at initial position
         opacity = opacityAtZero - Math.abs(value / (parameters.coefficient * 100)) * Number(el.dataset.opacity);
      }

      // Handle data-3d attribute for Z-axis transformation
      if (this.has3D && el.dataset['3d'] !== undefined) {
         const zTransform = el.dataset['3d'] * (value / parameters.coefficient);
         transformProperty = `translate3D(0, 0, ${zTransform.toFixed(2)}px)`;
         willChangeProperties = 'transform, opacity';
      } else {
         let translateValue = (parameters.direction * (value / parameters.coefficient)).toFixed(2);

         // Apply data-negative constraint
         if (parameters.negative) {
            if (parameters.direction === '-1') {
               translateValue = Math.min(translateValue, 0);
            } else {
               translateValue = Math.max(translateValue, 0);
            }
         }

         // Apply data-positive constraint
         if (parameters.positive) {
            if (parameters.direction === '-1') {
               translateValue = Math.max(translateValue, 0);
            } else {
               translateValue = Math.min(translateValue, 0);
            }
         }

         // Adjust opacity to 1 when translateValue reaches zero
         if (translateValue == 0) {
            opacity = 1;
         }

         if (parameters.additionalProperties.includes('opacity')) {
            transformProperty = `translate3D(0, ${translateValue}px, 0)`;
            willChangeProperties = 'transform, opacity';
         } else {
            if (parameters.axis == 'v') {
               transformProperty = `translate3D(0, ${translateValue}px, 0) ${parameters.additionalProperties}`;
            } else if (parameters.axis == 'h') {
               transformProperty = `translate3D(${translateValue}px, 0, 0) ${parameters.additionalProperties}`;
            }
            willChangeProperties = 'transform';
         }
      }

      // Apply styles
      el.style.transform = transformProperty;
      el.style.opacity = opacity;
      // el.style.willChange = willChangeProperties;
   }
};

// Initialize parallax on elements with data-prlx-parent attribute
if (document.querySelectorAll('[data-prlx-parent]').length > 0) {
   const customParallax = new CustomParallax(document.querySelectorAll('[data-prlx-parent]'));
}

