class Telephone {
    constructor() {
        this.PhoneNumber = [];
        this.observers = [];
    }

    addPhoneNumber = (number) => {
        if (!this.PhoneNumber.includes(number)) {
            this.PhoneNumber.push(number);
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
        this.observer.forEach(observer => {
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



const telephone = new Telephone();
telephone.addPhoneNumber("123-456-7890");
telephone.addPhoneNumber("987-654-3210");
telephone.dialPhoneNumber("123-456-7890");
telephone.removeNumber("123-456-7890");
telephone.dialPhoneNumber("123-456-7890");