
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
        for(const data of getData.data){
            const showLessInfo = () =>{
                const parent = document.getElementById('show-phone'); 
                    const div = document.createElement('div'); 
                    div.innerHTML = `
                    <div class="card col-lg-4 m-4 col-12" style="width: 18rem;">
                        <img src="${data.image}" class="card-img-top" alt="...">
                        <div class="card-body">
                          <h5 id="phone-name" class="card-title">${data.brand}</h5>
                          <p class="card-text">${data.phone_name}</p>
                          <p class="card-text">${data.slug}</p>
                          <a href="#" class="btn btn-primary">Show more</a>
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