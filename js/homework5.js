/*ДЗ1

Створіть об'єкт з щонайменше трьома властивостями (намагайтесь виявити фантазію).
Напишіть метод getInfo(), який виводитиме всі властивості об'єкта у вигляді пар "ключ: значення".
Зверніть увагу: метод повинен працювати навіть після додавання нових властивостей до об'єкта.

Наприклад так:
obj.getInfo(); // Правильна інформація про об'єкт
obj.newProperty = 'Нова властивість!'; // Додали властивість до об'єкта
obj.getInfo(); // Виводить всі властивості, включаючи щойно додану.

Умови виконання ДЗ
 - Не використовувати функції або інші матеріали які ми не вивчали
 - Не використовувати методи keys, values, entries
 - Намагайтесь робити ДЗ самостійно та не дивитися будьякі підказки
 - Будь ласка, надайте наступні дані для перевірки вашої роботи:
 - Створіть гілку js_homework5.
 - Додати туди ваше домашне завдання
 - Вислати вашу гілку */

var car = {
    color: 'blue',
    carMake: 'Tesla',
    model: '3',
    yearProduction: '2020',
    getInfo: function (){
        for (let key in car){
<<<<<<< HEAD
            console.log(key + ': ' + car[key]);
        }
    }
}
car.getInfo()
car.ownNumber = '3';
=======
            if (typeof this[key] !== 'function'){
                console.log(key + ': ' + car[key]);
            }
        }
    }
}
// Виведення інформації про об'єкт
car.getInfo()

// Додавання нової властивості до об'єкта
car.ownNumber = '3';

// Виведення інформації про об'єкт з новою властивістю
>>>>>>> c780c08 (homework5.js)
car.getInfo()



/*ДЗ2 Сума вартості послуг

Припустимо, у нас є об'єкт. Властивості об'єкта - назва послуги та її вартість:

    var services = {

        "стрижка": "60 грн",

        "гоління": "80 грн",

        "Миття голови": "100 грн"

    };

"Послуги" можуть додаватися по ходу роботи:

 -  services['Розбити скло'] = "200 грн";

Умови виконання ДЗ

- створити метод price(), який обчислює та повертає загальну вартість "наданих послуг".
- створити метод minPrice() - який повертає мінімальний price
- створити метод maxPrice() - який повертає максимальний price
Будь ласка, надайте наступні дані для перевірки вашої роботи:
- Створіть гілку js_homework5.
- Додати туди ваше домашне завдання
- Вислати вашу гілку */

<<<<<<< HEAD
var salon = {
    haircut : '60 грн',
    shaving: '80 грн',
    hairWash: '100 грн',
    additional: '200 грн',
    price: function (){
        let priceHaircut = this.haircut.replace(' грн', '');
        let priceShaving = this.shaving.replace(' грн', '');
        let priceHairWash = this.hairWash.replace(' грн', '');
        let priceAdditional = this.additional.replace(' грн', '');
        console.log( +priceHaircut + +priceShaving + +priceHairWash + +priceAdditional);
    },
    minPrice: function () {
        console.log('Мінімамьний прайс = ' + this.haircut.replace('грн', '') + 'грн')
    },
    maxPrice: function (){
        console.log('Максымальный прайс = ' + this.additional.replace('грн', '') + 'грн')
    },

}
salon.price()
salon.minPrice()
salon.maxPrice()

=======
var services = {
    "стрижка": 60,
    "гоління": 80,
    "Миття голови": 100,
    // Метод для додавання нових послуг
    addService: function(name, price) {
        this[name] = price;
    },
    // Метод для обчислення загальної вартості послуг
    price: function() {
        let total = 0;
        for (let service in this) {
            if (typeof this[service] === 'number') {
                total += this[service];
            }
        }
        return total;
    },
    // Метод для знаходження мінімальної вартості послуг
    minPrice: function() {
        let min = Number.MAX_VALUE;
        for (let service in this) {
            if (typeof this[service] === 'number') {
                let price = this[service];
                if (price < min) {
                    min = price;
                }
            }
        }
        return min;
    },
    // Метод для знаходження максимальної вартості послуг
    maxPrice: function() {
        let max = Number.MIN_VALUE;
        for (let service in this) {
            if (typeof this[service] === 'number') {
                let price = this[service];
                if (price > max) {
                    max = price;
                }
            }
        }
        return max;
    }
};

// Додавання нової послуги
services.addService('Розбити скло', 200);

// Виведення результатів
console.log("Загальна вартість послуг: " + services.price() + " грн");
console.log("Мінімальна вартість послуг: " + services.minPrice() + " грн");
console.log("Максимальна вартість послуг: " + services.maxPrice() + " грн");
>>>>>>> c780c08 (homework5.js)
