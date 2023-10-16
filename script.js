const key = "Y8MKhaLwhqrsFt9utKmx2Kse1GSoSRuUxkAZRXkOX5w";

const formEl =document.querySelector("form");

const imageContainer = document.querySelector(".images");
const downloadImgBtn = document.querySelector(".download ri-download-line")
const inputText = document.querySelector(".input-text");
const searchButton = document.querySelector(".input-button");
const loadMoreBtn = document.querySelector(".gallery .load");
const searchResults = document.querySelector(".card-container");

let inputData = "";
let inputStorage = "";
let page = 1;
let searchTerm = null;

async function searchImages(){
    inputData = inputText.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${key}`;

    const response = await fetch(url);
    const data =await response.json();

    const results =data.results;
    console.log(data)

    if (page===1){
        searchResults.innerHTML = "";

    }

    results.map((result) => {
        const imageWrapper = document.createElement('div');
        imageWrapper.classList.add("img-content");
        const image =document.createElement('img');
        image.src = result.urls.small;
        image.alt = result.alt_description;
        // const namecontainer =document.createElement('div');
        // namecontainer.classList.add("name-container");
        // const profile =document.createElement('div');
        // profile.classList.add("profile");
        // const name = document.createElement('div');
        // name.classList.add("name");
        // name.textContent = result.alt_description;
        // const download =document.createElement('div');
        // download.classList.add("download-div");
        // const icon =document.createElement('i');
        // icon.i = result.icon_tag;

        imageWrapper.appendChild(image);
        // imageWrapper.appendChild(namecontainer);
        // imageWrapper.appendChild(profile);
        // imageWrapper.appendChild(name);
        // imageWrapper.appendChild(download);
        // imageWrapper.appendChild(icon);
        searchResults.appendChild(imageWrapper);
    });

    page++
    if (page>1){
        loadMoreBtn.style.display = "block";

    }
}

formEl.addEventListener("submit",(event) =>{
    event.preventDefault();
    page = 1;
    searchImages();
});

loadMoreBtn.addEventListener("click", () =>{
    searchImages();
});

// var randomimage = document.getElementById("randomimage");
// const innerimage =document.querySelector(".innerimage img");


// randomimage.addEventListener("click",function(){
//     innerimage.style.display = "block";
//     getRandomImages();

    
// })

// async function getRandomImages(){

//     inputStorage = inputText.value;
//     const apiURL = `https://api.unsplash.com/search/photos?page=${page}&query=${inputStorage}&client_id=${key}`;

//     const res = await fetch(apiURL);
//     const input =await res.json();

//     const output =input.output;
//     console.log(input)

//     if (page===1){
//         getRandomImages.innerHTML = "";

//     }

//     output.map((answer) => {
//         const randomWrapper = document.createElement('div');
//         randomWrapper.classList.add("randomimage");
//         const icon =document.createElement("i");
//         icon.i = result.icon_tag;

//         randomWrapper.appendChild(icon);
//         getRandomImages.appendChild(randomWrapper);

//     })
// }








// const downloadImg = (imgUrl) => {
//     // Converting received img to blob, creating its download link, & downloading it
//     fetch(imgUrl).then(res => res.blob()).then(blob => {
//         const a = document.createElement("a");
//         a.href = URL.createObjectURL(blob);
//         a.download = new Date().getTime();
//         a.click();
//     }).catch(() => alert("Failed to download image!"));
// }

// const generateHTML = (images) => {
//     imageWrapper.innerHTML += images.map(img =>
//         `<li class="card">
//             <div class="details">
//                 <div class="img-content">
//                     <div class="profile" ></div>
//                     <div class="name" >Vaibhav</div>
//                     <span>${img.img-content}</span>
//                 </div>
//                 <button onclick="downloadImg('${img.src.large2x}');">
//                     <i class="download ri-download-line"></i>
//                 </button>
//             </div>
//         </li>`
//     ).join("");

// }

// const getImages = (apiURL) => {
//     // Fetching images by API call with authorization header
//     inputText.blur();
//     loadMoreBtn.innerText = "Loading...";
//     loadMoreBtn.classList.add("disabled");
//     fetch(apiURL, {
//         headers: { Authorization: key }
//     }).then(res => res.json()).then(data => {
//         generateHTML(data.photos);
//         loadMoreBtn.innerText = "Load More";
//         loadMoreBtn.classList.remove("disabled");
//     }).catch(() => alert("Failed to load images!"));
// }

// const loadMoreImages = () => {
//     page++;
//     let apiUrl = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${key}`;
//     apiUrl = searchTerm ? `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${key}` : apiUrl;
//     getImages(apiUrl);
// }
// const loadSearchImages = (e) => {
//     // If the search input is empty, set the search term to null and return from here
//     if (e.target.value === "") return searchTerm = null;
//     // If pressed key is Enter, update the current page, search term & call the getImages
//     if (e.key === "Enter") {
//         page = 1;
//         searchTerm = e.target.value;
//         imageWrapper.innerHTML = "";
//         getImages(`https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${key}`);
//     }
// }

// getImages(`https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${key}`);
// loadMoreBtn.addEventListener("click", loadMoreImages);
// // downloadImgBtn.addEventListener("click", (e) => downloadImg(e.target.dataset.img));
// inputText.addEventListener("keyup", loadSearchImages);

//BindData
// async function searchImages(query){
//     inputData = inputText.value;

//     const url = "https://api.unsplash.com/search/photos?page="

//     const response = await fetch(`${url}${page}&query=${inputData}&client_id=${key}`);
//     const data = await response.json();
//     const results =data.results;

//     console.log(results)


//     bindData(data.Images);
//     console.log(data)
//  }
// function bindData(Images){
//     const cardsContainer = document.getElementsByClassName("card-container");
//     const imageCardTemplate = document.getElementById("template-image-card");

//     cardsContainer.innerHTML = "";

//     Images.map((image) => {
//         if (!image.urlToImage) return;

//         const imageClone = imageCardTemplate.content.imageNode(true);
//         fillDataInCard(imageClone, image);
//         cardsContainer.appendChild(imageClone);
        
        
//     });
    
// }
// function fillDataInCard(imageClone, image){
//     const imgcontent = imageClone.querySelector("#img=content");
//     const namecontainer = imageClone.querySelector("#name-container");
//     const profile = imageClone.querySelector("#profile");
//     const name = imageClone.querySelector("#name");
//     const downloaddiv =imageClone.querySelector("#download-div");

//     imgcontent.src = image.urls.small;
//     namecontainer.innerHTML = image.ncontainer;
//     profile.innerHTML = image.profile;
//     name.innerHTML = image.name;
//     downloaddiv.innerHTML = image.download;

// }

// searchButton.addEventListener("click", () => {
//     const query = inputText.value;
//     if (!query) return;
//     searchImages(query);
//     curSelectedNav?.classList.remove("active");
//     curSelectedNav = null;
// });
// bindData();
// fillDataInCard();
