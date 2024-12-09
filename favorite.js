document.addEventListener('DOMContentLoaded', () => {
    const movieList = document.getElementById('movie-list'); // 找到收藏清單的容器
    const favorites = JSON.parse(localStorage.getItem('favorites')) || []; // 從 localStorage 中讀取收藏資料

    // 如果沒有收藏的電影，顯示提示訊息
    if (favorites.length === 0) {
        movieList.innerHTML = '<p>目前沒有收藏的電影。</p>';
    } else {
        // 遍歷收藏的電影並生成卡片
        favorites.forEach(movie => {
            const movieCard = document.createElement('div'); // 創建電影卡片的容器
            movieCard.classList.add('movie-card');
            movieCard.innerHTML = `
                <img src="${movie.cover}" alt="${movie.title} 封面" class="movie-cover">
                <h3>${movie.title}</h3>
                <p>${movie.description}</p>
                <button class="remove-button" data-id="${movie.id}">移除收藏</button>
            `;
            movieList.appendChild(movieCard); // 將卡片插入到容器中
        });
    }

    // 點擊移除按鈕事件
    movieList.addEventListener('click', (event) => {
        if (event.target.classList.contains('remove-button')) {
            const movieId = event.target.dataset.id; // 獲取要移除的電影 ID
            removeFromFavorites(movieId); // 呼叫移除函數
        }
    });

    // 移除收藏功能
    function removeFromFavorites(movieId) {
        const updatedFavorites = favorites.filter(movie => movie.id != movieId); // 過濾掉指定的電影
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites)); // 更新 localStorage
        alert('電影已成功移除收藏！');
        location.reload(); // 刷新頁面以更新清單
    }
});
