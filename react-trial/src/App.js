import React, { useState } from 'react';
 
function App()  {

 const [count, setCount]= useState(0);

 //Destructuring
 console.log(count);

function addToCart() {
    setCount(count + 1) ;
}

function removeFromCart() {
    setCount(count - 1) ;
}

return (
    <div>
       <h1>{count}</h1>
       <button onClick={addToCart} >AddToCart </button>
       <button onClick={removeFromCart} >RemoveFromCart </button>
    </div>
   // document.getElementById("root")
 );

}

export default App;