var player1,player2,player1_score=0,player2_score=0,question_turn,answer_turn,n1=0,n2=0,question,answer=0,user_answer=0;
function set_names(){
    player1=localStorage.getItem("player1");
    player2=localStorage.getItem("player2");
    document.getElementById("player1_name").textContent=player1;
    document.getElementById("player2_name").textContent=player2;
    question_turn=player1;
    answer_turn=player2;
    document.getElementById("question_turn").textContent=question_turn;
    document.getElementById("answer_turn").textContent=answer_turn;
}
function submit(){
    n1=document.getElementById("number1").value;
    n2=document.getElementById("number2").value;
    console.log("n1:" + n1);
    console.log("n2:" + n2);
    question=n1.concat(" X ");
    question=question.concat(n2);
    document.getElementById("number1").value="";
    document.getElementById("number2").value="";
    document.getElementById("output").innerHTML=`
    <h3>Q.  ${question}</h3>
    <label>Your Answer : </label>
    <input id="answer_input" type="number">
    <br>
    <br>
    <button onclick="check()" id="check" class="btn btn-primary">Check</button>
    `;
}
function check(){
    user_answer=document.getElementById("answer_input").value;
    answer = n1 * n2;
    console.log(n1);
    console.log(n2);
    console.log(answer);
    if(answer==user_answer){
        alert("Yaay you got the correct Answer!!!");
        if(answer_turn==player1){
            player1_score+=1;
            player2_score-=0.25;
            question_turn=player1;
            answer_turn=player2;
            document.getElementById("question_turn").textContent=question_turn;
            document.getElementById("answer_turn").textContent=answer_turn;
        }
        else{
            player2_score+=1;
            player1_score-=0.25;
            question_turn=player2;
            answer_turn=player1;
            document.getElementById("question_turn").textContent=question_turn;
            document.getElementById("answer_turn").textContent=answer_turn;
        }
    }
    else{
        alert("Opps try again!!!");
        if(answer_turn==player1){
            player1_score-=1;
            player2_score+=0.25;
            question_turn=player1;
            answer_turn=player2;
            document.getElementById("question_turn").textContent=question_turn;
            document.getElementById("answer_turn").textContent=answer_turn;
        }
        else{
            player2_score-=1;
            player1_score+=0.25;
            question_turn=player2;
            answer_turn=player1;
            document.getElementById("question_turn").textContent=question_turn;
            document.getElementById("answer_turn").textContent=answer_turn;
        }
    }
    document.getElementById("output").innerHTML=``;
    display_scores()
}
function display_scores(){
    document.getElementById("player1_score").textContent=player1_score;
    document.getElementById("player2_score").textContent=player2_score;
}