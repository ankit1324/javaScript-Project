const imageContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");

let ready = false;
let imagesLoaded = 0;
let totalImage = 0;
let photosArray = [];

// Unsplach API
const count = 30;
const apiKey = "vCZArYe7kcONSPROWyPo2IYbrEta8Wr10s-Vzt7TWWY";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

//check if all img loaded
function imageLoaded() {
  imagesLoaded++;
  console.log(imagesLoaded);
  if (imagesLoaded === totalImage) {
    ready = true;
    loader.hidden = true;
    console.log("ready =", ready);
  }
}

//Helper funx. to Set Attributes on DOM elements
function setAttributes(element, attributes) {
  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
}

// Create Elements for Linksand Photos add to Dom
function displayPhotos() {
  imagesLoaded = 0;
  totalImage = photosArray.length;
  console.log("total image", totalImage);
  //Run function for each photo
  photosArray.forEach((photo) => {
    //create link <a> for unsplash
    const item = document.createElement("a");
    item.setAttribute("href", photo.links.html);
    item.setAttribute("target", "_blank");
    setAttributes(item, {
      href: photo.links.html,
      target: "_blank",
    });
    //create <img> for photo
    const img = document.createElement("img");
    // img.setAttribute("src", photo.urls.regular);
    // img.setAttribute("title", photo.alt_description);
    // img.setAttribute("alt", photo.alt_description);
    setAttributes(img, {
      src: photo.urls.regular,
      alt: photo.alt_description,
      title: photo.alt_description,
    });

    //Event listner check when each is finished loading
    img.addEventListener("load", imageLoaded);

    // Put <img in  <a> element inside imageContainer.
    item.appendChild(img);
    imageContainer.appendChild(item);
  });
}

//Get photos
async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    photosArray = await response.json();
    displayPhotos();
  } catch (error) {}
}

//check to see if scroll indfinte
window.addEventListener("scroll", () => {
  if (
    window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 &&
    ready
  ) {
    ready = false;
    getPhotos();
  }
});

//onLoad
getPhotos();
