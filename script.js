let arr = [];

fetch('https://dummyjson.com/products')
.then(res => res.json())
.then(json => {arr = json.products;
    console.log(arr)

    for (let index = 0; index < arr.length; index++) {
        const element = arr[index].title;
        console.log(element);  
    }
       
})

//Завдання 1 - показати назви тільки тих товарів, ціна яких вища за 40
fetch('https://dummyjson.com/products')
.then(res => res.json())
.then(json => {arr = json.products;
    console.log(arr)

        for (let index = 0; index < arr.length; index++) {
        const element = arr[index].title;
        if(arr[index].price > 40) {
            console.log(element);  
        }        
    }
})

//Завдання 2 - вивести результат 1-го завдання на сторінку
fetch('https://dummyjson.com/products')
.then(res => res.json())
.then(json => {arr = json.products;
    console.log(arr)

        for (let index = 0; index < arr.length; index++) {
        const element = arr[index].title;
        if(arr[index].price > 40) {
            console.log(element);  
        }        
    }
    const resultInfo = document.getElementById('resultInfo');
    for (let index = 0; index < arr.length; index++) {
        // console.log('hello')
        const titleElement = document.createElement('p');
        titleElement.textContent = arr[index].title;
        resultInfo.appendChild(titleElement);
    } 
})

Завдання 3 - показати на сторінці поруч із назвою ціну товара

fetch('https://dummyjson.com/products')
.then(res => res.json())
.then(json => {arr = json.products;
    console.log(arr)

        for (let index = 0; index < arr.length; index++) {
        const element = arr[index].title;
        if(arr[index].price > 40) {
            console.log(element);  
        }        
    }
    const resultInfo = document.getElementById('resultInfo');
    for (let index = 0; index < arr.length; index++) {
        // console.log('hello')
        const titleElement = document.createElement('p');
        titleElement.textContent = arr[index].title;

        const priceElement = document.createElement('p');
        priceElement.textContent = arr[index].price;

        resultInfo.appendChild(titleElement);
        resultInfo.appendChild(priceElement);
    } 
})
