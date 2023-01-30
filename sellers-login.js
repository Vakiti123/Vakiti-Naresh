
document.querySelector(".shoppers-login-page").addEventListener("click", () => { 
    location.href = "shoppers-login.html"
  })

  document.querySelector(".createAccount1").addEventListener("click", () => { 
    location.href = "sellers-registration.html"
  })




    
  let logindetails = [] 


  function displayData(){
    if(localStorage.getItem('logindetails')){
          logindetails = JSON.parse(localStorage.getItem('logindetails'))
      }
      console.log(logindetails)
  
  }
displayData()


  

document.querySelector(".seller-login-btn").addEventListener("click", () => { 
  
  let EmailID = document.querySelector(".email").value
  let Password = document.querySelector(".password").value
  let  emails = logindetails.map(data => data.email)
  let passwords = logindetails.map(data => data.password)
 
if(emails.includes(EmailID)  && passwords.includes(Password)){      
location.href="sellproducts.html"
}
else{
  alert("incorrect details")
}
})

































