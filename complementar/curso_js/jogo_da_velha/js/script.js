let x = document.querySelector(".x");
let o = document.querySelector(".o");
let boxes = document.querySelectorAll(".box");
let buttons = document.querySelectorAll("#buttons-container button");
let messageContainer = document.querySelector("#message");
let messageText = document.querySelector("#message p");
let secondPlayer;

let player1 = 0;
let player2 = 0;

for (let i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener("click", function () {
    let el = checkEl(player1, player2);

    if (this.childNodes.length == 0) {
      let cloneEl = el.cloneNode(true);

      this.appendChild(cloneEl);

      if (player1 == player2) {
        player1++;
      } else {
        player2++;
      }

      checkWinConditional();
    }
  });
}
function checkEl(player1, player2) {
  if (player1 == player2) {
    el = x;
  } else {
    el = o;
  }
  return el;
}
function checkWinConditional() {
  let b1 = document.getElementById("block-1");
  let b2 = document.getElementById("block-2");
  let b3 = document.getElementById("block-3");
  let b4 = document.getElementById("block-4");
  let b5 = document.getElementById("block-5");
  let b6 = document.getElementById("block-6");
  let b7 = document.getElementById("block-7");
  let b8 = document.getElementById("block-8");
  let b9 = document.getElementById("block-9");

  //horizontal
  if (
    b1.childNodes.length > 0 &&
    b2.childNodes.length > 0 &&
    b3.childNodes.length > 0
  ) {
    let b1Child = b1.childNodes[0].className;
    let b2Child = b2.childNodes[0].className;
    let b3Child = b3.childNodes[0].className;
  }

  if (b1Child == "x" && b2Child == "x" && b3Child == "x") {
    console.log("x venceu");
  } else if (b1Child == "o" && b2Child == "o" && b3Child == "o") {
    console.log("o venceu");
  }
  // winHorizontal(b1, b2, b3);
  // winHorizontal(b4, b5, b6);
  // winHorizontal(b7, b8, b9);
}

// function winHorizontal(bA, bB, bC) {
//   if (
//     bA.childNodes.length > 0 &&
//     bB.childNodes.length > 0 &&
//     bC.childNodes.length > 0
//   ) {
//     let bAChild = bA.childNodes[0].cloneName;
//     let bBChild = bB.childNodes[0].cloneName;
//     let bCChild = bC.childNodes[0].cloneName;
//   }

//   if (bAChild == "x" && bBChild == "x" && bCChild == "x") {
//     console.log("x venceu");
//   } else if (bAChild == "o" && bBChild == "o" && bCChild == "o") {
//     console.log("o venceu");
//   }
// }
