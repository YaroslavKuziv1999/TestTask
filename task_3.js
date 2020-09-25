// Employees text
let textEmployees = '{ "employees" : [' +
'{"id":1,"name":"Mildred Carson","drinks":["Macchiato"]},' +
'{"id":2,"name":"Clifford Brown","drinks":["Latte"]},' +
'{"id":3,"name":"Kellie Fletcher","drinks":["FlatWhite","Espresso"]},'+
'{"id":4,"name":"Don Parsons","drinks":["Espresso"]},'+
'{"id":5,"name":"Renee Reynolds","drinks":["Cappuccino","Macchiato"]},'+
'{"id":6,"name":"Rudolph Bishop","drinks":["Latte","Macchiato","FlatWhite"]},'+
'{"id":7,"name":"Geraldine Carpenter","drinks":["Espresso"]},'+
'{"id":8,"name":"Hilda Jimenez","drinks":["Latte","Macchiato","Espresso"]},'+
'{"id":9,"name":"Pauline Roberson","drinks":["Espresso"]},'+
'{"id":10,"name":"Vanessa Barrett","drinks":["FlatWhite","Cappuccino","Latte"]}]}';

// Text recipes
let textRecipes = '{"Cappuccino": {"coffee": 0.01, "water": 0.035, "milk": 0.09},  "Espresso": {"coffee": 0.01,"water": 0.035},   "Latte": {"coffee": 0.01,"water": 0.035,"milk": 0.135},   "FlatWhite": {"coffee": 0.02,"water": 0.04,"milk": 0.11},   "Macchiato": {"coffee": 0.01,"water": 0.035,"milk": 0.015}}';

// Text of price
let textPrice = '{"coffee": 3.6,"water": 1,"milk": 1.5}';

// Parsing text to objects
const employeesObj = JSON.parse(textEmployees);
const recepies = JSON.parse(textRecipes);
const priceByOne = JSON.parse(textPrice);

// Calculating price of each recipes
const realPrice = [
    {
        name:'Cappuccino',
        price: ((recepies.Cappuccino.coffee*priceByOne.coffee)+recepies.Cappuccino.water+(recepies.Cappuccino.milk*priceByOne.milk)).toFixed(3)
    },
    {
        name:'Espresso',
        price: ((recepies.Espresso.coffee*priceByOne.coffee)+recepies.Espresso.water).toFixed(3)
    },
    {
        name:'Latte',
        price: ((recepies.Latte.coffee*priceByOne.coffee)+recepies.Latte.water+(recepies.Latte.milk*priceByOne.milk)).toFixed(3)
    },
    {
        name:'FlatWhite',
        price: ((recepies.FlatWhite.coffee*priceByOne.coffee)+recepies.FlatWhite.water+(recepies.FlatWhite.milk*priceByOne.milk)).toFixed(3)
    },
    {
        name:'Macchiato',
        price: ((recepies.Macchiato.coffee*priceByOne.coffee)+recepies.Macchiato.water+(recepies.Macchiato.milk*priceByOne.milk)).toFixed(3)
    }
]

// Calculating price of each party guest(employee)
const realGuestPrice = [
    {
        id:1,
        name:'Mildred Carson',
        realPrice:realPrice[4].price
    },

    {
        id:2,
        name:'Clifford Brown',
        realPrice:realPrice[2].price
    },

    {
        id:3,
        name:'Kellie Fletcher',
        realPrice:(Number(realPrice[3].price)+Number(realPrice[1].price)).toFixed(3)
    },

    {
        id:4,
        name:'Don Parsons',
        realPrice:realPrice[1].price
    },

    {
        id:5,
        name:'Renee Reynolds',
        realPrice:(Number(realPrice[0].price)+Number(realPrice[4].price)).toFixed(3)
    },

    {
        id:6,
        name:'Rudolph Bishop',
        realPrice:(Number(realPrice[2].price)+Number(realPrice[3].price)+Number(realPrice[4].price)).toFixed(3)
    },

    {
        id:7,
        name:'Geraldine Carpenter',
        realPrice:realPrice[1].price
    },

    {
        id:8,
        name:'Hilda Jimenez',
        realPrice:(Number(realPrice[1].price)+Number(realPrice[2].price)+Number(realPrice[4].price)).toFixed(3)
    },

    {
        id:9,
        name:'Pauline Roberson',
        realPrice:realPrice[1].price
    },

    {
        id:10,
        name:'Vanessa Barrett',
        realPrice:(Number(realPrice[2].price)+Number(realPrice[3].price)+Number(realPrice[0].price)).toFixed(3)
    }
]

// Sorting realGuestPrice by price
function sort(){
    realGuestPrice.sort(function(a, b) {
        var keyA = a.realPrice,
        keyB = b.realPrice;
  // Compare the 2 prices
  if (keyA < keyB) return -1;
  if (keyA > keyB) return 1;
  return 0;
    });
}

// Just input
// PS: each of task has timer for proper work 
function input(){
    let M=parseFloat(prompt('Enter M: '),10); // input N
    if(Number.isNaN(M)){
        return;
    }
    document.getElementById("table_div").style.display = "block"; // Show table

    QuantiCoders(M);
    setTimeout(function(){ document.location.reload(true) }, 4000); //Timer for reload page
}


// Main function
function QuantiCoders(M){
    sort();

    let totalPrice = 0;

    // Convert employees object to array
    let arr = [];
    for(let x in employeesObj.employees){
        arr[x] = Object.values(employeesObj.employees[x]);
    }

    // Get elems from html
    let tableBody = document.getElementById("table_body");
    let myTableDiv = document.getElementById("table_div");
    let table = document.getElementById("table");

    for(let i =0;i<realGuestPrice.length;i++){
        totalPrice+=Number(realGuestPrice[i].realPrice); // Increasing total price 

        if(totalPrice>=M){ // If total price bigger than budget = break
            break;
        }

        // Filling table and checking if that realy employee what we need(just to be safe)
        console.log("Result of Task3:")
        for(let f = 0; f<arr.length;f++){
            if(realGuestPrice[i].id===arr[f][0]){
                console.log(arr[f]);
                    var tr = document.createElement('TR');
                    for (j = 0; j < arr[f].length; j++) {
                        var td = document.createElement('TD')
                        td.appendChild(document.createTextNode(arr[f][j]));
                        tr.appendChild(td)
                    }
                    tableBody.appendChild(tr); 
                myTableDiv.appendChild(table)
            }
        }
    }


}