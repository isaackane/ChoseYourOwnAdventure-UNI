const gameConfig = [
    {
        choice: "Start",
        prompt: "the black death is running rampant in london, do you wish to stay in london or ride to the country?",
        options: ["Stay in london", "Ride to the country"]
    },

    {
        choice: "Restart",
        prompt: "the black death is running rampant in london, do you wish to stay in london or ride to the country?",
        options: ["Stay in london", "Ride to the country"]
    },

    {
        choice: "Stay in london",
        prompt: "do you wish to tour london in an attempt to raise morale and boost your popularity?",
        options: ["Tour london", "Stay in the palace"]
    },

    {
        choice: "Ride to the country",
        prompt: "The people rise up and demand you return to the city",
        options: ["Stay in the country", "Return to london"]
    },

    {
        choice: "Return to london",
        prompt: "The people welcome you with open arms and invite you to a feast",
        options: ["Attend the feast", "Stay in the castle"]
    },

    {
        choice: "Return to london",
        prompt: "The people welcome you with open arms and invite you to a feast",
        options: ["Attend the feast", "Stay in the palace"]
    },

    {
        choice: "Stay in the palace",
        prompt: "You get bored",
        options: ["Stay in london", "Ride to the country"]
    },


    {
        choice: "Attend the feast",
        prompt: "After the feast you are scared by the plague and consider leaving london again",
        options: ["Stay in london", "Ride to the country"]
    },

    {
        choice: "Tour london",
        prompt: "Do you wish to tour london on foot or on horseback?",
        options: ["On foot", "On horse"]
    },

    {
        choice: "On foot",
        prompt: "A mob aproaches and demands money to buy food.",
        options: ["Feed them", "Order your escort to fight them"]
    },

    {
        choice: "On horse",
        prompt: "A mob aproaches and demands money to buy food.",
        options: ["Feed them", "Order your escort to fight them", "Turn and ride back to the palace"]
    },

    {
        choice: "Feed them",
        prompt: "the people demand more.",
        options: ["Give them more", "Order your escort to fight them"]
    },


    {
        choice: "Give them more",
        prompt: "the people demand more.",
        options: ["Give in to their demands", "Order your escort to fight them"]
    },

    {
        choice: "Give in to their demands",
        prompt: "the people are still demanding more, and you have no money, your only choice is to fight them",
        options: ["Order your escort to fight them"]
    },

    {
        choice: "Order your escort to fight them",
        prompt: "Your escort is killed",
        options: ["Draw your own sword and fight", "Beg for mercy"]
    },

    {
        choice: "Turn and ride back to the castle",
        prompt: "You safely reach the castle, when you arrive you are greated by your wife, she publicly begs you not to leave the castle again until the plage is over. the people see this and are satisfied. Do you wish to play again?",
        options: ["Restart", "Quit"]
    },

    {
        choice: "Stay in the country",
        prompt: "The city asks for money to pay more doctors",
        options: ["Send them money", "Refuse to send money"]
    },

    {
        choice: "Send them money",
        prompt: "",
        options: ["", ""]
    },

    {
        choice: "Refuse to send money",
        prompt: "",
        options: [""]
    },

    {
        choice: "Draw your own sword and fight",
        prompt: "The mob runs in fright",
        options: ["Chase them", "Return to the castle"]
    },

    {
        choice: "Chase them",
        prompt: "The mob ",
        options: ["Chase them", "Return to the castle"]
    },

];

const prompt = document.querySelector(".prompt");
const chooser = document.querySelector(".chooser");
const actBtn = document.querySelector(".act-btn");
var popularityNUM = 90


//

function popularity(choice) {
    if ((choice == "Ride to the country") || (choice == "Stay in the country") || (choice == "Order your escort to fight them") || (choice == "Give in to their demands") || (choice == "Refuse to send money")) {
        let popularity = document.getElementById("popularity")
        popularity.value -= 10;
        popularityNUM -= 10;
    }

    if (choice == "On foot") {
        var PARAM1 = Math.floor((Math.random() * 10) + 1);
        if (PARAM1 <= 3) {
            window.location.replace("GameOver_PLAGUE.html");
        } else {

            alert("you narrowly avoided catching the plage, you should avoid close interactions with the peasants.");

        }
    }


    if (choice == "Attend the feast") {
        var PARAM1 = Math.floor((Math.random() * 10) + 1);
        if (PARAM1 <= 3) {
            window.location.replace("GameOver_PLAGUE.html");
        } else {

            alert("you narrowly avoided catching the plage, you should avoid close interactions with the peasants.");

        }
    }




    if (choice == "Stay in the palace") {
        var PARAM1 = Math.floor((Math.random() * 10) + 1);
        if (PARAM1 <= 3) {
            popularityNUM -= 10;

        }




    } else if ((choice == "Turn and ride back to the castle") || (choice == "Return to the castle")) {
        window.location.replace("GameOver_WIN.html");

    } else if (choice == "Send them money") {
        window.location.replace("GameOver_WIN.html");

    } else if ((choice == "Chase them") || (choice == "Refuse to send money")) {
        window.location.replace("GameOver_MOB.html");

    }


    if (popularityNUM <= 60) {
        window.location.replace("GameOver_LOSS.html");
    }
};


//elements of the soruce code bellow were drawn from https://codepen.io/ForScale/pen/povegXK?editors=1010
function act(choice) {
    prompt.textContent = gameConfig.filter(config => config.choice === choice)[0].prompt;
    chooser.innerHTML = gameConfig.filter(config => config.choice === choice)[0].options.map(option => `<option value="${option}">${option}</option>`).join("");


};

actBtn.addEventListener("click", () => popularity(chooser.value));
actBtn.addEventListener("click", () => act(chooser.value));



act("Start");
