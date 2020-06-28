var catalog = [];


function fetchCatalog() {

    $.ajax({
        type: 'GET',
        url: '/Catalog/getCatalog',
        success: function (res) {
            console.log('server says', res)
            catalog = res;
            displayCars();

        },
        error: function (errorDetails) {
            console.log("there is an error", errorDetails)
        }

    })




}




function displayCars() {

    //travel the catalog array
    for(let i= 0; i < catalog.length; i++){
        var car= catalog[i]

        var syntax =
        `
        <div class="car" onclick="displayModal(${i})">

                 <label class= "head-info"> ${car.year} ${car.make} ${car.model} </label>
            <img src="${car.image}"
            <div >
                
                <label class="price"> Price $${car.price.toFixed(2)}</label>
            </div>  


        </div>`
        

        $("#catalog-container").append(syntax)

    }
    //get each car from the array
    //create the html syntax to display
    //add the syntax to container

            console.log("trying to display")
}

function displayModal(index){

  
    let car= catalog[index];
    
    if(car.isManual== true){
        car.isManual= 'Manual'
    }else{ 
        car.isManual= 'Automatic'
    }

    
    $("#popup").modal()
    $("#mdlTitle").text(`${car.year} ${car.make} ${car.model}`)
    $("#modal-body-txt").html(`<img class="modal-image" src='${car.image}'>`)
    $(".modal-footer").html(`
    <p>
    Details: <br>
    Miles: ${car.miles}   | Type: ${car.category}   |  Color: ${car.color}  <br>  MPG: ${car.mpg}  | Price: $${car.price}   | ${car.isManual}
    </p> <hr>
    <button type="button" id="btn-rent" class="btn btn-secondary btn-lg btn-block" >Rent now!</button>
    `)






}




function init() {

    console.log('init loaded');

    fetchCatalog();

}

window.onload = init;