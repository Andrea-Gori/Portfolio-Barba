const ListaVideo = [{
        video: './videos/GeckoDevs.mp4',
        descrizione: 'GeckoDevs Logo',
    },
    {
        video: './videos/HungryBaobab.mp4',
        descrizione: 'HungryBaobab Logo',
    },
]

var CurrentIndex = 0;
var player = document.getElementById('player');
var mp4Vid = document.getElementById('Vsource');
$(mp4Vid).attr('src', ListaVideo[CurrentIndex].video);
$('#caption').html(ListaVideo[CurrentIndex].descrizione)
player.load();
player.play();

player.addEventListener('ended', myHandler, false);

function myHandler(e) {

    if (!e) {
        e = window.event;
    }
    CurrentIndex++;
    if (ListaVideo[CurrentIndex]) {
        $(mp4Vid).attr('src', ListaVideo[CurrentIndex].video);
    }
    console.log(CurrentIndex);
    player.load();
    player.play();

    if (CurrentIndex > ListaVideo.length - 1) {
        player.pause()
        CurrentIndex = ListaVideo.length - 1;
        console.log(CurrentIndex);

    }
}

function compila(i) {
    var mp4Vid = document.getElementById('Vsource');
    $(mp4Vid).attr('src', ListaVideo[i].video);
    $('#caption').html(ListaVideo[i].descrizione)
    player.load();
    player.play();
    CurrentIndex = i;
}

function next() {
    CurrentIndex++;
    var mp4Vid = document.getElementById('Vsource');
    $(mp4Vid).attr('src', ListaVideo[CurrentIndex].video);
    $('#caption').html(ListaVideo[CurrentIndex].descrizione)

    console.log(CurrentIndex);

    player.load();
    player.play();
}

function prev() {
    CurrentIndex--;
    var mp4Vid = document.getElementById('Vsource');
    $(mp4Vid).attr('src', ListaVideo[CurrentIndex].video);
    $('#caption').html(ListaVideo[CurrentIndex].descrizione)
    player.load();
    player.play();
}