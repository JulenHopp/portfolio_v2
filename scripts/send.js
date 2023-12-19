document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('contact-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevents the default form submission behavior

        var formData = new FormData(form);

        // Send the form data with AJAX
        fetch('scripts/enviar.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.text()) 
        .then(data => {
            alert('Thank you for your message. I will read and respond to it as soon as possible.');
        })
        .catch(error => {
            console.error('Error:', error);
            alert('There was an error sending the message. Please try again.');
        });
    });
});