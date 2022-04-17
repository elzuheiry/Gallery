//START CODEING OF BOX SEARCH TO SOW SUGGESTIONS
const searchWrapper = document.querySelector(".search-input");
const inputbox = document.querySelector("input");
const suggbox = document.querySelector(".autocom-box");
const icon = document.querySelector(".search-icon");
let linktag = searchWrapper.querySelector(".header .box-search a");
let weblink;

inputbox.onkeyup = (e) => {
  let userData = e.target.value;
  console.log(userData);
  let emptyArray = [];
  if (userData) {
    icon.onclick = () => {
      weblink = "https:www.google.com/search?" + userData;
      linktag.log(weblink);
      linktag.click();
    };
    emptyArray = suggestions.filter((data) => {
      return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
    });
    emptyArray = emptyArray.map((data) => {
      return (data = "<li>" + data + "</li>");
    });
    console.log(emptyArray);
    searchWrapper.classList.add("active");
    showSuggestions(emptyArray);
    let alllist = suggbox.querySelectorAll("li");
    for (let i = 0; i < alllist.length; i++) {
      alllist[i].setAttribute("onclick", "select(this)");
    }
  } else {
    searchWrapper.classList.remove("active");
  }
};

function select(Element) {
  let selectUserData = Element.textContent;
  inputbox.value = selectUserData;
  icon.onclick = () => {
    weblink = "https://www.google.com/search?q=" + userData;
    linktag.setAttribute("href", weblink);
    linktag.click();
  };
  searchWrapper.classList.remove("active");
}

function showSuggestions(list) {
  let listData;
  if (!list.length) {
    userValue = inputbox.value;
    listData = "<li>" + userValue + "</li>";
  } else {
    listData = list.join("");
  }
  suggbox.innerHTML = listData;
}
//END CODEING OF BOX SEARCH TO SOW SUGGESTIONS

window.addEventListener("scroll", () => {
  countDown00();
});

// START CODEING OF COUNT NUMBERS OF SECTION ABOUT
function countDown00() {
  const counters = document.querySelectorAll(".content-about .num");
  const delay = 200;

  counters.forEach((counter) => {
    const updateCount = () => {
      const target = counter.getAttribute("data-target");
      const count = +counter.innerText;
      const speed = target / delay;

      if (count < target) {
        counter.innerText = Math.floor(count + speed);
        setTimeout(updateCount, 1);
      } else {
        counter.innerText = target;
      }
    };
    updateCount();
  });
}
// END CODEING OF COUNT NUMBERS OF SECTION ABOUT

// START CODING OF SCROLL ANIMATION
const sr = ScrollReveal({
  distance: "50px",
  duration: 1800,
  reset: true,
  origin: "bottom",
});

sr.reveal(".header-center", { origin: "bottom", interval: 200 });
sr.reveal(".header-left .logo", { interval: 200 });
sr.reveal(".header-left .text-logo", { origin: "bottom", interval: 200 });
sr.reveal(".header-left .menu", { origin: "left", interval: 200 });
sr.reveal(".header-left .icons", { origin: "bottom", interval: 200 });

sr.reveal(".header-right", { interval: 200 });

sr.reveal(".header .info .container span", { interval: 200 });
sr.reveal(".header .info .container h1", { origin: "left", interval: 200 });
sr.reveal(".header .info .container p", { origin: "right", interval: 200 });
sr.reveal(".header .info .container .more", {
  origin: "bottom",
  interval: 200,
});
sr.reveal(".header .info .container .owl-carousel", {
  origin: "right",
  interval: 200,
});

sr.reveal(".about-letter .a", { origin: "left", interval: 200 });
sr.reveal(".about-letter .about-words", { origin: "right", interval: 200 });
sr.reveal(".content-about .p", { origin: "left", interval: 200 });
sr.reveal(".about-r .about-r-t-l01", { origin: "left", interval: 200 });
sr.reveal(".about-r .about-r-b-l01", { origin: "right", interval: 200 });

sr.reveal(".gallery-right .img-gallery", { origin: "left", interval: 200 });
sr.reveal(".gallery-left .img-gallery", { origin: "right", interval: 200 });
sr.reveal(".link-img-gallery", { origin: "bottom", interval: 200 });

sr.reveal(".section-offer .h-d-o .s", { origin: "left", interval: 200 });
sr.reveal(".section-offer .h-d-o .words", { origin: "right", interval: 200 });
sr.reveal(".section-offer .parg", { interval: 200 });
sr.reveal(".countdown", { origin: "bottom", interval: 200 });
sr.reveal(".section-offer .button", { origin: "bottom", interval: 200 });
sr.reveal(".img-offer", { origin: "right", interval: 200 });

sr.reveal(".section-t .w", { origin: "left", interval: 200 });
sr.reveal(".section-t .words-t", { origin: "right", interval: 200 });
sr.reveal(".section-t .col00", { origin: "left", interval: 200 });
sr.reveal(".section-t .col02", { origin: "right", interval: 200 });
sr.reveal(".section-t .col01", { origin: "bottom", interval: 200 });

sr.reveal(".section-brands .owl-carousel", { origin: "bottom", delay: 250 });

sr.reveal(".section-content .head-sub", { delay: 150 });
sr.reveal(".section-content .batt-sub input", { origin: "left", delay: 250 });
sr.reveal(".section-content .batt-sub button", {
  origin: "bottom",
  delay: 350,
});
sr.reveal(".section-content .col-2", { origin: "right", delay: 350 });
// END CODING OF SCROLL ANIMATION

// START CODING OF ACTIVE CLASS OF MENU
const section = document.querySelectorAll("section[id]");

window.addEventListener("scroll", scrollActive);

function scrollActive() {
  const scrollY = window.pageYOffset;
  section.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".side-menu .menu-items a[href*=" + sectionId + "]")
        .classList.add("active");
    } else {
      document
        .querySelector(".side-menu .menu-items a[href*=" + sectionId + "]")
        .classList.remove("active");
    }
  });
}
// END CODING OF ACTIVE CLASS OF MENU
