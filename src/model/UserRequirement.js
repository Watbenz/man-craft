export default class UserRequirement {
    constructor(user, topic, type, width = 0, height = 0, color = 'none', dateOrder = new Date(), isOnWork = false) {
        this.user = user;
        this.topic = topic;
        this.type = type;
        this.width = width;
        this.height = height;
        this.color = color;
        this.dateOrder = dateOrder;
        this.isOnWork = isOnWork;
    }
}