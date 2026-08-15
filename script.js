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

// 找到所有分类按钮
const categoryButtons = document.querySelectorAll(
    ".category-button"
);

// 找到所有搭子卡片
const buddyCards = document.querySelectorAll(
    ".buddy-card"
);


// 给每一个分类按钮添加点击功能
categoryButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        // 获取用户点击的分类
        const selectedCategory =
            button.dataset.category;


        // 检查每一个搭子
        buddyCards.forEach(function (card) {

            // 获取这个搭子的分类
            const buddyCategory =
                card.dataset.category;


            // 如果分类一致，就显示
            if (buddyCategory === selectedCategory) {

                card.style.display = "block";

            }

            // 如果分类不一致，就隐藏
            else {

                card.style.display = "none";

            }

        });

    });

});
