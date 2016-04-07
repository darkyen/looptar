import looptar from './src/index';
try{
  let arr = [];
  for(let i = 0; i < 114000000; i++ ){
    looptar.iterates(1);
    arr.push({
      x: 4 * Math.random(),
      x: 5 * Math.random()
    });
  }
  looptar.exits(1);
}catch(e){
  console.log("Breaking 114 Million works");
}

try{
  let arr2 = [];
  for( let j = 0; j < 11400; j++ ){
    looptar.iterates(2);
    arr2.push(5);
  }
  looptar.exits(2);
  console.log("Works fine");
}catch(e){
  console.log("Fails");
}
