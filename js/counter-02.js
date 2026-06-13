// 26:10
// ДОбавляем прослушку на всем окне
window.addEventListener('click', function (event) {

    // Объявляем переменную для счетчика 
    let counter;

    // ПРоверяем клик строго по кнопакм + или - 
    if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
        console.log(true)
        // Находим обертку счетчика 
        const counterWrapper = event.target.closest('.counter-wrapper');
        // находим div с числом счетчика 
        counter = counterWrapper.querySelector('[data-counter]');
    }

    // Проверяем является ли элемент по которому был совершен клик кнопкой Плюс
    if (event.target.dataset.action === 'plus') {
        counter.innerText = ++counter.innerText;
    }

    // Проверяем является ли элемент по которому был совершен клик кнопкой Минус
    if (event.target.dataset.action === 'minus') {
        // проверяем что бы счетчик был больше 1
        if (parseInt(counter.innerText) > 1) {
            // изменяем текст в счетчике уменьшая его на 1
            counter.innerText = --counter.innerText;
        }
    }
});

// 47:00 ...



