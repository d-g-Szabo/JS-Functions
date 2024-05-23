// function structure
//  function functionName() {
//   action;
//  }

//function declaration --> function is NOT running
function sayHello() {
  console.log("Hello");
}

//function call or invoke --> now my function is running
sayHello();

//function arguement ()
function sayHello(username) {
  console.log("Hello " + username);
}

//function arguement ()
sayHello("Daniel");

//function arguement ()
//we gave our parameters the value of the argouments below
function sayHello(username, age) {
  console.log("Hello " + username + " you are " + age + " years old");
}

//function arguement ()
sayHello("Daniel", 26);

//function with return --> the value added after the return is accessible outside the function scope
function add(num1, num2) {
  return num1 + num2;
}

console.log(add(2, 3));

//function that add a new image
function addImage(image) {
  var img = document.createElement("img");
  img.src = image;
  document.body.appendChild(img);
  img.style.width = "50%";
}

addImage(
  "https://e3.365dm.com/24/04/1600x900/skynews-karen-zoo-ostrich-topeka-zoo_6530559.jpg?20240423111124"
);
