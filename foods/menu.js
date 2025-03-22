let selectedDish = '';

function orderFood(dishName) {
    selectedDish = dishName;
    document.getElementById("orderText").innerText = `Confirm order for ${dishName}?`;
    document.getElementById("orderPopup").style.display = "flex";
}

function closePopup() {
    document.getElementById("orderPopup").style.display = "none";
}

function confirmOrder() {
    let whatsappNumber = "+916369580858"; // Update with the restaurant's WhatsApp number
    let message = `Hi, I want to order: ${selectedDish}`;
    let whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.location.href = whatsappURL;
}
