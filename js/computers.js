fetch("manifest/computers.json")
.then(function(response){
    return response.json();
})
.then(function(products){
    let placeholder = document.querySelector("#good_card");
    let out = ""
    for(let product of products)
    {
        out += `
            <h1 class="title" id="title">${product.name}</h1>
            <img src="${product.image}" alt="good Image" class="good_image" id="good_image" height="500" width="500">
            <h3 class="description" id="description">${product.description}</h3>
            <p class="price_name">${product.price}</p>
            <p class="product_code">${product.other}</p>
            <button class="order_button">Order me</button>
        `
    }
    placeholder.innerHTML = out;
})