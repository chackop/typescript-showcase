// function process(text: null): null;
// function process(text: string): string;
// function process(text: any): any {
//     return text && text.replace(/f/g, 'p');
// }

function process<T extends string | null>(
    text: T
  ): T extends string ? string : null {
    return <any>(text && text.replace(/f/g, "p"))
  }
  
  declare const maybeFoo: string | null;
  
  process("foo").toUpperCase();
  process(null).toUpperCase();
   process(maybeFoo);
  
   
  
  