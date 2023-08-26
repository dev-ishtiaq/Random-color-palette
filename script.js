const cont = document.querySelector(".container")
const refB = document.querySelector(".refreshBtn");
const maxPal = 32;

const genPt = () => {
    cont.innerHTML = "";
for (let i = 0; i < maxPal; i++) {
    let ranX = Math.floor(Math.random() * 0xffffff).toString(16);
    ranX = `#${ranX.padStart(6, "0")}`;
    console.log(ranX);

    const color = document.createElement("li");
    color.classList.add("color");
    color.innerHTML = `<div class="rect-box" style="background: ${ranX}"></div>
    <span class="hex-value">${ranX}</span>`;

    color.addEventListener("click", () => copyColor(color, ranX));
    cont.appendChild(color);
    }  
}
genPt();

// const copyColor = (elem, hexV) => {
//     const colorElement = elem.querySelector(".hex-value");

//     navigator.clipboard.writeText(hexV).then(() => {
//         colorElement.innerText = "Copied";
//         setTimeout(() => colorElement.innerText = hexV, 1000);
//     }).catch(() => alert("Faild to copy the color!"))
// }
const copyColor = (elem, hexVal) => {
    const colorElement = elem.querySelector(".hex-value");
    // Copying the hex value, updating the text to copied, 
    // and changing text back to original hex value after 1 second
    navigator.clipboard.writeText(hexVal).then(() => {
        colorElement.innerText = "Copied";
        setTimeout(() => colorElement.innerText = hexVal, 1000);
    }).catch(() => alert("Failed to copy the color code!")); // showing alert if color can't be copied
}

refB.addEventListener("click", genPt);