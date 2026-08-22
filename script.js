const gameFiles = [
    "cl2doom.html",
    "cl2Dshooting.html",
    "cl-3.html",
    "cl3pandas.html",
    "cl8ballclassic.html",
    "cl10morebullets.html",
    "cl10yardfight.html",
    "cl64in1nes.html",
    "cl90in1nes.html",
    "cl100RoomsOfEnemies.html",
    "cl234playergame.html",
    "cl2048.html",
    "claceattorneymilesedgeworth.html",
    "clachievmentunlocked.html",
    "clAcko_s Mach Bike Challenge (v10).html",
    "cladvancewars2.html",
    "clAdventureCapatalist.html",
    "claflac.html",
    "clakoopasrevenge.html",
    "claladdinsnes.html",
    "clalienhominid.html",
    "clamigopancho.html",
    "cl-b.html",
    "Bank Robbery.html",
    "cheeserolling.html",
    "cl1on1soccer.html",
    "cl1v1lol.html",
    "cl1v1tennis.html",
    "cl3dash.html",
    "cl3dasheditor.html",
    "cl3dpinballspacecadet.html",
    "cl3pandasbrazil.html",
    "cl3pandasfantasy.html",
    "cl3pandasjapan.html",
    "cl3pandasnight.html",
    "cl3slices2.html",
    "cl4thandgoal.html",
    "cl8ballpool.html",
    "cl10bullets.html",
    "cl10minutestildawn.html",
    "cl12minibattles.html",
    "cl13bones.html",
    "cl20smallmazes.html",
    "cl40xescape.html",
    "cl60secondsburgerrun.html",
    "cl60secondssantarun.html",
    "cl99balls.html",
    "cl99nightsitf.html",
    "cl100in1nes.html",
    "cl500calibercontractz.html",
    "cl1942nes.html",
    "cl2048cupcakes.html",
    "cl9007199254740992.html",
    "clA Walk in The Forest (v1.0).html",
    "clA Walk in The Forest (v10).html",
    "clabandoned3.html",
    "clabsolutemadness.html",
    "clacecombat2.html",
    "clacecombat3.html",
    "clacegangstertaxi.html",
    "clachievementunlocked.html",
    "clachievmentunlocked2.html",
    "clachievmentunlocked3.html",
    "clachillies.html",
    "clachillies2.html",
    "clAcko_s Mach Bike Challenge (v1.0).html",
    "clADarkRoom.html",
    "cladatewithdeath.html",
    "cladayintheoffice.html",
    "clADOFAI.html",
    "cladvancewars.html",
    "cladvancewarsdualstrike.html",
    "cladventneon.html",
    "cladventurecapitalist.html",
    "claftertheweek.html",
    "clagariolite.html",
    "clageofwar.html",
    "clageofwar2.html",
    "clagesofconflict.html",
    "clagesofempire.html",
    "clahoysurvival.html",
    "clai.html",
    "clairlinetycoonidle.html",
    "clakoopasrevenge2.html",
    "clakumanorgaiden.html",
    "clalexkiddinmiracleworld.html",
    "clalienhominidgba.html",
    "clalienskyinvasion.html",
    "clalientransporter.html",
    "clalienvspredator.html",
    "clallbossesin1.html",
    "clallocation.html",
    "clAltered Beast.html",
    "clamaze.html",
    "clambulencearush.html",
    "clamidstthesky.html",
    "capuchinsf.html",
    "cl1.html"
];


/* =========================
   GAME NAME FORMATTER
   ========================= */

