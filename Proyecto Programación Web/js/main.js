const contenido = document.getElementById("contenido");
const cabezero = document.getElementById("cabezero");
const pie = document.getElementById("pie");

let titulo = "Don Quijote de la Mancha";
let autor = "Miguel de Cervantes";
let editorial = "La primera edición del libro fue publicada por Juan de la Cuesta en Madrid en 1605.";
let año = "1615";
let genero = "Novela";
let disponibilidad = "Disponible";

contenido.innerHTML = "<p>Titulo:" + titulo + "</p><br>"
+ "<p>Autor: " + autor + "</p><br>" + "<p>Editorial: " + editorial + "</p><br>"
+ "<p>Fecha Publicación: " + año + "</p><br><br>";

cabezero.innerHTML = genero;
pie.innerHTML = "<p>" + disponibilidad + "</p>";

//Animación del menu

const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");
  
    burger.addEventListener("click", () => {
      
      nav.classList.toggle("nav-active");
  
      
      navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = "";
        } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
          }s`;
        }
      });
  
      
      burger.classList.toggle("active");
    });
  };
  
  navSlide();
  