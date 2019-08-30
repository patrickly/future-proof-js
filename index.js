var notify = document.querySelector('.notify');
var albums = document.querySelectorAll('.album');
var itemsTotal = document.querySelector('.items-total');
var saveBtn = document.querySelector('.button');

var albumsSelected = [];
var i = 0;

while(i < albums.length){
    albums[i].onclick = function(e) {
        var albumTitle = this.querySelector('.title').textContent;
        if(this.classList.contains('selected') !== true){
            this.classList.add('selected');
            albumsSelected.push(albumTitle);
        }
        else {
            this.classList.remove('selected');
            albumsSelected = albumsSelected.filter(function(item){
                return item !== albumTitle;
            })
        }

        console.log(albumsSelected);
    }
    i++;
}

// console.log(albums);