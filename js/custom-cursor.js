
"use strict"
window.addEventListener('load', windowLoad);

function windowLoad() {
   document.documentElement.classList.add('loaded');
}

document.addEventListener("DOMContentLoaded", function () {
   const cursorDiv = document.createElement('div');
   cursorDiv.className = 'cursor__custom';
   document.body.appendChild(cursorDiv);

   const cursor = document.querySelector('.cursor__custom');

   // Отримуємо початкове значення transform
   const initialTransform = window.getComputedStyle(cursor).transform;

   // Функція для перевірки підтримки сенсорного екрану
   const checkTouchSupport = () => {
      if (navigator.maxTouchPoints > 0 || 'ontouchstart' in window) {
         cursor.style.display = 'none';
         return true;
      }
      cursor.style.display = 'block';
      return false;
   };

   // Перевіряємо підтримку сенсорного екрану при завантаженні
   checkTouchSupport();

   // Оновлюємо статус підтримки сенсорного екрану при зміні розміру вікна
   window.addEventListener('resize', checkTouchSupport);

   document.addEventListener('mousemove', (e) => {
      if (checkTouchSupport()) return; // Якщо підтримується touch, не оновлюємо позицію
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
   });

   // Масштабування курсора при наведенні на елементи
   const hoverElements = document.querySelectorAll('.nav-top-item');
   hoverElements.forEach(element => {
      element.addEventListener('mouseenter', () => {
         if (checkTouchSupport()) return; // Якщо підтримується touch, не змінюємо масштаб
         cursor.style.transform = `${initialTransform} scale(8)`;
      });
      element.addEventListener('mouseleave', () => {
         if (checkTouchSupport()) return; // Якщо підтримується touch, не змінюємо масштаб
         cursor.style.transform = `${initialTransform} scale(1)`;
      });
   });
});

