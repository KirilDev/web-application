var orderInput = document.getElementById("order_input");
let orderButton = document.getElementById("order_button");

let order_name = document.getElementById("order_name");
let order_details = document.getElementById("order_details");
let order_status = document.getElementById("status");
let order_comments = document.getElementById("comments");


const orders_numbers = ["824765282453", "308654389363", "976253942302"];
const order_details_info = ["Laptop Macbook Pro M2 15' 1400$", "SmartPhone iPhone 11 64GB White 549$", "Laptop Microsoft Surface Go 3 Black 1199$"];
const order_status_info = ["In progress", "In store", "Complete"];
const order_comments_info = ["Have a good day! :)"];


function order_send()
{
    if (orderInput.value == orders_numbers[0]) 
    {

        document.getElementById("order_info").removeAttribute("hidden");
        order_name.innerHTML = orders_numbers[0];
        order_details.innerHTML = order_details_info[0];
        order_status.innerHTML = order_status_info[0];
        order_comments.innerHTML = order_comments_info[0];

    }
    else if (orderInput.value == orders_numbers[1]) 
    {
        document.getElementById("order_info").removeAttribute("hidden");
        order_name.innerHTML = orders_numbers[1];
        order_details.innerHTML = order_details_info[1];
        order_status.innerHTML = order_status_info[1];
        order_comments.innerHTML = order_comments_info[1];

    }
    else if (orderInput.value == orders_numbers[2]) 
    {
        document.getElementById("order_info").removeAttribute("hidden");
        order_name.innerHTML = orders_numbers[2];
        order_details.innerHTML = order_details_info[2];
        order_status.innerHTML = order_status_info[2];
        order_comments.innerHTML = order_comments_info[2];

    }
    else
    {
        alert("May you don't have created order with this number " + orderInput.value);
        document.getElementById("order_info").setAttribute("hidden", "");
    }
  
}


//name, details , status, comments