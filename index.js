 let num= 0
function takeANumber(katzDeli){
  num++
  return (`You are number ${num} in line.`);
  katzDeli.push()
}



function nowServing(katzDeli){
if (katzDeli.length === 0){
  return 'There is nobody waiting to be served!'}
  else {var name=katzDeli[0]
   katzDeli.splice(0,1)
  return (`Currently serving ${name}.`)
 
}}

function currentLine(katzDeli){
  var line=[];
  if (katzDeli.length===0){
    return ("The line is currently empty.")}
  else{
  for(var i=0;i<katzDeli.length;i++){
  line.push(i+1+'. '+ katzDeli[i])}
  return('The line is currently: '+line.join(', '))
  }}