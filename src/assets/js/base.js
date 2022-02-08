


let transferBtn = document.querySelector(".finaltransfer-btn");
let otpDiv = document.querySelector(".confirm-otp-div");
let amount = document.querySelector(".transfer-amount");
let accountNum = document.querySelector(".account-number")
let bankName = document.querySelector("#text11");
transferBtn.addEventListener("click",(event)=>{
    event.preventDefault();

    if (amount.value === "" || bankName.value === "") {
        alert("enter required fields")
    }
    else{
        transferBtn.dataset.dismiss = "modal"; 
        otpDiv.dataset.toggle = "modal";
   
}
})



