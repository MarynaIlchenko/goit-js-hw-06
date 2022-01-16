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

const galleryStyleRef = document.querySelector('ul.gallery');
galleryStyleRef.classList.add('gallery-style');

const listOfGallery = (pictures) => {
  const picturesGallery = pictures.map(({ url, alt }) => {
    // const pictureRef = document.createElement('li');
    pictureRef.insertAdjacentHTML('beforeend', `<img src="${url}" alt="${alt}">`);
    pictureRef.setAttribute('class', 'gallery-pictures');
    return pictureRef;
  });
  return galleryStyleRef.append(...picturesGallery);
}

console.log(listOfGallery(images));


// galleryStyleRef.classList.add('gallery-style');

// const listImage = images.reduce((acc, { url, alt }) => { 

//   acc += `<li class="gallery_item"><img src='${url}', alt='${alt}'></li>`;
//   return acc;
// },'');

// galleryStyleRef.insertAdjacentHTML('beforeend', listImage)

