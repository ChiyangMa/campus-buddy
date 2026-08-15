// =========================
// “寻找搭子”按钮
// =========================

const findBuddyButton =
    document.getElementById("findBuddyButton");

const latestBuddySection =
    document.querySelector(
        "main > section:nth-child(3)"
    );

findBuddyButton.addEventListener(
    "click",
    function () {

        latestBuddySection.scrollIntoView({
            behavior: "smooth"
        });

    }
);


// =========================
// 搭子分类筛选
// =========================

const categoryButtons =
    document.querySelectorAll(
        ".category-button"
    );

const buddyCards =
    document.querySelectorAll(
        ".buddy-card"
    );


categoryButtons.forEach(function (button) {

    button.addEventListener(
        "click",
        function () {

            const selectedCategory =
                button.dataset.category;


            buddyCards.forEach(function (card) {

                const buddyCategory =
                    card.dataset.category;


                if (
                    selectedCategory === "all" ||
                    buddyCategory === selectedCategory
                ) {

                    card.style.display = "block";

                }

                else {

                    card.style.display = "none";

                }

            });

        }
    );

});
