const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true,
    mini: true,
    loop: 'all',
    theme: '#8B864E',
    mutex: true,
    volume: 0.6,
    listFolded: false,
    listMaxHeight: 90,
    lrcType: 3,
    audio: [{
            name: "够钟",
            artist: '周柏豪',
            url: 'http://www.ytmp3.cn/down/38367.mp3',
            cover: 'http://img.ytmp3.cn/image/44.jpg',
        },
        {
            name: '9420',
            artist: '麦小兜',
            url: ' http://sc1.111ttt.cn/2018/1/03/13/396131225385.mp3',
            cover: 'http://oeff2vktt.bkt.clouddn.com/image/8.jpg',
        },
        {
            name: '海阔天空',
            artist: 'Beyond',
            url: 'http://www.ytmp3.cn/down/52756.mp3',
            cover: 'http://img.ytmp3.cn/image/68.jpg',
        },
        {
            name: '过客',
            artist: '庄心妍',
            url: 'http://www.ytmp3.cn/down/53729.mp3',
            cover: 'http://img.ytmp3.cn/image/89.jpg',
        }

    ]
});