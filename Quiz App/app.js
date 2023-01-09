const quizDB =[
    {
        question:"Q1: What does HTML stand for?",
        a:"Hyper Text Markup Language", //ANS
        b:"Hyper Text Transfer Protocol",
        c:"Hyper Text Transmission Protocol",
        d:"Hyper Text Mark Language",
        ans:"ans1",
    },
    {
        question:"Q2: HTML attributes always appear where?",
        a:"In the closing tag",
        b:"In the opening tag", //ANS
        c:"Between the tags",
        d:"After the closing tag",
        ans:"ans2",
    },
    {
        question:"Q3: HTML5 incorporates three kinds of code: HTML, CSS and Javascript. Which of these provides the structure to a webpage?",
        a:"Javascript",
        b:"HTML", //ANS
        c:"CSS",
        d:"XML",
        ans:"ans2",
    },
    {
        question:"Q4: What is an HTML element?",
        a:"The starting tag",
        b:"The content between the tags", //ANS
        c:"The ending tag",
        d:"The content outside the tags",
        ans:"ans2",
    },  
    {
        question:"Q5: Which is the correct HTML element for inserting a line break?",
        a:"<b>",
        b:"<lb>",
        c:"<br>", //ANS
        d:"<break>",
        ans:"ans3",
    },
    {
        question:"Q6: Web Standards are decided on by who?",
        a:"Microsoft",
        b:"Apple",
        c:"W3C", //ANS
        d:"Google",
        ans:"ans3",
    },
    {
        question:"Q7: Which character is used to indicate an end tag?",
        a:"*",
        b:"<",
        c:"/", //ANS
        d:"^",
        ans:"ans3",
    },
    {
        question:"Q8: You should save HTML files with which file extension?",
        a:".htm",
        b:".index",
        c:".webpage",
        d:".html", //ANS
        ans:"ans4",
    },
    {
        question:"Q9: Which tag indicates the presence of javascript",
        a:"<css>",
        b:"<script type=>", //ANS
        c:"<?php>",
        d:"<style>",
        ans:"ans2",
    },
    {
        question:"Q10: javascript can be written within",
        a:"<head> tag only",
        b:"<body> tag only",
        c:"it can be written within both <head> and <body> tag", //ANS
        d:"none of the above",
        ans:"ans3",
    },
    {
        question:"Q11: When the javascript code is written inside html it will be saved as",
        a:".html", //ANS
        b:".css",
        c:".js",
        d:"none of the above",
        ans:"ans1",
    },
    {
        question:"Q12: in javascript what command is equivalent to print statement of c program",
        a:"alert", //ANS
        b:"write",
        c:"print",
        d:"echo",
        ans:"ans1",
    },
    {
        question:"Q13: Javascript is ",
        a:"client side scripting language", //ANS
        b:"server side scripting language",
        c:"both client and server side scripting language",
        d:"none of the above",
        ans:"ans2",
    },
    {
        question:"Q14: Which of the following is correct",
        a:"document.getElementByID(  )",
        b:"document.getElementByName(  )",
        c:"document.getElementByClass(  )",
        d:"all of the above", //ANS
        ans:"ans4",
    },
    {
        question:"Q15: Which are the main features of XML?",
        a:"Text data description",
        b:"Human- and computer-friendly format",
        c:"Handles data in a tree structure having one-and only one-root element",
        d:"All mentioned above", //ANS
        ans:"ans4",
    },
    {
        question:"Q16: Which one is the correct order of phases in JSP life cycle?",
        a:"Initialization, Cleanup, Compilation, Execution",
        b:"Initialization, Compilation, Cleanup, Execution",
        c:"Compilation, Initialization, Execution, Cleanup", //ANS
        d:"Cleanup, Compilation, Initialization, Execution",
        ans:"ans3",
    },
    {
        question:"Q17: What does CSS stand for?",
        a:"Colorful Style Sheets",
        b:"Creative Style Sheets",
        c:"Cascading Style Sheets", //ANS
        d:"Computer Style Sheets",
        ans:"ans3",
    },
    {
        question:"Q18: Which is the correct CSS syntax?﻿",
        a:"body:color=black;",
        b:"{body;color:black;}",
        c:"body {color: black;}", //ANS
        d:"{body:color=black;}",
        ans:"ans3",
    },
    {
        question:"Q19: How can you created rounded corners using CSS3 ?",
        a:"border[round]: 30px;",
        b:"border-radius: 30px;", //ANS
        c:"corner-effect: round;", 
        d:"alpha-effect: round-corner;",
        ans:"ans2",
    },
    {
        question:"Q20: Which property is used to change the background colour? ",
        a:"bgcolor",
        b:"background-color", //ANS
        c:"bcolor",
        d:"background-colour",
        ans:"ans2",
    },
    {
        question:"Q21: What file extension (the bit after the name) does CSS have?",
        a:".csv",
        b:".css", //ANS
        c:".ccs",
        d:".csc",
        ans:"ans2",
    },
    {
        question:"Q22: CSS rules are enclosed with ___________?",
        a:"< >",
        b:"( )",
        c:"{ }", //ANS
        d:"\" \"",
        ans:"ans3",
    },
    {
        question:"Q23: CSS to make text of all <p> tags red.",
        a:"p { color: red; }", //ANS
        b:"p { colour: red; }",
        c:"p-style { color: red }",
        d:"p { color style: red }",
        ans:"ans1",
    },
    {
        question:"Q24: JavaScript files have the file extension  (the bit after the name):",
        a:".javascript", 
        b:".css",
        c:".html",
        d:".js",//ANS
        ans:"ans4",
    },
    {
        question:"Q25: What is a variable?",
        a:"Store values so we can use them later and change them from the code.", //ANS
        b:"Store values so we can use them but cannot change them.",
        c:"Store values so we can use them once.",
        d:"Store values in containers so we can't use them later.",
        ans:"ans1",
    },
    {
        question:"Q26:  Who is making the web standards?",
        a:"Mozilla", 
        b:"Microsoft",
        c:"The World Wide Web Consortium", //ANS
        d:"None of these",
        ans:"ans3",
    },
    {
        question:"Q27: Javascript is an _______ language?",
        a:"Object-Oriented",  //ANS
        b:"Object-Based",
        c:"Procedural",
        d:"Interprated",
        ans:"ans1",
    },
    {
        question:"Q28: Which of the following keywords is used to define a variable in Javascript?",
        a:"var", 
        b:"let",
        c:"Both Aand B", //ANS
        d:"None of these",
        ans:"ans3",
    },
    {
        question:"Q29: Which of the following methods is used to access HTML elements using Javascript?",
        a:"getElementbyId()", 
        b:"getElementbyClassname()",
        c:"Both A and B", //ANS
        d:"None of these",
        ans:"ans3",
    },
    {
        question:"Q30: Upon encountering empty statements, what does the Javascript Interpreter do ?",
        a:"Throws an error", 
        b:"Ignores the statments", //ANS
        c:"Gives a warning",
        d:"None of these",
        ans:"ans2",
    },
    {
        question:"Q31: Which of the following methods can be used to display data in some form using Javascript",
        a:"document.write()", 
        b:"console.log()",
        c:"windows.alert()",
        d:"All of these", //ANS
        ans:"ans4",
    },
    {
        question:"Q32: How can a datatype be declared to be a constant type ?",
        a:"const", //ANS
        b:"var",
        c:"let",
        d:"constant",
        ans:"ans1",
    },
    {
        question:"Q33: What keyword is used to check whether a given property is valid or not ?",
        a:"in is",
        b: "in", //ANS
        c:"exists",
        d:"lies",
        ans:"ans2",
    },
    {
        question:"Q34: What is the use of the <noscript> tag in Javascript?",
        a:"Clears all the cookies and cache",
        b:"Both A and B",
        c:"The contents are displayed by non-JS-based browsers", //ANS
        d:"None of these",
        ans:"ans3",
    },
    {
        question:"Q35: Choose the correct HTML element for the largest heading:",
        a:"<h1>",
        b:"<heading>", 
        c:"<h6>",
        d:"<h7>",
        ans:"ans1",
    },
    {
        question:"Q36: To create a link to an anchor, you use the ______ property in A tag ?",
        a:"Name", 
        b:"Tag",
        c:"Link",
        d:"href", //ANS
        ans:"ans4",
    },
    {
        question:"Q37: HTML Tags are case sensitive.",
        a:"True", //ANS
        b:" False",
        c:"Not in HTML5",
        d:"only in HTML5",
        ans:"ans1",
    },
    {
        question:"Q38: What does XHTML stands for ?",
        a:"Extra Hypertext Markup Language", 
        b:"Extension Hypertext Markup Language",
        c:"Extended Hypertext Markup Language",
        d:"Extensible Hypertext Markup Language",  //ANS
        ans:"ans4",
    },
    {
        question:"Q39: Which of the following isn't an feature/element from HTML5 ?",
        a:"Canvas",  
        b:"Video",
        c:"Close", //ANS
        d:"Web Workers",
        ans:"ans3",
    },
    {
        question:"Q40: Whitin which element should you insert meta-tags ?",
        a:"<head></head>", 
        b:"<header></header>",
        c:"<footer></footer>",
        d:"<body></body>",
        ans:"",
    },
  
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');

const showScore = document.querySelector('#showscore');

let questionCount = 0;
let score = 0;

const loadQuestion = () => {

   const questionList = quizDB[questionCount];

   question.innerText = questionList.question;

   option1.innerText = questionList.a;
   option2.innerText = questionList.b;
   option3.innerText = questionList.c;
   option4.innerText = questionList.d;
}

loadQuestion();

const getCheckAnswer = ()  => {
    let answer;

   answers.forEach((curAnsElem) => {
    if(curAnsElem.checked){
        answer = curAnsElem.id;
    }
   
   });

   return answer;
}

const deselectAll = () => {
    answers.forEach((curAnsElem) =>  curAnsElem.checked = false);
}

submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer ===quizDB[questionCount].ans){
        score++;
    };

    questionCount++;

    deselectAll();

    if(questionCount < quizDB.length){
        loadQuestion();
    }else{
        showScore.innerHTML = `
            <h3> Your Score ${score}/${quizDB.length} ✌️</h3>  
            <button class="btn" onclick="location.reload()"> Play Again</button>

        `;

        showScore.classList.remove('scoreArea');
    }
});