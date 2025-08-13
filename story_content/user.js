function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6C0y2CPh5Gw":
        Script1();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSongku');
audio.src="backsound.mp3";
audio.load();
audio.play();
audio.volume=0.3;
}

