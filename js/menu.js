

document.addEventListener("DOMContentLoaded", function () {

   const navControl = ({ navBtn, navSection }) => {
      const sections = document.querySelectorAll(navSection);
      const navLinks = document.querySelectorAll(navBtn);

      // Helper function to get the element's offset from the top of the page
      const getOffsetTop = (elem) => {
         let offsetTop = 0;
         while (elem) {
            offsetTop += elem.offsetTop;
            elem = elem.offsetParent;
         }
         return offsetTop;
      };

      // Helper function to add or remove active classes based on scroll position
      const onScroll = () => {
         let sectionInView = false;

         sections.forEach(section => {
            const sectionTop = getOffsetTop(section) - 50; // Adjust 50 for offset
            const sectionHeight = section.offsetHeight;
            const viewportHeight = window.innerHeight;

            // Check if section is in viewport
            const isInViewport = window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight;
            // Check if section is fully in viewport
            const isFullyInViewport = sectionHeight <= viewportHeight &&
               window.pageYOffset <= sectionTop &&
               window.pageYOffset + viewportHeight >= sectionTop + sectionHeight;

            if (isInViewport || isFullyInViewport) {
               sectionInView = true;
               const sectionName = section.getAttribute("data-name");

               // Add active class to the section in view
               section.classList.add("_active");

               // Add active class to the corresponding nav link
               navLinks.forEach(link => {
                  if (link.getAttribute("href").substring(1) === sectionName) {
                     link.classList.add("_active");
                  } else {
                     link.classList.remove("_active");
                  }
               });
            } else {
               // Remove active class if section is not in view
               section.classList.remove("_active");
            }
         });

         // Remove active class from nav links if no section is in view
         if (!sectionInView) {
            navLinks.forEach(link => link.classList.remove("_active"));
         }
      };

      // Event listener for nav link clicks
      navLinks.forEach(link => {
         link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.querySelector(`[data-name="${targetId}"]`);

            // Scroll to the section
            window.scrollTo({
               top: getOffsetTop(targetSection) - 50, // Adjust 50 for offset
               behavior: 'smooth'
            });

            // Add active class to the section and the clicked nav link
            sections.forEach(section => section.classList.remove("_active"));
            navLinks.forEach(navLink => navLink.classList.remove("_active"));

            targetSection.classList.add("_active");
            this.classList.add("_active");
         });
      });

      // Initial check and add event listener for scroll
      window.addEventListener("scroll", onScroll);
      onScroll();
   };

   // Initialize navControl with your desired selectors
   navControl({
      navBtn: '.nav__link',
      navSection: '.watch-section',
   });

});

// скролить меню якщо батьківський блок обмежений, віббувається відстежування класа _active і коли
// кнопку вже не видно то відбувається скролл

document.addEventListener('DOMContentLoaded', () => {
   const menuList = document.querySelector('.menu__list');
   const navLinks = document.querySelectorAll('.nav__link');

   const observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
         if (mutation.attributeName === 'class') {
            const target = mutation.target;
            if (target.classList.contains('_active')) {
               setTimeout(() => {
                  scrollToActiveButton(target);
               }, 50); // slight delay of 50 milliseconds
            }
         }
      });
   });

   navLinks.forEach(navLink => {
      observer.observe(navLink, {
         attributes: true,
         attributeFilter: ['class'],
      });
   });

   function scrollToActiveButton(button) {
      const menuRect = menuList.getBoundingClientRect();
      const buttonRect = button.getBoundingClientRect();

      if (buttonRect.left < menuRect.left) {
         menuList.scrollBy({
            left: buttonRect.left - menuRect.left,
            behavior: 'auto' // change to 'auto' for immediate scroll
         });
      } else if (buttonRect.right > menuRect.right) {
         menuList.scrollBy({
            left: buttonRect.right - menuRect.right,
            behavior: 'auto' // change to 'auto' for immediate scroll
         });
      }
   }
});

// ативні пункти меню при переході на додаткові сторінки

document.addEventListener('DOMContentLoaded', function () {

   let currentPage = window.location.pathname;

   let buttons = document.querySelectorAll('.pop-up__btn');

   buttons.forEach(function (button) {

      let buttonHref = button.getAttribute('href');

      if (buttonHref === currentPage) {
         button.classList.add('_active');
      }
   });
});