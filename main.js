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
brain_finder = ml5.imageClassifier("MobileNet", working);
function working(){
   console.log("Model Loaded !!!☺");
  
}

function check(){
   var pic = document.getElementById("takenPic");
   brain_finder.classify(pic, result);
   
}

function result(error, output){
  if (error){
     console.error(error);
  }
  else{
     console.log(output);
     document.getElementById("output").innerHTML = output[0].label + ", " + output[1].label + ", " + output[2].label;
  }
}





    
