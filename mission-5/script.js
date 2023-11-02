function calculateCost() {
    // Получение значений из формы
    var count = document.getElementById("count").value;
    var product = document.getElementById("product").value;

    // Расчет стоимости
    var price;
    if (product === "product1") {
        price = 90000;
    } else if (product === "product2") {
        price = 15000;
    } else if (product === "product3") {
        price = 135000;
    }
    else if (product === "product4") {
        price = 20000;

    }
    var totalCost = count * price;
    // Вывод стоимости заказа на страницу
    document.getElementById("result").innerHTML = "Стоимость заказа: " + totalCost + " руб.";
}