// Full Hamburger & Navbar Toggle Function
const hambLine1 = document.getElementById("hambline1");
const hambLine2 = document.getElementById("hambline2");
const navBar = document.getElementById("navbar");
const navList = document.getElementById("navlist");
const navLink = document.querySelectorAll("#navbar a");

navLink.forEach((list) => {
  list.addEventListener("click", () => {
    hamMenu();
  });
});

function hamMenu() {
  hambLine1.classList.toggle("hamb_line1_active");
  hambLine2.classList.toggle("hamb_line2_active");
  navBar.classList.toggle("nav_active");
  navList.classList.toggle("nav_bounce");
}

// Fullpage Height
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty("--vh", `${vh}px`);

window.addEventListener("resize", () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
});

// 4-Lines & slide active/deactive Function
const sections = document.querySelectorAll("section");
const navBtns = document.querySelectorAll(".navbutton");
const scrollDown = document.querySelector(".scrolldown");
const textSlider = document.querySelectorAll(".textslider");
const imageSlider = document.querySelectorAll(".imageslider");

const activeSectionHandler = (currentSectionId) => {
  navBtns.forEach((btn) => {
    if (btn.dataset.section === currentSectionId) {
      btn.classList.add("line_active");
      scrollDown.classList.remove("scrolldown_active");
      document.querySelector('.moon').classList.add('moon_slide')
      return;
    }
    btn.classList.remove("line_active");
    scrollDown.classList.add("scrolldown_active");
    document.querySelector('.moon').classList.toggle('moon_slide')
  });

  textSlider.forEach((slider) => {
    if (slider.dataset.section === currentSectionId) {
      slider.classList.add("text_slider");
      return;
    }
    slider.classList.remove("text_slider");
  });

  imageSlider.forEach((imageslider) => {
    if (imageslider.dataset.section === currentSectionId) {
      imageslider.classList.add("image_slider");
      return;
    }
    imageslider.classList.remove("image_slider");
  });
};

const sectionWatcherCallback = (section, sectionWatcher) => {
  section.forEach((section) => {
    if (!section.isIntersecting) {
      return;
    }
    activeSectionHandler(section.target.id);
  });
};

const sectionWatcherOptions = {
  threshold: 0.9,
};

const sectionWatcher = new IntersectionObserver(
  sectionWatcherCallback,
  sectionWatcherOptions
);

sections.forEach((section) => {
  sectionWatcher.observe(section);
});

// Works & About Slider Function
const work2cont = document.getElementById("work2cont");
const about2cont = document.getElementById("about2cont");

function work2() {
  work2cont.classList.toggle("work2cont_slide");
}

function about2() {
  about2cont.classList.toggle("about2cont_slide");
}

// All Works Items Fade Animation function
const workItems = document.querySelectorAll(".fade");

work2cont.addEventListener("scroll", function () {
  for (let i = 0; i < workItems.length; i++) {
    let elem = workItems[i];
    let distInView = elem.getBoundingClientRect().top - window.innerHeight + 15;
    if (distInView < 0) {
      elem.classList.add("fade_in");
    } else {
      elem.classList.remove("fade_in");
    }
  }
});


// Passion For Items Fade Animation function
const cardItems = document.querySelectorAll(".card");

about2cont.addEventListener("scroll", function () {
  for (let i = 0; i < cardItems.length; i++) {
    let elem = cardItems[i];
    let distInView = elem.getBoundingClientRect().top - window.innerHeight + 30;
    if (distInView < 0) {
      elem.classList.add("card_fade");
    } else {
      elem.classList.remove("card_fade");
    }
  }
});

// Skill Set Progress Bar Animation Function
const progressItems = document.querySelectorAll(".progressbar");

about2cont.addEventListener("scroll", function () {
  for (let i = 0; i < progressItems.length; i++) {
    let elem = progressItems[i];
    let distInView = elem.getBoundingClientRect().top - window.innerHeight + 10;
    if (distInView < 0) {
      const value = elem.dataset.progress;
      elem.style.width = `${value}%`;
    } else {
      elem.style.width = "10%";
    }
  }
});


// Scroll Up / Down Items skew!
// const scroll = document.getElementById("about2cont");
// const skew = document.querySelectorAll(".skew");

// function scrollDetect() {
//   var lastScroll = 0;

//   scroll.onscroll = function () {
//     let currentScroll = document.documentElement.scrollTop || scroll.scrollTop;

//     if (currentScroll > 0 && lastScroll <= currentScroll) {
//       lastScroll = currentScroll;
//       skew.forEach((s) => {
//         s.style.transform = "translateY(-1rem)";
//         return
//       });
//     } else {
//       lastScroll = currentScroll;
//       skew.forEach((s) => {
//         s.style.transform = "translateY(1rem)";
//         return
//       });
//     }
//   };
// }
// scrollDetect();