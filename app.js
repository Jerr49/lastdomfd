

document.querySelector('.check').addEventListener('click', ()=>{ 
    const h1 = document.getElementsByTagName('h1')   
    
    const guess = Number (document.querySelector('.guess').value);
    const message = document.querySelector('.message');
    const number = document.querySelector('.number');
    const score = document.querySelector('.score');
    const highscore = document.querySelector('.highscore');
    const hiddenNumber = Math.ceil(Math.random()*5);

     if(guess === ''){
        message.textContent = 'Please Input digit';
        document.body.style.backgroundColor = 'red';
    }else if(guess === hiddenNumber){
        message.textContent = 'Correct guess...';
        number.textContent = hiddenNumber;
        highscore.textContent = hiddenNumber;
        document.body.style.backgroundColor = 'green';
    }
     if(guess !== hiddenNumber){
         message.textContent = 'Keep guessing...';
         number.textContent = hiddenNumber;
         document.body.style.backgroundColor = 'red';
     }

     if(score.textContent-- === 0){
        score.textContent = 0;
        h1[0].textContent = 'GAME OVER';
        number.textContent = '';
        hiddenNumber.textContent = '';
     }



    // }else{
    //     h1.innerText = 'GAME OVER';
    //  }

    //  if (qty.value <= 0) {
    //     qty.value = 0;
    // }
    // else{
    //     qty.value = parseInt(qty.value) -1
    // }


});














// // // // let select an element and its content on the console




// // // // const score = document.querySelector('.score')
// // // // score.innerText = 5;

// // // // console.log(document.querySelector('.message').innerText = 'correct number');

// // // // console.log(document.getElementsByClassName());

// // // // change the score and ? textcontent


// // // document.querySelector('.number').textContent = 13;
// // // document.querySelector('.score').textContent = 10;

// // // change d input field

// // // document.querySelector('.guess').value = 30;

// // // Handle click event 

// // // let number = document.querySelector('.number')
// // // console.log(typeof number);
// // // let body = document.body
// // // let mgs = document.querySelector('.message')



// // // let guess = Number(document.querySelector('.guess').value)



// // // let hidden = Math.ceil(Math.random() * 4)
// // // console.log(hidden);
// // // setTimeout(hidden, 4000)

// // // let gameover = document.querySelector('marquee')

// // // let WIN = document.querySelector('.win')

// // // // console.log(guess > hidden);
// // //     let btn = document.querySelector('.check')
// // // let score = document.querySelector('.score')
// // //     let gameLogic = ()=>{
// // //          if(guess > hidden){
// // //         //     // mgs.innerText = 'Correct Number'
// // //               body.style.backgroundColor = 'green'
// // //         //         //number.innerHTML = hidden
// // //             }
// // //             // body.style.backgroundColor = 'green'
        
// // //             if(score.innerText-- === 0){
// // //             score.innerText = 0;
// // //             WIN.innerText = "opps!"
// // //             WIN.style.color = "red"
// // //                 gameover.innerText = 'Game Over'
// // //                 body.style.backgroundColor = 'grey'
                

// // //             }
// // //     }
// // // btn.addEventListener('click', gameLogic)
// // // // let change = document.querySelector('.score')
// // // // change.innerText = '5'

// // // let refesh = document.querySelector('.again')
// // // refesh.addEventListener('click', ()=>{
// // //     location.reload()
// // // })








// // let bgrc = document.body;
// // let checks = document.querySelector('.check')

// // function gameLogic(){
// //     let number = document.querySelector('.number');
// //     let hiddenNumber = Math.ceil(Math.random()*3);
// //     let guess = Number(document.querySelector('.guess').value);
// //     let msg = document.querySelector('.message');
// //     if(guess === hiddenNumber){
// //         msg.textContent = 'Correct Guess';
// //         bgrc.style.backgroundColor = 'green';
// //         console.log(hiddenNumber);
// //         number.textContent = hiddenNumber
// //     }else if(guess !==  hiddenNumber){
// //         msg.textContent = 'Keep guessing';
// //         bgrc.style.backgroundColor = 'red';
// //         number.textContent = hiddenNumber;
// //     }
// // }

// // checks.addEventlistener('click', gameLogic());





// let check = document.querySelector(".check");

// function gamelogic() {
//   let h1 = document.getElementsByTagName('h1')
//   let score = document.querySelector('.score');
//   let number = document.querySelector(".number");
//   let randomnumber = Math.ceil(Math.random() * 5);
//   let guess = Number(document.querySelector(".guess").value);
//   let msg = document.querySelector(".message");
//   let bgrc = document.body;
//   if (guess === randomnumber) {
//     msg.textContent = "correct!";
//     number.textContent = randomnumber;
//     bgrc.style.backgroundColor = "green";
    
//   } else if (guess !== randomnumber) {
//     msg.textContent = "Wrong Answer!";
//     number.textContent = randomnumber;
//     bgrc.style.backgroundColor = "red";
//     score.textContent--;
//   }
//    if(score.value === 0){
//     h1.textContent = 'GAME OVER';
//   }
// }
// check.addEventListener("click", gamelogic);

// //To Reload page

// let reload = document.querySelector(".again");

// reload.addEventListener("click", () => {
//   location.reload();
// });