Webcam.set({
    width: 320,
    height: 240,
    image_format: 'jpeg',
    jpeg_quality: 90
 });
 Webcam.attach( '#webcam' );

 function take_pic(){
    Webcam.snap( function(data_uri) {
        // display results in page
       document.getElementById('image').innerHTML = 
         '<img src="'+data_uri+'"/>';
    } );
 
   //for(var i=1; i<=20; i++){
        //Webcam.snap( function(data_uri) {
            // display results in page
           //document.getElementById('image').innerHTML += 
            // '<img id="selfie'+i+'" src="'+data_uri+'"/>';
        //} );
   // }
    
 } 

  console.log(ml5.version);
 classifier= ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/my0LBqGm4/model.json", model_ready);

function model_ready(){
    console.log("model is ready");
    window.alert("model is ready");
}