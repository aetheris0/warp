/* =========================================================
   WARP GAMES — SCRIPT.JS
   Every game automatically links to /games/<filename>
========================================================= */

const games = [

    /* =========================
       1
    ========================= */

    {
        name: "1",
        file: "cl1.html",
        category: "action"
    },
    {
        name: "1v1.lol",
        file: "cl1v1lol.html",
        category: "action",
        popular: true
    },
    {
        name: "1v1 Soccer",
        file: "cl1on1soccer.html",
        category: "sports"
    },
    {
        name: "1v1 Tennis",
        file: "cl1v1tennis.html",
        category: "sports"
    },

    /* =========================
       2
    ========================= */

    {
        name: "2D Shooting",
        file: "cl2Dshooting.html",
        category: "action"
    },
    {
        name: "2048",
        file: "cl2048.html",
        category: "puzzle"
    },
    {
        name: "2048 Cupcakes",
        file: "cl2048cupcakes.html",
        category: "puzzle"
    },
    {
        name: "234 Player Game",
        file: "cl234playergame.html",
        category: "action"
    },

    /* =========================
       3
    ========================= */

    {
        name: "3",
        file: "cl-3.html",
        category: "action"
    },
    {
        name: "3 Dash",
        file: "cl3dash.html",
        category: "action"
    },
    {
        name: "3 Dash Editor",
        file: "cl3dasheditor.html",
        category: "action"
    },
    {
        name: "3D Pinball Space Cadet",
        file: "cl3dpinballspacecadet.html",
        category: "arcade"
    },
    {
        name: "3 Slices 2",
        file: "cl3slices2.html",
        category: "puzzle"
    },

    /* =========================
       4
    ========================= */

    {
        name: "4th and Goal",
        file: "cl4thandgoal.html",
        category: "sports"
    },

    /* =========================
       8
    ========================= */

    {
        name: "8 Ball Classic",
        file: "cl8ballclassic.html",
        category: "sports"
    },
    {
        name: "8 Ball Pool",
        file: "cl8ballpool.html",
        category: "sports"
    },

    /* =========================
       10
    ========================= */

    {
        name: "10 Bullets",
        file: "cl10bullets.html",
        category: "action"
    },
    {
        name: "10 More Bullets",
        file: "cl10morebullets.html",
        category: "action"
    },
    {
        name: "10 Minutes Till Dawn",
        file: "cl10minutestildawn.html",
        category: "action"
    },
    {
        name: "10 Yard Fight",
        file: "cl10yardfight.html",
        category: "sports"
    },

    /* =========================
       12
    ========================= */

    {
        name: "12 MiniBattles",
        file: "cl12minibattles.html",
        category: "action"
    },

    /* =========================
       13
    ========================= */

    {
        name: "13 Bones",
        file: "cl13bones.html",
        category: "action"
    },

    /* =========================
       20
    ========================= */

    {
        name: "20 Small Mazes",
        file: "cl20smallmazes.html",
        category: "puzzle"
    },

    /* =========================
       40
    ========================= */

    {
        name: "40x Escape",
        file: "cl40xescape.html",
        category: "puzzle"
    },

    /* =========================
       60
    ========================= */

    {
        name: "60 Seconds: Burger Run",
        file: "cl60secondsburgerrun.html",
        category: "action"
    },
    {
        name: "60 Seconds: Santa Run",
        file: "cl60secondssantarun.html",
        category: "action"
    },

    /* =========================
       64
    ========================= */

    {
        name: "64 in 1 NES",
        file: "cl64in1nes.html",
        category: "arcade"
    },

    /* =========================
       90
    ========================= */

    {
        name: "90 in 1 NES",
        file: "cl90in1nes.html",
        category: "arcade"
    },

    /* =========================
       99
    ========================= */

    {
        name: "99 Balls",
        file: "cl99balls.html",
        category: "arcade"
    },
    {
        name: "99 Nights in the Forest",
        file: "cl99nightsitf.html",
        category: "survival"
    },

    /* =========================
       100
    ========================= */

    {
        name: "100 in 1 NES",
        file: "cl100in1nes.html",
        category: "arcade"
    },
    {
        name: "100 Rooms of Enemies",
        file: "cl100RoomsOfEnemies.html",
        category: "action"
    },

    /* =========================
       1942
    ========================= */

    {
        name: "1942 NES",
        file: "cl1942nes.html",
        category: "action"
    },

    /* =========================
       500
    ========================= */

    {
        name: "500 Caliber Contractz",
        file: "cl500calibercontractz.html",
        category: "action"
    },

    /* =========================
       A
    ========================= */

    {
        name: "A Walk in the Forest",
        file: "clA Walk in The Forest (v1.0).html",
        category: "adventure"
    },
    {
        name: "A Walk in the Forest v1.0",
        file: "clA Walk in The Forest (v10).html",
        category: "adventure"
    },
    {
        name: "Acko's Mach Bike Challenge",
        file: "clAcko_s Mach Bike Challenge (v1.0).html",
        category: "sports"
    },
    {
        name: "Acko's Mach Bike Challenge v10",
        file: "clAcko_s Mach Bike Challenge (v10).html",
        category: "sports"
    },
    {
        name: "Abandoned 3",
        file: "clabandoned3.html",
        category: "action"
    },
    {
        name: "Absolute Madness",
        file: "clabsolutemadness.html",
        category: "action"
    },
    {
        name: "Ace Attorney: Miles Edgeworth",
        file: "claceattorneymilesedgeworth.html",
        category: "adventure"
    },
    {
        name: "Ace Combat 2",
        file: "clacecombat2.html",
        category: "action"
    },
    {
        name: "Ace Combat 3",
        file: "clacecombat3.html",
        category: "action"
    },
    {
        name: "Ace Gangster: Taxi",
        file: "clacegangstertaxi.html",
        category: "action"
    },
    {
        name: "Achievement Unlocked",
        file: "clachievementunlocked.html",
        category: "action"
    },
    {
        name: "Achievement Unlocked",
        file: "clachievmentunlocked.html",
        category: "action"
    },
    {
        name: "Achievement Unlocked 2",
        file: "clachievmentunlocked2.html",
        category: "action"
    },
    {
        name: "Achievement Unlocked 3",
        file: "clachievmentunlocked3.html",
        category: "action"
    },
    {
        name: "Achillies",
        file: "clachillies.html",
        category: "action"
    },
    {
        name: "Achillies 2",
        file: "clachillies2.html",
        category: "action"
    },
    {
        name: "A Dark Room",
        file: "clADarkRoom.html",
        category: "strategy"
    },
    {
        name: "A Date with Death",
        file: "cladatewithdeath.html",
        category: "adventure"
    },
    {
        name: "A Day in the Office",
        file: "cladayintheoffice.html",
        category: "puzzle"
    },
    {
        name: "ADOFAI",
        file: "clADOFAI.html",
        category: "arcade"
    },
    {
        name: "Advance Wars",
        file: "cladvancewars.html",
        category: "strategy"
    },
    {
        name: "Advance Wars 2",
        file: "cladvancewars2.html",
        category: "strategy"
    },
    {
        name: "Advance Wars: Dual Strike",
        file: "cladvancewarsdualstrike.html",
        category: "strategy"
    },
    {
        name: "Adventure Capitalist",
        file: "clAdventureCapatalist.html",
        category: "idle"
    },
    {
        name: "Adventure Capitalist",
        file: "cladventurecapitalist.html",
        category: "idle"
    },
    {
        name: "Advent Neon",
        file: "cladventneon.html",
        category: "action"
    },
    {
        name: "After the Week",
        file: "claftertheweek.html",
        category: "action"
    },
    {
        name: "Agar.io Lite",
        file: "clagariolite.html",
        category: "action"
    },
    {
        name: "Age of War",
        file: "clageofwar.html",
        category: "strategy"
    },
    {
        name: "Age of War 2",
        file: "clageofwar2.html",
        category: "strategy"
    },
    {
        name: "Ages of Conflict",
        file: "clagesofconflict.html",
        category: "strategy"
    },
    {
        name: "Ages of Empires",
        file: "clagesofempire.html",
        category: "strategy"
    },
    {
        name: "AI",
        file: "clai.html",
        category: "action"
    },
    {
        name: "Alflac",
        file: "claflac.html",
        category: "action"
    },
    {
        name: "Alien Hominid",
        file: "clalienhominid.html",
        category: "action"
    },
    {
        name: "Alien Hominid GBA",
        file: "clalienhominidgba.html",
        category: "action"
    },
    {
        name: "Alien Sky Invasion",
        file: "clalienskyinvasion.html",
        category: "action"
    },
    {
        name: "Alien Transporter",
        file: "clalientransporter.html",
        category: "action"
    },
    {
        name: "Alien vs Predator",
        file: "clalienvspredator.html",
        category: "action"
    },
    {
        name: "All Bosses in 1",
        file: "clallbossesin1.html",
        category: "action"
    },
    {
        name: "Allocation",
        file: "clallocation.html",
        category: "strategy"
    },
    {
        name: "Altered Beast",
        file: "clAltered Beast.html",
        category: "action"
    },
    {
        name: "Amaze",
        file: "clamaze.html",
        category: "puzzle"
    },
    {
        name: "Ambulance Rush",
        file: "clambulencearush.html",
        category: "action"
    },
    {
        name: "Amidst the Sky",
        file: "clamidstthesky.html",
        category: "adventure"
    },
    {
        name: "Amigo Pancho",
        file: "clamigopancho.html",
        category: "puzzle"
    },
    {
        name: "Arl in Tycoon Idle",
        file: "clairlinetycoonidle.html",
        category: "idle"
    },
    {
        name: "Aku Man: Orgaiden",
        file: "clakumanorgaiden.html",
        category: "action"
    },
    {
        name: "Alex Kidd in Miracle World",
        file: "clalexkiddinmiracleworld.html",
        category: "arcade"
    },
    {
        name: "A Koopas Revenge",
        file: "clakoopasrevenge.html",
        category: "action"
    },
    {
        name: "A Koopas Revenge 2",
        file: "clakoopasrevenge2.html",
        category: "action"
    },

    /* =========================
       B
    ========================= */

    {
        name: "Bacon May Die",
        file: "clbaconmaydie.html",
        category: "action"
    },
    {
        name: "Baby Chicco Adventure",
        file: "clbabychiccoadventure.html",
        category: "adventure"
    },
    {
        name: "Baby Kaizo",
        file: "clbabykaizo.html",
        category: "action"
    },
    {
        name: "Baby Sniper in Vietnam",
        file: "clbabysniperinvietnam.html",
        category: "action"
    },
    {
        name: "B3313 Unabandoned A2",
        file: "clb3313unabandonedA2.html",
        category: "adventure"
    },
    {
        name: "B3313 V1.0.2",
        file: "clb3313v102.html",
        category: "adventure"
    },
    {
        name: "Backyard Baseball",
        file: "clbackyardbaseball.html",
        category: "sports"
    },
    {
        name: "Bad Piggies",
        file: "clbadpiggieslatest.html",
        category: "puzzle"
    },
    {
        name: "Baldi's Basics Remaster",
        file: "clbaldisbasicsremaster.html",
        category: "action"
    },
    {
        name: "Ballz",
        file: "clballz.html",
        category: "arcade"
    },
    {
        name: "Balls and Bricks",
        file: "clballsandbricks.html",
        category: "puzzle"
    },
    {
        name: "Banbuds",
        file: "clbanbuds.html",
        category: "action"
    },
    {
        name: "Bank Robbery",
        file: "clBank Robbery.html",
        category: "action"
    },
    {
        name: "Bank Robbery 2",
        file: "clbankrobbery2.html",
        category: "action"
    },
    {
        name: "Bank Breakout 2",
        file: "clbankbreakout2.html",
        category: "action"
    },
    {
        name: "Baseball NES",
        file: "clbaseballnes.html",
        category: "sports"
    },
    {
        name: "Basket Bros",
        file: "clbasketbros.html",
        category: "sports",
        popular: true
    },
    {
        name: "Basket Random",
        file: "clbasketrandomgood.html",
        category: "sports"
    },
    {
        name: "Battlesim",
        file: "clbattlesim.html",
        category: "strategy"
    },
    {
        name: "Basketball Legends",
        file: "clbballlegend.html",
        category: "sports"
    },
    {
        name: "BeamRider",
        file: "clbeamrider.html",
        category: "action"
    },
    {
        name: "Bearbarians",
        file: "clbearbarians.html",
        category: "action"
    },
    {
        name: "Ben 10 Omniverse",
        file: "clben10omniverse.html",
        category: "action"
    },
    {
        name: "Ben 10 Protector",
        file: "clben10protector.html",
        category: "action"
    },
    {
        name: "Ben 10 Racing",
        file: "clben10racing.html",
        category: "sports"
    },
    {
        name: "Bendrowned",
        file: "clbendrowned.html",
        category: "action"
    },
    {
        name: "Big Time Butter Baron",
        file: "clBig_Time_Butter_Baron.html",
        category: "idle"
    },
    {
        name: "Big Neon Tower Tiny Square",
        file: "clbigneontowertinysquare.html",
        category: "action"
    },
    {
        name: "Big Tower Tiny Square 2",
        file: "clbigtowertinysquare2.html",
        category: "action"
    },
    {
        name: "Binding of Isaac: Sheep Time",
        file: "clbindingofisaccsheeptime.html",
        category: "action"
    },
    {
        name: "BitLife",
        file: "clbitlife.html",
        category: "simulation"
    },
    {
        name: "Bit Planes",
        file: "clbitplanes.html",
        category: "action"
    },
    {
        name: "Blastronaut",
        file: "clblastronaut.html",
        category: "action"
    },
    {
        name: "Blightborne",
        file: "clblightborne.html",
        category: "action"
    },
    {
        name: "Blobs Story 2",
        file: "clblobsstory2.html",
        category: "adventure"
    },
    {
        name: "Block Blast",
        file: "clblockblast.html",
        category: "puzzle",
        popular: true
    },
    {
        name: "Block Blast V2",
        file: "clblockblastv2.html",
        category: "puzzle"
    },
    {
        name: "BlockCraft Parkour",
        file: "clblockcraftparkour.html",
        category: "action"
    },
    {
        name: "BlockCraft Shooter",
        file: "clblockcraftshooter.html",
        category: "action"
    },
    {
        name: "Bloons",
        file: "clbloons.html",
        category: "strategy",
        popular: true
    },
    {
        name: "Bloons 2",
        file: "clbloons2.html",
        category: "strategy"
    },
    {
        name: "Bloons Populous 1",
        file: "clbloonspp1.html",
        category: "strategy"
    },
    {
        name: "Bloons Populous 2",
        file: "clbloonspp2.html",
        category: "strategy"
    },
    {
        name: "Bloons Populous 4",
        file: "clbloonspp4.html",
        category: "strategy"
    },
    {
        name: "Bloons TD 1",
        file: "clbloonsTD1.html",
        category: "strategy"
    },
    {
        name: "BMX 2",
        file: "clBMX2.html",
        category: "sports"
    },
    {
        name: "Bolly Beat",
        file: "clbollybeat.html",
        category: "arcade"
    },
    {
        name: "Bomberman 2",
        file: "clbomberman2.html",
        category: "action"
    },
    {
        name: "Bonanza Bros",
        file: "clBonanza-Bros.html",
        category: "action"
    },
    {
        name: "Boom Slingers",
        file: "clboomslingers.html",
        category: "action"
    },
    {
        name: "Bowling",
        file: "clbowlalt.html",
        category: "sports"
    },
    {
        name: "Boxing Live 2",
        file: "clboxinglive2.html",
        category: "sports"
    },
    {
        name: "Boxing Random",
        file: "clboxingrandom.html",
        category: "sports"
    },
    {
        name: "BTD1",
        file: "clBTD1.html",
        category: "strategy"
    },
    {
        name: "BTTS",
        file: "clbtts.html",
        category: "strategy"
    },
    {
        name: "BTTS 2",
        file: "clbtts2.html",
        category: "strategy"
    },
    {
        name: "Bubble Tanks",
        file: "clbubbletanks.html",
        category: "action"
    },
    {
        name: "Bubble Tanks 2",
        file: "clbubbletanks2.html",
        category: "action"
    },
    {
        name: "Bubble Tanks Arenas",
        file: "clbubbletanksarenas.html",
        category: "action"
    },
    {
        name: "Bubsy",
        file: "clbubsy.html",
        category: "arcade"
    },
    {
        name: "Burrito Bison",
        file: "clburritobison.html",
        category: "action"
    },

    /* =========================
       C
    ========================= */

    {
        name: "Call of Battle",
        file: "clcallofbattle.html",
        category: "action"
    },
    {
        name: "Capuchins",
        file: "capuchinsf.html",
        category: "action"
    },
    {
        name: "Capybara Clicker",
        file: "clcapybaraclicker.html",
        category: "idle"
    },
    {
        name: "Card Drawing",
        file: "clcardrawing.html",
        category: "puzzle"
    },
    {
        name: "Cartoon Network Table Tennis",
        file: "clCartoonNetworkTableTennisUltimateTournament.html",
        category: "sports"
    },
    {
        name: "Castlevania",
        file: "clcastlevania.html",
        category: "action"
    },
    {
        name: "Castlevania: Aria of Sorrow",
        file: "clcastlevaniaariaofsorrow.html",
        category: "action"
    },
    {
        name: "Cat Mario",
        file: "clcatmario.html",
        category: "action"
    },
    {
        name: "Cat Mario Good",
        file: "clcatmariogood.html",
        category: "action"
    },
    {
        name: "Cave Crawler",
        file: "clcavecrawler.html",
        category: "action"
    },
    {
        name: "Celeste",
        file: "clceleste.html",
        category: "action",
        popular: true
    },
    {
        name: "Celeste Mario DX",
        file: "clcelestemariodx.html",
        category: "action"
    },
    {
        name: "Celia's Stupid ROM Hack",
        file: "clCeliasStupidROMHack.html",
        category: "action"
    },
    {
        name: "Centipede Arcade",
        file: "clcentipedearcade.html",
        category: "arcade"
    },
    {
        name: "Chain of Memories",
        file: "clchainofmemories.html",
        category: "adventure"
    },
    {
        name: "Chaos Faction 2",
        file: "clchaosfaction2.html",
        category: "action"
    },
    {
        name: "Cheshire in a Chatroom",
        file: "clcheshireinachatroom.html",
        category: "puzzle"
    },
    {
        name: "Chibi Knight",
        file: "clchibiknight.html",
        category: "adventure"
    },
    {
        name: "Chicken War",
        file: "clchickenwar.html",
        category: "action"
    },
    {
        name: "Choppy Orc",
        file: "clchoppyorc.html",
        category: "action"
    },
    {
        name: "Chuzzle",
        file: "clchuzzle.html",
        category: "puzzle"
    },
    {
        name: "CircloO 2",
        file: "clCircloO2.html",
        category: "puzzle"
    },
    {
        name: "Clash of Vikings",
        file: "clclashofvikings.html",
        category: "strategy"
    },
    {
        name: "Clay Uncraft",
        file: "clclayuncraft.html",
        category: "action"
    },
    {
        name: "Clear Vision",
        file: "clclearvision.html",
        category: "action"
    },
    {
        name: "Clear Vision 2",
        file: "clclearvision2.html",
        category: "action"
    },
    {
        name: "Clear Vision 4",
        file: "clclearvision4.html",
        category: "action"
    },
    {
        name: "Clear Vision 5",
        file: "clclearvision5.html",
        category: "action"
    },
    {
        name: "Clucluland",
        file: "clclucluland.html",
        category: "adventure"
    },
    {
        name: "COD 4",
        file: "clcod4.html",
        category: "action"
    },
    {
        name: "COD Black Ops",
        file: "clcodblackopp.html",
        category: "action"
    },
    {
        name: "CoderCraft",
        file: "clcodercraft.html",
        category: "action"
    },
    {
        name: "Cold Pines",
        file: "clcoldpines.html",
        category: "adventure"
    },
    {
        name: "Color Water Sort 3D",
        file: "clcolorwatersort3d.html",
        category: "puzzle"
    },
    {
        name: "Combo Pool",
        file: "clcombopool.html",
        category: "sports"
    },
    {
        name: "Command and Conquer",
        file: "clcommandandconquer.html",
        category: "strategy"
    },
    {
        name: "Commander Keen 5",
        file: "clcommanderkeen5.html",
        category: "arcade"
    },

    /* =========================
       EXTRA / OTHER
    ========================= */

    {
        name: "Cheese Rolling",
        file: "cheeserolling.html",
        category: "sports"
    }

];


