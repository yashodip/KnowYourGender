const getBtn = document.getElementById('get-btn');
const clearBtn = document.getElementById('clear-btn');
const name = document.getElementById('name');
const printBlock = document.getElementById('detected-gender');
const table = document.getElementById('result');
//let url = "https://api.genderize.io?name="+name.value;
let url = new URL('https://api.genderize.io?');



const sendHttpRequest = (method,url) =>{
    const xhr = new XMLHttpRequest();

    var search_params = url.searchParams;
    search_params.append('name', name.value);
    url.search = search_params.toString();

    var new_url = url.toString();

    console.log(new_url);


    xhr.open(method,new_url);

    xhr.responseType = "json";
    
    xhr.onload = () =>{
        const data = xhr.response;
        console.log(data);
        //printBlock.innerHTML="<b>Congratulations </b>"+ data.name+"! you are "+data.gender;
        
        table.innerHTML='<tr ><td >Name</td><td >'+ data.name+'</td></tr><tr ><td >Gender</td><td>'+data.gender +' </td></tr><tr><td > Probability</td><td>'+data.probability*100+'%</td></tr>';
    }
    
    xhr.send();
    
}

const getData = () =>{
sendHttpRequest('GET',url);
table.classList.remove("d-none");
}

const clearData = () =>{
        location.reload();
      
}

getBtn.addEventListener('click',getData);
clearBtn.addEventListener('click',clearData);
