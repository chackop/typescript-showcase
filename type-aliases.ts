function broken(name: string | null): string {
    function postfix(epithet: string) {
      // error, 'name' is possibly null
      return name.charAt(0) + '. the ' + epithet;
    }
  
    name = name || 'Bob';
    return postfix('great');
  }
  
  function fixed(name: string | null): string {
    function postfix(epithet: string) {
      // ok
      return name!.charAt(0) + '. the ' + epithet;
    }
  
    name = name || 'Bob';
    return postfix('great');
  }
  