// Отслеживаем клик на странице

window.addEventListener('click', function (event) {

    // проверяем что клик был совершен по кнопке "добавить в карзину"
    if (event.target.hasAttribute('data-cart')) {

        // находим карточку с товаром внутри которой был совершен клик 
        const card = event.target.closest('.card');

        // Собираем данные с этого товара и записываем их в единый объект productInfo
        const productInfo = {
            id: card.dataset.id,
            imgSrc: card.querySelector('.product-img').getAttribute('src'),
            title: card.querySelector('.item-title').innerText,
            itemsInbox: card.querySelector('[data-items-in-box]').innerText,
            weight: card.querySelector('.price__weight').innerText,
            price: card.querySelector('.price__currency').innerText,
            counter: card.querySelector('[data-counter]').innerText,
        };

        console.log(productInfo);

    };
});