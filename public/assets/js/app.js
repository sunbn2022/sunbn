let isDebit;
let isCredit;

let transactionBtn = document.querySelector(".transaction-text");
let transactionDiv = document.querySelector(".transactions")
let arrowIcon = document.querySelector(".arrow-up-icon")
transactionBtn.addEventListener("click",function () {
    transactionDiv.classList.toggle("show")
    arrowIcon.classList.toggle("show")
})

let transactionCredit = document.getElementsByClassName("transactions-credit");
let transactionDebit = document.getElementsByClassName("transactions-debit")
console.log(transactionCredit.length);
console.log(transactionDebit.length);



if (transactionCredit[0].textContent === "" && transactionCredit[1].textContent === "" && transactionCredit[2].textContent === "" && transactionCredit[3].textContent === "") {
     
    isCredit = false
 }
 else{
     isCredit = true;
 }



  
    if (transactionDebit[0].textContent === "" && transactionDebit[1].textContent === "" && transactionDebit[2].textContent === "" && transactionDebit[3].textContent === "") {
     
       isDebit = false
    }
    else{
        isDebit = true;
    }
  

    if (!isCredit && !isDebit) {
        transactionDiv.textContent = "No recent transaction";
    }




console.log(isDebit);
console.log(isCredit);