/* =========================================================
   IMPORTANT:
   ALL GAME LINKS ARE AUTOMATICALLY PREFIXED WITH /games/
========================================================= */

function getGameURL(game) {
    return "/games/" + game.file;
}


/* =========================================================
   SORT GAMES ALPHABETICALLY
========================================================= */

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


/* =========================================================
   ELEMENTS
========================================================= */

const gamesContainer =
    document.getElementById("games");

const searchInput =
    document.getElementById("search");

const countElement =
    document.getElementById("game-count");

const noResults =
    document.getElementById("no-results");

const categoryButtons =
    document.querySelectorAll(".category");


/* =========================================================
   CURRENT CATEGORY
========================================================= */

let currentCategory = "all";


/* =========================================================
   CREATE GAME CARD
========================================================= */

function createGameCard(game) {

    const card =
        document.createElement("a");

    card.className =
        "game-card";

    /*
       THIS IS THE FIX.

       Example:

       game.file =
       "cl2048.html"

       becomes:

       /games/cl2048.html
    */

    card.href =
        getGameURL(game);

    card.innerHTML = `

        <div class="game-icon">
            ${escapeHTML(
                game.name.charAt(0).toUpperCase()
            )}
        </div>

        <div class="game-info">

            <strong>
                ${escapeHTML(game.name)}

                ${
                    game.popular
                        ? '<span class="fire">🔥</span>'
                        : ''
                }
            </strong>

            <small>
                ${escapeHTML(game.category)}
            </small>

        </div>

        <span class="game-arrow">
            →
        </span>

    `;

    return card;
}


