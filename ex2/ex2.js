let image = document.getElementById("picture");
let imageCount = 1;

document.addEventListener("DOMContentLoaded", (e) =>
  {
    image.src = "img1.jpg";

    document.getElementById("forward").addEventListener("click", (e) =>
      {
        if (imageCount < 5)
        {
          imageCount++;
        }
        else
        {
          imageCount = 1;
        }

      let tempstring = "img" + imageCount + ".jpg";
      image.src = tempstring;
    });


    document.getElementById("back").addEventListener("click", (e) =>
      {
        if (imageCount > 1)
        {
          imageCount--;
        }
        else
        {
          imageCount = 5;
        }

      let tempstring = "img" + imageCount + ".jpg";
      image.src = tempstring;
      }



  );



  }
);
