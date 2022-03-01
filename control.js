
const buttonClicked = () =>{
    const getInput = document.getElementById('search-field').value;
    const makeValueLowerCase = getInput.toLowerCase();  
    document.getElementById('search-field').value = ''; 

    const url = `https://openapi.programming-hero.com/api/phones?search=${makeValueLowerCase}
`; 

fetch(url)
.then(res => res.json())
.then(data => getPhone(data));

const getPhone = (getData) => {
    document.getElementById('show-phone').textContent = ''; 
    const slicedData = getData.data.slice(1,21);
        for(const data of slicedData){
            const showLessInfo = () =>{
                const parent = document.getElementById('show-phone'); 
                    const div = document.createElement('div'); 
                    div.innerHTML = `
                    <div class="card m-4" style="width: 18rem;">
                        <img src="${data.image}" class="card-img-top" alt="...">
                        <div class="card-body">
                          <h5 id="phone-name" class="card-title">${data.brand}</h5>
                          <p class="card-text">${data.phone_name}</p>
                          <p class="card-text">${data.slug}</p>
                          <button onclick="moreInfo('${data.slug}')" class="btn btn-primary">Show more</button>
                        </div>
                      </div>
                    `  
                    parent.classList.add('card'); 
                    parent.appendChild(div);   
            }
            if(makeValueLowerCase == 'iphone'){
                showLessInfo(); 
            }
            else if(makeValueLowerCase == 'oppo'){
                showLessInfo(); 
            }
            else if(makeValueLowerCase == 'samsung'){
                showLessInfo(); 
            }
            else if(makeValueLowerCase == 'huawei'){
                showLessInfo(); 
            }
        }     
    }
}

const moreInfo = getId =>{
    document.getElementById('show-phone').textContent = ''; 
    const url = `https://openapi.programming-hero.com/api/phone/${getId}
    
    `; 
    console.log(url); 
    fetch(url)
    .then(res => res.json())
    .then(data => showMoreDetails(data)); 

    const showMoreDetails = data =>{
        console.log(data); 
            const parent = document.getElementById('more-detelts'); 
                const div = document.createElement('div'); 
                div.innerHTML = `
                <div class="card m-4 d-flex justify-content-center" style="width: 18rem;">
                    <div>
                    <img src="${data.data.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <p class="card-text"${data.data.releaseDate}</p>
                      <h5 id="phone-name" class="card-title">${data.data.brand}</h5>
                      <p class="card-text">Name: ${data.data.name}</p>
                      <p class="card-text">Storage: ${data.data.mainFeatures.storage}</p>
                      <p class="card-text">Display: ${data.data.mainFeatures.displaySize}</p>
                      <p class="card-text">Memory: ${data.data.mainFeatures.memory}</p>
                      <p class="card-text">Sensors: ${data.data.mainFeatures.sensors[0]}</p>
                      <p class="card-text">${data.data.others.Bluetooth}</p>
                      <p class="card-text">BlueTooth: ${data.data.others.GPS}</p>
                      <p class="card-text">NFC: ${data.data.others.NFC}</p>
                      <p class="card-text">Radio: ${data.data.others.Radio}</p>
                    </div>
                    </div>
                  </div>
                `  
                parent.classList.add('card'); 
                parent.appendChild(div);   
    }
}
