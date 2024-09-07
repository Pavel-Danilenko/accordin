/*

document.addEventListener('DOMContentLoaded', function () {
   const buttons = document.querySelectorAll('.list-map__btn--white');

   buttons.forEach(button => {
      button.addEventListener('click', function () {
         document.querySelectorAll('.map__location--white').forEach(location => {
            location.classList.remove('_active');
         });

         buttons.forEach(btn => {
            btn.classList.remove('_active');
         });

         const targetPath = button.getAttribute('data-btn');

         const targetLocation = document.querySelector(`.map__location--white[data-city="${targetPath}"]`);

         if (targetLocation) {
            targetLocation.classList.add('_active');
         }

         button.classList.add('_active');
      });
   });
});


*/




/*-------------*/
/*
document.addEventListener('DOMContentLoaded', () => {
   // Select all map location elements
   const mapLocations = document.querySelectorAll('.map__location--white');

   mapLocations.forEach(location => {
      location.addEventListener('click', function () {
         // Remove the _active class from all map locations and list buttons
         mapLocations.forEach(loc => loc.classList.remove('_active'));
         document.querySelectorAll('.list-map__btn--white').forEach(btn => btn.classList.remove('_active'));

         // Add the _active class to the clicked map location
         this.classList.add('_active');

         // Find the corresponding list button using the data attribute
         const target = this.getAttribute('data-city');
         const listButton = document.querySelector(`.list-map__btn--white[data-btn="${target}"]`);

         if (listButton) {
            // Add the _active class to the corresponding list button
            listButton.classList.add('_active');
         }
      });
   });
});

*/
/*
const modalController = ({ modal, btnOpen, btnClose, modalMain, time = 300}) => {
   const buttonElems = document.querySelectorAll(btnOpen);
   const modalElem = document.querySelector(modal);
   const modalCont = document.querySelector(modalMain)

   modalElem.style.cssText = `
      display: 'flex';
      visibility: 'hidden';
      opacity: 0;
      transition: opacity 300ms easy-in-out;
      `;

   const closeModal = event => {
      const target = event.target;

      if (target === modalElem || target.closest(btnClose)) {
         modalElem.style.opacity = 0;
         modalCont.style.transform = 'translateY(20px)';
         setTimeout(() => {
            modalElem.style.visibility = 'hidden';
         }, time);
      }
   }

   const openModal = () => {
      modalElem.style.visibility = 'visible';
      modalElem.style.opacity = 1;
      modalCont.style.transform = 'translateY(0px)';
   };

   buttonElems.forEach(btn => {
      btn.addEventListener('click', openModal);
   });


   modalElem.addEventListener('click', closeModal);
};
modalController({
   modal: '.modal',
   btnOpen: '.btn__open',
   btnClose: '.btn__close',
   modalMain: '.modal__main',
   time: 1000
});
*/
/*------------------pop-up-----------*/
/*
const scrollController = {
   scrollPosition: 0,
   disabledScroll() {
      scrollController.scrollPosition = window.scrollY;
      document.body.style.cssText = `
      overflow: hidden;
      position: fixed;
      top: -${scrollController.scrollPosition}px;
      left: 0;
      height: 100vh;
      width: 100vw;
      padding-right: ${window.innerWidth - document.body.offsetWidth}px
    `;
      document.documentElement.style.scrollBehavior = 'unset';
   },
   enabledScroll() {
      document.body.style.cssText = '';
      window.scroll({ top: scrollController.scrollPosition })
      document.documentElement.style.scrollBehavior = '';
   },
}

const modalController = ({ modal, btnOpen, btnClose, modalMain, time = 300 }) => {
   const buttonElems = document.querySelectorAll(btnOpen);
   const modalElem = document.querySelector(modal);
   const modalCont = document.querySelector(modalMain);

   modalElem.style.cssText = `
    display: flex;
    visibility: hidden;
    opacity: 0;
    transition: opacity ${time}ms ease-in-out;
  `;
   modalCont.style.cssText = `
    transition: transform ${time}ms ease-in-out;
  `;

   const closeModal = event => {
      modalCont.style.transform = 'translateY(20px)';
      const target = event.target;

      if (
         target === modalElem ||
         (btnClose && target.closest(btnClose)) ||
         event.code === 'Escape'
      ) {

         modalElem.style.opacity = 0;

         setTimeout(() => {
            modalElem.style.visibility = 'hidden';
            scrollController.enabledScroll();
         }, time);

         window.removeEventListener('keydown', closeModal);
      }
   }

   const openModal = () => {
      modalElem.style.visibility = 'visible';
      modalElem.style.opacity = 1;
      window.addEventListener('keydown', closeModal);
      scrollController.disabledScroll();
      modalCont.style.transform = 'translateY(0px)';
   };

   buttonElems.forEach(btn => {
      btn.addEventListener('click', openModal);
   });

   modalElem.addEventListener('click', closeModal);
};

modalController({
   modal: '.pop-up',
   btnOpen: '.pop-up__open',
   btnClose: '.pop-up__close',
   modalMain: '.pop-up__inner',
   time: 300
});
*/

