function check_obj_is_empty(obj) {
  if (Object.keys(obj).length === 0) {
    console.log("The object is empty.");
  } else {
    console.log("Keys and values of the object:");

    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (typeof obj[key] === "object") {
          console.log(key + ":");
          check_obj_is_empty(obj[key]); 
        } else {
          console.log(key + ": " + obj[key]);
        }
      }
    }
  }
}

const sampleObject = {
  name: "John",
  age: 30,
  address: {
    street: "123 Main St",
    city: "Exampleville",
  },
};

check_obj_is_empty(sampleObject);
