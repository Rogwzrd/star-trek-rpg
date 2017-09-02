////////////////////////////////////////
//global variables
////////////////////////////////////////

var defenderHealth;
var defenderDamage;
var attackerHealth;
var attackerHealth;
var yourEnemy;
var yourChar;

$(document).ready(function() {

    var starTrekGame = {
        //character stats
        data: {
            name: "Data",
            health: 200,
            atk: 12,
            atkStatus: false,
            defStatus: false,
            div: $("#data-wrapper")
        },
        riker: {
            name: "Riker",
            health: 160,
            atk: 19,
            atkStatus: false,
            defStatus: false,
            div: $("#riker-wrapper")
        },
        worf: {
            name: "Worf",
            health: 175,
            atk: 20,
            atkStatus: false,
            defStatus: false,
            div: $("#worf-wrapper")
        },
        borg: {
            name: "Borg",
            health: 250,
            atk: 8,
            atkStatus: false,
            defStatus: false,
            div: $("#borg-wrapper")
        },

        //this object holds the values of determining if a character will be an attacker or a defender
        arenaState: {
            atkChosen: false,
            defChosen: false
        }
    };

    //this switch will determin which characters will attack
    function assignAttacker(attacker) {
        switch (attacker) {
            case "data":

                attackerDamage = starTrekGame.data.atk;
                attackerHealth = starTrekGame.data.health;
                console.log("data-attacker");
                break;
            case "riker":

                attackerDamage = starTrekGame.data.atk;
                attackerHealth = starTrekGame.riker.health;
                break;
                console.log("riker-attacker");
            case "worf":

                attackerDamage = starTrekGame.data.atk;
                attackerHealth = starTrekGame.worf.health;
                console.log("worf-attacker");
                break;
            case "borg":

                attackerDamage = starTrekGame.data.atk;
                attackerHealth = starTrekGame.borg.health;
                console.log("borg-attacker");
        }
    }

    //this switch will determin which characters will defend
    function assignDefender(defender) {
        switch (defender) {
            case "data":

                defenderDamage = starTrekGame.data.atk;
                defenderHealth = starTrekGame.data.health;
                console.log("data-defender");
                break;
            case "riker":

                defenderDamage = starTrekGame.riker.atk;
                defenderHealth = starTrekGame.riker.health;
                console.log("riker-defender");
                break;
            case "worf":
;
                defenderDamage = starTrekGame.worf.atk;
                defenderHealth = starTrekGame.worf.health;
                console.log("worf-defender");
                break;
            case "borg":

                defenderDamage = starTrekGame.borg.atk;
                defenderHealth = starTrekGame.borg.health;
                console.log("borg-defender");
        }
    }
    
    //math function for running the damage state
    function damageAssignment() {
        attackerHealth = attackerHealth - defenderDamage;
        defenderHealth = defenderHealth - (attackerDamage + attackerDamage);
        console.log(attackerHealth, defenderHealth)
    }

function arenaCheck() {
    if (defenderHealth <= 0) {
        $("defender-space:first-child").detach();
    }
}
    //this holds effects when character divs are clicked on 
    //if no characters are selected then append the first character to the attacker position 
    //if the attacker is chosen the next character goes to the defender area   
    $(".character").on("click", function() {

        if (!starTrekGame.arenaState.atkChosen) {
            $(".attacker-space").append(this);
            var yourChar = $(this).attr("value");
            console.log(yourChar)
            starTrekGame.arenaState.atkChosen = true;
            console.log("attacker chosen")
        } else if (!starTrekGame.arenaState.defChosen) {
            $(".defender-space").append(this);
            var yourEnemy = $(this).attr("value");
            console.log(yourEnemy);
            starTrekGame.arenaState.defChosen = true;
            console.log("defender chosen")
        }

        //attackers and defenders values are assigned
        assignAttacker(yourChar);
        assignDefender(yourEnemy);

        //this button assigns damage between the attacker and defender
        $("button").on("click", function() {

            // the damage of the attacker and the defender is calculated
            damageAssignment(attackerDamage, attackerHealth, defenderDamage, defenderHealth);
        })

    })

    //s test to see properties of the game stat
    function loadTest() {
        for (x in starTrekGame) {
            console.log(starTrekGame[x]);
        }
        console.log('deeez nuts')
        console.log(starTrekGame.data.defStatus);
    }
    loadTest();
})