window.function = function (quantity, max, seed) {
  
  quantity = quantity.value ?? "1";
  max = max.value ?? "1000";
  seed = seed.value ?? "";
  
  const arr = []
  while(arr.length < quantity){
    var candidateInt = Math.floor(Math.random() * max) + 1
    if(arr.indexOf(candidateInt) === -1) arr.push(candidateInt)
  }
return arr.join(", ");

}
