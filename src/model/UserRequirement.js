export default class UserRequirement {
    constructor(user='none', topic, type, width = 0, height = 0, color = 'none', dateOrder = new Date(), isOnWork = 0, other='') {
        this.user = user;
        this.topic = topic;
        this.type = type;
        this.width = width;
        this.height = height;
        this.color = color;
        this.dateOrder = dateOrder;
        this.isOnWork = isOnWork;
        this.other = other;
    }
}