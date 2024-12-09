document.addEventListener('DOMContentLoaded', () => {
    const categories = document.querySelectorAll('.category-button');
    const movieDisplay = document.getElementById('movie-display');

    // 電影資料
    const movies = [
        { id: 1, title: '捍衛戰士', genre: '動作', description: '《捍衛戰士》描述年輕F-14飛行員彼得進入Topgun訓練，與菁英競爭磨練技術，同時展現自我風采，並與女教官展開浪漫戀情，情節緊湊動人。', cover: '捍衛戰士.jpg' },
        { id: 2, title: '玩命關頭X', genre: '動作', description: '《玩命關頭X》講述唐老大與團隊對抗新敵人但丁，保護家人安全，是系列第十一部電影，集結強大卡司，由路易斯·賴托瑞執導。', cover: '玩命關頭X.jpg' },
        { id: 3, title: '哥吉拉與金剛-新帝國', genre: '動作', description: '《哥吉拉與金剛：新帝國》為2024年怪獸電影，延續《哥吉拉大戰金剛》，由亞當·溫高德執導，探索怪獸宇宙新篇章，卡司包括蕾貝卡·霍爾等。', cover: '哥吉拉與金剛新帝國.jpg' },
        { id: 4, title: '打卡獵人', genre: '喜劇', description: '《打卡獵人》是一部2022年吸血鬼動作喜劇，講述藍領父親化身吸血鬼獵人，主演包括傑米·福克斯等。', cover: '打卡獵人.jpg' },
        { id: 5, title: '三個傻瓜', genre: '喜劇', description: '《三個傻瓜》是2009年寶萊塢喜劇劇情片，改編自小說《五分生》，上映後刷新多項票房紀錄，影響深遠。', cover: '三個傻瓜.jpg' },
        { id: 6, title: '美人魚', genre: '喜劇', description: '《美人魚》為2016年周星馳執導的中國電影，以幽默故事創下票房記錄，成中國首部破30億票房作品。', cover: '美人魚.jpg' },
        { id: 7, title: '樂來樂愛你', genre: '愛情', description: '《樂來越愛你》是2016年上映的美國歌舞愛情片，講述爵士鋼琴家與女演員在追夢中相戀的故事。', cover: '樂來樂愛你.jpg' },
        { id: 8, title: '真愛每一天', genre: '愛情', description: '《真愛每一天》是2013年英國浪漫喜劇，講述男子利用時間旅行改變過去追求更美好未來，主演包括多姆納爾·格里森與瑞秋·麥亞當斯。', cover: '真愛每一天.jpg' },
        { id: 9, title: '曼哈頓戀習曲', genre: '愛情', description: '《曼哈頓戀習曲》是2013年美國浪漫音樂片，講述創作歌手與失意唱片公司高層在紐約合作製作專輯的故事，主演綺拉·奈特莉與馬克·魯法洛。', cover: '曼哈頓戀習曲.jpg' },
        { id: 10, title: '異形：羅穆路斯', genre: '驚悚', description: '《異形：羅穆路斯》是2024年上映的科幻恐怖片，講述《異形》和《異形2》之間的故事，由費德·阿瓦雷茲執導，卡莉·史派妮等主演。', cover: '異形：羅穆路斯.jpg' },
        { id: 11, title: '長腿', genre: '驚悚', description: '《長腿》是2024年美國恐怖驚悚片，講述FBI探員追查一名神秘連環殺手，主演包括瑪嘉·夢露與尼可拉斯·凱吉。', cover: '長腿.jpg' },
        { id: 12, title: '鬼聖胎', genre: '驚悚', description: '《鬼聖胎》是2024年上映的驚悚恐怖片，由席德妮·史威尼主演，講述虔誠女性瑟希莉亞發現修道院的黑暗祕密。電影探討身體主權與教會父權，結局震撼且演技出色，獲得好評。', cover: '鬼聖胎.jpg' },
        { id: 13, title: '劇場版 排球少年!!垃圾場的決戰', genre: '動畫', description: '2024年，動畫《排球少年！！》將把「垃圾場決戰」搬上大銀幕，這場烏野對音駒的比賽被視為動畫最高潮，地位類似《灌籃高手》中的山王戰，讓粉絲迫不及待。', cover: '劇場版 排球少年!!垃圾場的決戰.jpg' },
        { id: 14, title: '劇場版 藍色監獄-EPIOSODE 凪-', genre: '動畫', description: '《藍色監獄》劇場版將呈現凪誠士郎與御影玲王的新互動，並帶來未曾展示的精彩比賽。這部作品不僅補充角色背景，也為粉絲帶來華麗的天才足球場面，是入坑的絕佳選擇。', cover: '劇場版 藍色監獄-EPIOSODE 凪-.jpg' },
        { id: 15, title: 'SPY x FAMILY CODE: White', genre: '動畫', description: '《間諜家家酒》劇場版將帶領粉絲走進佛傑一家的首次家族旅遊。這部電影延續了洛伊德、約兒、安妮亞和彭德的日常，展示他們在充滿驚險任務、校園趣事與溫馨爆笑的生活中，如何隱藏各自的秘密。', cover: 'SPY x FAMILY CODE.jpg' }
    ];

    // 設定分類按鈕點擊事件
    categories.forEach(button => {
        button.addEventListener('click', () => {
            const genre = button.dataset.genre;
            displayMovies(genre);
        });
    });

    // 顯示對應分類的電影封面和介紹，並加入收藏按鈕
    function displayMovies(genre) {
        movieDisplay.innerHTML = ''; // 清空之前的顯示
        const filteredMovies = movies.filter(movie => movie.genre === genre);

        filteredMovies.forEach(movie => {
            const movieCard = document.createElement('div');
            movieCard.classList.add('movie-card');
            movieCard.innerHTML = `
                <img src="${movie.cover}" alt="${movie.title} 封面" class="movie-cover">
                <h3>${movie.title}</h3>
                <p>${movie.description}</p>
                <button class="favorite-button" data-id="${movie.id}">收藏</button>
            `;
            movieDisplay.appendChild(movieCard);
        });

        // 設定收藏按鈕的事件
        movieDisplay.addEventListener('click', (event) => {
            if (event.target.classList.contains('favorite-button')) {
                const movieId = event.target.dataset.id;
                addToFavorites(movieId);
            }
        });
    }

    // 收藏功能：將電影加入 localStorage
    function addToFavorites(movieId) {
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        const selectedMovie = movies.find(movie => movie.id == movieId);

        if (!favorites.some(movie => movie.id == movieId)) {
            favorites.push(selectedMovie);
            localStorage.setItem('favorites', JSON.stringify(favorites));
            alert(`${selectedMovie.title} 已加入收藏！`);
        } else {
            alert(`${selectedMovie.title} 已經在收藏清單中！`);
        }
    }
});
