document.addEventListener("DOMContentLoaded", function () {
    let reviewList = document.getElementById("reviewsList");

    if (!reviewList) {
        console.error("reviewsList element not found!");
        return;
    }

    let selectedRating = 0;

    function rateStar(rating) {
        selectedRating = rating;
        let stars = document.querySelectorAll(".star");
        stars.forEach((star, index) => {
            star.classList.toggle("active", index < rating);
        });
    }

    function submitReview() {
        let name = document.getElementById("name").value.trim();
        let reviewText = document.getElementById("reviewText").value.trim();

        if (!name || !reviewText || selectedRating === 0) {
            alert("Please fill in all fields and give a rating!");
            return;
        }

        let reviewDiv = document.createElement("div");
        reviewDiv.classList.add("review");

        let starsHTML = "★".repeat(selectedRating) + "☆".repeat(5 - selectedRating);

        reviewDiv.innerHTML = `
            <h4>${name}</h4>
            <p>${reviewText}</p>
            <div class="stars">${starsHTML}</div>
        `;

        reviewList.prepend(reviewDiv); // Add the review to the top

        // Clear the form
        document.getElementById("name").value = "";
        document.getElementById("reviewText").value = "";
        selectedRating = 0;
        document.querySelectorAll(".star").forEach(star => star.classList.remove("active"));

        alert("Review submitted successfully!");
    }

    // Attach event listeners
    window.rateStar = rateStar;
    window.submitReview = submitReview;
});
