// start slingin' some d3 here.
var gameBoard = d3.select("body").append("svg").attr("width",800).attr("height",400);
var enemies = gameBoard.append("circle").attr("cx",20).attr("cy",20).attr("r",20).attr("fill","blue");