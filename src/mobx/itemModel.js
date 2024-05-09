import { makeAutoObservable } from "mobx";

class Item {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
        makeAutoObservable(this);
    }
}

export default Item;