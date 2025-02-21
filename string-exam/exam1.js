const canPowerBy2 = (arr) => {
    
    let result = [];
  
    
    for (let i = 1; i < arr.length; i++) {
      let number = arr[i];
      
     
      if (number > 1 && number % 2 === 0 && (Math.log2(number) % 1 === 0)) {
        result.push(1); 
      } else {
        result.push(0); 
      }
    }
  
    return result;             
}
  
  const res = canPowerBy2([2, 34, 16, 69, 64]);
  console.log(res); // output: [1, 0, 1, 0, 1]   
  
  const res2 = canPowerBy2([9, 4, 7, 7, 128]);
  console.log(res2); // output: [0, 1, 0, 0, 1]
  