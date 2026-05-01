class Telephone {
    constructor() {
        this.PhoneNumber = [];
        this.observers = [];
    }

    addPhoneNumber = (number) => {
        if (!this.PhoneNumber.includes(number)) {
            this.PhoneNumber.push(number);
            console.log(` ${number} has been added to the phone book.`);
        }
    }
    removeNumber = (number) => {
        this.PhoneNumber = this.PhoneNumber.filter((num) => num !== number)
        console.log(` ${number} has been removed from the phone book.`);
    }

    addObserver = (observer) => {
        this.observers.push(observer);
    }

    removeObserver = (observer) => {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    notifyObservers = (number) => {
        this.observers.forEach(observer => {
            observer.update(number)
        })
    }
    dialPhoneNumber = (number) => {
        if (this.PhoneNumber.includes(number)) {
            console.log(`Dialing ${number}`);
            this.notifyObservers(number)
        } else {
            console.log("Number not found");
        }
    }

}

class IgnoreObserver {
    update(number) {
        console.log(number)
        console.log(`first observer has been notified `)
    }
}

class DialPhoneObserver {
    update(number) {
        console.log(`Now Dialling ${number}`)
    }
}

//create telephone
const phone = new Telephone();
phone.addPhoneNumber("123-456-7890");
phone.addPhoneNumber("987-654-3210");


//create observer1
const observer1 = new IgnoreObserver();
const observer2 = new DialPhoneObserver();
//add observer to telephone
phone.addObserver(observer1);
phone.addObserver(observer2);

// dial a phone number
phone.dialPhoneNumber("123-456-7890");