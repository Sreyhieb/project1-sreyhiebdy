function createprovince(e) {
  e.preventDefault()
  const firstDate = document.querySelector('#frstdate');
  const lastDate = document.querySelector('#lastdate');

    let country = document.querySelector('#province');
    if(country.value === ''){
       return  confirm('plases complete Your province')
    }
    let card = document.createElement('div');
    card.className = 'card';

    let title =document.createElement('span');
    title.className ='title';
    title.textContent = country.value;

    let deletecountry = document.createElement('span');
    deletecountry.className ='delete';
    deletecountry.textContent = 'x';

    let firstlower = new Date(firstDate.value);
    let lastgreater = new Date(lastDate.value);
    if (firstlower.getTime() > lastgreater.getTime()){
      return confirm("First date canot greater than lastdate");
    }
    let first = document.createElement('span');
    first.classList.add('first');
    first.textContent = firstDate.value;

    let last = document.createElement('span');
    last.classList.add('last');
    last.textContent = lastDate.value;
    card.appendChild(title);
    card.appendChild(first);
    card.appendChild(last);

    card.appendChild(deletecountry);
    cardcontainer.appendChild(card);
    document.querySelector('#form').reset();
    
}

let bntCreate = document.querySelector('#bntCreate');
let cardcontainer = document.querySelector('.card-container');
bntCreate.addEventListener('click',createprovince);
cardcontainer.addEventListener('click',function(e){
    if(e.target.className === 'delete'){
      const delBtn = e.target.parentElement;
      delBtn.remove();
    }
})

function searchprovince(event) {
  // 1- Get the search text
  let text = searchBookInput.value.toLowerCase();
  let div = document.querySelectorAll(".card");
  // 2- Loop on all LI
  for (let span of div ) {
    // Update the style of the LI (visible or hidden)
    let title = span.firstElementChild.textContent.toLowerCase();
    if (title.indexOf(text)===-1){
      span.style.display = "none";
    } else {
      span.style.display = "";
    }
  }
}
let searchBookInput = document
  .getElementById("search-province")
  .querySelector("input");
searchBookInput.addEventListener("keyup", searchprovince);



// // Show form for add
// const addProvince = document.querySelector(".form-container");
// const addButton = document.querySelector("#add");
// addButton.addEventListener('click',e =>{
// addProvince.style.display='flex';
// cardcontainer.style.display='none';
// // bntCreate.style.display='none';
// country.value="";
// firstDate.value="";
// lastDate.value="";
// });

