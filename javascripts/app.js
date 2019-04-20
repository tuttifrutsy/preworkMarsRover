// Rover Object Goes Here

let rover = {
  direction: "N",
  positionX: 0,
  positionY: 0,
  travelLog: [],
};


function turnLeft(rover) {
  if (rover.direction === "N") {
    rover.direction = "W";
  } else if (rover.direction === "W") {
    rover.direction = "S";
  } else if (rover.direction === "S") {
    rover.direction = "E";
  } else if (rover.direction === "E") {
    rover.direction = "N";
  }
  console.log("turnLeft was called! Current direction is " + rover.direction);

}

function turnRight(rover) {
  if (rover.direction === "N") {
    rover.direction = "E";
  } else if (rover.direction === "E") {
    rover.direction = "S";
  } else if (rover.direction === "S") {
    rover.direction = "W";
  } else if (rover.direction === "W") {
    rover.direction = "N";
  }
  console.log("turnRight was called! Current direction is " + rover.direction);
}


function moveForward(rover) {
  if (rover.direction === "N" && rover.positionY <= 0 || rover.positionY > 9) {
    console.log("Rover reached limit grid");
  }
  else if (rover.direction === "N") {
    rover.positionY -= 1;
  }
  else if (rover.direction === "E" && rover.positionX < 0 || rover.positionX > 9) {
    console.log("Rover reached limit grid");
  }
  else if (rover.direction === "E") {
    rover.positionX += 1;
  }
  else if (rover.direction === "S" && rover.positionY < 0 || rover.positionY > 9) {
    console.log("Rover reached limit grid");
  }
  else if (rover.direction === "S") {
    rover.positionY += 1;
  }
  else if (rover.direction === "W" && rover.positionX < 0 || rover.positionX > 9) {
    console.log("Rover reached limit grid");
  }
  else if (rover.direction === "W") {
    rover.positionX -= 1;
  }
  console.log("moveForward was called " + rover.positionY, rover.positionX);

}


function moveBackward(rover) {

  if (rover.direction === "N") {
    rover.positionY += 1;
  }
  if (checkObstacle(travel));
  else if (rover.direction === "N" && rover.positionY < 0 || rover.positionY > 9) {
    console.log("Rover reached limit grid");
  }
  if (rover.direction === "S") {
    rover.positionY -= 1;
  }
  if (checkObstacle(travel));
  else if (rover.direction === "S" && rover.positionY < 0 || rover.positionY > 9) {
    console.log("Rover reached limit grid");
  }
  if (rover.direction === "E") {
    rover.positionY -= 1;
  }
  if (checkObstacle(travel));
  else if (rover.direction === "E" && rover.positionX < 0 || rover.positionX > 9) {
    console.log("Rover reached limit grid");
  }
  if (rover.direction === "W") {
    rover.positionY += 1;
  }
  if (checkObstacle(travel));
  else if (rover.direction === "W" && rover.positionX < 0 || rover.positionX > 9) {
    console.log("Rover reached limit grid");

  }
  console.log("moveBackward was called " + rover.positionY, rover.positionX);

}



function commandRover(rover) {
  let trip = prompt("Insert commands to move Rover: f, r, l or b")
  for (let i = 0; i < trip.length; i++) {
    if (trip[i] === "f") {
      moveForward(rover)
    }
    else if (trip[i] === "r") {
      turnRight(rover)
    }
    else if (trip[i] === "l") {
      turnLeft(rover)
    }
    else if (trip[i] === "b") {
      moveBackward(rover)
    }
    else {
      console.log("Invalid command");
    }
    console.log(rover.travelLog);
  }
}

const grid = [
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null]
  [null, null, null, null, null, null, null, null, null, null]
];


function locationRover() {
  var location = [rover.positionY, rover.positionX];
  rover.travelLog.push(location);
  console.log("Rover`s is here: " + rover.travelLog);
}


function obstacles() {
  for (j = 0; j < 5; j++) {
    let randomNum = Math.floor(Math.random() * 6) + 1;
    let randomNum2 = Math.floor(Math.random() * 6) + 1;
    grid[randomNum][randomNum2] = "O";
  }
}

obstacles();

function checkObstacle(travel) {
  if (travel === "O") {
    console.log("Rover Found an Obstacle, use b to go back");
    return false;
  } else {
    return true;
  }
}


console.log(commandRover(rover));
console.log(moveForward(rover));
console.log(locationRover(rover));
console.log(checkObstacle());
