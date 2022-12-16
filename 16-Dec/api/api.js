// fetch function - used to make network calls / http calls / 

// GET, POST, PATCH, PUT, DELETE 

// method - GET - http verb
// endpoint - https://api.google.com/users



async function getProducts() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                // "Authorization": 'toeknreajdfa'
            },
            body: JSON.stringify( {
                title: "My First Todo",
                body: "My first todo body",
                userId: "76878"
            })
        })
        console.log(response);


        const data = await response.json()
        console.log(data)

        // let productsSection = document.getElementById("products");

        // data.forEach(p => {
        //     const product = document.createElement("p")
        //     product.innerHTML = p.title;
        //     productsSection.appendChild(product)
        // })

        // console.log(data)
    } catch(e) {
        console.log(e)
    }
}


