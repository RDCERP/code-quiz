
//getting all required elements
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = document.querySelector(".quit");
const continue_btn = document.querySelector(".restart");
const next_btn = document.querySelector(".next_btn");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box")

//If start quiz button clicked
start_btn.onclick = ()=>{
    info_box.classList.add("activeInfo");//show the info box
}

//If exit quiz button clicked
exit_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo");//hide the info box
}

//If exit quiz button clicked
continue_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo");//hide the info box
    quiz_box.classList.add("activeQuiz");//show quiz box
    showQuestions(current_question);
}


next_btn.onclick = () => {
    
    if (current_question < 6)
    {current_question++;
    showQuestions(current_question)}
    else {result_box.classList.add("activeResults")
    quiz_box.classList.remove("activeQuiz");//show quiz box

    }
}

let que_count = 0;
let current_question = 0;

//getting questions from arrayt
function showQuestions(index){
    const que_text = document.querySelector(".que_text");
    const option_list = document.querySelector(".option_list");
    let que_tag = '<span>'+ questions[index].question +'</span>';
    let option_tag = '<div onclick="selectAnswer(event)" class="option">'+ questions[index].options[0] + '<span></span></div>'
                        + '<div onclick="selectAnswer(event)"  class = "option">'+ questions[index].options[1] + '<span></span></div>'
                        + '<div onclick="selectAnswer(event)"  class = "option">'+ questions[index].options[2] + '<span></span></div>'
                        + '<div onclick="selectAnswer(event)"  class = "option">'+ questions[index].options[3] + '<span></span></div>';

    que_text.innerHTML = que_tag;
    option_list.innerHTML = option_tag;

}


function selectAnswer (event) {



   console.log(event.target);
   const newDiv = document.createElement("div");
   newDiv.innerHTML = `<i class="fas fa-check"></i>`
   newDiv.classList.add("icon");
   newDiv.classList.add("cross");
   event.currentTarget.append(newDiv)
}

function startTimer () {
    // setInterval
}

// localstorage/remeber scores
 






// var startButton = document.querySelector("#start")
// var questions = [
//     {
//     prompt: "Do you want to take this quiz?",
//     userChoices: ["Yes", "No", "Maybe"], 
//     answer: "Yes"
// },
// {
//     prompt: "Do you want to take this quiz?",
//     userChoices: ["Yes", "No", "Maybe"], 
//     answer: "Yes"
// }
// ,
// {
//     prompt: "Do you want to take this quiz?",
//     userChoices: ["Yes", "No", "Maybe"], 
//     answer: "Yes"
// }
// ]
// function startQuiz(){
//     var
//     // alert("It works")
//     alert(questions)
// }

// startButton.addEventListener("click", startQuiz );

//create html card to hold questions and hidden from user until start quiz. then it will activate the card with the corect answer
//javascript timer w3, high score, seperate html file tap into local storage adding items to local storage and pulling them back

