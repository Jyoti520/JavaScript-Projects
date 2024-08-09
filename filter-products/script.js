
let products = [


    {
        id: 1,
        title: 'Regular white T-Shirt',
        category: 'topwear',
        image: 'product-images/topwear.jpg',
        price: 30,
    },
    {
        id: 2,
        title: 'Denim casual jacket',
        category: 'jacket',
        image: 'product-images/jacket.jpg',
        price: 35,
       
    },
    {
        id: 3,
        title: 'women high heels',
        category: 'footwear',
        image: 'product-images/bottomwear1.jpg',
        price: 20,
    },
    {
        id: 4,
        title: 'sport shoes',
        category: 'footwear',
        image: 'product-images/bottomwear2.jpg',
        price: 30,
        
    },
 
    {
        id: 6,
        title: 'pink girl watch',
        category: 'Watches',
        image: 'product-images/girlwatch.jpg',
        price: 40,
        
    },
    {
        id: 7,
        title: 'platinum black watch',
        category: 'Watches',
        image: 'product-images/watches.jpg',
        price: 70,
       
    }

]


let innerhtml = ''
let productContainer = document.querySelector('.products-container')
let productArray = []





let productsItem = document.querySelectorAll('.products-card')
let searchbar = document.querySelector('#input');

const searchbtn = document.getElementById('search-btn')


//fetching products through products data api



    products.forEach(element => {
        const {id, title,category, image, price}=element

    innerhtml = `<div class="products-card" data="${category}">
            <img src='${image}' width="200px" height="200px" alt="topwear" id="product-img">
            <h3>${title}</h3>
            <span class="price">$ ${price}</span>
            </div>`
            
            productContainer.innerHTML += innerhtml;

})

console.log('products fetched')

//filter products through clicking on different category 

const categories=document.querySelectorAll('.item-name')
 
 const productCard=document.querySelectorAll('.products-card')
 
     categories.forEach((items) => {
        items.addEventListener('click',(e)=>{
            const itemsId=e.target.id
            console.log(itemsId)
            if (itemsId === "All") {
                productCard.forEach((card) => {
                  card.style.display = "block";
            })
        }
            else{
            productCard.forEach((card)=>{
             const atr=card.getAttribute('data')
             if (itemsId === atr) {
                 card.style.display="block";
             }
              else {
                  card.style.display="none";
              }
            })
         }
                
              
         })
  
})
     


 //filter products throught searchbar

searchbtn.addEventListener('click', () => {
    console.log('keyup')

    const title = document.getElementsByTagName('h3')
    let input = searchbar.value.toUpperCase()
    for (let i = 0; i < title.length; i++) {
      let productItem=document.querySelectorAll('.products-card')
        let a = productItem[i].getElementsByTagName('h3')[0]
        console.log(a);
        let productValue = a.innerHTML || a.innerText || a.textContent
        console.log(productValue);
        if (productValue.toUpperCase().indexOf(input) > -1) {
            console.log('matched')
            productItem[i].style.display = "block";
            console.log(productValue)
        }
        else {
            productItem[i].style.display = "none"
        }

    }
})




