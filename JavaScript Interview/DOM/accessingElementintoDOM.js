/*
 This file contain Operation How to select a particular element and the operation on those elements in Array

*/



// document.getElementById('title'); (This help us to get element by Id name)
// <h1 id=​"title">​Dom learning on JavaScript​</h1>​
// document.getElementById('title').id (by using .id we will get the id name)
// 'title'
// document.getElementById('title').classname(By className we will get the className)
// undefined
// document.getElementById('title').className
// ''
// document.getElementById('title').getattributes(BY getAttribute we will get all the all attributes)
// undefined
// document.getElementById('title').getAttributes
// undefined
// document.getElementById('title').getAttribute
// ƒ getAttribute() { [native code] }
// document.getElementById('title').setAttribute('id','coolBOy'); (By this we can a give a attribute and the attribute value as well)



const title =document.getElementById('title');
undefined
title
title.style.backgroundColor = 'green'
// by this we can style the particular line
'green'
title.style.borderRadius = '5px'



//  difference between innerHTML, innerText, textContent


// const title = document.getElementById('title');
// undefined
// title
// <h1 id=​"title">​"Dom learning on JavaScript "<span style=​"display:​ none;​">​hello bro​</span>​</h1>​
// title.innerHTML(This will give us all the element content in that tag)
// 'Dom learning on JavaScript <span style="display: none;">hello bro</span>'
// title.innerText (This will show only text present in the tag)
// 'Dom learning on JavaScript'
// title.textContent (this show all the content present in multiple tag which is present in that tag)
// Dom learning on javaScript hello 



// document.querySelector(ul);  (Wrong Syntax will use always ''{cots})
// const myUL = document.querySelector('ul');  (This will help us to select a particular element of the html tag like css)
// undefined
// myUL.querySelector('li');
// <li>​::marker​"One"</li>​
// myUL.style.col
// undefined
// const li =  myUL.querySelector('li');
// undefined
// li.style.color = 'green';
// 'green'
// li.style.backgroundColor = 'green';
// 'green'
// li.innnerText
// undefined
// li.innerHTML
// 'One'
// li.innerText = 'Coolboy'
// 'Coolboy'




const tempLiList =document.querySelectorAll('li');
// This will select all the li which is present in the ul tag so it's very important to understand that the templist is going to create a NodeList!!
undefined
tempLiList
NodeList(3) [li, li, li]
//  this NodeList will not like a array so we have to use forEach loop;


tempLiList[0].style.backgroundColor = 'green';
'green'


tempLiList.forEach((li)=>(
    li.style.backgroundcolor = 'green'
))
undefined

tempLiList.forEach((li)=>(
    li.style.backgroundColor = 'green'
))

// BY using this we can convert the NodeList color into green


//  When we are using the className in JS it will create a HTMLcollection so we have to convert that into array because we don't have the loop function in that 
document.getElementsByClassName('list-item');
HTMLCollection(4) [li.list-item, li.list-item, li.list-item, li.list-item]
const classList = document.getElementsByClassName('list-item');
undefined
const myArray = Array.from(classList);
//  converting the HTMLcollection into the Array, So we can taraverse over the array 
undefined
myArray.for
undefined
myArray.forEach((li)=>{
    li.style.color = 'orange'
})

// than on array using the forEach function