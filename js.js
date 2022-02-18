const workList = [
    {
        id : "01",
        title : "글래스 모피즘"
    },
    {
        id : "02",
        title : "박스 에니메이션"
    },
    {
        id : "03",
        title : "감각적인 글 목록"
    },
    {
        id : "04",
        title : "명함"
    },
    {
        id : "05",
        title : "버튼 배경 애니메이션"
    },
    {
        id : "06",
        title : "스크롤에 반응하는 애니메이션"
    },
]


let workListTable = document.querySelectorAll(".work-list")[0]

workList.forEach(e => {
    let workTitle = document.createElement("div")
    workTitle.classList.add("work-title")
    workTitle.innerText = `${e.id}. ${e.title}`

    workTitle.addEventListener("click", ()=>{
        window.location.href = `./${e.id}`
    })

    workListTable.appendChild(workTitle)
})