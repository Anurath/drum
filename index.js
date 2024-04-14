let alldrums = document.querySelectorAll(".drum").length;

for (let i = 0; i < alldrums; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        let buttonInnerHTML = this.innerHTML;

        switch (buttonInnerHTML) {
            case "w":
                let drumOne = new Audio("sounds/tom-1.mp3");
                drumOne.play();
                break;
            case "a":
                let drumTwo = new Audio("sounds/tom-2.mp3");
                drumTwo.play();
                break;
            case "s":
                let drumThree= new Audio("sounds/tom-2.mp3");
                drumThree.play();
                break;
            case "d":
                let drumFour = new Audio("sounds/tom-4.mp3");
                drumFour.play();
                break;
            case "j":
                let drumFive = new Audio("sounds/snare.mp3");
                drumFive.play();
                break;
            case "k":
                let drumSix = new Audio("sounds/crash.mp3");
                drumSix.play();
                break;
            case "l":
                let drumSeven = new Audio("sounds/kick-bass.mp3");
                drumSeven.play();
                break;
            default:
                console.log("Something was pressed but not button.")
        }
    })
}