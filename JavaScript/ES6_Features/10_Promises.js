//Singer -> Producing Code
//Fans -> Consuming Code
//Promise -> Links -> Producing Code <-> Consuming Code together

//Promise having producing code.
let successPromise = new Promise((resolve, reject) => {
  // executor (the producing code, "singer")
  resolve("Hey Guys, here's my next song, 'Dheere Chal'");
 
});

let failurePromise = new Promise((resolve, reject) => {
    // executor (the producing code, "singer")  
    reject("My Studio burnt, so couldn't record the song!, will keep you posted!");
 });
  

// promise:SUCCESS state: pending -> resolve("done") -> state: fulfilled
// promise:FAILURE state: pending -> reject("done") -> state: rejected
//Consume the code from promise. then

failurePromise.then(
  (succes) => console.log("Here's my result:- ", succes),
  (failure) => console.log("Unable to complete!", failure)
);
