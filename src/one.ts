export default class One {
    name : 'Maxim';
    constructor(name) {
        this.name = name;
    }
    set Name(name) {
        this.name = name;
    }
    get Name() {
        return this.name;
    }
};

export const getRandName = ():string =>  {
    const names = ['Maxim', 'Pasha', 'Vasya', 'Kiril']
    const person = new One(names[Math.floor(Math.random() * Math.floor(names.length - 1))]);
    return person.Name;
};