/*-----------------*/

/*---------pop-up class------*/









/*

document.addEventListener('DOMContentLoaded', () => {
   const modal = document.querySelector('.modal');
   const closeModalBtn = document.querySelector('.modal__btn-close');
   const modalBtns = document.querySelectorAll('.modal__btn');

   modalBtns.forEach(btn => {
      btn.addEventListener('click', () => {

         const modal = document.querySelector('.modal');
         modal.classList.add('_active');
      });
   });

   function handleKeyDown(event) {
      // Check if the pressed key is Escape (keyCode 27)
      if (event.keyCode === 27) {
         // Check if the modal has the _active class
         const modal = document.querySelector('.modal');
         if (modal.classList.contains('_active')) {
            // Remove the _active class from the modal
            modal.classList.remove('_active');
         }
      }
   }
   // Adding keydown event listener to the document
document.addEventListener('keydown', handleKeyDown);

   // Function to remove _active class
   const removeActiveClass = () => {
      modal.classList.remove('_active');
   };

   // Click event listener for the modal close button
   closeModalBtn.addEventListener('click', (event) => {
      removeActiveClass();
   });

   // Click event listener for the modal
   modal.addEventListener('click', (event) => {
      // Check if the clicked element is the modal itself, not the content inside it
      if (event.target === modal) {
         removeActiveClass();
      }
   });
});
*/
/*
const modalControl = ({ modalMain, modalClose, modalOpenBtn }) => {
   document.addEventListener('DOMContentLoaded', () => {
      const modal = document.querySelector(modalMain);
      const closeModalBtn = document.querySelector(modalClose);
      const modalBtns = document.querySelectorAll(modalOpenBtn);

      modalBtns.forEach(btn => {
         btn.addEventListener('click', () => {
            modal.classList.add('_active');
         });
      });

      function handleKeyDown(event) {
         if (event.keyCode === 27) {
            if (modal.classList.contains('_active')) {
               modal.classList.remove('_active');
            }
         }
      }

      document.addEventListener('keydown', handleKeyDown);

      const removeActiveClass = () => {
         modal.classList.remove('_active');
      };

      closeModalBtn.addEventListener('click', () => {
         removeActiveClass();
      });

      modal.addEventListener('click', (event) => {
         if (event.target === modal) {
            removeActiveClass();
         }
      });
   });
};

modalControl({
   modalMain: '.modal',
   modalOpenBtn: '.modal__btn',
   modalClose: '.modal__btn-close'
});
*/
/*-----------*/


