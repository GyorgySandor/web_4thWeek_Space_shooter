var i = 0;
function allowDrop(allowdropevent) {
    allowdropevent.preventDefault();
}

function drag(dragevent) {
    dragevent.dataTransfer.setData("image", dragevent.target.id);

}
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function drop(dropevent) {
    dropevent.preventDefault();
    const data = dropevent.dataTransfer.getData("image");
    const imageClass = document.getElementById(data).classList;
    const imageClasses = Array.from(imageClass);
    const dropzoneClasses = dropevent.target.classList;
    const dropzoneArray = Array.from(dropzoneClasses);
    let theScore = document.querySelector(".theScore");
    if (dropzoneArray.includes(imageClasses[1])) {
        dropevent.target.appendChild(document.getElementById(data));
        dropevent.target.style.backgroundColor= "#268a16";
        theScore.innerHTML = `Score: ` + i++;
        await sleep(1500);
        }
    else {
        theScore.innerHTML =`Score: ` + i--;
        dropevent.target.style.backgroundColor= "#ff1a1a";
        await sleep(1500);
    }
    dropevent.target.style.backgroundColor= "lightblue";
}

function nextlvl() {
  if (i > 6) {
    alert("Congratulations! You can go to the next level!");
  }
  else {
    alert("You are very close! Don't give up!");
    location.reload();
  }
}
