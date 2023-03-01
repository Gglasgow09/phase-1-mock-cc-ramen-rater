// write your code here

document.addEventListener ('DOMContentLoaded', fetchRamen)
//to load initial page

function fetchRamen() {
    fetch("http://localhost:3000/ramens")
    .then(response => response.json())
    .then(data => renderAllRamen(data))
}
// See all ramen images in the div with the id of ramen-menu. 
// for each display the image for each of the ramen using an img tag inside the #ramen-menu div.
//data is a collection of things 
function renderAllRamen(data) {
    //grabs the id from the div in line 16 and assigns it to a variable
    const ramenTab = document.getElementById('ramen-menu')
    //for each singular ramen we are doing something to it
    data.forEach((ramens) => {
        //creating a img tab  
        const ramenPhotos = document.createElement('img')
        //referencing the endpoint image
        ramenPhotos.src = ramens.image
        //adds ramenPhoto to #ramen-menu
        ramenTab.append(ramenPhotos)
        


        ramenPhotos.addEventListener('click', () => {

            const ramenDetail = document.getElementById('ramen-detail')
            
            const detailImage = document.querySelector('.detail-image')
            detailImage.src = ramens.image
            // detailImage.style.width = '640px'
            // detailImage.style.height = '640px'

            const detailName = document.querySelector('.name')
            detailName.innerText = ramens.name
            //calling the name attribute on the object 

            const detailRestaurant = document.querySelector('.restaurant')
            detailRestaurant.innerText = ramens.restaurant

            const detailRating = document.querySelector('#rating-display')
            detailRating.innerText = ramens.rating

            const detailComments = document.querySelector('#comment-display')
            detailComments.innerText = ramens.comment

            
        })
    })    
}
let form = document.querySelector('#new-ramen')

   form.addEventListener('submit', (e) => {
        e.preventDefault();
        //default behavior of page refresh that we want to stop
    
    //.value is the input
    let name = document.getElementById('new-name').value
    let restaurant = document.getElementById('new-restaurant').value
    let image = document.getElementById('new-image').value
    let rating = document.getElementById('new-rating').value
    let comment = document.getElementById('new-comment').value

        const newName = document.querySelector('.name')
        //newName is grabbing the class of line 24 in html
        newName.innerText = name
        const newRestaurant = document.querySelector('.restaurant')
        newRestaurant.innerText = restaurant
        const newImage = document.querySelector('.detail-image')
        newImage.src = image
        const newRating = document.querySelector('#rating-display')
        newRating.innerText = rating
        const newComment = document.querySelector('#comment-display')
        newComment.innerText = comment
        
        
   })

document.addEventListener('DOMContentLoaded', fetchRamen)
//when you submit your form waiting for the page to load 