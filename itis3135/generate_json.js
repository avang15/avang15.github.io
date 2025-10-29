// generate_json.js
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form");
  const generateBtn = document.getElementById("generateJSON");
  const title = document.querySelector("h2");
  const introText = document.querySelector("h3"); // "Please submit the form below."

  generateBtn.addEventListener("click", (event) => {
    event.preventDefault();

    // ✅ Gather all form values
    const data = {
      name: {
        first: getValue("first-name"),
        middle: getValue("middle-name"),
        nickname: getValue("nickname"),
        last: getValue("last-name"),
      },
      mascot: {
        adjective: getValue("mascot-adjective"),
        animal: getValue("mascot-animal"),
        divider: getValue("divider"),
      },
      picture: {
        src: document.querySelector("#loadImage img")?.src || "",
        caption: getValue("caption"),
      },
      statement: getValue("personal-statement"),
      backgrounds: {
        personal: getValue("personal-background"),
        professional: getValue("professional-background"),
        academic: getValue("academic-background"),
      },
      primary_computer: getValue("primary-computer"),
      courses: Array.from(document.querySelectorAll(".course-item")).map((item) => ({
        dept: item.querySelector("[name='course-dept[]']").value,
        num: item.querySelector("[name='course-num[]']").value,
        name: item.querySelector("[name='course-name[]']").value,
        reason: item.querySelector("[name='course-reason[]']").value,
      })),
      additional: {
        funny: getValue("funny"),
        extra: getValue("additional"),
        quote: getValue("quote"),
        author: getValue("quote-author"),
      },
      links: {
        github: getValue("github-link"),
        course: getValue("course-link"),
        university: getValue("university-link"),
        personal: getValue("personal-link"),
        linkedin: getValue("linkedin-link"),
      },
      acknowledgment: {
        statement: getValue("ack-statement"),
        date: getValue("ack-date"),
      },
    };

    // ✅ Convert to formatted JSON
    const jsonOutput = JSON.stringify(data, null, 2);

    // ✅ Update title and remove intro text
    title.textContent = "Introduction JSON";
    if (introText) introText.remove();

    // ✅ Replace form with pretty-printed JSON
    form.innerHTML = `
      <pre><code class="language-json">${escapeHTML(jsonOutput)}</code></pre>
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
