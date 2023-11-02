function calculateCost() {
    // Получение значений из формы
    var count = document.getElementById("count").value;
    var product = document.getElementById("product").value;

    // Расчет стоимости
    var price;
    if (product === "product1") {
        price = 4500;
    } else if (product === "product2") {
        price = 4400;
    } else if (product === "product3") {
        price = 3600;
    } else if (product === "product4") {
        price = 5400;
    } else if (product === "product5") {
        price = 5400;
    }
    var totalCost = count * price;
    // Вывод стоимости заказа на страницу
    document.getElementById("result").innerHTML = "Стоимость заказа: " + totalCost + " руб.";
}