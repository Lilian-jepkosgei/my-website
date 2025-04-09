document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("feedbackModal");
    const openBtn = document.getElementById("openModal");
    const closeBtn = document.querySelector(".close");
    const submitBtn = document.getElementById("submitBtn");
    const cancelBtn = document.getElementById("cancelBtn");
    const ratingSpans = document.querySelectorAll(".rating-numbers span");
  
    let selectedRating = 0;
  
    // Open modal
    openBtn.addEventListener("click", () => {
      modal.style.display = "flex";
    });
  
    // Close modal
    closeBtn.addEventListener("click", closeModal);
  
    // Close on cancel
    cancelBtn.addEventListener("click", closeModal);
  
    // Close when clicking outside
    window.addEventListener("click", (event) => {
      if (event.target === modal) {
        closeModal();
      }
    });
  
    // Rating selection
    ratingSpans.forEach(span => {
      span.addEventListener("click", () => {
        selectedRating = parseInt(span.dataset.rating);
        ratingSpans.forEach(s => s.classList.remove("selected"));
        span.classList.add("selected");
      });
    });
  
    // Submit
    submitBtn.addEventListener("click", () => {
      if (selectedRating > 0) {
        alert(`Thank you for your rating of ${selectedRating}!`);
        closeModal();
      } else {
        alert("Please select a rating!");
      }
    });
  
    function closeModal() {
      modal.style.display = "none";
      selectedRating = 0;
      ratingSpans.forEach(span => span.classList.remove("selected"));
    }
  });