/*

const modalControl = ({ modalMain, modalClose, modalOpenBtn }) => {

   document.addEventListener('DOMContentLoaded', () => {
      const modal = document.querySelector(modalMain);
      const closeModalBtn = document.querySelector(modalClose);
      const modalBtns = document.querySelectorAll(modalOpenBtn);

      modalBtns.forEach(btn => {
         btn.addEventListener('click', () => {

            const modal = document.querySelector(modalMain);
            modal.classList.add('_active');
            scrollController.disabledScroll();
         });
      });

      function handleKeyDown(event) {
         
         if (event.keyCode === 27) {
            const modal = document.querySelector(modalMain);
            if (modal.classList.contains('_active')) {
               modal.classList.remove('_active');
               scrollController.enabledScroll();
            }
         }
      }
      document.addEventListener('keydown', handleKeyDown);

      const removeActiveClass = () => {
         modal.classList.remove('_active');
      };

      closeModalBtn.addEventListener('click', (event) => {
         removeActiveClass();
      });

      modal.addEventListener('click', (event) => {
         if (event.target === modal) {
            removeActiveClass();
         }
      });
   });

};
modalControl({
   modalMain: '.modal',
   modalOpenBtn: '.modal__btn',
   modalClose: '.modal__btn-close',
});
*/

/*----------scroll-----------*/
//this script helps to solve our problem with the scroll, 
//when there is a lot of content in the pop - up, 
//another scroll is added and therefore the content will be jumping
const scrollController = {
   scrollPosition: 0,
   disabledScroll() {
      scrollController.scrollPosition = window.scrollY;
      document.body.style.cssText = `
      overflow: hidden;
      position: fixed;
      top: -${scrollController.scrollPosition}px;
      left: 0;
      height: 100vh;
      width: 100vw;
      padding-right: ${window.innerWidth - document.body.offsetWidth}px;
    `;
      document.documentElement.style.scrollBehavior = 'unset';
   },
   enabledScroll(delay) {
      setTimeout(() => {
         document.body.style.cssText = '';
         window.scroll({ top: scrollController.scrollPosition });
         document.documentElement.style.scrollBehavior = '';
      }, delay);
   },
};

/*--------------------------*/

/*------------pop-up--------*/



const modalControl = ({ modalMain, modalClose, modalOpenBtn, delay = 0, overflowDelay = 0 }) => {
   document.addEventListener('DOMContentLoaded', () => {
      const modal = document.querySelector(modalMain);
      const closeModalBtn = document.querySelector(modalClose);
      const modalBtns = document.querySelectorAll(modalOpenBtn);

      // Set default overflow style
      modal.style.overflow = 'clip';

      modalBtns.forEach(btn => {
         btn.addEventListener('click', () => {
            const modal = document.querySelector(modalMain);
            modal.classList.add('_active');
            scrollController.disabledScroll();
            setTimeout(() => {
               modal.style.overflowY = 'auto';
            }, overflowDelay);
         });
      });

      function handleKeyDown(event) {
         if (event.keyCode === 27) {
            const modal = document.querySelector(modalMain);
            if (modal.classList.contains('_active')) {
               modal.classList.remove('_active');
               modal.style.overflowY = 'clip';
               scrollController.enabledScroll(delay);
            }
         }
      }
      document.addEventListener('keydown', handleKeyDown);

      const removeActiveClass = () => {
         modal.classList.remove('_active');
         modal.style.overflowY = 'clip';
         scrollController.enabledScroll(delay);
      };

      closeModalBtn.addEventListener('click', (event) => {
         removeActiveClass();
      });

      modal.addEventListener('click', (event) => {
         if (event.target === modal) {
            removeActiveClass();
         }
      });
   });
};

/*------------controller--------------*/

modalControl({
   modalMain: '.pop-up',
   modalClose: '.pop-up__close',
   modalOpenBtn: '.pop-up__open',
   delay: 800, //час коли розблокується скрол в body
   overflowDelay: 1000 // set the delay for changing overflow-Y to auto
});

/*--------------------------*/

