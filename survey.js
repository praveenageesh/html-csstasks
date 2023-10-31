document.getElementById('survey-form').addEventListener('submit', function(event) {
  event.preventDefault();

  // Get form values
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var feedback = document.getElementById('feedback').value;

  // Display submitted data
  alert('Name: ' + name + '\nEmail: ' + email + '\nFeedback: ' + feedback);

  // You can send the data to a server or perform other actions here
});
