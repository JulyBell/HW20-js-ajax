let listArea = document.getElementById('albumsList');
let photosArea = document.getElementById('pictures');
let ul = document.getElementById('listSpace');
let li = document.createElement('li');
let albumIdx;
let photosLink = 'https://jsonplaceholder.typicode.com/photos?albumId=';
let fullLink;


async function runFetch(fullLink){
	let photosArr = await fetch(fullLink);
	let pictures = await photosArr.json();
	photosArea.innerHTML = pictures.map((picture) => {
	let img = `<img src=${picture.url}/>`;
	return img;
	}).join('');
}

function mapAlbum(data){
	let list = data.map( (album) => {	
		li =`<li>${album.title}</li>`;
		return li;
	}).join('');

	return list;
}

function chooseAlbum(event, data){
	let element = data.find((album)=> album.title === event.target.textContent);
	albumIdx = element.id;
	console.log(albumIdx);
	fullLink = photosLink + albumIdx;
	return fullLink;
}

fetch('https://jsonplaceholder.typicode.com/albums').then((data)=>{
  return data.json();
}).then((data) =>{
	ul.innerHTML = mapAlbum(data);

	runFetch('https://jsonplaceholder.typicode.com/photos?albumId=1');

	ul.addEventListener('click', (e) => {
		e.preventDefault();
		if(e.target.tagName === 'LI'){

			chooseAlbum(e, data);
			runFetch(fullLink);
		}

	})

})

