document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("eventSearch");
  const categoryButtons = document.querySelectorAll(".event-categories button");
  const eventCards = document.querySelectorAll(".event-card");

  let currentCategory = "All";

  // Search Function
  function filterEvents() {
    const searchTerm = searchInput.value.toLowerCase();

    eventCards.forEach(card => {
      const title = card.querySelector("h3").textContent.toLowerCase();
      const category = card.querySelector("p strong + text, p:nth-of-type(2)").textContent.toLowerCase();

      const matchesSearch = title.includes(searchTerm);
      const matchesCategory = currentCategory === "All" || category.includes(currentCategory.toLowerCase());

      if (matchesSearch && matchesCategory) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  }

  // Listen for search input
  searchInput.addEventListener("input", filterEvents);

  // Listen for category button clicks
  categoryButtons.forEach(button => {
    button.addEventListener("click", () => {
      // Remove "active" state from all buttons
      categoryButtons.forEach(btn => btn.classList.remove("active"));
      // Set current category
      currentCategory = button.textContent.trim();
      // Highlight selected button
      button.classList.add("active");
      // Filter events
      filterEvents();
    });
  });
});
