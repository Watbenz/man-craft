export default class Technician {
    constructor(name, password, email, startDate = new Date(), img = null, order=new Array(), desc='', imgGood=new Array()) {
        this.name = name;
        this.password = password;
        this.email = email;
        this.startDate = startDate;
        this.img = img;
        this.order = order;
        this.desc = desc;
        this.imgGood = imgGood;
    }
}