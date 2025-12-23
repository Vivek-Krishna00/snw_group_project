window.onscroll = () => {
  let head = document.getElementById("header");
  if (window.scrollY > 100) {
    head.classList.add("scrolled");
  } else {
    head.classList.remove("scrolled");
  }
};



let faders = document.querySelectorAll(".fade-in");
window.addEventListener("scroll", () => {
  faders.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("visible");
    }
  });
});

let words = ["Acrylic", "Charcoal", "Digital", "Oil Paint", "Pastel", "Water Paint"];
let txt = document.getElementById("changing-word");
let idx = 0;

function swapWord() {
  if (!txt) return;
  txt.classList.add("fade-out");

  setTimeout(() => {
    txt.textContent = words[idx];
    txt.classList.remove("fade-out");
    idx++;
    if (idx >= words.length) idx = 0;
  }, 250);
}

if (txt) {
  swapWord();
  setInterval(swapWord, 5000);
}

let popup = document.getElementById("auth-modal");
let xBtn = document.getElementById("close-modal");
let signForm = document.getElementById("signup-form");
let logForm = document.getElementById("login-form");
let toLog = document.getElementById("toggle-to-login");
let toSign = document.getElementById("toggle-to-signup");
const menu = document.querySelector('#menu');
const hamburger = document.querySelector('.hamburger');
const header = document.querySelector('#header');

if (hamburger) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    menu.classList.toggle('active');
  });

  document.querySelectorAll('.menu-items a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      menu.classList.remove('active');
    });
  });
}
let popTitle = document.getElementById("modal-title");

document.querySelectorAll(".action-btn").forEach(b => {
  if (b.textContent.trim() === "Get Started" || b.textContent.trim() === "Join Now For Free") {
    b.onclick = (e) => {
      e.preventDefault();
      showPop("signup");
    };
  }
});

function showPop(type) {
  popup.classList.add("active");
  if (type === "signup") {
    signForm.classList.add("active");
    logForm.classList.remove("active");
    popTitle.textContent = "Sign Up";
  } else {
    signForm.classList.remove("active");
    logForm.classList.add("active");
    popTitle.textContent = "Sign In";
  }
}

function hidePop() {
  popup.classList.remove("active");
}


if (xBtn) {
  xBtn.onclick = hidePop;
}

if (popup) {
  popup.onclick = (e) => {
    if (e.target === popup) hidePop();
  };
}

if (toLog) {
  toLog.onclick = (e) => {
    e.preventDefault();
    showPop("login");
  };
}

if (toSign) {
  toSign.onclick = (e) => {
    e.preventDefault();
    showPop("signup");
  };
}

if (signForm) {
  signForm.onsubmit = (e) => {
    e.preventDefault();
    alert("Account created! \nEmail: " + document.getElementById("signup-email").value);
    signForm.reset();
    hidePop();
  };
}

if (logForm) {
  logForm.onsubmit = (e) => {
    e.preventDefault();
    alert("Logged in! \nUser: " + document.getElementById("login-email").value);
    logForm.reset();
    hidePop();
  };
}
