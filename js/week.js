

document.addEventListener("DOMContentLoaded", function () {
   const daysOfWeek = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
   const today = new Date().getDay();
   const currentDay = daysOfWeek[today];

   const scheduleContainer = document.getElementById("week-schedule");
   const dayElements = scheduleContainer.getElementsByClassName("grapher__inner");

   for (let dayElement of dayElements) {
      if (dayElement.classList.contains(currentDay)) {
         dayElement.classList.add("_active");
         break;
      }
   }
});


/*
const currentDay = new Date().getDay();

const dayMap = {
   0: 'sunday',
   1: 'monday',
   2: 'tuesday',
   3: 'wednesday',
   4: 'thursday',
   5: 'friday',
   6: 'saturday'
};

const currentClass = dayMap[currentDay];

if (currentClass) {
   document.querySelector(`.${currentClass}`).classList.add('_active');
}
*/

document.addEventListener('DOMContentLoaded', function () {

   const currentDay = new Date().getDay();

   const dayMapping = {
      0: 'sunday',
      1: 'monday',
      2: 'tuesday',
      3: 'wednesday',
      4: 'thursday',
      5: 'friday',
      6: 'saturday'
   };


   const todayClass = dayMapping[currentDay];
   const todayElement = document.querySelector(`.grapher__inner.${todayClass}`);
   if (todayElement) {
      todayElement.classList.add('_active');
   }
});
