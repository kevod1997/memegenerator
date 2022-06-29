// const select=document.querySelector("select");
// const img= document.querySelector("img");

// img.setAttribute("src",select.value);
// select.addEventListener("change", function(){
//     img.setAttribute("src",select.value);
// });

//---------------------------------------

let imgUrl= [
    {
    name: "Amber",
    url: "https://cdn2.actitudfem.com/media/files/amber-heard-meme-filtro-snapchat.jpg",
},
    {name:"Smart Guy",
    url: "https://miro.medium.com/max/504/0*AVD1uRFfib6ZYhsD.",
},
    {name: "Gato",
    url: "https://static.misionesonline.news/wp-content/uploads/2019/12/04163320/memegato.jpg",
},   
    {
        name: "Perro",
        url:"https://www.elsoldemexico.com.mx/doble-via/virales/ey580c-cheems.jpg/ALTERNATES/LANDSCAPE_768/Cheems.jpg",
},
    {
        name: "Programador",
        url: "https://i.pinimg.com/736x/63/39/2f/63392fa88244d183777fdb1018e4b602--programming-humor-humor-meme.jpg",
},
];

const select=document.querySelector("select");
const divImg=document.querySelector(".divImg");

imgUrl.forEach(element => {
    let option = document.createElement("option");
    option.innerText = element.name;
    option.value = element.url;
    select.appendChild(option);
    
});

divImg.innerHTML=`<img class="rounded mx-auto d-block" src=${select.value} alt="" />`;


select.addEventListener("change", function(){
    let img = document.querySelector("img");
    img.setAttribute("src", select.value)
    // img.setAttribute("alt", select.option.innerText); 
});