// const textType = document.querySelector(".text")
// console.log(textType);
// window.addEventListener("mousemove",_.throttle (onMouse,500))   
// // _.debounce 

// let count = 0

// function onMouse (event) {
//     console.log(event);
//     count += 1

//     textType.textContent = `kilkist spracuvan funktion ${count}`
// }




// const courses = [
//   { label: "html" },
//   { label: "css" },
//   { label: "java" },
//   { label: "python" },
//   { label: "react" },
//   { label: "java-script" },
//   { label: "node-js" },
//   { label: "scss" },
//   { label: "vite" },
//   { label: "C#" },
//   { label: "C++" },
//   { label: "SQL" },
//   { label: "PHP" },
//   { label: "Pascal" },
//   { label: "Scratch" },
//   { label: "Vue.js" },
//   { label: "Redux" },
// ];

// const listRev = document.querySelector(".list")
// const inpEl = document.querySelector(".input")
// console.log(inpEl);


// const markUpItem = array => {
//     listRev.innerHTML = array.map( ({label})=> {
// return `<li>${label}</li>`
//     } ) .join("")
// }

// inpEl.addEventListener("input", _.debounce(onInp,500, {
//     'leading': false,
//   'trailing': true
// }));

// function onInp(event) {

//     const sergValue = event.target.value.toLowerCase().trim()

//     const filtredCourse = courses.filter(({label}) => {
        
//     return label.toLowerCase().startsWith(sergValue)
    
//     })
// markUpItem(filtredCourse)

// }


// markUpItem(courses)











// console.log( markUpItem(courses));



// повна верси

// const listRev = document.querySelector(".list");
// const inpEl = document.querySelector(".input");
// console.log(inpEl);

// const markUpItem = (array) => {
//   listRev.innerHTML = array.map((item) => {
//       return `<li>${item.label}</li>;`
//     }) .join("");
// };

// inpEl.addEventListener("input", onInp);

// function onInp(event) {
//   const sergValue = event.target.value.toLowerCase().trim();

//   const filtredCourse = courses.filter((item) => {
//     return item.label.toLowerCase().startsWith(sergValue);
//   });

//   markUpItem(filtredCourse);
// }

// markUpItem(courses);





const boxEl = document.querySelector(".box");

let isMove = false;
let count = 0

window.addEventListener("mousedown", () => {
    isMove = true
})
window.addEventListener("mousemove", _.throttle (onMouse,50));
window.addEventListener("mouseup", () => {
    isMove = false
})

function onMouse(event) {
    if (isMove) {
        const x = event.clientX + "px";
        const y = event.clientY + "px";
      
        boxEl.style.left = x;
        boxEl.style.top = y;


        count +=1
        console.log(count);
        
    }
 
}



