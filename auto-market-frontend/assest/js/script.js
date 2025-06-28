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
document.getElementById("contactForm").addEventListener("submit", function (e) {
      e.preventDefault();
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;

      if (validateForm(name, email, message)) {
        alert("Message sent successfully!");
        this.reset();
      }
    });
function changeMainImage(src) {
      document.getElementById("main-image").src = src;
    };
    
const form = document.getElementById('purchaseForm');
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      if (!form.checkValidity()) {
        form.classList.add('was-validated');
        return;
      }

      alert('Thank you! Your purchase has been submitted.');
      form.reset();
      form.classList.remove('was-validated');
    });

  function openFullscreenImage(src) {
    const modalImage = document.getElementById('modalImage');
    modalImage.src = src;
    const modal = new bootstrap.Modal(document.getElementById('imageModal'));
    modal.show();
  }


displayCar("BMW 330i");