var bottonOne = document.getElementsByClassName('extra-info__container__button__one')[0];
var bottonTwo = document.getElementsByClassName('extra-info__container__button__two')[0];
var bottonThree = document.getElementsByClassName('extra-info__container__button__three')[0];


bottonOne.addEventListener("click", paintOne);
bottonTwo.addEventListener("click", paintTwo);
bottonThree.addEventListener("click", paintThree);

function paintOne(){
    var image = document.getElementsByClassName('extra-info__container__image')[0].src = "./images/chapter-image-one.png";

}

function paintTwo(){
    var image = document.getElementsByClassName('extra-info__container__image')[0].src = "./images/chapter-image-two.png";

}

function paintThree(){
    var image = document.getElementsByClassName('extra-info__container__image')[0].src = "./images/chapter-image-three.png";

}
