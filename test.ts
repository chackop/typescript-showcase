// specifying interfaces
interface WatchConstructor{
    new (hour: number, minute: number): WatchInterface;
}
interface WatchInterface {
    tick(): void;
}

// managing a constructor function.
// this signature of accepting a constructor and returning an instance of.
// WatchInterface will allow us to use it with both
// DigitalWatch and AnalogWatch classes.

function createWatch(ctor: WatchConstructor, hour: number, minute: number): WatchInterface{
    return new ctor(hour, minute);
}

// declaring classes
class DigitalWatch implements WatchInterface {
    constructor(h: number, m: number) {}
    tick() {
        console.log("beep beep");
    }
}
class AnalogWatch implements WatchInterface {
    constructor(h: number, m: number){

    }
    tick() {
        console.log("tick tock");
    }
}

// instantiating classes
let digital = createWatch(DigitalWatch, 12, 17);
let analog = createWatch(AnalogWatch, 7, 32);

// executing class functions
digital.tick();
analog.tick();