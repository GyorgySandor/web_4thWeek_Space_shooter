function create_ship() {
    let space_ship = document.createElement('div');
    space_ship.style.position = "absolute";
    space_ship.style.bottom = "20px";
    space_ship.style.width = "150px";
    space_ship.style.height = "50px";
    space_ship.style.border = "line";
    space_ship.style.backgroundColor = "#d30319";
    space_ship.id = "spaceship";
    space_ship.style.cursor = "crosshair";
    document.body.appendChild(space_ship);


    document.addEventListener('mousemove', move_ship);
    document.addEventListener('click', create_bullet);


    function move_ship(e) {
        let space_ship = document.querySelector("#spaceship");
        space_ship.style.left = e.pageX - 75 + "px";
        space_ship.innerText = e.pageX;
    }

    function create_bullet(e) {
        let bullet = document.createElement('div');
        bullet.classList.add('bullet');
        bullet.style.bottom = '20px';
        document.body.appendChild(bullet);

        bullet.style.left = e.pageX - 75 + "px";
    }


     setInterval(move_bullets, 140);


    function move_bullets() {
        let bullets = document.querySelectorAll('.bullet');

        for (let bullet of bullets) {
            const currentPosition = parseInt(bullet.style.bottom);

            if (currentPosition < 1000) {
                bullet.style.bottom = (currentPosition + 40) + "px";
            } else {
                bullet.remove()
            }
        }
    }


    // for (let i=0; i<13;i++) {
    //     let space_ship_col = `<div class="col" style="background-color:#d30319" id=${i}>${i}</div>`;
    //     space_ship_row.innerHTML += space_ship_col;
//
//
//    }

//    space_ship_row.innerHTML = `<div style="background-color:#d30319" id=ship>ship</div>`


    //   let space_ship_cols = space_ship_row.getElementsByClassName('col');


    // for (let column of space_ship_cols) {
    //     column.style.opacity = "0";
    //     column.addEventListener('mouseover', move);
    //     column.addEventListener('mouseout', move);
    // }

}

//function move(e) {
//   (e.target.style.opacity === "0") ? e.target.style.opacity="100" : e.target.style.opacity = "0";
//}

create_ship();
