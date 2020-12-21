(function () {
    'use strict';

    angular.module('Lab_4', [])
        .controller('buyController', BuyController)
        .controller('boughtController', BoughtController)
        .service('productsService', ProductsService);

    BuyController.$inject = ['productsService'];
    function BuyController(service) {
        var controller = this;
        controller.toBuyProducts = service.getToBuyProducts();

        controller.addBoughtProduct = function (productIndex) { 
            service.addProduct(productIndex);
        }
    };

    BoughtController.$inject = ['productsService'];
    function BoughtController(service) {
        var controller = this;
        controller.boughtProducts = service.getBoughtProducts();
    };

    function ProductsService() {
        var service = this;

        var boughtProducts = [];

        var toBuyProducts = [
            new Product("Сало", 5),
            new Product("Смалець", 3),
            new Product("Часник", 20),
            new Product("Цибуля", 10),
            new Product("Хліб", 10)
        ];

        service.addProduct = function (productIndex) {
            boughtProducts.push(toBuyProducts[productIndex]);
            toBuyProducts.splice(productIndex, 1);
        };

        service.getToBuyProducts = function () {
            return toBuyProducts;
        };

        service.getBoughtProducts = function () {
            return boughtProducts;
        };
    };

    class Product {
        constructor(name, quantity) {
            this.name = name;
            this.quantity = quantity;
        };
    };

})();
