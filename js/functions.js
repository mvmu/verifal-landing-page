// decide if the current window is mobile or desktop
const isMobileOrTablet = window.innerWidth >= 320 && window.innerWidth <= 960;

const headerDesktop = document.querySelector(".menuDesktop");
const headerMobile = document.querySelector(".menuMobile");
const proposalButtons = document.querySelectorAll(".cardFeature");

//NAV MENU FUNCTIONS

const botonNav = document.querySelector(".open");
const links = document.querySelectorAll(".navLink");
const hamburgerMenu = document.querySelector(".hamburger");

// Hamburger menu dropdown
// Initialize menu with display none 
hamburgerMenu.style.display = "none";

botonNav.addEventListener("click", function() {
		if (hamburgerMenu.style.display === "none") {
			hamburgerMenu.style.display = "block";
			hamburgerMenu.style.transition = "all 0.3s ease";
		}else{
			hamburgerMenu.style.display = "none";
			hamburgerMenu.style.transition = "all 0.3s ease";
		}
	})

// Add a specific class to the active/non active links
links.forEach(link => {
	link.addEventListener("click", function() {
		// remove active class in every element/link
		links.forEach(l => {
			l.classList.remove("activelinksNav");
		});
		// add active class to selected element/link
		link.classList.toggle("activelinksNav");
		// set a timeOut to hide the hamb menu
		setTimeout(() => {
			hamburgerMenu.style.display = "none";
		}, 600);
	});
});


// SCROLL FUNCTIONS

// Apply reduced header (blur version)

function headerScrollEffect(){
    // Define the scroll limit in order to reduce the header size and apply the 'reduced' class
	const platformClassList = isMobileOrTablet ? headerMobile.classList : headerDesktop.classList;
	window.addEventListener("scroll", () => {
		let scroll = getCurrentScroll();
			if(scroll >= window.innerHeight * 0.07){
				platformClassList.add("reduced");
                console.log("haciendo scroll");
			}else{
				platformClassList.remove("reduced");
                console.log("no scroll");
			} 
		});
	function getCurrentScroll(){
		return window.pageYOffset || document.documentElement.scrollTop;
	}
};

headerScrollEffect();


// Scroll progress + bar when user scrolls down or up

window.onscroll = function() {scrollEffect()};

function scrollEffect() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}


// PROPOSAL FUNCTIONS

//  Dropdown description in cards

proposalButtons.forEach(button => {
	button.addEventListener("click", () => {
		const display = button.querySelector(".featureDescription").style.display;
		closeAllButtons();
		if (display === "block") {
			button.querySelector(".featureDescription").style.display = "none";
			button.querySelector(".flippable").style.transform = "scaleY(1)";
		} else {
			button.querySelector(".featureDescription").style.display = "block";
			button.querySelector(".flippable").style.transform = "scaleY(-1)";
		}
	});
});

function closeAllButtons() {
	proposalButtons.forEach(button => {
		button.querySelector(".featureDescription").style.display = "none";
		button.querySelector(".flippable").style.transform = "scaleY(1)";
	});
};

// Slider

const prevBoton = document.querySelector("#prev");
const nextBoton = document.querySelector("#next");
const slides = document.querySelectorAll(".slide");
const breadcrumbs = document.querySelectorAll(".breadcrumb");

let current = 0; // ACTUAL
let maximum = slides.length - 1; // MAXIMO


// a loop for all the pictures/slides, applying to each one a translateX value
slides.forEach((slide,index) => {
	slide.style.transform = `translateX(${index * 150}%)`;
});

// // activate the first dot of the breadcrumbs
breadcrumbs.forEach((breadcrumb,index) => {
	index === 0 ? breadcrumb.classList.add("active") : breadcrumb.classList.remove("active");
});

// paint the first dot
function color(){
	breadcrumbs.forEach((breadcrumb,index) => {
		index === current ? breadcrumb.classList.add("active") : breadcrumb.classList.remove("active");
	});
};

// move the slides
function move(){
	slides.forEach((slide, index) => {
		slide.style.transform = `translateX(${150 * (index - current)}%)`;
	});
};

// buttons (next y prev) listen an event and receive a function 
nextBoton.addEventListener("click", () => {
	if(current === maximum){
		current = 0;
	}else{
		current++;
	}
	move();
	color();
});

prevBoton.addEventListener("click", () => {
	if(current === 0){
		current = maximum;
	}else{
		current--;
	}
	move();
	color();
});

// add click event to the dots

breadcrumbs.forEach((breadcrumb,index) => {
	breadcrumb.addEventListener("click", () => {
		current = index;
		move();
		color();
	});
});

// add automatic slide move

setInterval(function() {
	if(current === maximum){
		current = 0;
	}else{
		current++;
	}
	move();
	color();	
},5000);





