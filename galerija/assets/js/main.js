var splide = new Splide( '#main-carousel', {
  pagination: false,
  arrows:false,
} );



var thumbnails = document.getElementsByClassName( 'thumbnail' );
var current;


for ( var i = 0; i < thumbnails.length; i++ ) {
  initThumbnail( thumbnails[ i ], i );
}

function initThumbnail( thumbnail, index ) {
  thumbnail.addEventListener( 'click', function () {
    splide.go( index );
  } );
}

splide.on( 'mounted move', function () {
  var thumbnail = thumbnails[ splide.index ];

  if ( thumbnail ) {
    if ( current ) {
      current.classList.remove( 'is-active' );
    }

    thumbnail.classList.add( 'is-active' );
    current = thumbnail;
  }

}

);

splide.mount();


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
  const fonas = document.querySelector(".fonas");

  // toggle side nav

  burgeris.addEventListener("click", () => {
    sNavBar.classList.toggle("navActive");

    setTimeout(() => {
      fonas.classList.toggle("fonasActice");
    }, 500)
    

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
};

app();
