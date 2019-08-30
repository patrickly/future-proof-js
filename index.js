var notify = document.querySelector('.notify');
var albums = document.querySelectorAll('.album');
var itemsTotal = document.querySelector('.items-total');
var saveBtn = document.querySelector('.button');

var albumsSelected = [];
var i = 0;

while(i < albums.length){
    albums[i].onclick = function(e) {
        var albumTitle = this.querySelector('.title').textContent;
        console.log('clicked an album: ', albumTitle);
        console.log('this title:', this.querySelector('.title').textContent);
        console.log('this:', this);

    }
    i++;
}

// console.log(albums);