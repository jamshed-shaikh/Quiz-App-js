const question = [
      
    {

        'que': "what is javascript?",
        'a': "static",
        'b': "dynamic",
        'c': "fixed",
        'd': "sticky" ,
        'correct':  "b"         
    },
    {
        'que': "what is css",
        'a': "static",
        'b': "dynamic",
        'c': "style",
        'd': "sticky" ,
        'correct':  "c"    
    },

    {
        'que': "what is html",
        'a': "static",
        'b': "dynamic",
        'c': "fixed",
        'd': "markup" ,
        'correct':  "d"         
    }

]

let index = 0;
let total = question.length;
let right = 0; 
let wrong = 0;

const h = document.getElementById("h")
const optionvaal = document.querySelectorAll(".opt")

const loadquestion = () => {
    const reset = () => {
        optionvaal.forEach((input) => {
            input.checked = false;
        })
    };
    reset();

    const endQuiz = () => {       
        document.querySelector(".quiz").innerHTML = `
            <h2 style="margin-top: 220px; text-align: center; color: white;">Thank you for your response</h2>
            <h3 style = "color: white; text-align: center;">${right} / ${total} are correct.</h3> 
        `;
    }

    if (index === total) {
        return endQuiz();
    }
   
    const data = question[index]
    h.innerHTML = `${index + 1}. ${data.que}`;
    optionvaal[0].nextElementSibling.innerHTML = data.a;
    optionvaal[1].nextElementSibling.innerHTML = data.b;
    optionvaal[2].nextElementSibling.innerHTML = data.c;
    optionvaal[3].nextElementSibling.innerHTML = data.d;
}
loadquestion();

const submitval = () => {
    const data = question[index]
    const ans = getanswer();
    
    if (ans === data.correct) {
        right++;
    } else {
        wrong++;
    }
    index++;
    loadquestion();
}

const getanswer = () => {
    let answer;
    optionvaal.forEach((input) => {
        if (input.checked) {
            answer = input.value;
        }
    })
    return answer;
}
