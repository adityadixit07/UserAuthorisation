function addnewWork() {
  // console.log('adding new field');
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("work-field");
  newNode.classList.add("mt-2");
  newNode.setAttribute("placeholder", "enter here");
  let weAddButton = document.getElementById("weButton");
  let werefrence = document.getElementById("work-experiance");
  werefrence.insertBefore(newNode, weAddButton);
}
function addacdemic() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("work-field");
  newNode.classList.add("mt-2");
  newNode.setAttribute('placeholder',"enter here")
  newNode.classList.add("address-field");
  let acbutton = document.getElementById("acButton");
  let acreference = document.getElementById("academic-area");
  acreference.insertBefore(newNode, acbutton);
}

function generatecv(){
    // console.log('generating cv')
    let namefield=document.getElementById('name-field').value;
    let namet=document.getElementById('nameT');
    let namet2=document.getElementById('nameT2');
    namet.innerHTML=namefield;
    namet2.innerText=namefield;
    // document.getElementById('nameT2').innerHTML=namefield;

    // let contactfield=document.getElementById('contact-field');
    document.getElementById('contactT').innerHTML=document.getElementById("contact-field").value;

    let address=document.getElementById('address-field').value;
    document.getElementById('addressT').innerHTML=address;
    
    document.getElementById('fbT').innerHTML=document.getElementById('email-field').value;
 
    document.getElementById('instaT').innerHTML=document.getElementById('instagram-field').value;
    document.getElementById('linkT').innerHTML=document.getElementById('linkedin-field').value;

    document.getElementById('objectiveT').innerHTML=document.getElementById('objective-field').value;


    // work field
    let we=document.getElementsByClassName('work-field');
    let str="";
    for(let e of we){
        str=str+`<li> ${e.value} </li>`;
    }
    document.getElementById('workT').innerHTML=str;


    // academic 
    let academic=document.getElementsByClassName('academic-field');
    let str1="";
    for(let a of academic){
        a=a+`<li> ${a.value} </li>`;
    }
    document.getElementById('aqT').innerHTML=str1;


    document.getElementById('cv-form').style.display='none';
    document.getElementById('cv-template').style.display='block';
   
    
}

function printcv(){
    alert('printing resume')
    window.print();
}
