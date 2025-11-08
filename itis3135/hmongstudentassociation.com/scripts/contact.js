// Handle membership form submission
const form = document.getElementById('membershipForm');
const completionSection = document.getElementById('completionMessage');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  // Show completion section and display input data
  completionSection.style.display = 'block';
  document.getElementById('nameOutput').textContent = `Name: ${form.fullName.value}`;
  document.getElementById('emailOutput').textContent = `Email: ${form.email.value}`;
  document.getElementById('majorOutput').textContent = `Major: ${form.major.value}`;
  document.getElementById('membershipOutput').textContent = `Membership Type: ${form.membershipType.value}`;
  document.getElementById('messageOutput').textContent = `Message: ${form.message.value}`;

  // Optionally hide form after submission
  form.style.display = 'none';
});
