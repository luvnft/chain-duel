var players = ["Francis","Pedro","Hal","Nakamoto"];


var a = document.getElementById("bracket4players");

// It's important to add an load event listener to the object,
// as it will load the svg doc asynchronously
a.addEventListener("load",function(){
  // get the inner DOM of alpha.svg
  var svgDoc = a.contentDocument;


  /* GAME LOGIC */

  name(svgDoc,"G1_P1", players[0]);
  name(svgDoc,"G1_P2", players[1]);
    highLight(svgDoc,"G1_P1", players[0]);
  name(svgDoc,"G2_P1", players[2]);
  name(svgDoc,"G2_P2", players[3]);
    highLight(svgDoc,"G2_P2", players[3]);

  name(svgDoc,"G3_P1", players[0]);
  name(svgDoc,"G3_P2", players[3]);
      highLight(svgDoc,"G3_P2", players[3]);
      highLight(svgDoc,"Winner", players[3]);

}, false);


function highLight(svgDoc,id, name){
  svgDoc.getElementById(id+'_name').textContent = name;
  svgDoc.getElementById(id+'_name').style.fill = "#000";
  svgDoc.getElementById(id+'_rect').style.fill = "#fff";
  svgDoc.getElementById(id+'_path').style.opacity = 1;
  svgDoc.getElementById(id+'_path').style.strokeWidth = 2;
}


function name(svgDoc,id, name){
  svgDoc.getElementById(id+'_name').textContent = name;
}
