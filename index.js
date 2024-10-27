const winneranounce = () =>{
    if (dice_number1 > dice_number2) {
        let result = document.querySelector("h3");
        result.innerHTML = "player 1 wins"
    }
    else if(dice_number2 > dice_number1){
        document.querySelector("h3").innerHTML = "player 2 wins";
    }
    else{
        document.querySelector("h3").textContent = "It is a draw";
    }

}
let dice_number1 = Math.floor(Math.random() * 6) + 1;
let dice_number2 = Math.floor(Math.random() * 6) + 1;

const refresh = () =>{
    dice_number1 = Math.floor(Math.random() * 6) + 1;
    dice_number2 = Math.floor(Math.random() * 6) + 1;
    
}

const scoreholder = () =>{
    let score1 = document.getElementById('score1');
    let score2 = document.getElementById('score2');
    
    if (document.getElementById("the_winner").innerHTML == "player 1 wins"){
        score1.textContent = parseInt(score1.textContent) + 1;
    }
    else if (document.getElementById("the_winner").innerHTML == "player 2 wins"){
        score2.textContent = parseInt(score2.textContent) + 1;
    }
    

    if(parseInt(score1.textContent) == 10){
        document.getElementById("the_winner").innerHTML = 'Game over!! the winner is player 1';
        setTimeout(function() {
            location.reload();
        }, 4000)
        
    }
    else if (parseInt(score2.textContent) == 10) {
        document.getElementById("the_winner").innerHTML = 'Game over!! the winner is player 2';
        setTimeout(function(){
            location.reload();
        },4000)
        
    }
 
}

document.getElementById('refreshButton').addEventListener('click', function() {
      
    let dice_image = "dice" +dice_number1+".png";
    let image_src = "images/" + dice_image
    let image1 = document.getElementsByClassName("image1")[0];
    image1.setAttribute("src", image_src);


    
    let dice_image2 = "dice"+dice_number2+".png";
    let image_src2 = "images/"+dice_image2
    let image2 = document.getElementsByClassName("image2")[0];
    image2.setAttribute("src", image_src2);

    winneranounce();
    refresh();
    scoreholder();
});
