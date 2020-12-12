$(".album-poster").on('click', function (e) {
    var dataSwitched = $(this).attr('data-switch')

    ap.list.switch(dataSwitched)
    ap.play()
    $("#aplayer").addClass("showPlayer")
    console.log(dataSwitched)

})

const ap = new APlayer({
    container: document.getElementById('aplayer'),
    listFolded: true,
    audio: [
        {
            name: 'Invisible Beauty',
            artist: 'Artist Name',
            url: 'songs/01 Track 1.wma',
            cover: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
        {
            name: 'Just Stay',
            artist: 'Artist Name',
            url: 'songs/01 Track 1.wma',
            cover: 'https://images.pexels.com/photos/4651046/pexels-photo-4651046.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
        {
            name: 'Love first',
            artist: 'Artist Name',
            url: 'songs/01 Track 1.wma',
            cover: 'https://images.pexels.com/photos/1771308/pexels-photo-1771308.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
        {
            name: 'Indivible',
            artist: 'Artist Name',
            url: 'songs/01 Track 1.wma',
            cover: 'https://images.pexels.com/photos/2350325/pexels-photo-2350325.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        }
    ]
});
