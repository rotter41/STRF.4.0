let exPicker, x = 0, exUp = 0, stopValue = false, j


async function start()
{
    const exercises = [
        { name: "Jaw Release", instruction: "Open your mouth as wide as possible, as if you're chewing, then slowly close it." },
        { name: "Chin Lift", instruction: "Lift your chin towards the sky, press your tongue against the roof of your mouth, and hold for a few seconds." },
        { name: "Neck Stretch", instruction: "Tilt your head towards your chest and slowly rotate your head from side to side." },
        { name: "Jaw Tightening", instruction: "Close your mouth tightly and flex your jaw, hold for a few seconds." },
        { name: "Cheek Puff", instruction: "Puff out your cheeks and hold the air in both sides." },
        { name: "Cheek Lift", instruction: "Lift your cheekbones using your eyebrows and smile without opening your mouth." },
        { name: "Fish Face", instruction: "Make a fish face by sucking in your cheek muscles and pulling your lips to your teeth." },
        { name: "Tongue Roll", instruction: "Roll your tongue into a tube shape and hold it inside your mouth." },
        { name: "Forehead Smoothing", instruction: "Place your fingers on your forehead and gently move them sideways to smooth the skin." },
        { name: "Eye Lift", instruction: "Look upwards and gently pull the skin under your eyes upwards." },
        { name: "Eye Circles", instruction: "Close your eyes and make circular movements with them in both directions to release tension." },
        { name: "Eyebrow Push", instruction: "Place your fingers on your eyebrows and gently push them down while trying to raise your eyebrows." },
        { name: "Lip Pucker", instruction: "Pucker your lips as if you're preparing to give a kiss." },
        { name: "Smile Stretch", instruction: "Lift the corners of your mouth towards your ears and hold the position." },
        { name: "Lip Pull", instruction: "Pull your lower lip downwards, as if creating a sad face expression." },
        { name: "Lip Roll", instruction: "Fold your lips inward and try to hold them in this position." },
        { name: "Jaw Clenches", instruction: "Clench your jaw and press your teeth together gently, then relax." },
        { name: "Jaw Side Push", instruction: "Move your lower jaw to the left and hold, then to the right and hold." },
        { name: "Under Jaw Lift", instruction: "Place your fist under your jaw and gently push upward while resisting with your jaw muscles." },
        { name: "Side Jaw Stretch", instruction: "Place your hand on one side of your jaw and push against it while resisting the movement." }
    ];
    let lastEx = -1
    document.getElementById("stopBT").addEventListener("click", () =>{
        stopValue = true
    })
    document.getElementById("nextBT").addEventListener("click", () =>{
        j = 1
    })
    for(let i = 0; i <= 9; i++) {
        document.getElementById("pngDiv").style.display = "block"
        console.log("exercise " + (i))
        do{
        exPicker = Math.floor(Math.random() * 4) 
        }while(exPicker == lastEx)

        console.log(exPicker)
        console.log(exUp)
        if (i <= 2) { // chin category
            document.getElementById("TextEx").textContent = exercises[exPicker+exUp].name;
            document.getElementById("INFO").textContent = exercises[exPicker+exUp].instruction;
        }

        else if (i > 2 && i <= 4) {
            document.getElementById("TextEx").textContent = exercises[exPicker+exUp].name;
            document.getElementById("INFO").textContent = exercises[exPicker+exUp].instruction;

        }

        else if (i > 4 && i <= 6) {
            document.getElementById("TextEx").textContent = exercises[exPicker+exUp].name;
            document.getElementById("INFO").textContent = exercises[exPicker+exUp].instruction;

        }

        else if (i > 6 && i <= 8) {
            document.getElementById("TextEx").textContent = exercises[exPicker+exUp].name;
            document.getElementById("INFO").textContent = exercises[exPicker+exUp].instruction;

        }

        else if (i > 8 && i <= 10) {
            document.getElementById("TextEx").textContent = exercises[exPicker+exUp].name;
            document.getElementById("INFO").textContent = exercises[exPicker+exUp].instruction;

        }
        else console.log("error in main exercise loop")

        const exImg = document.createElement("img")
        exImg.src = "pic" + (Number(exPicker+exUp)) + ".png" 
        exImg.classList.add("pictures")

        document.getElementById("pngDiv").appendChild(exImg)

        for (j = 60; j !=0; j--) {
            if (stopValue == true){ await waitForClick(); stopValue = !stopValue; document.getElementById("Timer").style.backgroundColor = "red";}
            document.getElementById("Timer").style.backgroundColor = "white";

            document.getElementById("Timer").textContent = j;
            await sleep(1000)
        }

        document.getElementById("pngDiv").removeChild(exImg)
        document.getElementById("pngDiv").style.display = "none"

        if(i != 9){
            document.getElementById("TextEx").textContent = "REST"
            document.getElementById("INFO").textContent = "Take a deep breath and relax for a moment before starting the next exercise!"
        }

        for (j = 20; j !=0; j--) {
            if (stopValue == true){ await waitForClick(); stopValue = !stopValue; document.getElementById("Timer").style.backgroundColor = "red";}
            document.getElementById("Timer").style.backgroundColor = "white";
            document.getElementById("Timer").textContent = j;
            await sleep(1000)
        }
        if(i%2 == 1) exUp = exUp+4
        lastEx = exPicker
    }
    
    console.log("END")
    document.getElementById("TextEx").textContent = "KONEC"
    document.getElementById("Timer").style.display = "none"
    document.getElementById("INFO").style.display = "none"
    
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function waitForClick() {
    return new Promise(resolve => {
        stopValue = !stopValue
        document.getElementById("Timer").style.backgroundColor = "red"
        document.getElementById("stopBT").addEventListener('click', () => {
        resolve();
        });
    });
  }
  
start()
