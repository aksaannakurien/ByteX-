function checkQuiz() {

    let score = 0;


    let answers = [
        "q1",
        "q2",
        "q3",
        "q4",
        "q5",
        "q6",
        "q7",
        "q8",
        "q9",
        "q10"
    ];


    answers.forEach(function(question){

        let selected = document.querySelector(
            'input[name="' + question + '"]:checked'
        );


        if(selected && selected.value == "1") {

            score++;

        }

    });



    let level = "";


    if(score <= 3){

        level = "🌱 Beginner";

    }

    else if(score <= 6){

        level = "🔰 Cyber Explorer";

    }

    else if(score <= 9){

        level = "🛡️ Security Learner";

    }

    else{

        level = "🏆 Cybersecurity Master";

    }



    document.getElementById("result").innerHTML =
    
    "Your Score: " + score + "/10 <br>" +
    "Your Level: " + level;


}