/*
document.addEventListener('DOMContentLoaded', function () {
   const API_KEY = 'AIzaSyAZZwHApAIiRgP1Pm8ep0NS3QPOrAJ-mVo';

   const videoContainer = document.getElementById('video');
   const channelUrl = videoContainer.getAttribute('data-youtube-channel');
   const channelID = extractChannelID(channelUrl);
   const maxResults = 1;
   const url = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${channelID}&part=snippet,id&order=date&maxResults=${maxResults}`;

   fetch(url)
      .then(response => response.json())
      .then(data => {
         if (data.items.length > 0) {
            const item = data.items[0];
            const videoId = item.id.videoId;

            const videoHtml = `
                    <div class="video">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>`;

            videoContainer.innerHTML = videoHtml;
         } else {
            videoContainer.innerHTML = '<p>No videos found.</p>';
         }
      })
      .catch(error => console.error('Error fetching data:', error));

   function extractChannelID(url) {
      const channelRegex = /channel\/([a-zA-Z0-9_-]+)/;
      const match = url.match(channelRegex);
      return match ? match[1] : null;
   }
});

*/
/*
document.addEventListener("DOMContentLoaded", function () {
   var titleBlock = document.querySelector(".title");
   var initialPosition = titleBlock.getBoundingClientRect().top;

   function checkPosition() {
      var currentPosition = titleBlock.getBoundingClientRect().top;
      if (currentPosition <= 40) {
         titleBlock.classList.add("__active");
      } else {
         titleBlock.classList.remove("__active");
      }
   }

   window.addEventListener("scroll", checkPosition);
});
*/

// додається клас коли блок доходить до верху екрана 
const title = document.querySelector('.title');


const originalOffset = title.getBoundingClientRect().top + window.pageYOffset;


function addActiveClass() {
   if (window.pageYOffset >= originalOffset) {
      title.classList.add('__active');
   } else {
      title.classList.remove('__active');
   }
}


function scrollToOriginalPosition() {
   window.scrollTo({
      top: originalOffset,
      behavior: 'smooth'
   });
}


window.addEventListener('scroll', addActiveClass);


title.addEventListener('transitionend', function (event) {
   if (event.propertyName === 'opacity' && !title.classList.contains('__active')) {
      scrollToOriginalPosition();
   }
});



/*----------------------------*/

/*
function openMaps() {
   var restaurantAddress = encodeURIComponent('Za Bramką 1, 61-842 Poznań, Polska');
   var mapsUrl = 'https://www.google.com/maps/dir/?api=1&origin=My+Location&destination=' + restaurantAddress + '&hl=pl';
   window.open(mapsUrl, '_blank');
}
*/
document.addEventListener('DOMContentLoaded', function () {
   var locationButton = document.querySelector('.btn-location');
   locationButton.addEventListener('click', function (event) {
      event.preventDefault(); // Prevents the default action of navigating to "#"
      openMaps(); // Calls the openMaps function
   });
});

function openMaps() {
   var restaurantAddress = encodeURIComponent('Za Bramką 1, 61-842 Poznań, Polska');
   var mapsUrl = 'https://www.google.com/maps/dir/?api=1&origin=My+Location&destination=' + restaurantAddress + '&hl=pl';
   window.open(mapsUrl, '_blank');
}

/*----------PARALAX  -----------*/

const page = document.querySelector('.page');
const paralaxItems = document.querySelectorAll('[class*="__inset"]');
const speed = 0.05;

let posX = 0;
let cXprocent = 0;

page.addEventListener('mousemove', parallaxAnimation);

function parallaxAnimation(e) {
   const parallaxWidth = window.innerWidth;
   const cX = e.pageX - parallaxWidth / 2;
   cXprocent = cX / parallaxWidth * 100;
}
function setParallaxAnimatinStyle(e) {
   const distX = cXprocent - posX;
   posX = posX + (distX * speed);

   paralaxItems.forEach(paralaxItem => {
      const value = paralaxItem.dataset.prxValue ?
         +paralaxItem.dataset.prxValue : 1;
      
      paralaxItem.style.cssText = `
      transform: 'translateX(${posX / value}%);
      `;
   });
   requestAnimationFrame(setParallaxAnimatinStyle);
}
setParallaxAnimatinStyle()


