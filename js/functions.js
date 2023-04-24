// const content = {

//     brandContent: {
//         download: {
//             navText: "Descargar",
//             url: "http://example.com"
//         },
//         titleText: "Verifal",
//     },
//     sections: {
//         home: {
//             navText: "Home",
//             sectionKey: "home",
//             sectionH1: "Forma parte de la revolución de la información",
//             sectionH2: "YA DISPONIBLE",
//         },
//         proposal: {
//             navText: "Proposal",
//             sectionKey: "proposal",
//             insideSections: {
//                 sectionH1: "¿Qué puedes hacer?",
//                 sectionH2: {
//                     {
//                         title="Verifica",
//                         body= "La mejor arma contra las fake news"
//                     },
//                     {
//                         title= "Comenta",
//                         body: "Obtén más opiniones sobre la temática"             
//                     },
//                     {
//                         title: "Guarda",
//                         body: "No te pierdas nada, crea colecciones y lee más tarde"             
//                     },
//                     {
//                         title: "Guarda",
//                         body: "No te pierdas nada, crea colecciones y lee más tarde"             
//                     },
//                     {
//                         title: "Envía",
//                         body: "Comparte y envía a través de RRSS para ayudar al fenómeno"             
//                     },
//                     {
//                         title: "Like",
//                         body: "¿Te gusta? ¡Dale like y ayuda a su difusión!"             
//                     },
//                     {
//                         title: "Reporta",
//                         body= "Si el contenido es abusivo o falso, no lo dudes"             
//                     } 
//                 }           
//             },
//     }
//         press: {

//         },
//         about: {

//         },
//     }
// }


// const isMobile = navigator.userAgentData.mobile; //resolves true/false. PROBLEM
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent); // SOLUTION


const headerDesktop = document.querySelector(".menuDesktop");
const headerMobile = document.querySelector(".menuMobile");
const proposalButtons = document.querySelectorAll(".cardFeature");

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
})

function closeAllButtons() {
	proposalButtons.forEach(button => {
		button.querySelector(".featureDescription").style.display = "none";
		button.querySelector(".flippable").style.transform = "scaleY(1)";
	});
}

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



// SCROLL FUNCTIONS

// Reduced header

function headerScrollEffect(){
    // Define the scroll limit in order to reduce the header size and apply the 'reduced' class
	const blurHeaderBond = isMobile ? 30 : 100; 
	const platformClassList = isMobile ? headerMobile.classList : headerDesktop.classList;
	window.addEventListener("scroll", () => {
		let scroll = getCurrentScroll();
			if(scroll >= blurHeaderBond){
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
	imageAlt: "Diesel prices still goes up",
	title: "Diesel prices still goes up",
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

const newsBottom = [];

const newsSliders = document.querySelectorAll(".sliderRightNow");

const newsSliderTop = newsSliders[0].querySelector(".sliderWrap");
const newsSliderBottom = newsSliders[1].querySelector(".sliderWrap");

newsTop.forEach(news => {
	newsSliderTop.appendChild(createNewsCard(news));
});

newsBottom.forEach(news => {
	newsSliderBottom.appendChild(createNewsCard(news));
});


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
	timeLogo.classList.add("iconNews");

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

function animationScrollCards() {

}







