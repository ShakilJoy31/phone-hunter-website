// for Search button
const buttonClicked = () =>{
    const getInput = document.getElementById('search-field').value;
    const makeValueLowerCase = getInput.toLowerCase();  
    document.getElementById('search-field').value = ''; 
    const url = `https://openapi.programming-hero.com/api/phones?search=${makeValueLowerCase}
`; 

// get data by name useing API
fetch(url)
.then(res => res.json())
.then(data => getPhone(data));

// Checking for the error
const getPhone = (getData) => {
            if(getData.data.length === 0){
                document.getElementById('show-error-msg').textContent = ''; 
                document.getElementById('more-detelts').textContent = ''; 
                const parent = document.getElementById('show-error-msg'); 
                const div = document.createElement('div'); 
                div.innerHTML = `
                <div class="error-msg"> 
                <p class="text-danger"> No results found</p> 
                </div>
                `
                parent.classList.add('error-msg'); 
                parent.appendChild(div); 
    }

    // Showing primary data
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
                          <button onclick="moreInfo('${data.slug}')" class="btn btn-primary">Show more</button>
                        </div>
                      </div>
                    `  
                    parent.classList.add('card'); 
                    parent.appendChild(div);   
            }
            // Calling according to the user input
            if(makeValueLowerCase === 'iphone'){
                document.getElementById('show-error-msg').textContent = '';
                showLessInfo(); 
                
            }
            else if(makeValueLowerCase === 'oppo'){
                document.getElementById('show-error-msg').textContent = '';
                showLessInfo(); 
                
            }
            else if(makeValueLowerCase === 'samsung'){
                document.getElementById('show-error-msg').textContent = '';
                showLessInfo(); 
               
            }
            else if(makeValueLowerCase === 'huawei'){
                document.getElementById('show-error-msg').textContent = '';
                showLessInfo(); 
            }
        }     
    }
}

// call API using ID
const moreInfo = getId =>{
    document.getElementById('show-phone').textContent = ''; 
    const url = `https://openapi.programming-hero.com/api/phone/${getId}
    
    `; 
    console.log(url); 
    fetch(url)
    .then(res => res.json())
    .then(data => showMoreDetails(data)); 

    const showMoreDetails = (data) =>{
                if(data.data.releaseDate !== ''){
                const parent = document.getElementById('more-detelts'); 
                const div = document.createElement('div'); 
                div.innerHTML = `
                <div class="card m-4 d-flex justify-content-center" style="width: 18rem;">
                    <div>
                    <img src="${data.data.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 id="phone-name" class="card-title">${data.data.brand}</h5>
                      <p class="card-text">Name: ${data.data.name}</p>
                      <div id="setting-release-date">
                      ${data.data.releaseDate}
                      </div>
                      <p class="card-text">Storage: ${data.data.mainFeatures.storage}</p>
                      <p class="card-text">Display: ${data.data.mainFeatures.displaySize}</p>
                      <p class="card-text">Memory: ${data.data.mainFeatures.memory}</p>
                      <p class="card-text">Sensors: ${data.data.mainFeatures.sensors[0]}, ${data.data.mainFeatures.sensors[1]}, ${data.data.mainFeatures.sensors[2]}, ${data.data.mainFeatures.sensors[3]}, ${data.data.mainFeatures.sensors[4]}</p>
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
                else{
            const parent = document.getElementById('more-detelts'); 
                const div = document.createElement('div'); 
                div.innerHTML = `
                <div class="card m-4 d-flex justify-content-center" style="width: 18rem;">
                    <div>
                    <img src="${data.data.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 id="phone-name" class="card-title">${data.data.brand}</h5>
                      <p class="card-text">Name: ${data.data.name}</p>
                      <p class="card-text">No release date is found</p>
                      <p class="card-text">Storage: ${data.data.mainFeatures.storage}</p>
                      <p class="card-text">Display: ${data.data.mainFeatures.displaySize}</p>
                      <p class="card-text">Memory: ${data.data.mainFeatures.memory}</p>
                      <p class="card-text">Sensors: ${data.data.mainFeatures.sensors[0]}, ${data.data.mainFeatures.sensors[1]}, ${data.data.mainFeatures.sensors[2]}, ${data.data.mainFeatures.sensors[3]}, ${data.data.mainFeatures.sensors[4]}</p>
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
    }