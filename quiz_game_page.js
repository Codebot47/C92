player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

question_turn = "player_1";
answer_turn = "player_2";

document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;

function send (){

    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    actual_answer = parseInt(number1) * parseInt(number2);

    question_number = "<center><h4>" + number1 + " X " + number2 + "</h4>";
    input_box = "<br><h4>Answer : </h4><input type='text' id = 'input_check_box' placeholder = 'Type Answer Here'>";
    check_button = "<br><br><button class='btn btn-info' onclick = 'check()'>Check</button></center>";
    row = question_number + input_box + check_button;

    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}

function check(){
    get_answer = document.getElementById("input_check_box").value;
    if(get_answer == actual_answer){
        if(question_turn == "player_1"){
            update_player2_score = player2_score + 1;
            document.getElementById("player1_score").innerHTML = update_player1_score;
            question_turn = "player_2";
            answer_turn = "player_1";
            document.getElementById("player_question") = "Question Turn - " + player2_name;
            document.getElementById("player_answer") = "Answer Turn - " + player1_name;
        }
        else{
            update_player1_score = player1_score + 1;
            document.getElementById("player2_score").innerHTML = update_player2_score;
            question_turn = "player_1";
            answer_turn = "player_2";
            document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
            document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;
        }
    }
}