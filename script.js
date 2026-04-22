// 🔷 Button click করলে social section এ smooth scroll করবে
function scrollToSocial(){
  document.getElementById("socialSection").scrollIntoView({
    behavior: "smooth"
  });
}

// 🔷 Scroll animation (card গুলো নিচ থেকে উঠবে)
window.addEventListener("scroll", () => {

  let cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    let position = card.getBoundingClientRect().top;
    let screenHeight = window.innerHeight;

    // 🔷 যখন screen এ আসবে তখন show হবে
    if(position < screenHeight - 50){
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }
  });

});