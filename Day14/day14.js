  const higherOrderFunction = (callback) => {    
    callback();
  };
  
  const callbackFunction = () => {
    console.log("Callback is called!");
  };
  
  higherOrderFunction(callbackFunction);