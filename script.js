// 找到“寻找搭子”按钮
const findBuddyButton = document.getElementById("findBuddyButton");

// 找到“最新搭子”区域
const latestBuddySection = document.querySelector(
    "main > section:nth-child(3)"
);

// 当用户点击“寻找搭子”时
findBuddyButton.addEventListener("click", function () {

    // 页面平滑滚动到最新搭子
    latestBuddySection.scrollIntoView({
        behavior: "smooth"
    });

});
