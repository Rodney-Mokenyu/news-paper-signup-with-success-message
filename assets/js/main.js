document.addEventListener('DOMContentLoaded', function() {
    // Your code here
    const emailInput = document.getElementById('email-input');
    const submitButton = document.getElementById('subscription-button');
    const emailError = document.getElementById('email-validation-error');

    // Function to validate email format
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    submitButton.addEventListener('click', function(event) { 
        if (validateEmail(emailInput.value)) {
            emailError.style.display = 'none';

           const email = emailInput.value.trim();
           localStorage.setItem('userEmail', email);
           // Redirect to the subscribed page
           window.location.href = 'subscribed.htm';
           
        } else {
            emailError.style.display = 'block';
            event.preventDefault(); // Prevent form submission if email is invalid
        }
    });
});