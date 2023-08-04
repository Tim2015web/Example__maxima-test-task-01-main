// Перехватывает элементы
let prevElement = document.querySelector('.prev');
let nextElement = document.querySelector('.next');
let sliderItemsElements = document.querySelectorAll('.slider__item');

// Номер текущего активного слайда
let itemCount = 0;

// Кнопка назад
prevElement.addEventListener('click', () => {
    // Увеличиваем или уменьшаем счетчик слайдов
    itemCount--;
    // Сброс счетчика при достижении предела
    if (itemCount < 0) { itemCount = sliderItemsElements.length - 1; }
    // Запуск функции с дальнейшей логикой
    slideShow();
});

// Кнопка далее
nextElement.addEventListener('click', () => {
    itemCount++;
    if (itemCount > (sliderItemsElements.length - 1)) { itemCount = 0; }
    slideShow();
});

// Логика активации слайда
function slideShow() {
    // Скрываем все имеющиеся слайды
    for (let i = 0; i < sliderItemsElements.length; i++) {
        sliderItemsElements[i].classList.remove('slider__item_active');
    }
    // Активируем нужный слайд
    sliderItemsElements[itemCount].classList.add('slider__item_active');
}