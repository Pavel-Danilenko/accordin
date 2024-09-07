document.addEventListener('DOMContentLoaded', function () {
   // Function to handle click events on accordion headers
   function handleAccordionClick(event) {
      const clickedHeader = event.currentTarget;
      const allBodies = document.querySelectorAll('.accordion__body');
      const clickedBody = clickedHeader.parentElement;

      // Remove _active class from all accordion bodies
      allBodies.forEach(body => {
         if (body !== clickedBody) {
            body.classList.remove('_active');
         }
      });

      // Toggle _active class on the clicked accordion body
      clickedBody.classList.toggle('_active');
   }

   // Attach click event listener to each accordion header
   document.querySelectorAll('.accordion__header').forEach(header => {
      header.addEventListener('click', handleAccordionClick);
   });
});
