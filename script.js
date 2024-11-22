// Example JavaScript for simple form validation
document.querySelector('form').addEventListener('submit', function(event) {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    
    if (!name || !email) {
        alert("Please fill in all fields.");
        event.preventDefault();
    }
});
