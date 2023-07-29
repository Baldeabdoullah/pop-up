let playOne = true;

// Créer un événement au scroll
const navbar = document.querySelector("#navbar");

// Réduire la navbar quand on descend vers le vite, la remettre à sa taille initiale si on remonte tout en haut

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.style.height = 45 + "px";
  } else {
    navbar.style.height = 90 + "px";
  }

  // leffet de l'image
  // Faire apparaitre l'image de la partie improvise
  const img = document.querySelector("#imgImprovise");
  let scrollValue =
    (window.scrollY + window.innerHeight) / document.body.offsetHeight;
  if (scrollValue > 0.45) {
    img.style.opacity = 1;
    img.style.transform = "translateX(0px)";
  }

  // Faire apparaitre la popup quand on est en bas du site

  if (scrollValue > 0.85 && playOne) {
    popup.style.opacity = 1;
    popup.style.transform = "translateX(0px)";

    playOne = false;
  }

  // Bonus : quand on clicke sur la popup elle disparait pour toujours
  closeBtn.addEventListener("click", (e) => {
    popup.style.opacity = 0;
    popup.style.transform = 0;
  });
});
