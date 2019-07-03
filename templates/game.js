//CREATING VARIABLE TO INCREASE THE SCORE
var i = 0;
i++;

//SETTING UP THE ONDRAGSTART EVENT DATA/IMAGES THAT I WANT TO MOVE
function dragStart1(event) {
  event.dataTransfer.setData("text1", event.target.id);
}

function dragStart2(event) {
  event.dataTransfer.setData("text2", event.target.id);
}

function dragStart3(event) {
  event.dataTransfer.setData("text3", event.target.id);
}

//PREVENTING DEFAULT BROWSER SETTINGS SO IT WOULDNT ACT WEIRD
function dragOver1(event) {
  event.preventDefault();
}

function dragOver2(event) {
  event.preventDefault();
}

function dragOver3(event) {
  event.preventDefault();
}

//GETTING THE DATA/IMAGES I NEED WHEN IT IS BEING DROPPED ON THE DROP AREAS
function onDrop4(event) {
  var data = event.dataTransfer.getData("text1");
  event.target.appendChild(document.getElementById(data));
  dropArea1.innerHTML = "<img src='cat.png'\>";
  score.innerHTML = i++;
  //changing the style back to normal after dragging is done
  dropArea1.style.background = "";
  dropArea1.style.border = "";
}

function onDrop5(event) {
  var data = event.dataTransfer.getData("text2");
  event.target.appendChild(document.getElementById(data));
  dropArea2.innerHTML = "<img src='dog.png'\>";
  score.innerHTML = i++;
  //changing the style back to normal after dragging is done
  dropArea2.style.background = "";
  dropArea2.style.border = "";
}

function onDrop6(event) {
  var data = event.dataTransfer.getData("text3");
  event.target.appendChild(document.getElementById(data));
  dropArea3.innerHTML = "<img src='rocket.png'\>";
  score.innerHTML = i++;
  //changing the style back to normal after dragging is done
  dropArea3.style.background = "";
  dropArea3.style.border = "";
}

//PREVENTING DEFAULT BROWSER SETTINGS FROM ACTING WEIRD
function onDrop1(event) {
  event.preventDefault();
}

function onDrop2(event) {
  event.preventDefault();
}

function onDrop3(event) {
  event.preventDefault();
}

//SETTING UP A FUNCTION FOR "SUBMIT" BUTTON TO ALERT CONGRATS MESSAGE
function submitAnsw() {
  if (i > 3) {
    alert("Congratulations! You know the main human organs!");
  } else {
    alert("You are very close! Don't give up!");
  }
}

//CHANGING THE STYLE OF THE DROP AREAS ONCE THE IMAGE IS BEING DRAGGED ON THEM
function dragEnter1(event) {
  event.preventDefault();
  dropArea1.style.background = "lightblue";
  dropArea1.style.border = "3px solid black";
}

function dragEnter2(event) {
  event.preventDefault();
  dropArea2.style.background = "lightblue";
  dropArea2.style.border = "3px solid black";
}

function dragEnter3(event) {
  event.preventDefault();
  dropArea3.style.background = "lightblue";
  dropArea3.style.border = "3px solid black";
}

//CHANGING THE STYLE OF DROPAREAS ONCE THE DRAGGABLE IMAGE LEAVES THE DROP AREA
function dragLeave1(event) {
  event.preventDefault();
  dropArea1.style.background = "lightskyblue";
  dropArea1.style.border = "3px solid #666666";
}

function dragLeave2(event) {
  event.preventDefault();
  dropArea2.style.background = "lightskyblue";
  dropArea2.style.border = "3px solid #666666";
}

function dragLeave3(event) {
  event.preventDefault();
  dropArea3.style.background = "lightskyblue";
  dropArea3.style.border = "3px solid #666666";
}