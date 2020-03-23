let pRedValue = parseInt(document.querySelector("#pRed").value);
let pGreenValue = parseInt(document.querySelector("#pGreen").value);
let pBlueValue = parseInt(document.querySelector("#pBlue").value);

let bRedValue = parseInt(document.querySelector("#bRed").value);
let bGreenValue = parseInt(document.querySelector("#bGreen").value);
let bBlueValue = parseInt(document.querySelector("#bBlue").value);

let pSubmit = document.querySelector("#pSubmit");
let bSubmit = document.querySelector("#bSubmit");



document.addEventListener("DOMContentLoaded", (e) =>
{

    pSubmit.addEventListener("click", (e) =>
    {
      pRedValue = parseInt(document.querySelector("#pRed").value);
      pGreenValue = parseInt(document.querySelector("#pGreen").value);
      pBlueValue = parseInt(document.querySelector("#pBlue").value);

      p1.style.backgroundColor = 'rgb(' + pRedValue + ',' + pGreenValue + ',' + pBlueValue + ')';
    }

  );

  bSubmit.addEventListener("click", (e) =>
  {
    bRedValue = parseInt(document.querySelector("#bRed").value);
    bGreenValue = parseInt(document.querySelector("#bGreen").value);
    bBlueValue = parseInt(document.querySelector("#bBlue").value);

    body.style.backgroundColor = 'rgb(' + bRedValue + ',' + bGreenValue + ',' + bBlueValue + ')';
  }

);

}
);
