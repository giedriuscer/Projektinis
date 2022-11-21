// tabai
const tabai = () => {
  const mygtukai = document.querySelectorAll(".btnT");
const turinys = document.querySelectorAll(".turinys");
const wraperis = document.querySelector(".wraperis");

wraperis.addEventListener("click", (e) => {
  const id = e.target.dataset.id; // targertina tik tuos kurie turi data-id
  if (id) {
    //jaigu objektas turi data-id kuris buvo priskirtas kitamajam id

    //  nuimti klase veikia nuo visu mygtuku
    mygtukai.forEach((myg) => {
      myg.classList.remove("veikia"); // nuima nuo visu mygtuku klase veikia
      e.target.classList.add('veikia'); // priskiria targetui klase veikia. targetas turi tureti data-id
    });
    turinys.forEach((tur)=>{
      tur.classList.remove('veikia1'); // nuima klase veikia1 nuo visu turinys lauku

    })
    const tabas = document.getElementById(id); // priskiria targeta pagal kitama id.
    tabas.classList.add('veikia1'); // priskiria klase veikia 1 turinio laukui suristam prie mygtuko per data-id
  }
});
 
};



// top navBar dropdown menu

const navDrop = () => {
  const drpLink = document.querySelector(".drp");
  const drpMenu = document.querySelector(".dropDown");
  const arrowrotate = document.querySelector(".fa-solid");

  drpLink.addEventListener("click", () => {
    drpMenu.classList.toggle("active");
    arrowrotate.classList.toggle("rotate");
  });
};

// side navBar slide menu

const navSlide = () => {
  const burgeris = document.querySelector(".burgeris");
  const sNavBar = document.querySelector(".navi1");
  const navLinks = document.querySelectorAll(".item1");

  // toggle side nav

  burgeris.addEventListener("click", () => {
    sNavBar.classList.toggle("navActive");

    // linku animacija

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `animacija 0.5s ease forwards ${
          index / 7 + 0.5
        }s`;
      }
    });

    burgeris.classList.toggle("toggle");
  });
};

// side navbar dropdown

const sidenavDrop = () => {
  const drpLink1 = document.querySelector(".drp1");
  const drpMenu1 = document.querySelector(".dropDown1");
  const arrowrotate = document.querySelector(".item1 .fa-solid");

  drpLink1.addEventListener("click", () => {
    drpMenu1.classList.toggle("dropactive");
    arrowrotate.classList.toggle("rotate");
  });
};

//  visu funkciju issaukimas
const app = () => {
  navDrop();
  navSlide();
  sidenavDrop();
  tabai();
};

app();
