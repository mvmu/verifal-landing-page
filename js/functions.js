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


const headerDesktop = document.querySelector(".menuDesktop");
const headerMobile = document.querySelector(".menuMobile");

// SCROLL FUNCTIONS

// Reduced header

function headerScrollEffect(){
    // Define the scroll limit in order to reduce the header size and apply the 'reduced' class
	const blurHeaderBond = 100; 
	window.addEventListener("scroll", () => {
		let scroll = getCurrentScroll();
			if(scroll >= blurHeaderBond){
				headerDesktop.classList.add("reduced");
				headerMobile.classList.add("reduced");
                console.log("haciendo scroll");
			}else{
				headerDesktop.classList.remove("reduced");
				headerMobile.classList.remove("reduced");
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


