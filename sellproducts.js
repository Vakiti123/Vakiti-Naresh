var xValues = ["Item1", "Item2", "Item3", "Item4", "Item5"];
var yValues = [28, 55, 68, 41, 81];
var barColors = ["orange", "orange", "orange", "orange", "orange"];

new Chart("myChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "Sales "
    }
  }
});



function displayData(){
  if(localStorage.getItem('products')){
        products = JSON.parse(localStorage.getItem('products'))
        products.forEach(product =>{

          renderNoteToList(product, product.UniqueID)
         
        })
    }

}

function  renderNoteToList(product, UniqueID){

  let mainDiv = document.createElement("div")
  mainDiv.setAttribute("class", "item")
  document.querySelector(".bottom").appendChild(mainDiv)

  let img = document.createElement("img")
  img.src=product.imageurl    
  img.setAttribute("class", "productImage")
  mainDiv.appendChild(img)

  let title = document.createElement("h2")
  title.innerHTML = product.title
  title.setAttribute("class", "productTitle")
  mainDiv.appendChild(title)

  let price = document.createElement("h3")
  price.innerText =  "₹" + product.price +"/-"
  price.setAttribute("class", "productPrice")
  mainDiv.appendChild(price)
  
  let discount = document.createElement("span")
 discount.innerText =  "(" + product.discount +"% Off)"
 discount.setAttribute("class", "productDiscount")
  price.appendChild(discount)

  let editButton = document.createElement("button")
  editButton.innerText = "Edit"
  editButton.setAttribute("class", "producteditButton")
  mainDiv.appendChild(editButton)

  let deleteButton = document.createElement("button")
  deleteButton.innerText = "Delete"
  deleteButton.setAttribute("class", "productdeleteButton")
  mainDiv.appendChild(deleteButton)
 
  
  
     
deleteButton.addEventListener("click", ()=>{  
  mainDiv.remove()
})

editButton.addEventListener("click", ()=>{
 location.href = "editproduct.html" 

})

}


document.querySelector(".addnewproduct").addEventListener("click", () => {
  location.href = "addnewproduct.html"
})



displayData()
















































