"use strict";

const scoreButton = document.querySelector("#score-button");
const score = document.querySelector("#score");
const doubleCard = document.querySelector("#double-card");
const hoverZone = document.querySelector("#hover-zone");
const status = document.querySelector("#status");
let points = 0;

// Задание 1. Подключите click к scoreButton.
// Внутри обработчика увеличьте points, затем обновите score.textContent и status.

// Задание 2. Подключите dblclick к doubleCard.
// Переключите класс is-selected и измените текст status.

// Задание 3. Подключите mouseenter к hoverZone.
// Добавьте класс is-hovered и покажите сообщение.

// Задание 4. Подключите mouseleave к hoverZone.
// Уберите класс is-hovered и верните исходный текст статуса.



scoreButton.addEventListener("click", function() {
    points++; 
    score.textContent = points; 
    statusElement.textContent = "Одинарный клик!"; 
});


doubleCard.addEventListener("dblclick", function() {
    doubleCard.classList.toggle("is-selected"); 
    statusElement.textContent = "Двойной клик!"; 
});

hoverZone.addEventListener("mouseenter", function() {
    hoverZone.classList.add("is-hovered"); 
    statusElement.textContent = "Навели курсор!"; 
});


hoverZone.addEventListener("mouseleave", function() {
    hoverZone.classList.remove("is-hovered"); 
    statusElement.textContent = "Ожидание действия."; 
});