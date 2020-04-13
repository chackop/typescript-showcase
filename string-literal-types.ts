type EventType = {};
function on(event: EventType, callback: () => any){
  // ...
}

// OK
on('click', () => console.log('Click!'));

// OK
on('mouseover', () => console.log('Mouseover!'));

// Error: argument of type 'drag'
// is not assignalbe to parameter of type
// 'click | mouseover'... 
on('drag', () => console.log('Drag!'));

