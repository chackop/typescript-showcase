function print(text: string | string[]): string {
    if(typeof text === 'string'){
      return text;
    }
  
    //compiler now knows that you can use join
    // and that variable type is definitely string[]
  
    return text.join(' ');
  }
  
  let x = print('hello text');
  let y = print(['hello', 'text', 'array']);
  
  // Error: Argument of type '5' is not assignable...
  // let z = print(5);
  
  console.log(x);
  console.log(y);
  
  interface IStudent {
    id: string;
    age: number;
  }
  
  interface IWorker {
    companyId: string;
  }
  
  type IUnionType = IStudent | IWorker;
  
  let p: IUnionType = {
    id: 'ID1234',
    age: 21
  };
  
  // Type '3; is not assignable to type 'IUnionType'
  // p = 3;
  
  p = {
    companyId: 'cid1234'
  };
  
  
  
  
  
  