//  THE FETCH GOLBAL WILL EXECUTE MORE EARLIER THAN PROMISE AND THE OTHER OPERATION BECAUSE IT WILL CREATE A NEW MICRO TASK QUEUE THAT'S WHY WE WILL GET THE RESULT FIRST OF FETCH

async function getDetails() {
    try {
        const response = await fetch('https://api.github.com/users/harikesh2')
        const data = await response.json();
        //  we have to await the response.json as well because in that conversion it will also take time 
        console.log(data);
   
    } catch (error) {
        console.log(error);
        
    }
}

getDetails();



// SAME THING WITH PROMISE APPROACH NOT USING TRY CATCH BLOCK

fetch('https://api.github.com/users/harikesh2')
.then((response)=>{
    return response.json();
    // here first we are first converting the response in json after that we are sending this to another .then where we are getting the all data
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(`Error in js Something went wrong ${error}`);

})