// NEWS
const newsTop = [{
	imageSrc: "img/news/news1.jpeg",
	imageAlt: "Sant Jordi's Day in Barcelona",
	title: "Sant Jordi's Day",
	newsTime: "17h",
},
{
	imageSrc: "img/news/news2.jpg",
	imageAlt: "Massive Real Madrid supporters celebrations",
	title: "Massive Real Madrid supporters celebrations",
	newsTime: "12h",
},
{
	imageSrc: "img/news/news3.jpg",
	imageAlt: "Plump diesel into a red car",
	title: "Diesel prices continue going up", 
	newsTime: "30m",
},
{
	imageSrc: "img/news/news4.jpg",
	imageAlt: "Heroic rescue in Costa Brava",
	title: "Heroic rescue in Costa Brava",
	newsTime: "1h",
},
{
	imageSrc: "img/news/news5.jpg",
	imageAlt: "Vall D'Hebron opens a new child's room",
	title: "Vall D'Hebron opens a new child's room",
	newsTime: "3h",
},
{
	imageSrc: "img/news/news6.jpg",
	imageAlt: "Protests against the surrogacy",
	title: "Protests against the surrogacy",
	newsTime: "2h",
}]; 

const newsBottom = [{
	imageSrc: "img/news/news7.jpg",
	imageAlt: "cards stuck in traffic",
	title: "Long retentions due to the new traffic law",
	newsTime: "1h",
},
{
	imageSrc: "img/news/news8.jpg",
	imageAlt: "Liverpool supporters celebrating the victory",
	title: "Liverpool FC arrives victorious",
	newsTime: "6h",
},
{
	imageSrc: "img/news/news9.jpg",
	imageAlt: "Donetsk city ruins after the war",
	title: "Interview: memories of a war", 
	newsTime: "7.5h",
},
{
	imageSrc: "img/news/news10.jpg",
	imageAlt: "A man starts a fire with a sparkler",
	title: "Arrested for starting a serious forest fire",
	newsTime: "1h",
},
{
	imageSrc: "img/news/news11.jpg",
	imageAlt: "An AirFrance plane",
	title: "AirFrance flight attendants call a strike",
	newsTime: "5h",
},
{
	imageSrc: "img/news/news12.jpg",
	imageAlt: "Alex Dorka running",
	title: "Alex Dorka sets a new record in a marathon",
	newsTime: "2h",
}];

const newsSliderTop = document.querySelectorAll(".sliderRightNow")[0].querySelector(".sliderWrap");
const newsSliderBottom = document.querySelectorAll(".sliderRightNow")[1].querySelector(".sliderWrap");

newsTop.forEach(news => {
	newsSliderTop.appendChild(createNewsCard(news));
});

newsBottom.forEach(news => {
	newsSliderBottom.appendChild(createNewsCard(news));
});

let lastTopChild = newsSliderTop.lastElementChild;
let lastBottomChild = newsSliderBottom.lastElementChild;

// newsSliderTop.addEventListener("scroll", e => {
// 	console.log(e.currentTarget.scrollLeft);
// });


function createNewsCard(data) {
	const image = document.createElement("img");
	image.src = data.imageSrc;
	image.alt = data.imageAlt;
	image.classList.add("news");

	const title = document.createElement("h5");
	title.innerHTML = data.title;

	const card = document.createElement("div");
	card.classList.add("sliderCardRightNow");

	const timeLogo = document.createElement("img");
	timeLogo.src = "img/news/hot-icon.svg";
	timeLogo.alt = "hot news icon";

	const timeText = document.createElement("p");
	timeText.innerHTML = data.newsTime;

	const time = document.createElement("div");
	time.classList.add("sliderCardTime");
	time.appendChild(timeLogo);
	time.appendChild(timeText);

	card.appendChild(image);
	card.appendChild(title);
	card.appendChild(time);
	return card;
}

// invoke the sliderSetUp function, to apply it to both sliders
sliderSetUp(newsSliderTop);
sliderSetUp(newsSliderBottom);


// infinite slide function --> news slider
function sliderSetUp(slider){
	setInterval(() => {
		const cardWidth = slider.firstElementChild.offsetWidth;
		const cardMargin = cardWidth * 0.14;
		slider.style.transition = "all 10s linear";
		slider.style.transform = `translateX(-${ cardWidth + cardMargin }px)`;
	});
	
	slider.addEventListener('transitionend', function () {
		slider.appendChild(slider.firstElementChild);
		slider.style.transition = "none";
		slider.style.transform = "translateX(0)";
		setTimeout(() => {
			slider.style.transition = "all 10s linear";
		});
	});
}


// ABOUT FUNCTIONS

const faqButtons = document.querySelectorAll(".faqCard");

//  Dropdown description in cards/faqs

faqButtons.forEach(button => {
	button.addEventListener("click", () => {
		const display = button.querySelector(".answerFaq").style.display;
		closeAllButtonsFaq();
		if (display === "block") {
			button.querySelector(".answerFaq").style.display = "none";
			button.querySelector(".faqCard .flippable").style.transform = "scaleY(1)";
		} else {
			button.querySelector(".answerFaq").style.display = "block";
			button.querySelector(".faqCard .flippable").style.transform = "scaleY(-1)";
		}
	});
});

function closeAllButtonsFaq() {
	faqButtons.forEach(button => {
		button.querySelector(".answerFaq").style.display = "none";
		button.querySelector(".faqCard .flippable").style.transform = "scaleY(1)";
	});
};

// Form dynamism
// Note: without sending any data, its a mock

const submitEmail = document.querySelector(".submit-email");

submitEmail.addEventListener("mousedown", (e) => {
	e.preventDefault();
	const emailAddress = document.getElementById("emailSubscribe").value;
	if (emailAddress) { 
		document.querySelector(".subscription").classList.add("done");
		document.querySelector("input.add-email").style.display = "none";
	}
  });



