let Addbtn = document.querySelector(".Add")
let nextbtn = document.querySelector(".next")
let prevbtn = document.querySelector(".prev")
let h1 = document.querySelector(".h1")
let img = document.querySelector(".img1")
Addbtn.addEventListener("click" , function(){
    Addbtn.innerHTML = "Sending Request..."
    setTimeout(function(){
        Addbtn.innerHTML = "Request send"
    },4000)
})

prevbtn.addEventListener("click" , function(){
    img.setAttribute("src" , "https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")
    h1.innerHTML = "Ujjwal gupta"
} )
nextbtn.addEventListener("click" , function(){
    img.setAttribute("src" , "https://plus.unsplash.com/premium_photo-1658506732542-fab3b94279a9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")
    h1.innerHTML = "Harsh vandana Sharma"
} )

