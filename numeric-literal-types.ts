function getPort(scheme: 'http'): 80;
function getPort(scheme: 'https'): 443;
function getPort(scheme: 'http' | 'https'): 80 | 443{
  switch(scheme){
    case 'http':
      return 80;
    case 'https':
      return 443;
  }
}

const httpsPort = getPort('https');
const httpPort = getPort('http');

if(httpPort === 443){
  //...
}
