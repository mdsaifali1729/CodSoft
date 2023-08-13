// Preloader


window.addEventListener("load", function () {
  document.querySelector(".preloader").classList.add("opacity-1");
  setTimeout(function () {
    document.querySelector(".preloader").style.display = "none";
  }, 1000);
});


// Project item filter

const filterContainer = document.querySelector(".project-filter"),
    filterBtns = filterContainer.children;
    totalfilterBtn = filterBtns.length;
    (projectItems = document.querySelectorAll(".project-item")),
    (totalProjectItem = projectItems.length);

for (let i = 0; i < totalfilterBtn; i++) {
     filterBtns[i].addEventListener("click", function () {
    filterContainer.querySelector(".active").classList.remove("active");
    this.classList.add("active");
    // console.log(this.innerHTML)

    const filterValue = this.getAttribute("data-filter");
    for (let k = 0; k < totalProjectItem; k++) {
      if (filterValue === projectItems[k].getAttribute("data-category")) { 
        projectItems[k].classList.remove("hide");
        projectItems[k].classList.add("show");
      }
       else {
        projectItems[k].classList.remove("show");
        projectItems[k].classList.add("hide");
       }
       if (filterValue === "all") {
                projectItems[k].classList.remove("hide");
                projectItems[k].classList.add("show");
              }
      }
  })
}
  

//   Portfolio Lightbox
const lightbox = document.querySelector(".lightbox"),
  lightboxImg = lightbox.querySelector(".lightbox-img"),
  lightboxClose = lightbox.querySelector(".lightbox-close"),
  lightboxText = lightbox.querySelector(".caption-text"),
  lightboxCounter = lightbox.querySelector(".caption-counter");

let itemIndex = 0;

for (let i = 0; i < totalProjectItem; i++) {
    projectItems[i].addEventListener("click", function () {
      itemIndex = i;
      changeItem();   
      togglelightbox();
    })
  }


function nextItem() {
  if (itemIndex === totalProjectItem - 1) {
    itemIndex = 0;
  } else {
    itemIndex++;
  }
  changeItem();
}
function prevItem() {
  if (itemIndex === 0) {
    itemIndex = totalProjectItem - 1;4
  } else {
    itemIndex--;
  }
  changeItem();
}

function togglelightbox() {
  lightbox.classList.toggle("open");
}

function changeItem() {
  imgSrc = projectItems[itemIndex]
    .querySelector(".project-img img")
    .getAttribute("src");
  lightboxImg.src = imgSrc; 
  lightboxText.innerHTML = projectItems[itemIndex].querySelector("h4").innerHTML;
  lightboxCounter.innerHTML = itemIndex + 1 + "of" + totalProjectItem;
}

// Close lightbox

lightbox.addEventListener("click", function (event) {
    if (event.target === lightboxClose || event.target === lightbox) {
      togglelightbox();
    }
  });


// Aside Navbar

const nav = document.querySelector(".nav"),
      navList = nav.querySelectorAll("li"),
      totalNavList = navList.length,
      allSection = document.querySelectorAll(".section"),  
      totalSection = allSection.length;

    for (let i = 0; i < totalNavList; i++) {
      const a = navList[i].querySelector("a");
      a.addEventListener("click", function () {
            // remove back section class
            removeBackSectionClass();
            for (let i = 0; i < totalSection; i++) {
                    allSection[i].classList.remove("back-section");
                  }
              
           

        for (let j = 0; j < totalNavList; j++){
             if (navList[j].querySelector("a").classList.contains("active")) {
              // add back section class
              addBackSectionClass(j);
             
             }
              navList[j].querySelector("a").classList.remove("active");
          }  
      this.classList.add("active"); 
      showSection(this);

      if (window.innerWidth < 1200) {
        asideSectionTogglerBtn();
      }

      })
    }

    function showSection(element){
        for (let i = 0; i < totalSection; i++) {
            allSection[i].classList.remove("active");
          }
        const target = element.getAttribute("href").split("#")[1];
        document.querySelector("#" + target).classList.add("active");
    }

function removeBackSectionClass() {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("back-section");
  }
}
function addBackSectionClass(num) {
  allSection[num].classList.add("back-section");
}

function updateNav(element) {
    for (let i = 0; i < totalNavList; i++) {
      navList[i].querySelector("a").classList.remove("active");
      const target = element.getAttribute("href").split("#")[1];
    
      if (target === navList[i].querySelector("a").getAttribute("href").split("#")[1]) {
        navList[i].querySelector("a").classList.add("active");
      }
    }
  }

document.querySelector(".hire-me").addEventListener("click", function () {
  const sectionIndex = this.getAttribute("data-section-index");
  console.log(sectionIndex)
  showSection(this)
  updateNav(this);
  removeBackSectionClass();
  addBackSectionClass(sectionIndex);
});

const navTogglerBtn = document.querySelector(".nav-toggler"),
  aside = document.querySelector(".aside");

navTogglerBtn.addEventListener("click", asideSectionTogglerBtn);

function asideSectionTogglerBtn() {
  aside.classList.toggle("open");
  navTogglerBtn.classList.toggle("open");

    for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.toggle("open");
  }
}



//typing effect on about section

const words = ["Web Developer!", "Web Designer!", "MERN Developer!"];
let i = 0;
let timer;

//for typing effect
function typingEffect() {
	let word = words[i].split("");
	var loopTyping = function() {
		if (word.length > 0) {
			document.getElementById('word').innerHTML += word.shift();
		} else {
			deletingEffect();
			return false;
		};
		timer = setTimeout(loopTyping, 150);
	};
	loopTyping();
};

//for deleting effect 
function deletingEffect() {
	let word = words[i].split("");
	var loopDeleting = function() {
		if (word.length > 0) {
			word.pop();
			document.getElementById('word').innerHTML = word.join("");
		} else {
			if (words.length > (i + 1)) {
				i++;
			} else {
				i = 0;
			};
			typingEffect();
			return false;
		};
		timer = setTimeout(loopDeleting, 150);
	};
	loopDeleting();
};

typingEffect();




const form = document.getElementById('form');
const username = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('subject');
const password2 = document.getElementById('message');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(usernameValue === '') {
        setError(username, 'Username is required');
    } else {
        setSuccess(username);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if(passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 8 ) {
        setError(password, 'Password must be at least 8 character.')
    } else {
        setSuccess(password);
    }

    if(password2Value === '') {
        setError(password2, 'Please confirm your password');
    } else if (password2Value !== passwordValue) {
        setError(password2, "Passwords doesn't match");
    } else {
        setSuccess(password2);
    }

};