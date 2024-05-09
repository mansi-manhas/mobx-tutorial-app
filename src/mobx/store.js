import { makeAutoObservable } from "mobx";

class Store {

    items = [
        { id: 1, name: 'item 1', price: 100 },
        { id: 2, name: 'item 2', price: 200 },
        { id: 3, name: 'item 3', price: 300 },
    ];

    cart = [];

    constructor() {
        makeAutoObservable(this); //infers all properties by default
    }

    addItemToCart(item){
        this.cart.push(item);
    }

    removeItemFromCart(itemId){
        this.cart = this.cart.filter(item => item.id !== itemId)
    }

    get totalPrice(){
        return this.cart.reduce((total, item) => total + item.price, 0);
    }

}

const store = new Store();

export default store;