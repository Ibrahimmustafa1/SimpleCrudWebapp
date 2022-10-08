let productname = document.getElementById("Productname")
let productprice = document.getElementById("ProductPrice")
let prouductcategory = document.getElementById("ProductCategory")
let ProductDescribtion = document.getElementById("ProductDescribtion")
let addbtn = document.getElementById("btn-add")
let productdata = document.getElementById("product")
let search = document.getElementById("Search")
let name1 = document.getElementById("name1")
let name2 = document.getElementById("name2")
let input = document.querySelectorAll("input")
let items = []
let Idx = 0

for (let i = 0; i < input.length; i++) {
    input[i].addEventListener("input", ()=>{
        name1.classList.add("d-none")
        name2.classList.add("d-none")
    })
}

addbtn.addEventListener("click", function () {

    if (checkinputs()) {
        name1.classList.add("d-none")
        name2.classList.add("d-none")
        let product = {
            name: productname.value,
            price: productprice.value,
            category: prouductcategory.value,
            Description: ProductDescribtion.value,
        }
        if (addbtn.innerText == "add Product") {
            items.push(product)
        }
        else {
            console.log(Idx);
            items.splice(Idx, 1, product)
        }

        display()
        productname.value = ''
        productprice.value = ''
        prouductcategory.value = ''
        ProductDescribtion.value = ''
    }
    addbtn.innerText = "add Product"
})

let display = () => {
    let products = ``
    for (let i = 0; i < items.length; i++) {
        products = products +
            `<tr>
        <td>${i}</td>
        <td>${items[i].name}</td>
        <td>${items[i].price}</td>
        <td>${items[i].category}</td>
        <td>${items[i].Description}</td>
        <td> <button class="btn btn-outline-primary" onclick="updateproduct(`+ i + `)">Update</button></td>
        <td> <button class="btn btn-outline-danger" onclick="deleteproduct(`+ i + `)" >Delete</button></td></tr>`
    }
    productdata.innerHTML = products

}
let checkinputs = () => {
    let namevalidator=/^[A-Z][a-z]{5,}$/

     if (productname.value==''){
        name1.classList.add("d-block")
        name1.classList.remove("d-none")
        name2.classList.add("d-none")
        return false
    }
  else  if (!namevalidator.test(productname.value)){
        name2.classList.add("d-block")
        name2.classList.remove("d-none")
        name1.classList.add("d-none")
        return false
    }
   

    return true
}
let deleteproduct = (idx) => {
    items.splice(idx, 1)
    display()
}

let updateproduct = (idx) => {
    Idx = idx
    productname.value = items[idx].name
    productprice.value = items[idx].price
    prouductcategory.value = items[idx].category
    ProductDescribtion.value = items[idx].Description
    addbtn.innerText = "update"
}

search.addEventListener("input", () => {
    let products1 = ``
    for (let i = 0; i < items.length; i++) {
        if (items[i].name.includes(search.value)) {
            products1 = products1 +
                `<tr>
        <td>${i}</td>
        <td>${items[i].name}</td>
        <td>${items[i].price}</td>
        <td>${items[i].category}</td>
        <td>${items[i].Description}</td>
        <td> <button class="btn btn-outline-primary" onclick="updateproduct(`+ i + `)">Update</button></td>
        <td> <button class="btn btn-outline-danger" onclick="deleteproduct(`+ i + `)" >Delete</button></td></tr>`
        }
    }
    productdata.innerHTML = products1
})
