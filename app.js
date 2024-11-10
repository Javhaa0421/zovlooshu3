//Javascript -> tootsoolol hiih
//variable -> ugugdol hadgalna
//if else -> nuhtsul shalgah
//for -> neg uildeliig olon davtah ued
//function -> olon kodni tsugluulga
//massive -> olon utga zerg hadgallah
//html, css ->text zurag gargaj irdg
//object -> huvirgagch
//api -> tusgai beldsen datag holboh
//innerText -> tag dotroh ugiig oorcloh
//document html deerh bvh code
// addEventListener -> websited hiigdeh uildel
const questionEl = document.querySelector('.question');
const result = document.querySelector('.result');
const choiceEl = document.querySelector('.choice');
const nextBtn = document.querySelector('.next');
let quizData = [
    {
      "question": " What is capital of France",
      "choice": ["Berlin","Madrid","Paris","Rome"],
      "answer": "Paris"
    },
    {
      "question": " What is capital of China",
      "choice": ["Berlin","Madrid","Beijing","Rome"],
      "answer": "Beijing"
    },
    {
      "question": " What is capital of Germany",
      "choice": ["Berlin","Madrid","Paris","Rome"],
      "answer": "Berlin"
    },
    {
      "question": " What is capital of Russia",
      "choice": ["Berlin","Moskow","Paris","Rome"],
      "answer": "Moskow"
    },
    {
      "question": " What is capital of Mongolia",
      "choice": ["Berlin","Madrid","Paris","UlanBator"],
      "answer": "UlanBator"
    },
];
let now = 0;
let count= 0;
console.log(quizData[now].question);
function display(){
  questionEl.innerText = quizData[now].question;
  quizData[now].choice.forEach(data=>{
    console.log(data);
    let btn = document.createElement('Button');
    btn.innerText = data;
    console.log(btn);
    choiceEl.append(btn);
    btn.addEventListener('click',()=> checkAnswer(data));
  });
}
function checkAnswer(data){
  console.log(data);
  if(data==quizData[now].answer){
      result.innerText="Correct!";
      count++;
  }else{
    result.innerText="wrong! Answer is "+quizData[now].answer;
  }
  }
nextBtn.addEventListener('click',()=>{
  questionEl.innerText="";
  result.innerText="";
  choiceEl.innerHTML="";
  now++;
  if(now==quizData.length){
    result.innerText="GJ You got  " +count+ "/" + quizData.length;
    nextBtn.style.display="none"
  }else{
  display();}
})
display();

