export default class UserRequirement {
    constructor(user, topic, type, width = 0, height = 0, color = 'none') {
        this.user = user;
        this.topic = topic;
        this.type = type;
        this.width = width;
        this.height = height;
        this.color = color;
        this.dateOrder = new Date();
        this.isOnWork = false;
    }
}