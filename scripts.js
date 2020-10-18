// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener("load", function(event) {


    let takeOffButton = document.getElementById("takeoff");
    let landButton = document.getElementById("landing");
    let upButton = document.getElementById("upButton");
    let downButton = document.getElementById("downButton");
    let rightButton = document.getElementById("rightButton");
    let leftButton = document.getElementById("leftButton");

    takeOffButton.addEventListener("click", function(event){
    let shuttleConfirm = window.confirm("Confirm that the shuttle is ready for takeoff.");
    if(shuttleConfirm){
        flightStatus.innerHTML = "Shuttle in flight.";
        shuttleBackground.style.backgroundColor = "blue";
        spaceShuttleHeight.innerHTML = "10,000";
    }
});
    landButton.addEventListener("click", function(event){
        window.alert("The shuttle is landing. Landing gear engaged.");
        
            flightStatus.innerHTML = "The shuttle has landed.";
            shuttleBackground.style.backgroundColor = "green";
            spaceShuttleHeight.innerHTML = "0";
        });    
            missionAbort.addEventListener("click", function (event){
                let missionAbortConfirm = window.confirm ("Confirm that you want to abort the mission.");
                if(missionAbortConfirm){
                    flightStatus.innerHTML = "Mission Aborted.";
                    shuttleBackground.style.backgroundColor = "green";
                    spaceShuttleHeight.innerHTML = "0";
                }
            });

            leftButton.addEventListener("click", function(event){
                rocket.style.marginLeft = "-10px";
                
            });

            rightButton.addEventListener("click", function(event){
                rocket.style.marginLeft = "10px";
                
            });

            upButton.addEventListener("click", function(event){
                rocket.style.marginTop = "-10px";
                 spaceShuttleHeight.innerHTML = parseInt(spaceShuttleHeight.innerHTML) + 10000;
            });

            downButton.addEventListener("click", function(evnet){
                rocket.style.marginTop = "10px";
                spaceShuttleHeight.innerHTML = parseInt(spaceShuttleHeight.innerHTML) = 10000;
            });

        
        });
