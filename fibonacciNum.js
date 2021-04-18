let firstTerm = 1;
function fterm(n){
  if(n<3){
    return firstTerm;
  }
  else return fterm(n-1) + fterm(n-2);
}

console.log(fterm(10));

// => 55
