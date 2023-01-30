

/**     Main page coding     */







document.querySelector(".sellers-login-page").addEventListener("click", () => {
  location.href="sellers-login.html"
 })
 


document.querySelector(".createAccount1").addEventListener("click", () => { 
  location.href = "shoppers-registration.html"
})


  
let logindetails = [] 


function displayData(){
  if(localStorage.getItem('logindetails')){
        logindetails = JSON.parse(localStorage.getItem('logindetails'))
    }
    console.log(logindetails)

}
displayData()




document.querySelector(".login-btn").addEventListener("click", () => { 

let EmailID = document.querySelector(".email").value
let Password = document.querySelector(".password").value
let  emails = logindetails.map(data => data.email)
let passwords = logindetails.map(data => data.password)

if(emails.includes(EmailID)  && passwords.includes(Password)){      
location.href="dashboard1.html"
}
else{
alert("incorrect details")
}
})


    
    




