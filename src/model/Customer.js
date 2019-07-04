export default class Customer {
    constructor(name, password, email, startDate = new Date(), img = null, order = new Array()) {
        this.name = name;
        this.password = password;
        this.email = email;
        this.startDate = startDate;
        this.img = img;
        this.order = order;
    }
}