/* =========================================================
   ESCAPE HTML
========================================================= */

function escapeHTML(value) {

    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


/* =========================================================
   DISPLAY GAMES
========================================================= */

function displayGames() {

    if (!gamesContainer) {
        return;
    }

    const search =
        searchInput
            ? searchInput.value
                .trim()
                .toLowerCase()
            : "";

    let filtered =
        games.filter(game => {

            const matchesSearch =
                game.name
                    .toLowerCase()
                    .includes(search);

            let matchesCategory = true;

            if (currentCategory === "popular") {

                matchesCategory =
                    game.popular === true;

            } else if (
                currentCategory !== "all"
            ) {

                matchesCategory =
                    game.category ===
                    currentCategory;
            }

            return (
                matchesSearch &&
                matchesCategory
            );
        });


    gamesContainer.innerHTML = "";


    filtered.forEach(game => {

        gamesContainer.appendChild(
            createGameCard(game)
        );

    });


    if (countElement) {

        countElement.textContent =
            filtered.length;
    }


    if (noResults) {

        noResults.style.display =
            filtered.length === 0
                ? "block"
                : "none";
    }
}


/* =========================================================
   SEARCH
========================================================= */

if (searchInput) {

    searchInput.addEventListener(
        "input",
        displayGames
    );
}


/* =========================================================
   CATEGORY BUTTONS
========================================================= */

categoryButtons.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            categoryButtons.forEach(
                btn =>
                    btn.classList.remove(
                        "active"
                    )
            );

            button.classList.add(
                "active"
            );

            currentCategory =
                button.dataset.category ||
                "all";

            displayGames();
        }
    );

});


/* =========================================================
   INITIALIZE
========================================================= */

displayGames();


/* =========================================================
   DEBUG HELPER
   Open browser console to see the generated paths.
========================================================= */

console.log(
    "WARP GAMES:",
    games.length
);

console.log(
    "Example game URL:",
    games.length
        ? getGameURL(games[0])
        : "No games"
);
