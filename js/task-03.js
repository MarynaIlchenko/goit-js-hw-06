const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
// ----------------------------Внесенные правки-----------------------------
const galleryStyleRef = document.querySelector('ul.gallery');
galleryStyleRef.classList.add('gallery-style');

const listOfGallery = (pictures) => {
  const picturesGallery = pictures.map(({ url, alt }) => {
    galleryStyleRef.insertAdjacentHTML('beforeend', `<li><img src="${url}", alt="${alt}" width = 300, height = 200></li>`);
    return pictures;
  });
}
console.log(listOfGallery(images));

// ------------------Первое решение----------------------------------------
// const galleryStyleRef = document.querySelector('ul.gallery');
// galleryStyleRef.classList.add('gallery-style');

// const listOfGallery = (pictures) => {
//   const picturesGallery = pictures.map(({ url, alt }) => {
//     const pictureRef = document.createElement('li');
//     pictureRef.insertAdjacentHTML('beforeend', `<img src="${url}" alt="${alt}">`);
//     pictureRef.setAttribute('class', 'gallery-pictures');
//     return pictureRef;
//   });
//   return galleryStyleRef.append(...picturesGallery);
// }
// console.log(listOfGallery(images));

// ----------------Решение через reduce ----------------------------
// const listGallery = document.querySelector('ul.gallery');
// const listImage = images.reduce((acc, { url, alt }) => {
//   acc += `<li class="gallery-style"><img src='${url}', alt='${alt}' width = 300, height = 200></li>`;
//   return acc;
// },'');
// listGallery.insertAdjacentHTML('beforeend', listImage)




