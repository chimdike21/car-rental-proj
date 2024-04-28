const cars=[
    {id:1, brand:'Toyota', model:'Corolla', year:2022,
price:$50},

    {id:2, brand:'Honda', model:'Civic', year:2021, price:$60},

]

function displayCars(){
    const carList= document.getElementById('carList')
    carList.innerHTML=""
    cars.forEach(car=>{
        const carItem=document.createElement('div')
        carItem.classList.add('car')
        carItem.innerHTML=`
        <h2>${car.brand}${car.model}</h2>
        <p>Year:${car.year}</p>
        <p>Price per day:$${car.price}</p>`

        carList.appendChild(carItem)
    })
}

displayCars()