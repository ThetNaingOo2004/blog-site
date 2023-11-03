
/////////////// Navbar & Footer //

 document.addEventListener("DOMContentLoaded", () => {
     // Load the Navbar Component
     fetchComponent("./navbar.html", "navbar-container");
    // Load the Footer Component
     fetchComponent("./footer.html", "footer-container");
 });
 function fetchComponent(url, containerId) {
     fetch(url)
     .then(response => response.text())
     .then(data => {
         document.getElementById(containerId).innerHTML = data;
     })
     .catch(error => {
         console.error(`Error fetching component: ${error}`);
     });
 }

 

//          !!!!!!!!!!!!!   START inputs validation

validateEmail();
checkPasswordStrength();
const signupForm = document.getElementById("signupForm");

        signupForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const username = document.getElementById("username").value;
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;
            // Add your validation logic here (e.g., checking for password strength, email format, etc.)
            if (username && email && password) {
                // Form is valid, you can submit it to the server or perform other actions
                console.log("Form submitted");
                // You can use AJAX to submit the data to the server
                // Example:
                // const formData = new FormData(signupForm);
                // fetch('your-api-endpoint', { method: 'POST', body: formData })
            } else {
                alert("Please fill in all the fields.");
            }
        });

// <script>

// 

// // Form validation using JavaScript
function validateEmail() {
     const emailInput = document.getElementById("email");
     const resultMessage = document.getElementById("email_result");

     const email = emailInput.value;
     // Regular expression to match a valid email format
     const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
     emailInput.addEventListener('keyup',(event)=>{
         if(emailPattern.test(event.target.value)){
             resultMessage.innerHTML = "Valid email address.";
             resultMessage.style.color = "green";
         }
         else{
             resultMessage.innerHTML = "Invalid email address.";
             resultMessage.style.color = "red";
         }
     });
 }



 
function checkPasswordStrength() {
     const passwordInput = document.getElementById("password");
     const resultMessage = document.getElementById("result");

     const password = passwordInput.value;

     // Define regular expressions for password criteria
     const lengthRegex = /^.{8,}$/;
     const uppercaseRegex = /[A-Z]/;
     const lowercaseRegex = /[a-z]/;
     const numberRegex = /\d/;
     const specialCharRegex = /[-!@#$%^&*()_+|~=`{}\[\]:";'<>?,.\/\\]/;

     let strength = 0;

     if (lengthRegex.test(password)) {
         strength++;
     }
     if (uppercaseRegex.test(password)) {
         strength++;
     }
     if (lowercaseRegex.test(password)) {
         strength++;
     }
     if (numberRegex.test(password)) {
         strength++;
     }
     if (specialCharRegex.test(password)) {
         strength++;
     }

    passwordInput.addEventListener("keyup", (event) => {
        if (passwordInput.value.match(lengthRegex) && passwordInput.value.match(uppercaseRegex) && passwordInput.value.match(lowercaseRegex) && passwordInput.value.match(numberRegex) && passwordInput.value.match(specialCharRegex)){
            resultMessage.innerHTML = "Strong password.";
            resultMessage.style.color = "green";
        }
        else if (passwordInput.value.match(uppercaseRegex) && passwordInput.value.match(lowercaseRegex) && passwordInput.value.match(numberRegex)){
             resultMessage.innerHTML = "Moderate password.";
             resultMessage.style.color = "orange";
        }
        else if (passwordInput.value.match(numberRegex) && passwordInput.value.match(lowercaseRegex) && !passwordInput.value.match(uppercaseRegex)){
            resultMessage.innerHTML = "Password must contain a number.";
            resultMessage.style.color = "yellow";
        }
        else{
            resultMessage.innerHTML = "Password need atleast 8 character.";
            resultMessage.style.color = "red";
        }
    })
}
    