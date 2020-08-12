const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true,
    audio: [
	  {
		name: 'Gravity',
		artist: 'Novelist FR',
		url: 'https://music.163.com/song/media/outer/url?id=1458474926.mp3'
	},
	{
		name: 'LEAVES',
		artist: 'Earthists.',
		url: 'https://music.163.com/song/media/outer/url?id=1298841854.mp3'
	}
    ]
});

