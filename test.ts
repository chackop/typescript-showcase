// declaring the main class
class Control {
    private state: any;
}

// extending the class into interface
interface SelectableControl extends Control {
    select(): void;
}

// extending one class into another and implementing
// the interface binding
class Button extends Control implements SelectableControl {
    select() { }
}

class TextBox extends Control {
    select() { }
}

// Error: Property is missing
class Image implements SelectableControl {
    private state: any;
    select() { }
}
