fetch("manifest/Q&A.json")
.then(function(response){
    return response.json();
})
.then(function(products){
    let placeholder = document.querySelector("#guestionCard");
    let out = ""
    for(let product of products)
    {
        out += `
        <h1 class="title">${product.name}</h1>
        <h2 class="question_desc">I have a description!</h2>
        `
    }
    placeholder.innerHTML = out;
})