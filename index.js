const inputDetail = document.querySelector(".input_detail");
const inputSubmit = document.querySelector("#submit_btn");

inputDetail.addEventListener("submit", (event) => {
    event.preventDefault();
});

inputSubmit.addEventListener("click", (event) => {

    const inputTask=document.querySelector(".task");
    console.log(inputTask.value)
    const inputPriority=document.querySelector(".input_priority");
    const searchPriority=document.querySelector(".search_priority");

    const outputList=document.querySelector(".output_list");

    const row=document.createElement("li");
    row.innerText=inputTask.value;
    outputList.appendChild(row);

    const deleteButton=document.createElement("button");
    deleteButton.innerText="Delete";
    row.appendChild(deleteButton);

    row.classList.add("text_li");
    deleteButton.classList.add("button_del");

    if(inputPriority.value=="High Priority")
    {
        row.classList.add("red");
    }
    if(inputPriority.value=="Medium Priority")
    {
        row.classList.add("yellow");
    }
    if(inputPriority.value=="Low Priority")
    {
        row.classList.add("green");
    }

    const all=document.querySelectorAll(".text_li");
    console.log(all);
    
    const highPriority= document.querySelectorAll(".red");
    console.log(highPriority);

    const midPriority=document.querySelectorAll(".yellow");
    console.log(midPriority)

    const lowPriority=document.querySelectorAll(".green");
    console.log(lowPriority)

    if(searchPriority.value=="All")
    {
        for(let i=0;i<all.length;i++)
        {
            all[i].classList.remove("display_none");
            row.remove();
        }
    }

    if(searchPriority.value=="High Priority")
    {
        for(let i=0;i<lowPriority.length || i<midPriority.length;i++)
        {
            console.log(highPriority[i])
            midPriority[i].classList.add("display_none");
            lowPriority[i].classList.add("display_none");
            highPriority[i].classList.remove("display_none");
            row.remove();
        }
    }
    if(searchPriority.value=="Medium Priority")
    {
        for(let i=0;i<highPriority.length || i<lowPriority.length;i++)
        {
            midPriority[i].classList.remove("display_none");
            lowPriority[i].classList.add("display_none");
            highPriority[i].classList.add("display_none");
            row.remove()
        }
    }
    if(searchPriority.value=="Low Priority")
    {
        for(let i=0;i<highPriority.length || i<midPriority.length;i++)
        {
            midPriority[i].classList.add("display_none");
            lowPriority[i].classList.remove("display_none");
            highPriority[i].classList.add("display_none");
            row.remove()
        }
    }

    deleteButton.addEventListener("click",(event)=>{
        row.remove();
    })
})