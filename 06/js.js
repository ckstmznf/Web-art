window.addEventListener("scroll", ()=>{
    let titles = document.querySelectorAll(".title")
    titles.forEach(e=>{
        const wh = window.innerHeight

        const et = e.getBoundingClientRect().top
        const elementHeight = e.clientHeight

        // console.log(`${et} ${wh * 4 / 5 } ${et === wh * 4 / 5}`);
        // console.log(window.innerHeight);

        if(et < wh * 4 / 7){
            e.classList.add("show")
        }   else {
            e.classList.remove("show")
        }
    })

    console.log("===========");
})