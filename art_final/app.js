function start() {
    console.log("Start");
    window.open("it_begins_again.html", "_self");
}

function later() {
    alert("sadly the world will not wait for you to be ready");
    start();
}

function option(picked) {
    document.getElementById("pop-up").style.display = "block";
    var text = "NULL";
    var but = "NULL";
    var vid = "NULL";
    switch (picked) {
        case 1: //Wake up
            text = "You are on time for class, but you are exhausted, and don\'t remember a lot. Time to crush a red bull to get back my energy.";
            but = "why_am_i_so_tired";
            break;
        case 2: //Sleep in
            text = "You are late to class... again. Your professor cheerfully reminds you that if you continue to be late to class, it is very likely you will not pass the class.";
            but = "why_am_i_so_tired";
            break;
        case 3: //Do homework
            text = "Your friends think you are avoiding them. You are always locked away in your dorm room working away. You are choosing to study rather than going to that frat party where all your friends are going to. You think this the responsible thing to do, sit and work... but is it? Or am I throwing my life away chasing some stupid degree rather than enjoying this limited time I have with my friends before we go our separate ways?";
            but = "isnt_homework_important";
            break;
        case 4: //Hangout with friends
            text = "You decided that hang out with your friends is more important than your schoolwork. That was a mistake. You are now falling behind in your homework. So far behind, you do not know if you will be able to pass.";
            but = "can_i_ever_get_a_break";
            break;
        case 5: //Hangout with friends pt. 2
            text = "You skipped lunch again... There never seems to be time to eat these days with all the obligations you have. Going to class, seeing friends, doing your homework, and working, and somehow you still need to get your 8 hours of sleep.";
            but = "there_is_never_enough_time";
            vid = "https://www.youtube.com/embed/W6T9GA4lyBg";
            break;
        case 6: //Eat lunch
            text = "You are fed, but your mind is racing. Your mind is flooded with thoughts. Am I good enough? Will I be able to make a difference? What will the future hold? Am I on the right track? Do my friends even like me?";
            but = "food_is_good_but_maybe_i_should_stop_eating";
            break;
        case 7: //Do homework pt 2
            text = "You are hungry, but you convince yourself you need to get your homework done. You already spent all morning with your friends and are desperately falling behind. How long before I should drop out? Can I keep going like this?";
            but = "there_is_never_enough_time";
            vid = "https://www.youtube.com/embed/W6T9GA4lyBg";
            break;
        case 8: //Go on a walk
            text = "You pass out on the walk and wake up four hours later.";
            but = "wait_what_happened";
            break;
        case 9: //Take a nap
            text = "You wake up four hours later.";
            but = "wait_what_happened";
            break;
        case 10: //Push on
            text = "You start making a lot of mistakes... You become frustrated and fall out of your seat in rage. Tears begin to appear in your eyes from the insecurities and frustrations that the world has put onto you.";
            but = "i_am_so_tired";
            vid = "https://www.youtube.com/embed/mRqR4mOC4gc";
            break;
        case 11: //Return call from mom
            text = "You talked for an hour.";
            but = "i_miss_my_family";
            break;
        case 12: //Write an essay
            text = "You have failed... again. You are freaking out; you lose sight of what is going on. You don't know what is happening. You have put so much work in, you think, and it still is not enough.";
            but = "why_can_i_never_get_a_good_score";
            vid = "https://www.youtube.com/embed/fuB-TzXL05g";
            break;
        case 13: //Give up
            text = "<i>Press Continue</i>";
            but = "is_that_the_light";
            break;
        case 14: //Go to study group
            text = "You are bullied and picked apart. You are told you are nothing.";
            but = "why_does_no_one_like_me";
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
            alert("There was a fatal error. Please contact the site admin.");
    }
    document.getElementById("pop-up-text").innerHTML = text;
    document.getElementById("pop-up-button").setAttribute("onClick", "window.open('" + but + ".html', '_self');");
    document.getElementById("pop-up-vid").setAttribute("src", vid);

    if (vid === "NULL") {
        document.getElementById("pop-up-vid").style.display = "none";
        document.getElementById("pop-up").style.height = "250px";
    }
}