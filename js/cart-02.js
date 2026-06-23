// div внутри карзины в который мы добавляем товары 
const cartWrapper = document.querySelector('.cart-wrapper');

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

        // проверяем есть ли в карзине такой товар 
        const itemInCart = cartWrapper.querySelector(`[data-id="${productInfo.id}"]`);
        // console.log(itemInCart);

        // Если товар есть в карзине 
        if (itemInCart) {
            const counterElement = itemInCart.querySelector('[data-counter]');
            counterElement.innerText = parseInt(counterElement.innerText) + parseInt(productInfo.counter);
        } else {
            // Если товара нет в карзине


            // Собранные данные подставим в шаблон для товара в карзине 
            const cardItemHtml = `	<!-- Cart item -->
        <div class="cart-item" data-id="${productInfo.id}">
            <div class="cart-item__top">
                <div class="cart-item__img">
                    <img src="${productInfo.imgSrc}" alt="${productInfo.title}">
                </div>
                <div class="cart-item__desc">
                    <div class="cart-item__title">${productInfo.title}</div>
                    <div class="cart-item__weight">${productInfo.itemsInbox} / ${productInfo.weight}</div>

                    <!-- cart-item__details -->
                    <div class="cart-item__details">

                        <div class="items items--small counter-wrapper">
                            <div class="items__control" data-action="minus">-</div>
                            <div class="items__current" data-counter="">${productInfo.counter}</div>
                            <div class="items__control" data-action="plus">+</div>
                        </div>

                        <div class="price">
                            <div class="price__currency">${productInfo.price}</div>
                        </div>

                    </div>
                    <!-- // cart-item__details -->

                </div>
            </div>
        </div>
        <!-- // Cart item -->`;

            // отобразим товар в карзине 
            cartWrapper.insertAdjacentHTML('beforeend', cardItemHtml);

        };

        // Сбрасываем счетчик на "1"
        card.querySelector('[data-counter]').innerText = '1';

        // Отображение статуса корзины - Пустая / Полная
        toggleCartStatus();
    };
});