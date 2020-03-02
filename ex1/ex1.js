let p1 = document.getElementById("input1");
let p2 = document.getElementById("input2");


document.addEventListener("DOMContentLoaded", (e) =>
  {
    document.querySelector("#validate").addEventListener("click", (e) =>
      {
        if (p1.value.length < 8 || p2.value.length < 8)
          {
            alert("Your password must be at least eight characters long.");
            document.querySelector("#output").innerText = ""
          }

        if (p1.value != p2.value)
          {
            alert("The fields do not match.");
            document.querySelector("#output").innerText = ""
          }

        else if (p1.value == p2.value && p1.value.length >7)
          {
            document.querySelector("#output").innerText = "This password is validated."
          }
      }

    );

  }

);
