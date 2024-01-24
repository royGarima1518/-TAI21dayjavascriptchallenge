function simulateAsync(data) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (data) {
          resolve("Success: " + data);
        } else {
          reject("Error: No data provided");
        }
      }, 1000);
    });
  }
  
  simulateAsync("Some data")
    .then(result => {
      console.log(result);
    })
    .catch(error => {
      console.error(error);
    });