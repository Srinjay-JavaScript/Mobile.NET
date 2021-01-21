Webcam.set({
  width: 330,
  height: 300,
  img_format: "png",
  png_quality: 100,
  dest_width: 470,
  dest_height: 350
})
Webcam.attach("#liveCam");

function takePic(){
   Webcam.snap(function(pic){
      document.getElementById("capturedPic").innerHTML = "<img id='takenPic' src='" + pic + "' width='310' height='270' style='margin-top:10px; border-radius:15px;'>";
   });
}


    
