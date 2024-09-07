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

const modalControl = ({
   modalMain,
   modalClose,
   modalOpenBtn,
   delay = 0,
   overflowDelay = 0,
   initialClass = '',  // Class to be added initially
   initialClassDelay = 1000, // Delay before adding the initial class
   mainClass = 'main__pop-up' // Class to check before adding initialClass
}) => {
   document.addEventListener('DOMContentLoaded', () => {
      const modal = document.querySelector(modalMain);
      const closeModalBtn = document.querySelector(modalClose);
      const modalBtns = document.querySelectorAll(modalOpenBtn);

      // Set default overflow style
      modal.style.overflow = 'clip';

      modalBtns.forEach(btn => {
         btn.addEventListener('click', () => {
            modal.classList.add('_active');
            scrollController.disabledScroll();
            setTimeout(() => {
               modal.style.overflowY = 'auto';
            }, overflowDelay);
         });
      });

      function handleKeyDown(event) {
         if (event.keyCode === 27) {
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

      // Add the initial class after the specified delay if modal has mainClass
      setTimeout(() => {
         if (modal.classList.contains(mainClass)) {
            modal.classList.add(initialClass);
            scrollController.disabledScroll();
            setTimeout(() => {
               modal.style.overflowY = 'auto';
            }, overflowDelay);
         }
      }, initialClassDelay);
   });
};

/*------------controller--------------*/

modalControl({
   modalMain: '.pop-up',
   modalClose: '.pop-up__close',
   modalOpenBtn: '.pop-up__open',
   delay: 800,
   overflowDelay: 1000, // Delay for changing overflow-Y to auto
   initialClass: '_active', // Class to be added initially
   initialClassDelay: 1000, // Delay before adding the initial class
   mainClass: 'main__pop-up' // Class to check before adding initialClass
});


/*----------pop-up викликає один раз автоматично після завантаження сторінки--------------*/

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

const modalControl = ({
   modalMain,
   modalClose,
   modalOpenBtn,
   delay = 0,
   overflowDelay = 0,
   initialClass = '',  // Class to be added initially
   initialClassDelay = 1000, // Delay before adding the initial class
   mainClass = 'main__pop-up' // Class to check before adding initialClass
}) => {
   document.addEventListener('DOMContentLoaded', () => {
      const modal = document.querySelector(modalMain);
      const closeModalBtn = document.querySelector(modalClose);
      const modalBtns = document.querySelectorAll(modalOpenBtn);

      // Set default overflow style
      modal.style.overflow = 'clip';

      modalBtns.forEach(btn => {
         btn.addEventListener('click', () => {
            modal.classList.add('_active');
            scrollController.disabledScroll();
            setTimeout(() => {
               modal.style.overflowY = 'auto';
            }, overflowDelay);
         });
      });

      function handleKeyDown(event) {
         if (event.keyCode === 27) {
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

      closeModalBtn.addEventListener('click', () => {
         removeActiveClass();
      });

      modal.addEventListener('click', (event) => {
         if (event.target === modal) {
            removeActiveClass();
         }
      });

      if (!localStorage.getItem('popupActive')) {
         setTimeout(() => {
            if (modal.classList.contains(mainClass)) {
               modal.classList.add(initialClass);
               scrollController.disabledScroll();
               setTimeout(() => {
                  modal.style.overflowY = 'auto';
               }, overflowDelay);

               localStorage.setItem('popupActive', 'true');
            }
         }, initialClassDelay);
      }
   });

};

/*------------controller--------------*/

modalControl({
   modalMain: '.pop-up',
   modalClose: '.pop-up__close',
   modalOpenBtn: '.pop-up__open',
   delay: 800,
   overflowDelay: 1000, // Delay for changing overflow-Y to auto
   initialClass: '_active', // Class to be added initially
   initialClassDelay: 1000, // Delay before adding the initial class
   mainClass: 'main__pop-up' // Class to check before adding initialClass
});