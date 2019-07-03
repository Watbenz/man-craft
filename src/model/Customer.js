export default class Customer {
    constructor(name, password, email, img = null) {
        this.name = name;
        this.password = password;
        this.email = email;
        this.startDate = new Date();
        this.img = img;
        this.order = new Array();
    }
}