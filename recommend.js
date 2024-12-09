document.addEventListener('DOMContentLoaded', () => {
    const movieList = document.getElementById('movie-list');

    // 確認 movieList 是否正確抓取到
    if (!movieList) {
        console.error('找不到 movie-list 元素，請檢查 HTML 結構！');
        return;
    }

    // 電影資料：完整保留你提供的電影清單
    const movies = [
        { id: 1, title: '巨齒鯊', genre: '動作', description: '《巨齒鯊》講述一名退休的救援潛水員重回危險的海底，面對早已被認為滅絕的巨齒鯊，展開驚險任務，拯救被困的朋友脫離這兇猛巨獸的威脅。', cover: '巨齒鯊.jpg' },
        { id: 2, title: '功夫', genre: '動作', description: '《功夫》以1940年代的中國為背景，講述阿星這個小混混一心想加入稱霸香港的黑幫「斧頭幫」。斧頭幫成員以正式服裝示人，是一群冷酷無情的殺手，而阿星則在冒充身份中掙扎，夢想成為他們那樣的黑幫人物。', cover: '功夫.jpg' },
        { id: 3, title: '爺孫金會騙', genre: '喜劇', description: '《爺孫金會騙》講述一名老練騙子和他收留的孩子專門詐騙有錢人。然而，一個可能改變他們命運的重大機會出現，卻威脅著拆散這對形影不離的搭檔，帶來情感與選擇的掙扎。', cover: '爺孫金會騙.jpg' },
        { id: 4, title: '熱辣滾燙', genre: '喜劇', description: '《熱辣滾燙》講述一位孤僻女子多年自我放逐後，與一名拳擊教練相遇的故事。她在艱苦的訓練過程中，透過拳擊找到自我，最終扭轉了原本低迷的人生，展現運動治癒與改變人生的力量。', cover: '熱辣滾燙.jpg' },
        { id: 5, title: '金牌特務：機密對決', genre: '動作', description: '《金牌特務：機密對決》講述當伊格西和梅林的英國間諜總部遭遇毀滅性襲擊後，他們轉向美國間諜組織「仕特曼」尋求協助，雙方聯手對抗全球威脅，展現英美特務的精彩對決與合作。', cover: '金牌特務：機密對決.jpg' },
        { id: 6, title: '青春18×2 通往有你的旅程', genre: '愛情', description: '《青春18×2 通往有你的旅程》講述36歲的主人公在失去工作與公司後，人生跌到谷底，選擇到日本進行一場充滿惆悵的獨自旅行，試圖找回早已遺忘的愛情與自我。', cover: '青春18×2 通往有你的旅程.jpeg' },
        { id: 7, title: '還錢', genre: '動作', description: '《還錢》講述一幫神偷成功搶劫銀行後，卻遭遇內部黑吃黑。為了挽回局勢，他們被迫接下更困難的任務：將已經搶到手的錢還回去，展開一場荒誕又刺激的冒險行動。', cover: '還錢.jpg' },
        { id: 8, title: '金牌特務', genre: '動作', description: '《真愛每一天》是2013年英國浪漫喜劇，講述男子利用時間旅行改變過去追求更美好未來，主演包括多姆納爾·格里森與瑞秋·麥亞當斯。', cover: '金牌特務.jpg' },
        { id: 9, title: '魔鬼剋星：冰天凍地', genre: '動作', description: '《魔鬼剋星：冰天凍地》講述古老文物意外喚醒了強大的神靈，帶來可怕的幽靈大軍，世界面臨冰河期末日危機。魔鬼剋星團隊必須攜手合作，對抗這場超自然災難，拯救地球免於毀滅。', cover: '魔鬼剋星：冰天凍地.jpg' },
        { id: 10, title: 'Cross：跨界任務', genre: '喜劇', description: '《Cross：跨界任務》描述曾是特務的家庭主夫被捲入危險的任務，同樣牽連其中的刑警妻子卻渾然不知他的過去，婚姻這下受到了終極考驗。', cover: 'Cross：跨界任務.jpg' }
    ];

    // 動態生成電影清單，保留介紹功能並新增收藏按鈕
    movies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');
        movieCard.innerHTML = `
            <img src="${movie.cover}" alt="${movie.title} 封面" class="movie-cover">
            <h3>${movie.title}</h3>
            <p>${movie.description}</p>
            <button class="favorite-button" data-id="${movie.id}">收藏</button>
        `;
        movieList.appendChild(movieCard);
    });

    // 點擊收藏按鈕
    movieList.addEventListener('click', (event) => {
        if (event.target.classList.contains('favorite-button')) {
            const movieId = event.target.dataset.id;
            addToFavorites(movieId);
        }
    });

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
