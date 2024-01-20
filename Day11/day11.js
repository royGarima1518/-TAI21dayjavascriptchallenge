function validateEmail(email) {
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (emailRegex.test(email)) {
      console.log(`${email} is a valid email address.`);
    } else {
      console.log(`${email} is not a valid email address.`);
    }
  }
  
  
  validateEmail("garima@gmail.com");
  validateEmail("invalid-email");
  