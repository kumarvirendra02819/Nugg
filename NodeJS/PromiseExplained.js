Promise.resolve(1)                  //this will pass 1 to next chain
.then(y=>y+1)                       // this will add 1 into y and the value of y is 2
.then(y => {    
    throw new Error('Error');       //this will throw error and the program will go into catch
})
.catch(() => 1)                     //the catch block is returning 1
.then(y => y+1)                     // this is getting 1 from the catch block above and adding 1 into y i.e. y is equal to 2 now
.then(y => console.log(y))          // here the program will output 2 into console
.catch(console.error);              // this statement is not executed because no error is thrown above