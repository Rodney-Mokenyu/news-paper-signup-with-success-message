document.addEventListener('DOMContentLoaded', function () {
    // Your code here
    const userEmail = localStorage.getItem('userEmail');
    document.getElementById('user-email').textContent = userEmail ? userEmail : 'No email subscribed';
    const dismissButton = document.getElementById('dismiss-button');
    dismissButton.addEventListener('click', function () {
        // Clear the local storage and redirect to the main page
        localStorage.removeItem('userEmail');
        window.location.href = 'index.html';
    });
});