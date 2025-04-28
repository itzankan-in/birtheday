let x = document.getElementById("myAudio"); 

let heart= setInterval(() => {
    let imgArr= Array.from(document.getElementsByClassName("c"))
    if(imgArr.length != 50) {
        // console.log(imgArr.length)
     let img = document.createElement("img");
     img.src = './img/hart.png'
     img.setAttribute("class", "c")
     let rint = (Math.floor(Math.random()* 100))
     let rint2 = (Math.floor(Math.random()* 100) + 10)
     let rint3 = (Math.floor(Math.random()* 40)  + 1)
     let r4 = Math.floor(Math.random()* 2)
    //  console.log(r4)
     img.style.left = rint+"%"
     img.style.height = rint2+"px"
     img.style.width = rint2+"px"
    //  r4 === 0? img.style.rotare = -`${rint3}deg` : img.style.rotare = `-${rint3}deg`;
     document.body.appendChild(img)
    }
 }, 500);
// setTimeout(() => {
//     clearInterval("heart")
// }, 5000);
 function whoose() {
   
    x.play()
    let box = document.querySelector(".box-cover")
    box.classList.add("huv")
    box.style.cursor = "default"
    let all = document.querySelector(".all")
    setTimeout(() => {
        all.removeChild(box)
    }, 3000);


}
