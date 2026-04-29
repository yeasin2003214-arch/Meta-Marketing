// 🔹 বাটনে ক্লিক করলে মেসেজ দেখাবে
function showMessage() {
    alert("ধন্যবাদ! আপনি আমাকে Hire করতে চান 😊");
}

// 🔹 স্ক্রল করলে ন্যাভবার পরিবর্তন (simple UX effect)
window.addEventListener("scroll", function () {
    let header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.style.background = "#0f172a";
    } else {
        header.style.background = "#1e293b";
    }
});
