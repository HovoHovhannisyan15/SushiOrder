// находим кнопки - и +
const btnMinus = document.querySelector('[data-action="minus"]');
const btnPlus = document.querySelector('[data-action="plus"]');

const counter = document.querySelector('[data-counter]');

// отслеживаем клик по кнопке - btnMinus
btnMinus.addEventListener('click', function () {
    // проверяем что бы счетчик был больше 1
    if (parseInt(counter.innerText) > 1) {
        // изменяем текст в счетчике уменьшая его на 1
        counter.innerText = --counter.innerText;
    }
})
// отслеживаем клик по кнопке + btnPlus
btnPlus.addEventListener('click', function () {
    // изменяем текст в счетчике увеличивая его на 1
    counter.innerText = ++counter.innerText;
})

// 25:35 - меняем код так что бы счетчик работал для всех карточек товаров 


