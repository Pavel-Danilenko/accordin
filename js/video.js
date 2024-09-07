/*----------scroll-----------*/
//this script helps to solve our problem with the scroll,
//when there is a lot of content in the pop - up,
//another scroll is added and therefore the content will be jumping

/*---------------*/



/*-------------------*/

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

/*--------------------------*/

/*------------pop-up--------*/

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
         scrollController.enabledScroll();
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
//here we just add classes in order for the script to work in the script itself, 
//you do not need to change anything
modalControl({
   modalMain: '.pop-up__big',
   modalOpenBtn: '.btn__open',
   modalClose: '.pop-up__close',
});


/*---------------*/


// Wait for the DOM content to be fully loaded
document.addEventListener('DOMContentLoaded', function () {

   // Get a reference to the pop-up__big section
   const popUpBig = document.querySelector('.pop-up__big');

   // Function to handle changes in the class attribute
   const handleClassChange = function (mutationsList) {
      for (let mutation of mutationsList) {
         if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
            // Check if the _active class is still present
            const isActive = popUpBig.classList.contains('_active');
            // Get the video element inside pop-up__big
            const video = popUpBig.querySelector('video');
            if (!isActive && !video.paused) {
               video.pause(); // Pause the video if _active class is removed
            }
         }
      }
   };

   // Create an observer instance linked to the handleClassChange function
   const observer = new MutationObserver(handleClassChange);

   // Start observing the attributes of pop-up__big
   observer.observe(popUpBig, { attributes: true });

   // Optionally, you can also check the initial state on page load
   const video = popUpBig.querySelector('video');
   if (!popUpBig.classList.contains('_active') && !video.paused) {
      video.pause(); // Pause the video initially if _active class is not present
   }
});

