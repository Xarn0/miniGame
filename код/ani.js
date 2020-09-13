

   let ans = document.querySelector('.ping');
    let input = document.querySelector('#in'),
     btn = document.querySelector('.btn0');
     let btn1 =document.querySelectorAll('.btn0');




//Кнопка "начать"
let b ;
btn1[1].addEventListener('click',()=>{
    b = ran();
});
//



//кнопка "проверить"
btn.addEventListener('click',()=>{
    let z = Number(input.value);
 iff(z,b);
 clearInput();
 });
 //
 function fff(){
     while(true){
        iff(z,b)
     }
 }

//функция которая создает случайное число и присваивает x && y
function ran ()
{let x1 = document.querySelector('.l2'),
y1 = document.querySelector('.l3');
let x11 = Math.round(Math.random()*10),
y11 = Math.round(Math.random()*10);
ans.innerHTML = `Поехали  `
x1.innerHTML = x11;
y1.innerHTML = y11;
 b = x11 * y11
return b
}
// 
 
 //Проверка ответа 
function iff(z,t){
 
    if(z === t){
        ans.innerHTML = `<p style="color:green; margin-top:15px;">Молодец, Верно</p>`
          let span = document.querySelector('.pingSpan');
          span.addEventListener('click', ran)
    }
    else{
        ans.innerHTML = `<p style="color:red; margin-top:15px">Попробуй ещё раз</p>`
    }

}
//


  function clearInput (){
      const int = document.querySelector('input');
      int.value = '';
  }
  
   


 


    




 


 


