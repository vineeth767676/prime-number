import React , {useState} from "react";
import "./styles.css";

export default function App() {
var[userInput , setUserInput] = useState("");



function checkPrimeNumber(event) {
   var result = true;
  var userInput = (event.target.value);
  setUserInput(userInput);  
    for(var i=2;i<userInput;i++){ //for loop
  
      if(userInput%i==0){ //if condition
        result=false;
        break;
      }
  }

  if(result==true){
    setUserInput(" is a prime number");//output
  }else{
    setUserInput( " not a prime number"); //output
  }

}



// checkPrimeNumber(number);


  return (
    <div className="App">
      <h1>Prime number or not </h1>

<input onChange = {checkPrimeNumber}/> 

<h2> {userInput} </h2>
      
    </div>
  );
}
