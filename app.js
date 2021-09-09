let listArea = document.getElementById('albumsList');
let photosArea = document.getElementById('pictures');
let ul = document.getElementById('listSpace');
let li = document.createElement('li');
let albumIdx;
let photosLink = 'https://jsonplaceholder.typicode.com/photos?albumId=';
let fullLink;


function initFetch(fullLink){
	fetch(fullLink).then((data) => {
		console.log(data);
		return data.json();
	}).then((data) => {
		photosArea.innerHTML = data.map((picture) => {
			let img = `<img src=${picture.url}/>`;
			return img;
		})
	})	
}

let albums = fetch('https://jsonplaceholder.typicode.com/albums').then((data)=>{
  console.log(data);
  return data.json();
}).then((data) =>{
	ul.innerHTML = data.map( (album) => {	
		li =`<li>${album.title}</li>`;
		return li;
	}).join('');

	initFetch('https://jsonplaceholder.typicode.com/photos?albumId=1');

	ul.addEventListener('click', (e) => {
		e.preventDefault();
		let element = data.find((album)=> album.title === e.target.textContent);
		albumIdx = element.id;
		console.log(albumIdx);
		fullLink = photosLink + albumIdx;

		initFetch(fullLink);

	})
	
  console.log(data);
})

