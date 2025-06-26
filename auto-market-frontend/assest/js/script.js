function showDetails(carName) {
  alert("Showing details for: " + carName);
}

function validateForm(name, email, message) {
  if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
    alert("Please fill in all fields.");
    return false;
  }
  return true;
}

const cars = ["BMW 330i", "Audi A4", "Mercedes C200"];
cars.forEach((car, index) => {
  console.log("Car " + (index + 1) + ": " + car);
});

const displayCar = (car = "Unknown") => {
  console.log("Selected car: " + car);
};

displayCar("BMW 330i");