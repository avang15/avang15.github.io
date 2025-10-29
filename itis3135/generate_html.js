// generate_html.js
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form");
  const generateBtn = document.getElementById("generateHTML");
  const title = document.querySelector("h2"); // "Introduction Form"
  const introText = document.querySelector("p"); // "Please submit the form below."

  generateBtn.addEventListener("click", (event) => {
    event.preventDefault();

    // ✅ Gather form values
    const firstName = getValue("first-name");
    const middleName = getValue("middle-name");
    const nickname = getValue("nickname");
    const lastName = getValue("last-name");

    const mascotAdj = getValue("mascot-adjective");
    const mascotAnimal = getValue("mascot-animal");
    const divider = getValue("divider");

    const picture = document.querySelector("#loadImage img")?.src || "";
    const caption = getValue("caption");

    const personalStatement = getValue("personal-statement");
    const personalBackground = getValue("personal-background");
    const professionalBackground = getValue("professional-background");
    const academicBackground = getValue("academic-background");
    const primaryComputer = getValue("primary-computer");

    const courses = [];
    document.querySelectorAll(".course-item").forEach((item) => {
      const dept = item.querySelector("[name='course-dept[]']").value;
      const num = item.querySelector("[name='course-num[]']").value;
      const name = item.querySelector("[name='course-name[]']").value;
      const reason = item.querySelector("[name='course-reason[]']").value;
      courses.push({ dept, num, name, reason });
    });

    const funny = getValue("funny");
    const additional = getValue("additional");
    const quote = getValue("quote");
    const quoteAuthor = getValue("quote-author");

    const github = getValue("github-link");
    const courseLink = getValue("course-link");
    const universityLink = getValue("university-link");
    const personalLink = getValue("personal-link");
    const linkedin = getValue("linkedin-link");

    const ackStatement = getValue("ack-statement");
    const ackDate = getValue("ack-date");

    // ✅ Build the generated HTML
    const generatedHTML = `
<section class="introduction">
  <h1>${firstName} ${middleName ? middleName + " " : ""}${lastName}</h1>
  <h2>${mascotAdj} ${mascotAnimal} ${divider} Introduction</h2>

  <figure>
    <img src="${picture}" alt="${firstName} ${lastName}" style="max-width:300px;">
    <figcaption>${caption}</figcaption>
  </figure>

  <h3>Personal Statement</h3>
  <p>${personalStatement}</p>

  <h3>Backgrounds</h3>
  <p><strong>Personal:</strong> ${personalBackground}</p>
  <p><strong>Professional:</strong> ${professionalBackground}</p>
  <p><strong>Academic:</strong> ${academicBackground}</p>
  <p><strong>Primary Computer:</strong> ${primaryComputer}</p>

  <h3>Courses</h3>
  <ul>
    ${courses
      .map(
        (c) => `
    <li>
      <strong>${c.dept} ${c.num} - ${c.name}</strong><br>
      Reason: ${c.reason}
    </li>`
      )
      .join("")}
  </ul>

  <h3>Additional</h3>
  <p><strong>Funny Fact:</strong> ${funny}</p>
  <p><strong>Additional Sharing:</strong> ${additional}</p>
  <blockquote>
    “${quote}”<br>
    — ${quoteAuthor}
  </blockquote>

  <h3>Links</h3>
  <ul>
    <li><a href="${github}" target="_blank">GitHub</a></li>
    <li><a href="${courseLink}" target="_blank">Course Website</a></li>
    <li><a href="${universityLink}" target="_blank">University Page</a></li>
    <li><a href="${personalLink}" target="_blank">Personal Site</a></li>
    <li><a href="${linkedin}" target="_blank">LinkedIn</a></li>
  </ul>

  <h3>Acknowledgment</h3>
  <p>${ackStatement} (${ackDate})</p>
</section>
`;

    // ✅ Update heading and clear intro text
    title.textContent = "Introduction HTML";
    if (introText) introText.remove(); // remove the "Please submit..." text

    // ✅ Replace form content with generated HTML display
    form.innerHTML = `
      <pre><code class="language-html">${escapeHTML(generatedHTML)}</code></pre>
    `;

    // ✅ Highlight syntax
    hljs.highlightAll();
  });
});

// Helper functions
function getValue(id) {
  const el = document.getElementById(id);
  return el ? el.value.trim() : "";
}

function escapeHTML(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

