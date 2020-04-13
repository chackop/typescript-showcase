// managing a constructor function.
// this signature of accepting a constructor and returning an instance of.
// WatchInterface will allow us to use it with both
// DigitalWatch and AnalogWatch classes.
function createWatch(ctor, hour, minute) {
    return new ctor(hour, minute);
}
// declaring classes
var DigitalWatch = /** @class */ (function () {
    function DigitalWatch(h, m) {
    }
    DigitalWatch.prototype.tick = function () {
        console.log("beep beep");
    };
    return DigitalWatch;
}());
var AnalogWatch = /** @class */ (function () {
    function AnalogWatch(h, m) {
    }
    AnalogWatch.prototype.tick = function () {
        console.log("tick tock");
    };
    return AnalogWatch;
}());
// instantiating classes
var digital = createWatch(DigitalWatch, 12, 17);
var analog = createWatch(AnalogWatch, 7, 32);
// executing class functions
digital.tick();
analog.tick();
