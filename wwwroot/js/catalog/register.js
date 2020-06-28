

// catch click evenmt
//call a register fn

function Car(make, model, year, miles, category, color, mpg, price, image, isManual){
    this.make = make;
    this.model = model;
    this.year = parseInt(year) || 0;
    this.miles = parseInt(miles) || 0; 
    this.category = category;
    this.color = color;
    this.mpg = parseInt(mpg) || 0;
    this.price = parseFloat(price) || 0.00;
    this.image = image;
    this.isManual = isManual;
    
}
 



function register(){
    
    let make = $('#make').val()
    let model = $('#model').val()
    let year = $('#year').val()
    let miles = $('#miles').val()
    let category = $('#category').val()
    let color = $('#color').val()
    let mpg = $('#mpg').val()
    let price = $('#price').val()
    let image = $('#image').val()
    let isManual = $('#isManual_0').is(":checked")
    
    let theCar = new Car(make, model, year, miles, category, color, mpg,  price, image,isManual)
    console.log(theCar)

    

    $.ajax({
        type: 'POST',
        url: '/Catalog/RegisterCar', 
        data: JSON.stringify(theCar),
        contentType: 'application/json',
        success: function(res){
            console.log('server says', res)
    
        },
        error: function(errorDetails){
            console.log("there is an error", errorDetails)
        }
    
    })
}



//get values from the imputs on vars

//create obj with vars

//obj should match car.cs




function init() {
 
    $("#btn-save").click(register);
    console.log('init loaded')

}

Window.onload = init();
