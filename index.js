let plus=document.querySelector(".plusIcon");

// console.log(plus);






plus.addEventListener("click",()=>{
    let table=document.querySelector("table")
    let tableRow=document.createElement("tr");

    tableRow.classList.add("row")

    let hashi=document.createElement("td");
    hashi.innerText='#';

    hashi.classList.add("hash");


    tableRow.appendChild(hashi);

    
    
    for(let i=0;i<5;i++){
        let input=document.createElement("input")

        input.classList.add("inputs");
        let cell=document.createElement("td");
        cell.appendChild(input);
        tableRow.appendChild(cell);
    
    }

      let cross=document.createElement("td");
      cross.innerHTML='<div><i class="fa-solid fa-xmark"></i></div>'

      cross.classList.add("cross"); 

      tableRow.appendChild(cross);


    
    
    table.appendChild(tableRow);


   let crosses=document.querySelectorAll(".cross");
    crosses.forEach((cross)=>{
       
        cross.addEventListener("click",()=>{
            let parent=cross.parentNode;

            table.removeChild(parent);
            console.log(parent);
            
        })
    })

    
})



let submit=document.querySelector(".Submit")


submit.addEventListener("click",()=>{
    let table=document.querySelector("table");




    let j;
   
    let total=0;
   for(let i=1;i<table.rows.length;i++){
    let amt=1;
    for(j=2;j<table.rows[0].cells.length-2;j++){
        let cellContent =parseFloat(table.rows[i].cells[j].querySelector("input").value)||0;
        console.log(cellContent);
        amt=amt*cellContent;
        // console.log(`Content of Row ${rowIndex + 1}, Cell ${cellIndex + 1}: ${cellContent}`);
    }


    let actualAmt=parseFloat(table.rows[i].cells[2].querySelector("input").value)
    let amount=actualAmt+amt/100 || 0;
    // console.log(amt/100);
    // console.log(amount);

    total=total+amount;

    table.rows[i].cells[j].textContent=amount || 0;

   }


   let t=document.querySelector(".totalInput");
   console.log(t);
   t.value=total;
})










