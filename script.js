const games = [

    {
        name: "1v1.lol",
        category: "action",
        popular: false,
        url: "games/1v1-lol.html"
    },

    {
        name: "2048",
        category: "puzzle",
        popular: false,
        url: "games/2048.html"
    },

    {
        name: "Baseball Bros",
        category: "sports",
        popular: true,
        url: "games/baseball-bros.html"
    },

    {
        name: "Basketball Legends",
        category: "sports",
        popular: false,
        url: "games/basketball-legends.html"
    },

    {
        name: "Basketball Stars 2026",
        category: "sports",
        popular: false,
        url: "games/basketball-stars-2026.html"
    },

    {
        name: "Cookie Clicker",
        category: "idle",
        popular: true,
        url: "games/cookie-clicker.html"
    },

    {
        name: "Duck Life",
        category: "action",
        popular: false,
        url: "games/duck-life.html"
    },

    {
        name: "Geometry Dash Wave",
        category: "action",
        popular: false,
        url: "games/geometry-dash-wave.html"
    },

    {
        name: "Johnny Trigger",
        category: "action",
        popular: false,
        url: "games/johnny-trigger.html"
    },

    {
        name: "Ragdoll Archers",
        category: "action",
        popular: true,
        url: "games/archers.html"
    },

    {
        name: "Shadow Fighters",
        category: "action",
        popular: false,
        url: "games/shadow-fighters.html"
    },

    {
        name: "Survival Race",
        category: "action",
        popular: true,
        url: "games/survival-race.html",
        badge: "V1"
    },

    {
        name: "Survival Race",
        category: "action",
        popular: true,
        url: "games/survival-race-v3.html",
        badge: "V3"
    },

    {
        name: "Time Shooter 3",
        category: "action",
        popular: false,
        url: "games/time-shooter-3.html"
    },

    {
        name: "Tiny Fishing",
        category: "arcade",
        popular: false,
        url: "games/tiny-fishing.html"
    },

    {
        name: "Wordle Plus",
        category: "puzzle",
        popular: true,
        url: "games/wordle-plus.html"
    },

    {
        name: "Wordle Unlimited",
        category: "puzzle",
        popular: true,
        url: "games/wordle-unlimited.html"
    }

];


/* SORT ALPHABETICALLY */

games.sort((a, b) =>
    a.name.localeCompare(b.name)
);


/* ELEMENTS */

const gameContainer =
    document.getElementById("games");

const search =
    document.getElementById("search");

const noResults =
    document.getElementById("no-results");

const categoryButtons =
    document.querySelectorAll(".category");


let currentCategory = "all";


/* RENDER */

function renderGames() {

    const query =
        search.value.toLowerCase().trim();

    let filtered =
        games.filter(game => {

            const matchesSearch =
                game.name
                    .toLowerCase()
                    .includes(query);

            const matchesCategory =
                currentCategory === "all" ||
                (
                    currentCategory === "popular" &&
                    game.popular
                ) ||
                game.category === currentCategory;

            return matchesSearch && matchesCategory;

        });


    gameContainer.innerHTML = "";


    filtered.forEach(game => {

        const card =
            document.createElement("a");

        card.className =
            "game-card";

        card.href =
            game.url;


        const badge =
            game.badge
                ? ` <span class="game-category">${game.badge}</span>`
                : "";


        card.innerHTML = `

            <div class="game-name">
                ${game.name}
                ${game.popular ? '<span class="fire">🔥</span>' : ""}
                ${badge}
            </div>

            <div class="game-category">
                ${game.category}
            </div>

        `;


        gameContainer.appendChild(card);

    });


    noResults.style.display =
        filtered.length === 0
            ? "block"
            : "none";

}


/* SEARCH */

search.addEventListener(
    "input",
    renderGames
);


/* CATEGORIES */

categoryButtons.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            categoryButtons.forEach(btn =>
                btn.classList.remove("active")
            );

            button.classList.add("active");

            currentCategory =
                button.dataset.category;

            renderGames();

        }
    );

});


/* INITIAL */

renderGames();