// слідкує за висотою блока та додає відступ враховуючи висоту блока в реальному часі
const footerBowwe = document.querySelector('.footer-bowwe');
const paddingWatchElements = document.querySelectorAll('.padding-watch');

if (footerBowwe && paddingWatchElements.length > 0) {
   const updatePaddingBottom = () => {
      const footerBowweHeight = footerBowwe.offsetHeight;

      paddingWatchElements.forEach(element => {
         element.style.paddingBottom = footerBowweHeight + 'px';
      });
      
   };

   updatePaddingBottom();

   const resizeObserver = new ResizeObserver(updatePaddingBottom);
   resizeObserver.observe(footerBowwe);

   const mutationObserver = new MutationObserver(updatePaddingBottom);
   const observerConfig = {
      childList: true,
      subtree: true
   };
   mutationObserver.observe(footerBowwe, observerConfig);
}


// скрипт для анімації svg
// скла .watching додаємо для блока за яким потрібно слідкувати
// клас .svg-run даємо оболонці де буде швкати svg та додавати клас active
// Function to handle intersection changes
// Function to handle intersection changes
function handleIntersection(entries, observer) {
   entries.forEach(entry => {
      if (entry.isIntersecting) {
         // Find all blocks with .svg-run class within the intersecting section
         const svgRunBlocks = entry.target.querySelectorAll('.svg-run');
         svgRunBlocks.forEach(block => {
            // Find all svg elements within each .svg-run block
            const svgElements = block.querySelectorAll('svg');
            svgElements.forEach(svg => {
               // Add the .active class to each svg
               svg.classList.add('active');
            });
         });
      }
   });
}

// Create an Intersection Observer
const observer = new IntersectionObserver(handleIntersection, {
   threshold: 0.1 // Adjust threshold as needed
});

// Find all sections with the .watching class and observe them
const watchingSections = document.querySelectorAll('.watching');
watchingSections.forEach(section => {
   observer.observe(section);
});


/*------------aнімація блоків---------------*/

function handleIntersection(entries, observer) {
   entries.forEach(entry => {
      if (entry.isIntersecting) {
         const svgRunBlocks = entry.target.querySelectorAll('.animation-run');
         svgRunBlocks.forEach(block => {
            block.classList.add('_active');
         });
      }
   });
}

const observer = new IntersectionObserver(handleIntersection, {
   threshold: 0.1 // Adjust threshold as needed
});

const watchingSections = document.querySelectorAll('.watching');
watchingSections.forEach(section => {
   observer.observe(section);
});


/*-------------------------------------------*/
/*

//для роботи facebook 
document.getElementById('id1669546754596facebook').addEventListener('click', function () {
   // ID профілю Facebook
   const facebookProfileID = '122511767613723';

   // URL для відкриття профілю у Facebook додатку
   const fbAppURL = `fb://profile/${facebookProfileID}`;
   const fbAndroidURL = `fb://page/${facebookProfileID}`;

   // Функція для перевірки операційної системи
   function getOS() {
      const userAgent = window.navigator.userAgent || window.navigator.vendor || window.opera;

      if (/android/i.test(userAgent)) {
         return 'Android';
      }

      if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
         return 'iOS';
      }

      return 'unknown';
   }

   // Отримання операційної системи
   const os = getOS();

   // Відкриття профілю у Facebook додатку
   if (os === 'iOS') {
      // Для iOS
      window.location.href = fbAppURL;

      // Затримка для перевірки, чи додаток відкрився
      setTimeout(function () {
         // Якщо додаток не відкрився, нічого не робимо
      }, 500); // Затримка 500 мс, може бути збільшена, якщо потрібно
   } else if (os === 'Android') {
      // Для Android
      window.location.href = fbAndroidURL;

      // Затримка для перевірки, чи додаток відкрився
      setTimeout(function () {
         // Якщо додаток не відкрився, нічого не робимо
      }, 500); // Затримка 500 мс, може бути збільшена, якщо потрібно
   }
});
*/