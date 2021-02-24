function start() {
    console.log("Start");
    window.open("it_begins_again.html", "_self");
}

function later() {
    alert("sadly the world will not wait for you to be ready");
    start();
}

document.addEventListener('keydown', play_audio);
var playing = false;
function play_audio() {
    var audio = document.getElementById("audio");
    audio.play();

    if (playing == true) {
        alert("sadly the world will not mute for you");
    }

    playing = true;
}

function option(picked) {
    document.getElementById("pop-up").style.display = "block";
    var text = "NULL";
    var but = "NULL";
    var vid = "NULL";
    switch (picked) {
        case 1: //Wake up
            text = "You are on time to class but you are really tired and don\'t remember a lot.";
            but = "2";
            break;
        case 2: //Sleep in
            text = "You are late to class. This means you might not be ready for the final.";
            but = "2";
            break;
        case 3: //Do homework
            text = "Your friends think you are avoiding them. You are always locked away in your dorm room working away. Choosing to study rather then going to that frat part where all your friends are going to. You think this this the responsible thing to do, sit and work... but is it? Or am I throwing my life away chasing some stupid degree rather then enoying this limited time I have with my friends before we go our seperate ways.";
            but = "3_1";
            break;
        case 4: //Hangout with friends
            text = "You are falling behind in your homework.";
            but = "3_2";
            break;
        case 5: //Hangout with friends pt. 2
            text = "You are hungry but you convince yourself it is worth it so you can hangout with your friends.";
            but = "4_2";
            vid = "https://www.youtube.com/embed/W6T9GA4lyBg";
            break;
        case 6: //Eat lunch
            text = "You are fed but your mind is racing. Your mind is flooded with thoughts. Am I good enough? Will I be able to make a difference? What will the future hold? Am I on the right track? Do my friends even like me?";
            but = "4_1";
            break;
        case 7: //Do homework pt 2
            text = "You are hungry but you convince yourself you need to get your homework done. You already spent all morning with your freinds and are despertly falling behind. How long before I should just drop out? Can I keep going like this?";
            but = "4_2";
            vid = "https://www.youtube.com/embed/W6T9GA4lyBg";
            break;
        case 8: //Go on a walk
            text = "You pass out on the walk and wake up four hourns later.";
            but = "5_1";
            break;
        case 9: //Take a nap
            text = "You wake up four hours later.";
            but = "5_1";
            break;
        case 10: //Push on
            text = "You start making a lot of mistakes... You become fusterated and fall out of your seat in rage. Tears begin to appear in your eyes from the insecurites and fusterations that the world has put onto you.";
            but = "5_2";
            vid = "https://www.youtube.com/embed/mRqR4mOC4gc";
            break;
        case 11: //Return call from mom
            text = "You talked for an hour.";
            but = "6_1";
            break;
        case 12: //Write an essay
            text = "You have failed... agin. Freaking out you loose sight of what is going on. You don't know what is happening. You have put so much work in you think and it still is not enough.";
            but = "6_2";
            vid = "https://www.youtube.com/embed/fuB-TzXL05g";
            break;
        case 13: //Give up
            text = "<i>Press Continue</i>";
            but = "is_that_the_light";
            break;
        case 14: //Go to study group
            text = "You are bullied. Picked apart. Told you are nothing.";
            but = "7";
            vid = "https://www.youtube.com/embed/8g_kA2soWOo";
            break;
        case 15: //Keep pushing forward
            text = "<i>Press Continue</i>";
            but = "what_am_i_doing";
            break;
        case 16: //Report it
            text = "<i>Press Continue</i>";
            but = "but_i_did_the_right_thing";
            break;
        default:
            alert("There was a fatual error. Please contact the site admin.");
    }
    document.getElementById("pop-up-text").innerHTML = text;
    document.getElementById("pop-up-button").setAttribute("onClick", "window.open('" + but + ".html', '_self');");
    document.getElementById("pop-up-vid").setAttribute("src", vid);

    if (vid === "NULL") {
        document.getElementById("pop-up-vid").style.display = "none";
        document.getElementById("pop-up").style.height = "250px";
    }
}