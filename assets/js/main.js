$(document).ready(function () {
  console.log("ready!");
});

$(".owl-carousel").owlCarousel({
  items: 1,
  loop: true,
  nav: true,
  dotsEach: true,
  // autoplay: true,
  // autoplaySpeed: 1000,
  smartSpeed: 1500,
  autoplayHoverPause: true,
  navText: [
    "<i class='fa fa-chevron-left'></i>",
    "<i class='fa fa-chevron-right'></i>",
  ],
});

// top navBar dropdown menu

function navDrop() {
  const drpLink = document.querySelector(".drp");
  const drpMenu = document.querySelector(".dropDown");
  const arrowrotate = document.querySelector(".fa-solid");

  drpLink.addEventListener("click", () => {
    drpMenu.classList.toggle("activeDrp");
    arrowrotate.classList.toggle("rotate");
  });
}

// side navBar slide menu

const navSlide = () => {
  const burgeris = document.querySelector(".burgeris");
  const sNavBar = document.querySelector(".navi1");
  const navLinks = document.querySelectorAll(".item1");
  const bdscrol = document.querySelector("body");
  const fonas = document.querySelector(".fonas");

  // toggle side nav

  burgeris.addEventListener("click", () => {
    sNavBar.classList.toggle("navActive");
    bdscrol.classList.toggle("stopScrollY");
    setTimeout(() => {
      fonas.classList.toggle("fonasActice");
    }, 500)
    console.log(bdscrol);
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

// hero modalas

const modalasFunkcijos = () => {
  const mdlObjektas = document.querySelector(".modalas");
  const mdlOpen = document.querySelector(".heroBtn");
  const mdlClose = document.querySelector(".closeBtn");
  const mdlwraperis = document.querySelector(".modalas-wraperis");

  mdlOpen.addEventListener("click", () => {
    mdlwraperis.classList.toggle("modalasAtverti");
    if (mdlwraperis.classList.contains("modalasUzverti")) {
      mdlwraperis.classList.toggle("modalasUzverti");
    }

    mdlObjektas.style.display = "block";
  });

  mdlClose.addEventListener("click", () => {
    mdlwraperis.classList.toggle("modalasUzverti");
    mdlwraperis.classList.toggle("modalasAtverti");

    setTimeout(function () {
      mdlObjektas.style.display = "none";
    }, 950);
  });
};

// modalas owl slide-1 funkcijos.

const modalasVfunkcijos = () => {
  const mdlVobjektas = document.querySelector(".modalasV");
  const mdlVwraperis = document.querySelector(".modalasV-wraperis");
  const mdlVopen = document.querySelector(".sl1Btn1");
  const mdlVclose = document.querySelector(".closeBtnV");
  const owl1 = document.querySelector(".owl-carousel");
  const forma = document.querySelector(".formaV");
  const dataSiandien = document.getElementById("dateV");
  const asmenuSkaicius = document.querySelector(".inpAsmSkai");
  const geras = document.querySelector(".geras");
  const gerasP = document.querySelector(".gerasP");
  const gerasM = document.querySelector(".gerasM");
  const gerasT = document.querySelector(".gerasT");
  const gerasA = document.querySelector(".gerasA");
  const blogas = document.querySelector(".blogas");
  const blogasP = document.querySelector(".blogasP");
  const blogasM = document.querySelector(".blogasM");
  const blogasT = document.querySelector(".blogasT");
  const blogasA = document.querySelector(".blogasA");
  const ilgis = document.querySelector(".ilgis");
  const ilgisP = document.querySelector(".ilgisP");
  const amziusD = document.querySelector(".amziusD");
  const amziusM = document.querySelector(".amziusM");
  const vardas = document.querySelector(".mdVv");
  const pavarde = document.querySelector(".mdVp");
  const mailas = document.querySelector(".mdVe");
  const telefonas = document.querySelector(".mdVt");
  const amzius = document.querySelector(".mdVa");
  const blogaData = document.querySelector(".blogaData");
  const borderis = document.querySelector(".inputChecked");
  const nepavyko = document.querySelector(".errorMsg");
  const blogasKiekis = document.querySelector(".blogasKiekis");
  const uzsakymoTipas = document.querySelector(".uzsakymoTipas");

  mdlVopen.addEventListener("click", () => {
    mdlVwraperis.classList.toggle("modalasAtverti");
    uzsakymoTipas.innerText = "Desertai Vestuvėms";
    if (mdlVwraperis.classList.contains("modalasUzverti")) {
      mdlVwraperis.classList.toggle("modalasUzverti");
    }

    mdlVobjektas.style.display = "block";
    owl1.style.pointerEvents = "none";
    mdlVwraperis.style.pointerEvents = "visible";
  });

  mdlVclose.addEventListener("click", () => {
    mdlVwraperis.classList.toggle("modalasUzverti");
    mdlVwraperis.classList.toggle("modalasAtverti");

    setTimeout(function () {
      mdlVobjektas.style.display = "none";
      owl1.style.pointerEvents = "visible";
      mdlVwraperis.style.pointerEvents = "none";

      dataSiandien.style = "reset";
      asmenuSkaicius.style = "reset";
      blogas.style.display = "none";
      ilgis.style.display = "none";
      geras.style.display = "none";
      vardas.style = "reset";
      blogasP.style.display = "none";
      ilgisP.style.display = "none";
      gerasP.style.display = "none";
      pavarde.style = "reset";
      gerasM.style.display = "none";
      blogasM.style.display = "none";
      mailas.style = "reset";
      gerasT.style.display = "none";
      blogasT.style.display = "none";
      telefonas.style = "reset";
      amziusD.style.display = "none";
      amziusM.style.display = "none";
      blogasA.style.display = "none";
      gerasA.style.display = "none";
      amzius.style = "reset";
      blogaData.style.display = "none";
      borderis.style = "reset";
      nepavyko.style.display = "none";
      blogasKiekis.style.display = "none";

      forma.reset(); //resetina forma
      let currentDate = new Date().toJSON().slice(0, 10);
      dataSiandien.value = currentDate; // atstato data i siandienos
    }, 950);
  });
};

// modalas owl slide-1 formos validation
const modalasVformasValidiotanas = () => {
  const siustiBtn = document.querySelector(".modalasVbtn");
  const vardas = document.querySelector(".mdVv");
  const pavarde = document.querySelector(".mdVp");
  const mailas = document.querySelector(".mdVe");
  const telefonas = document.querySelector(".mdVt");
  const amzius = document.querySelector(".mdVa");
  const forma = document.querySelector(".formaV");
  const geras = document.querySelector(".geras");
  const gerasP = document.querySelector(".gerasP");
  const gerasM = document.querySelector(".gerasM");
  const gerasT = document.querySelector(".gerasT");
  const gerasA = document.querySelector(".gerasA");
  const blogas = document.querySelector(".blogas");
  const blogasP = document.querySelector(".blogasP");
  const blogasM = document.querySelector(".blogasM");
  const blogasT = document.querySelector(".blogasT");
  const blogasA = document.querySelector(".blogasA");
  const ilgis = document.querySelector(".ilgis");
  const ilgisP = document.querySelector(".ilgisP");
  const amziusD = document.querySelector(".amziusD");
  const amziusM = document.querySelector(".amziusM");
  const asmenuSkaicius = document.querySelector(".inpAsmSkai");
  const blogaData = document.querySelector(".blogaData");
  const belekas = document.querySelectorAll(".pacekintas");
  const borderis = document.querySelector(".inputChecked");
  const blogasKiekis = document.querySelector(".blogasKiekis");
  const modalP = document.querySelector(".modalas-pavyko");
  const nepavyko = document.querySelector(".errorMsg");
  let vX = 0; // vardo
  let pX = 0; // parvarde
  let eX = 0; // email
  let tX = 0; // telefonas
  let aX = 0; // amzius
  let dX = 0; //data
  let sX = 0; // sveiu skaicius
  let cX = 0; // checkboxai

  //VARDAS validation
  vardas.addEventListener("keyup", () => {
    if (
      vardas.value != vardas.value.match("[A-A-Za-zČčŽžŠšĄąĘęĖėĮįŲųŪū]+") &&
      vardas.value !== ""
    ) {
      blogas.style.display = "block";
      geras.style.display = "none";
      vardas.style.border = "2px solid red";
      vX = 0;
    }
    if (
      vardas.value == vardas.value.match("[A-A-Za-zČčŽžŠšĄąĘęĖėĮįŲųŪū]+") &&
      vardas.value !== ""
    ) {
      blogas.style.display = "none";
    }
    if (vardas.value.length < 3) {
      ilgis.style.display = "block";
      geras.style.display = "none";
      vardas.style.border = "2px solid red";
      vX = 0;
    }
    if (
      vardas.value.length >= 3 ||
      vardas.value != vardas.value.match("[A-A-Za-zČčŽžŠšĄąĘęĖėĮįŲųŪū]+")
    ) {
      ilgis.style.display = "none";
    }
    if (vardas.value == "") {
      blogas.style.display = "none";
      ilgis.style.display = "none";
      geras.style.display = "none";
      vardas.style = "reset";
      vX = 0;
    }
    if (
      vardas.value.length >= 3 &&
      vardas.value == vardas.value.match("[A-A-Za-zČčŽžŠšĄąĘęĖėĮįŲųŪū]+")
    ) {
      geras.style.display = "block";
      vardas.style.border = "2px solid green";
      vardas.classList.add("formaValid");
      vX = 1;
    }
  });

  //PAVARDE validation
  pavarde.addEventListener("keyup", () => {
    if (
      pavarde.value != pavarde.value.match("[A-A-Za-zČčŽžŠšĄąĘęĖėĮįŲųŪū]+") &&
      pavarde.value !== ""
    ) {
      blogasP.style.display = "block";
      gerasP.style.display = "none";
      pavarde.style.border = "2px solid red";
      pX = 0;
    }
    if (
      pavarde.value == pavarde.value.match("[A-Za-zČčŽžŠšĄąĘęĖėĮįŲųŪū]+") &&
      pavarde.value !== ""
    ) {
      blogasP.style.display = "none";
    }
    if (pavarde.value.length < 3) {
      ilgisP.style.display = "block";
      gerasP.style.display = "none";
      pavarde.style.border = "2px solid red";
      pX = 0;
    }
    if (
      pavarde.value.length >= 3 ||
      pavarde.value != pavarde.value.match("[A-Za-zČčŽžŠšĄąĘęĖėĮįŲųŪū]+")
    ) {
      ilgisP.style.display = "none";
    }
    if (pavarde.value == "") {
      blogasP.style.display = "none";
      ilgisP.style.display = "none";
      gerasP.style.display = "none";
      pavarde.style = "reset";
      pX = 0;
    }
    if (
      pavarde.value.length >= 3 &&
      pavarde.value == pavarde.value.match("[A-Za-zČčŽžŠšĄąĘęĖėĮįŲųŪū]+")
    ) {
      gerasP.style.display = "block";
      pavarde.style.border = "2px solid green";
      pX = 1;
    }
  });

  // email validation
  mailas.addEventListener("keyup", () => {
    if (mailas.value == mailas.value.match(/^[^ ]+@[^ ]+\.[a-z]{2,3}$/)) {
      gerasM.style.display = "block";
      blogasM.style.display = "none";
      mailas.style.border = "2px solid green";
      eX = 1;
    }
    if (mailas.value != mailas.value.match(/^[^ ]+@[^ ]+\.[a-z]{2,3}$/)) {
      gerasM.style.display = "none";
      blogasM.style.display = "block";
      mailas.style.border = "2px solid red";
      eX = 0;
    }
    if (mailas.value == "") {
      gerasM.style.display = "none";
      blogasM.style.display = "none";
      mailas.style = "reset";
      eX = 0;
    }
  });
  // telefonas validation
  telefonas.addEventListener("keyup", () => {
    if (telefonas.value == telefonas.value.match("[+0-9]{4}[0-9]{8}")) {
      gerasT.style.display = "block";
      telefonas.style.border = "2px solid green";
      blogasT.style.display = "none";
      tX = 1;
    }
    if (telefonas.value != telefonas.value.match("[+0-9]{4}[0-9]{8}")) {
      gerasT.style.display = "none";
      blogasT.style.display = "block";
      telefonas.style.border = "2px solid red";
      tX = 0;
    }
    if (telefonas.value == "") {
      gerasT.style.display = "none";
      blogasT.style.display = "none";
      telefonas.style = "reset";
      tX = 0;
    }
  });

  // amziaus validtion

  amzius.addEventListener("keyup", () => {
    if (amzius.value < 18) {
      amziusD.style.display = "block";
      blogasA.style.display = "block";
      amziusM.style.display = "none";
      gerasA.style.display = "none";
      amzius.style.border = "2px solid red";
      aX = 0;
    }
    if (amzius.value > 99) {
      amziusM.style.display = "block";
      amziusD.style.display = "none";
      blogasA.style.display = "block";
      gerasA.style.display = "none";
      amzius.style.border = "2px solid red";
      aX = 0;
    }
    if (amzius.value >= 18 && amzius.value <= 99) {
      amziusD.style.display = "none";
      amziusM.style.display = "none";
      blogasA.style.display = "none";
      gerasA.style.display = "block";
      amzius.style.border = "2px solid green";
      aX = 1;
    }
    if (amzius.value == "") {
      amziusD.style.display = "none";
      amziusM.style.display = "none";
      blogasA.style.display = "none";
      gerasA.style.display = "none";
      amzius.style = "reset";
      aX = 0;
    }
  });

  asmenuSkaicius.addEventListener("keyup", () => {
    if (asmenuSkaicius.value == "") {
      asmenuSkaicius.style = "reset";
      sX = 0;
    }
    if (asmenuSkaicius.value > 0) {
      blogasKiekis.style.display = "none";
      sX = 1;
    }
  });

  // siuti mygtukas

  siustiBtn.addEventListener("click", () => {
    const dataSiandien = document.getElementById("dateV");
    let currentDate = new Date().toJSON().slice(0, 10);

    // checkbox'u validationas
    let x = 0;

    for (let i = 0; i < belekas.length; i++) {
      if (belekas[i].checked) {
        x++;
      }

      if (belekas[i].checked == false) {
        belekas[i].value = "false";
      }
      if (x <= 0) {
        borderis.style.border = "2px solid red";
        cX = 0;
      }
      if (x > 0) {
        borderis.style.border = "2px solid green";
        cX = 1;
      }
    }

    if (dataSiandien.value < currentDate) {
      dataSiandien.style.border = "2px solid red ";
      blogaData.style.display = "block";
      dX = 0;
    }
    if (dataSiandien.value >= currentDate) {
      dataSiandien.style.border = "2px solid green ";
      blogaData.style.display = "none";
      dX = 1;
    }
    if (asmenuSkaicius.value == 0 || asmenuSkaicius.value == "") {
      asmenuSkaicius.style.border = "2px solid red";
      blogasKiekis.style.display = "block";
      sX = 0;
    }
    if (asmenuSkaicius.value.match("/+-/eE")) {
      asmenuSkaicius.style.border = "2px solid red";
      sX = 0;
    }
    if (asmenuSkaicius.value > 0) {
      asmenuSkaicius.style.border = "2px solid green";
      s1 = 0;
    }
    if (vX == 0) {
      vardas.style.border = "2px solid red";
    }
    if (pX == 0) {
      pavarde.style.border = "2px solid red";
    }
    if (eX == 0) {
      mailas.style.border = "2px solid red";
    }
    if (tX == 0) {
      telefonas.style.border = "2px solid red";
    }
    if (aX == 0) {
      amzius.style.border = "2px solid red";
    }

    let finalinis = vX + pX + eX + tX + aX + sX + dX + cX;
    setTimeout(function () {
      if (finalinis == 8) {
        modalP.style.zIndex = "1";
        modalP.style.opacity = "1";
        nepavyko.style.display = "none";
      }
      if (finalinis < 8) {
        nepavyko.style.display = "block";
      }
    }, 200);
  });
};

// modapas pavyko uzdaryti ir resetinti.

const mPavykoCloseReset = () => {
  const modalP = document.querySelector(".modalas-pavyko");
  const closeModalP = document.querySelector(".mVpmbtn1");
  const mdlVobjektas = document.querySelector(".modalasV");
  const mdlVwraperis = document.querySelector(".modalasV-wraperis");
  const owl1 = document.querySelector(".owl-carousel");
  const forma = document.querySelector(".formaV");
  const dataSiandien = document.getElementById("dateV");
  const asmenuSkaicius = document.querySelector(".inpAsmSkai");
  const geras = document.querySelector(".geras");
  const gerasP = document.querySelector(".gerasP");
  const gerasM = document.querySelector(".gerasM");
  const gerasT = document.querySelector(".gerasT");
  const gerasA = document.querySelector(".gerasA");
  const blogas = document.querySelector(".blogas");
  const blogasP = document.querySelector(".blogasP");
  const blogasM = document.querySelector(".blogasM");
  const blogasT = document.querySelector(".blogasT");
  const blogasA = document.querySelector(".blogasA");
  const ilgis = document.querySelector(".ilgis");
  const ilgisP = document.querySelector(".ilgisP");
  const amziusD = document.querySelector(".amziusD");
  const amziusM = document.querySelector(".amziusM");
  const vardas = document.querySelector(".mdVv");
  const pavarde = document.querySelector(".mdVp");
  const mailas = document.querySelector(".mdVe");
  const telefonas = document.querySelector(".mdVt");
  const amzius = document.querySelector(".mdVa");
  const blogaData = document.querySelector(".blogaData");
  const borderis = document.querySelector(".inputChecked");

  closeModalP.addEventListener("click", () => {
    dataSiandien.style = "reset";
    asmenuSkaicius.style = "reset";
    blogas.style.display = "none";
    ilgis.style.display = "none";
    geras.style.display = "none";
    vardas.style = "reset";
    blogasP.style.display = "none";
    ilgisP.style.display = "none";
    gerasP.style.display = "none";
    pavarde.style = "reset";
    gerasM.style.display = "none";
    blogasM.style.display = "none";
    mailas.style = "reset";
    gerasT.style.display = "none";
    blogasT.style.display = "none";
    telefonas.style = "reset";
    amziusD.style.display = "none";
    amziusM.style.display = "none";
    blogasA.style.display = "none";
    gerasA.style.display = "none";
    amzius.style = "reset";
    blogaData.style.display = "none";
    borderis.style = "reset";

    forma.reset(); //resetina forma
    let currentDate = new Date().toJSON().slice(0, 10);
    dataSiandien.value = currentDate; // atstato data i siandienos
    mdlVobjektas.style.display = "none";
    owl1.style.pointerEvents = "visible";
    mdlVwraperis.style.pointerEvents = "none";
    modalP.style.opacity = "0";
    modalP.style.zIndex = "-10";
  });
};

// mouseover-mouseout eventai. hero modalui.
const PlatesnisMeniuBorderis = () => {
  const mdlbtn = document.querySelector(".ModaloBtn");
  const mdlbtn1 = document.querySelector(".modalasBtn1");

  mdlbtn1.addEventListener("mouseover", () => {
    mdlbtn.setAttribute("style", "border-color:rgb(117, 52, 71);");
  });
  mdlbtn1.addEventListener("mouseout", () => {
    mdlbtn.setAttribute("style", "border-color:#fff;");
  });
};

// modalas owlslide-2
const Mdlowlslide2 = () => {
  const mdlVobjektas = document.querySelector(".modalasV");
  const mdlVwraperis = document.querySelector(".modalasV-wraperis");
  const mdlVopen = document.querySelector(".sl1Btn1");
  const mdlVclose = document.querySelector(".closeBtnV");
  const owl1 = document.querySelector(".owl-carousel");
  const forma = document.querySelector(".formaV");
  const dataSiandien = document.getElementById("dateV");
  const asmenuSkaicius = document.querySelector(".inpAsmSkai");
  const geras = document.querySelector(".geras");
  const gerasP = document.querySelector(".gerasP");
  const gerasM = document.querySelector(".gerasM");
  const gerasT = document.querySelector(".gerasT");
  const gerasA = document.querySelector(".gerasA");
  const blogas = document.querySelector(".blogas");
  const blogasP = document.querySelector(".blogasP");
  const blogasM = document.querySelector(".blogasM");
  const blogasT = document.querySelector(".blogasT");
  const blogasA = document.querySelector(".blogasA");
  const ilgis = document.querySelector(".ilgis");
  const ilgisP = document.querySelector(".ilgisP");
  const amziusD = document.querySelector(".amziusD");
  const amziusM = document.querySelector(".amziusM");
  const vardas = document.querySelector(".mdVv");
  const pavarde = document.querySelector(".mdVp");
  const mailas = document.querySelector(".mdVe");
  const telefonas = document.querySelector(".mdVt");
  const amzius = document.querySelector(".mdVa");
  const blogaData = document.querySelector(".blogaData");
  const borderis = document.querySelector(".inputChecked");
  const nepavyko = document.querySelector(".errorMsg");
  const blogasKiekis = document.querySelector(".blogasKiekis");
  const uzsakymoTipas = document.querySelector(".uzsakymoTipas");

  uzsakymoTipas.innerText = "Desertai Lyties atskleidimo vakarėliams";
  mdlVwraperis.classList.toggle("modalasAtverti");
  if (mdlVwraperis.classList.contains("modalasUzverti")) {
    mdlVwraperis.classList.toggle("modalasUzverti");
  }

  mdlVobjektas.style.display = "block";
  owl1.style.pointerEvents = "none";
  mdlVwraperis.style.pointerEvents = "visible";

  mdlVclose.addEventListener("click", () => {
    mdlVwraperis.classList.toggle("modalasUzverti");
    mdlVwraperis.classList.toggle("modalasAtverti");

    setTimeout(function () {
      mdlVobjektas.style.display = "none";
      owl1.style.pointerEvents = "visible";
      mdlVwraperis.style.pointerEvents = "none";

      dataSiandien.style = "reset";
      asmenuSkaicius.style = "reset";
      blogas.style.display = "none";
      ilgis.style.display = "none";
      geras.style.display = "none";
      vardas.style = "reset";
      blogasP.style.display = "none";
      ilgisP.style.display = "none";
      gerasP.style.display = "none";
      pavarde.style = "reset";
      gerasM.style.display = "none";
      blogasM.style.display = "none";
      mailas.style = "reset";
      gerasT.style.display = "none";
      blogasT.style.display = "none";
      telefonas.style = "reset";
      amziusD.style.display = "none";
      amziusM.style.display = "none";
      blogasA.style.display = "none";
      gerasA.style.display = "none";
      amzius.style = "reset";
      blogaData.style.display = "none";
      borderis.style = "reset";
      nepavyko.style.display = "none";
      blogasKiekis.style.display = "none";

      forma.reset(); //resetina forma
      let currentDate = new Date().toJSON().slice(0, 10);
      dataSiandien.value = currentDate; // atstato data i siandienos
    }, 950);
  });
};
// modalas owlslide-3
const Mdlowlslide3 = () => {
  const mdlVobjektas = document.querySelector(".modalasV");
  const mdlVwraperis = document.querySelector(".modalasV-wraperis");
  const mdlVopen = document.querySelector(".sl1Btn1");
  const mdlVclose = document.querySelector(".closeBtnV");
  const owl1 = document.querySelector(".owl-carousel");
  const forma = document.querySelector(".formaV");
  const dataSiandien = document.getElementById("dateV");
  const asmenuSkaicius = document.querySelector(".inpAsmSkai");
  const geras = document.querySelector(".geras");
  const gerasP = document.querySelector(".gerasP");
  const gerasM = document.querySelector(".gerasM");
  const gerasT = document.querySelector(".gerasT");
  const gerasA = document.querySelector(".gerasA");
  const blogas = document.querySelector(".blogas");
  const blogasP = document.querySelector(".blogasP");
  const blogasM = document.querySelector(".blogasM");
  const blogasT = document.querySelector(".blogasT");
  const blogasA = document.querySelector(".blogasA");
  const ilgis = document.querySelector(".ilgis");
  const ilgisP = document.querySelector(".ilgisP");
  const amziusD = document.querySelector(".amziusD");
  const amziusM = document.querySelector(".amziusM");
  const vardas = document.querySelector(".mdVv");
  const pavarde = document.querySelector(".mdVp");
  const mailas = document.querySelector(".mdVe");
  const telefonas = document.querySelector(".mdVt");
  const amzius = document.querySelector(".mdVa");
  const blogaData = document.querySelector(".blogaData");
  const borderis = document.querySelector(".inputChecked");
  const nepavyko = document.querySelector(".errorMsg");
  const blogasKiekis = document.querySelector(".blogasKiekis");
  const uzsakymoTipas = document.querySelector(".uzsakymoTipas");

  uzsakymoTipas.innerText = "Desertai gimtadieniams";
  mdlVwraperis.classList.toggle("modalasAtverti");
  if (mdlVwraperis.classList.contains("modalasUzverti")) {
    mdlVwraperis.classList.toggle("modalasUzverti");
  }

  mdlVobjektas.style.display = "block";
  owl1.style.pointerEvents = "none";
  mdlVwraperis.style.pointerEvents = "visible";

  mdlVclose.addEventListener("click", () => {
    mdlVwraperis.classList.toggle("modalasUzverti");
    mdlVwraperis.classList.toggle("modalasAtverti");

    setTimeout(function () {
      mdlVobjektas.style.display = "none";
      owl1.style.pointerEvents = "visible";
      mdlVwraperis.style.pointerEvents = "none";

      dataSiandien.style = "reset";
      asmenuSkaicius.style = "reset";
      blogas.style.display = "none";
      ilgis.style.display = "none";
      geras.style.display = "none";
      vardas.style = "reset";
      blogasP.style.display = "none";
      ilgisP.style.display = "none";
      gerasP.style.display = "none";
      pavarde.style = "reset";
      gerasM.style.display = "none";
      blogasM.style.display = "none";
      mailas.style = "reset";
      gerasT.style.display = "none";
      blogasT.style.display = "none";
      telefonas.style = "reset";
      amziusD.style.display = "none";
      amziusM.style.display = "none";
      blogasA.style.display = "none";
      gerasA.style.display = "none";
      amzius.style = "reset";
      blogaData.style.display = "none";
      borderis.style = "reset";
      nepavyko.style.display = "none";
      blogasKiekis.style.display = "none";

      forma.reset(); //resetina forma
      let currentDate = new Date().toJSON().slice(0, 10);
      dataSiandien.value = currentDate; // atstato data i siandienos
    }, 950);
  });
};

// mouseout modalasV aumziaus fielde.
// const amziusMouseOut = () => {
//   const amzius = document.querySelector(".amz");
//   amzius.addEventListener("mouseout", () => {
//     if (amzius.value < 18 && amzius.value > 0) {
//       amzius.value = 18;
//     } else if (amzius.value > 99) {
//       amzius.value = 99;
//     }
//   });
// };

// nustato siandienos data formoje
const dataSiandien = () => {
  const dataSiandien = document.getElementById("dateV");
  let currentDate = new Date().toJSON().slice(0, 10);
  dataSiandien.value = currentDate;
};

//  visu funkciju issaukimas
const app = () => {
  navDrop();
  navSlide();
  sidenavDrop();
  modalasFunkcijos();
  PlatesnisMeniuBorderis();
  modalasVfunkcijos();
  dataSiandien();
  modalasVformasValidiotanas();
  mPavykoCloseReset();
};

app();
