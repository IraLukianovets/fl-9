let earthLoader = document.getElementById('land');
let waterLoader = document.getElementById('water');
let simpleLoader = document.getElementById('simple');
let result = document.getElementById('result');

let trackBtn = document.getElementById('trackBtn');
trackBtn.addEventListener('click', findCoors);

let http = {
    get: function (url) {
        return new Promise(function (resolve, reject) {
            let xhr = new XMLHttpRequest();
            xhr.open('GET', url);
            xhr.onload = function () {
              if (this.status >= 200 && this.status < 300) {
                let response = JSON.parse(xhr.responseText);
                resolve(response);
              } else {
                reject({
                  status: this.status,
                  statusText: xhr.statusText
                });
              }
            };
            xhr.onerror = function () {
              reject({
                status: this.status,
                statusText: xhr.statusText
              });
            };
            xhr.send();
        });
    }
};

function hideElement (elem) {
    elem.style.display = 'none';
}

function showElement (elem) {
    elem.style.display = 'block';
}

function findCoors() {
    hideElement(result);
    hideElement(earthLoader);
    hideElement(waterLoader);
    showElement(simpleLoader);

    let lat = document.getElementById('latitude').value;
    let lon = document.getElementById('longtitude').value;
    let url = `https://api.onwater.io/api/v1/results/${lat},${lon}`;
    
    http.get(url)
        .then(res => {
            let text = document.getElementById('result');
            text.innerHTML = res.water ? 'Water' : 'Land';
            hideElement(simpleLoader);
            showElement(text);
        
            if (res.water) {
                hideElement(earthLoader);
                showElement(waterLoader);
            } else {
                hideElement(waterLoader);
                showElement(earthLoader);
            }
        })
        .catch(err => {
            console.log(err);
        }
    );
}
