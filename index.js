

// let yourName = document.getElementById("#name")
let paragraph = document.getElementById("#p1")

function myFunction() {
    let x = document.getElementById("name").value;
    let y = document.getElementById("date").value;
    let z = document.getElementById("password").value;
    document.getElementById("p1").innerHTML =  x + "<br>" + y +"<br>"+ z;

    // console.log(x + y + z)
    if(x=="collins"){
        alert("Your info has been received ")
    }
    else if(x==="edwin"){
        alert("This is edwins account")
    }
    else{
        alert("thats not your account")
    }
    
  }