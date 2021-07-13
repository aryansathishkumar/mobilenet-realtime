function preload()
{

}

function setup() {
  canvas = createCanvas(250, 250);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  video.center()
  classifier = ml5.imageClassifier("MobileNet",modelloaded);
}

function draw()
{
  image(video, 0, 0, 250 ,250);

  setTimeout(function() {
    classifier.classify(video, getresult); 
  }, 5000);
}

function modelloaded()
{
  console.log(ml5.version,"model is loaded");
}

function getresult(error, result)
{
  if(error)
  {
    console.error(error);
  }
  else
  {
    console.log(result);
    result2 = result[0].label;
    document.getElementById("object2").innerHTML = result[0].label;
    document.getElementById("accuracy2").innerHTML = result[0].confidence.toFixed(2)*100 + "%";
  }
}
function know()
{
  window.open("https://www.amazon.in/s?k="+result2+"&dc&ref=a9_sc_1");
}






