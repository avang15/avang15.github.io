// -------------------------
// LOAD IMAGE PREVIEW
// -------------------------
function loadImage() {
  const fileInput = document.getElementById("picture");
  const file = fileInput.files[0];
  const preview = document.getElementById("loadImage");

  if (!file) return;

  const reader = new FileReader();
  reader.onload = function (e) {
    preview.innerHTML = `<img src="${e.target.result}" alt="Uploaded Image" style="max-width: 300px; display:block; margin-top:10px;">`;
  };
  reader.readAsDataURL(file);
}

// -------------------------
// ADD NEW COURSE
// -------------------------
function addCourse() {
  const container = document.getElementById("courses-container");
  const div = document.createElement("div");
  div.classList.add("course-item");
  div.innerHTML = `
    <input type="text" name="course-dept[]" placeholder="Department" required>
    <input type="text" name="course-num[]" placeholder="Number" required>
    <input type="text" name="course-name[]" placeholder="Course Name" required>
    <input type="text" name="course-reason[]" placeholder="Reason" required>
    <button type="button" onclick="deleteCourse(this)">Delete</button>
  `;
  container.appendChild(div);
}

// -------------------------
// DELETE A COURSE
// -------------------------
function deleteCourse(button) {
  button.parentElement.remove();
}

// -------------------------
// CLEAR FORM
// -------------------------
function clearForm() {
  const form = document.getElementById("form");

  form.querySelectorAll("input[type='text'], input[type='date']").forEach((input) => {
    input.value = "";
    input.style.border = "";
  });

  const fileInput = document.getElementById("picture");
  if (fileInput) fileInput.value = "";

  const preview = document.getElementById("loadImage");
  preview.innerHTML = `<img src="images/self2.jpg" alt="Default Image" style="max-width: 300px; display:block; margin-top:10px;">`;
}

// -------------------------
// ATTACH FORM EVENT LISTENERS
// -------------------------
function attachFormJS() {
  document.getElementById("add-course").addEventListener("click", addCourse);
  document.getElementById("clearButton").addEventListener("click", clearForm);
}

// Initial attachment
attachFormJS();

// -------------------------
// SUBMIT FORM TO REPLACE PAGE CONTENT
// -------------------------
function submitData() {
  const form = document.getElementById("form");

  // Validate required fields
  const requiredInputs = form.querySelectorAll("input[required]");
  let allFilled = true;

  requiredInputs.forEach((input) => {
    if (!input.value.trim()) {
      input.style.border = "2px solid red";
      allFilled = false;
    } else {
      input.style.border = "";
    }
  });

  if (!allFilled) {
    alert("Please fill in all required fields before submitting.");
    return;
  }

  // Gather form data
  const data = {
    firstName: document.getElementById("first-name").value,
    middleName: document.getElementById("middle-name").value,
    nickname: document.getElementById("nickname").value,
    lastName: document.getElementById("last-name").value,
    mascotAdj: document.getElementById("mascot-adjective").value,
    mascotAnimal: document.getElementById("mascot-animal").value,
    divider: document.getElementById("divider").value,
    image: document.querySelector("#loadImage img").src,
    caption: document.getElementById("caption").value,
    personalStatement: document.getElementById("personal-statement").value,
    personalBackground: document.getElementById("personal-background").value,
    professionalBackground: document.getElementById("professional-background").value,
    academicBackground: document.getElementById("academic-background").value,
    primaryComputer: document.getElementById("primary-computer").value,
    funny: document.getElementById("funny").value,
    additional: document.getElementById("additional").value,
    quote: document.getElementById("quote").value,
    quoteAuthor: document.getElementById("quote-author").value,
    githubLink: document.getElementById("github-link").value,
    courseLink: document.getElementById("course-link").value,
    universityLink: document.getElementById("university-link").value,
    personalLink: document.getElementById("personal-link").value,
    linkedinLink: document.getElementById("linkedin-link").value,
    acknowledgmentStatement: document.getElementById("ack-statement").value,
    acknowledgmentDate: document.getElementById("ack-date").value,
    courses: []
  };

  // Gather courses
  document.querySelectorAll(".course-item").forEach((item) => {
    data.courses.push({
      dept: item.querySelector("input[name='course-dept[]']").value,
      num: item.querySelector("input[name='course-num[]']").value,
      name: item.querySelector("input[name='course-name[]']").value,
      reason: item.querySelector("input[name='course-reason[]']").value
    });
  });

  // Save original form HTML to restore later
  const main = document.querySelector("main");
  const originalFormHTML = main.innerHTML;

  // Build output HTML
  const outputHTML = `
    <h2>Introduction Form</h2>

    <img src="images/birds.jpeg" alt="Decorative Left" class="side-image left">
    <img src="images/birds.jpeg" alt="Decorative Right" class="side-image right">

    <p><em>${data.acknowledgmentStatement} - ${data.firstName.charAt(0)}.${data.lastName} ${data.acknowledgmentDate}</em></p>

    <figure>
      <img src="${data.image}" alt="${data.firstName} ${data.lastName}" class="profile-img">
      <figcaption>${data.caption}</figcaption>
    </figure>

    <p>${data.personalStatement}</p>
    <ul>
      <li><strong>Personal Background:</strong> ${data.personalBackground}</li>
      <li><strong>Professional Background:</strong> ${data.professionalBackground}</li>
      <li><strong>Academic Background:</strong> ${data.academicBackground}</li>
      <li><strong>Primary Computer:</strong> ${data.primaryComputer}</li>
      <li><strong>Courses & Reasons:</strong>
        <ul>
          ${data.courses.map(c => `<li>${c.dept} ${c.num} - ${c.name}: ${c.reason}</li>`).join("")}
        </ul>
      </li>
      <li><strong>Funny / Interesting:</strong> ${data.funny}</li>
      <li><strong>Additional:</strong> ${data.additional}</li>
    </ul>

    <p>“${data.quote}”</p>
    <p>- <em>${data.quoteAuthor}</em></p>

    <button id="resetOutput">Reset Form</button>
  `;

  // Replace form with output
  main.innerHTML = outputHTML;

  // Reset button restores form
  document.getElementById("resetOutput").addEventListener("click", () => {
    main.innerHTML = originalFormHTML;
    attachFormJS(); // reattach events for add/delete/clear
  });
}














