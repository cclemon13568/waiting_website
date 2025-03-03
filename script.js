document.getElementById("logo").addEventListener("click", function () {
    window.location.href = "https://www.animate-onlineshop.com.tw/?srsltid=AfmBOopIvG-480MjW-U_Eq2fOB5jgc8k3XomJ_SiF0WBH-wf64CIGii8";
});

// 設定圖片與對應台詞
const images = [
    { src: "loading1.gif", text: "正在努力!!" },
    { src: "loading2.gif", text: "あ　らっつぁっつぁ　や　りびだびりん" },
    { src: "loading3.gif", text: "A" },
    { src: "loading4.gif", text: "月底了..." },
    { src: "loading5.gif", text: "AAAAAAAAA" },
    { src: "loading6.gif", text: "唔 唔 唔" },
    { src: "loading7.gif", text: "我想找姐姐qq" },
    { src: "loading8.gif", text: "訂單qq" },
    { src: "loading9.gif", text: "🍵" },
    { src: "loading10.gif", text: "謝謝您讓我占用寶貴的時間" },
    { src: "loading11.gif", text: "還要等哦" },
];

// 取得圖片和文字元素
const imageElement = document.getElementById("switchImage");
const textElement = document.getElementById("imageText");

// ✅ **當網頁載入時，隨機選擇一張圖片與對應的文字**
document.addEventListener("DOMContentLoaded", function () {
    let randomIndex = Math.floor(Math.random() * images.length);
    imageElement.src = images[randomIndex].src;
    textElement.textContent = images[randomIndex].text;
});

// ✅ **點擊圖片時隨機變換圖片與文字**
imageElement.addEventListener("click", function () {
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * images.length);
    } while (imageElement.src.includes(images[randomIndex].src)); // 避免連續選到同一個

    // 設定新的圖片與台詞
    imageElement.src = images[randomIndex].src;
    textElement.textContent = images[randomIndex].text;
});
