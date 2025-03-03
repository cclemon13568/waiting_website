document.getElementById("logo").addEventListener("click", function() {
    window.location.href = "https://www.animate-onlineshop.com.tw/?srsltid=AfmBOopIvG-480MjW-U_Eq2fOB5jgc8k3XomJ_SiF0WBH-wf64CIGii8";
});

// 設定要隨機切換的圖片
const images = ["loading1.gif", "loading2.gif", "loading3.gif", "loading4.gif", "loading5.gif", "loading6.gif", "loading7.gif"];
const imageElement = document.getElementById("switchImage");

// 點擊圖片時，隨機切換另一張圖片
imageElement.addEventListener("click", function () {
    let newImage;
    do {
        newImage = images[Math.floor(Math.random() * images.length)];
    } while (newImage === imageElement.src); // 避免連續出現同一張
    imageElement.src = newImage;
});
