//To create HTML element using DOM manipulation
document.body.innerHTML = `
<div class="header-content">
<h1>API of ICE and FIRE</h1>
</div>
<div id="fireice" class="main-content">
</div>
<div id="fireice1" class="char-content">
<h2>Five Characters of 10 Books</h2>
</div>
`
//To fetch the URL we have assigned to variable url
let url = "https://www.anapioficeandfire.com/api/books";

//This function is created to get the data from all the books for the requied properties 
let getData = async() =>{
    try {
        const data = await fetch(url);
        const obj = await data.json();
        fireice.innerHTML = "";
        obj.forEach((fire)=>{
            containerData(fire);
        });
        characters();
    }
     catch (error) {
        console.log(error);
    }
}
getData();

//For each Book required elements are stored in the function variable
const containerData = (list) => {
    fireice.innerHTML +=`
    <div class="selfContainer">
    <h3><span>${list.name}</span></h3><table class="self">
    <tr><td>Book ISBN:</td><td>${list.isbn}</td></tr>
    <tr><td>Book Authors:</td><td><span>${list.authors}</td></tr>
    <tr><td>Book Page No.:</td><td><span>${list.numberOfPages}</td></tr>
    <tr><td>Book Publisher:</td><td><span>${list.publisher}</td></tr>
    <tr><td>Book Released:</td><td><span>${list.released}</td></tr>
    </table>
    </div>`;
};

//This function is created to display the five characters name for each book 
let characters = async function ()
{
            const data1 = await fetch(url);
            const obj1 = await data1.json();
            obj1.forEach((fire)=>{
                for (i=0;i<6;i++){
                    let arr = fire.characters[i];
                    let chs = async function(){
                    const data2 = await fetch(arr);
                    const obj2 = await data2.json();
                    const res = Object.values(obj2.name);
                    const res1 = res.join("");
                    if(res1.length>1){
                    fireice1.innerHTML += '<p class=\"charContent\">'+res1+' |</p>';
                    }
                }
                chs();
                }

            });
}

