

function titleText(){
    let title = document.querySelector(".titlelive")   
    let price = document.querySelector(".pricelive")
    let discount = document.querySelector(".discountlive")
    let image = document.querySelector(".imagelive")

    
    title.innerText = document.querySelector(".title").value
    price.innerText = "₹" + document.querySelector(".price").value +"/-"
    discount.innerText = "(" + document.querySelector(".discount").value + " % Off)"
    image.src = document.querySelector(".imageurl").value
}



let products = []


function displayData(){
    if(localStorage.getItem('products')){
          products = JSON.parse(localStorage.getItem('products'))
          products.forEach(product =>{
              renderNoteToList(product, product.UniqueID)
          })
      }
  
  }
  


document.querySelector("#form").addEventListener("submit", function() {

    let UniqueID = 'info' + Math.floor(Math.random()*2000)
      
    let product ={
      title: document.querySelector(".title").value,
       description: document.querySelector(".description").value,
        price: document.querySelector(".price").value,
        discount: document.querySelector(".discount").value,
        category: document.querySelector(".category").value,
        imageurl: document.querySelector(".imageurl").value

    }
    if(document.querySelector(".title").value.trim().length > 0 && 
    document.querySelector(".description").value.trim().length > 0 &&
     document.querySelector(".price").value.trim().length > 0 &&
     document.querySelector(".discount").value.trim().length > 0 &&
     document.querySelector(".category").value.trim().length > 0 &&
     document.querySelector(".imageurl").value.trim().length > 0){

        addNoteToLocalStorage(product, UniqueID)
    }
    else{
        alert("data is empty! Fill all the details")
    }
    
});


function addNoteToLocalStorage(product, UniqueID){
    product = {...product, UniqueID}
    products.push(product)    
    localStorage.setItem('products',JSON.stringify(products))

}


function removeElementFromNotesList(id){
    document.querySelector('.' + id).remove()

    products = JSON.parse(localStorage.getItem('products'))

    let index = products.findIndex(product => product.UniqueID == id)

    products.splice(index, 1)

    localStorage.setItem('products', JSON.stringify(products));

}


displayData()