function formatName(file) {

    let name = file
        .replace(/^cl/i, "")
        .replace(/\.html$/i, "");

    const names = {

        "1v1lol": "1v1.lol",
        "2048": "2048",
        "1on1soccer": "1 on 1 Soccer",
        "1v1tennis": "1v1 Tennis",

        "2doom": "2DOOM",
        "2Dshooting": "2D Shooting",

        "3dash": "3Dash",
        "3dasheditor": "3Dash Editor",
        "3dpinballspacecadet": "3D Pinball: Space Cadet",

        "8ballclassic": "8 Ball Classic",
        "8ballpool": "8 Ball Pool",

        "10morebullets": "10 More Bullets",
        "10yardfight": "10-Yard Fight",
        "10bullets": "10 Bullets",
        "10minutestildawn": "10 Minutes Till Dawn",

        "12minibattles": "12 MiniBattles",
        "13bones": "13 Bones",
        "20smallmazes": "20 Small Mazes",
        "40xescape": "40xEscape",

        "60secondsburgerrun": "60 Seconds Burger Run",
        "60secondssantarun": "60 Seconds Santa Run",

        "99balls": "99 Balls",
        "99nightsitf": "99 Nights",

        "100in1nes": "100-in-1 NES",
        "100RoomsOfEnemies": "100 Rooms of Enemies",

        "234playergame": "2, 3, 4 Player Games",

        "500calibercontractz": "500 Caliber Contractz",
        "1942nes": "1942 NES",
        "2048cupcakes": "2048 Cupcakes",

        "aceattorneymilesedgeworth":
            "Ace Attorney: Miles Edgeworth",

        "achievmentunlocked":
            "Achievement Unlocked",

        "achievementunlocked":
            "Achievement Unlocked",

        "achievmentunlocked2":
            "Achievement Unlocked 2",

        "achievmentunlocked3":
            "Achievement Unlocked 3",

        "Acko_s Mach Bike Challenge (v10)":
            "Acko's Mach Bike Challenge (V10)",

        "Acko_s Mach Bike Challenge (v1.0)":
            "Acko's Mach Bike Challenge (V1.0)",

        "A Walk in The Forest (v1.0)":
            "A Walk in The Forest (V1.0)",

        "A Walk in The Forest (v10)":
            "A Walk in The Forest (V10)",

        "ADarkRoom":
            "A Dark Room",

        "ADOFAI":
            "A Dance of Fire and Ice",

        "AdventureCapatalist":
            "Adventure Capitalist",

        "adventurecapitalist":
            "Adventure Capitalist",

        "aladdinsnes":
            "Aladdin NES",

        "alienhominid":
            "Alien Hominid",

        "alienhominidgba":
            "Alien Hominid GBA",

        "alienskyinvasion":
            "Alien Sky Invasion",

        "alientransporter":
            "Alien Transporter",

        "alienvspredator":
            "Alien vs Predator",

        "allbossesin1":
            "All Bosses in 1",

        "Altered Beast":
            "Altered Beast",

        "amigopancho":
            "Amigo Pancho",

        "ambulencearush":
            "Ambulance Rush",

        "amidstthesky":
            "Amidst the Sky",

        "abandoned3":
            "Abandoned 3",

        "absolutemadness":
            "Absolute Madness",

        "acecombat2":
            "Ace Combat 2",

        "acecombat3":
            "Ace Combat 3",

        "acegangstertaxi":
            "Ace Gangster Taxi",

        "adatewithdeath":
            "A Date with Death",

        "adayintheoffice":
            "A Day in the Office",

        "advancewars":
            "Advance Wars",

        "advancewars2":
            "Advance Wars 2",

        "advancewarsdualstrike":
            "Advance Wars: Dual Strike",

        "adventneon":
            "Advent Neon",

        "aftertheweek":
            "After the Week",

        "agariolite":
            "Agar.io Lite",

        "ageofwar":
            "Age of War",

        "ageofwar2":
            "Age of War 2",

        "agesofconflict":
            "Ages of Conflict",

        "agesofempire":
            "Ages of Empire",

        "ahoysurvival":
            "Ahoy Survival",

        "akoopasrevenge":
            "A Koopa's Revenge",

        "akoopasrevenge2":
            "A Koopa's Revenge 2",

        "akumanorgaiden":
            "Akumano R Gaiden",

        "alexkiddinmiracleworld":
            "Alex Kidd in Miracle World",

        "alienhominidgba":
            "Alien Hominid GBA",

        "allocation":
            "Allocation",

        "amaze":
            "Amaze",

        "aflac":
            "Aflac"
    };

    if (names[name]) {
        return names[name];
    }

    name = name
        .replace(/([a-z])([A-Z])/g, "$1 $2")
        .replace(/[_-]+/g, " ")
        .replace(/\s+/g, " ")
        .trim();

    return name.replace(/\b\w/g, c => c.toUpperCase());
}


/* =========================
   AUTOMATIC CATEGORIES
   ========================= */

function getCategory(name) {

    const n = name.toLowerCase();

    if (
        n.includes("soccer") ||
        n.includes("tennis") ||
        n.includes("football") ||
        n.includes("basketball") ||
        n.includes("baseball") ||
        n.includes("golf") ||
        n.includes("bike")
    ) {
        return "sports";
    }

    if (
        n.includes("2048") ||
        n.includes("maze") ||
        n.includes("puzzle")
    ) {
        return "puzzle";
    }

    if (
        n.includes("capitalist") ||
        n.includes("tycoon") ||
        n.includes("idle")
    ) {
        return "idle";
    }

    if (
        n.includes("doom") ||
        n.includes("shoot") ||
        n.includes("bullet") ||
        n.includes("combat") ||
        n.includes("war")
    ) {
        return "shooter";
    }

    if (
        n.includes("survival") ||
        n.includes("nights")
    ) {
        return "survival";
    }

    return "action";
}


/* =========================
   CREATE GAME LIST
   ========================= */

const games = gameFiles.map(file => {

    const name = formatName(file);

    return {
        name,
        file,
        category: getCategory(name),
        popular: false
    };

});


/* =========================
   SORT A-Z
   ========================= */

games.sort((a, b) =>
    a.name.localeCompare(
        b.name,
        undefined,
        {
            numeric: true,
            sensitivity: "base"
        }
    )
);


/* =========================
   ELEMENTS
   ========================= */

const container =
    document.getElementById("games");

const search =
    document.getElementById("search");

const noResults =
    document.getElementById("no-results");

const categoryButtons =
    document.querySelectorAll(".category");

let currentCategory = "all";


/* =========================
   RENDER
   ========================= */

function renderGames() {

    if (!container) return;

    const query =
        search
            ? search.value.toLowerCase().trim()
            : "";

    const filtered = games.filter(game => {

        const matchesSearch =
            game.name
                .toLowerCase()
                .includes(query);

        const matchesCategory =
            currentCategory === "all" ||
            game.category === currentCategory;

        return matchesSearch && matchesCategory;

    });


    container.innerHTML = "";


    filtered.forEach(game => {

        const card =
            document.createElement("a");

        card.className = "game-card";

        card.href = game.file;


        card.innerHTML = `
            <div class="game-name">
                ${game.name}
            </div>

            <div class="game-category">
                ${game.category}
            </div>
        `;


        container.appendChild(card);

    });


    if (noResults) {

        noResults.style.display =
            filtered.length
                ? "none"
                : "block";

    }

}


/* =========================
   SEARCH
   ========================= */

if (search) {

    search.addEventListener(
        "input",
        renderGames
    );

}


/* =========================
   CATEGORIES
   ========================= */

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


/* =========================
   START
   ========================= */

renderGames();
