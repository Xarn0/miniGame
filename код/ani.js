

let dialogWindow = document.querySelector('.ping'),
    input = document.querySelector('#in'),
    FirstBtn = document.querySelector('.btn0'),
    LastBtn = document.querySelectorAll('.btn0');




//Кнопка "начать"
let LastAnswer ;
LastBtn[1].addEventListener('click',()=>{
    LastAnswer = numderRandom();
});
//



//кнопка "проверить"
FirstBtn.addEventListener('click',()=>{
    let answer = Number(input.value);
    check(answer,LastAnswer);
        clearInput();
 });
 //
 function repeat(){
     while(true){
        check(answer,LastAnswer)
     }
 }

//функция которая создает случайное число и присваивает x && y
function numderRandom ()
{let firstCoord = document.querySelector('.l2'),
LastCoord = document.querySelector('.l3');
let x = Math.round(Math.random()*10),
y = Math.round(Math.random()*10);
dialogWindow.innerHTML = `Поехали  `
firstCoord.innerHTML = x;
LastCoord.innerHTML = y;
return  x * y

}
// 
 
 //Проверка ответа 
function check(a,b){
 
    if(a === b){
        dialogWindow.innerHTML = `<p style="color:green; margin-top:15px;">Молодец, Верно</p>`
           document.querySelector('.pingSpan').addEventListener('click', numderRandom);
    }
    else{
        dialogWindow.innerHTML = `<p style="color:red; margin-top:15px">Попробуй ещё раз</p>`
    }

}
//


  function clearInput (){
      document.querySelector('input').value = '';
  }
  
   


 


    




 


 


