let selectedRow = null;
function submitForm(e){
    event.preventDefault();
    let fName = document.getElementById("fullName");
    let dAmount = document.getElementById("amount");
    if (fName && dAmount && fName.value && dAmount.value) {
        let formData = readFormData();
        if (selectedRow === null) {
            createDebt(formData);
        } else {
            updateDebt(formData)
        }
        resetForm();
    }
    else {
        alert("Fill the required fields!")
    }
}


function readFormData(){
    let formData = {};
    formData["fullName"] = document.getElementById("fullName").value;
    formData["amount"] = document.getElementById("amount").value;
    return formData;
}


function createDebt(data){
    let table = document.getElementById("debtList").getElementsByTagName('tbody')[0];
    let newRow = table.insertRow(table.length);
    let cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;
    let cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.amount;
    let cell3 = newRow.insertCell(2);
    cell3.innerHTML = `<a class="tblBtn" onClick="onEdit(this)">Edit</a>
                       <a class="tblBtn" onClick="onDelete(this)">Delete</a>`;
}

// To Reset the data of fill input
function resetForm(){
    document.getElementById('fullName').value = '';
    document.getElementById('amount').value = '';
    selectedRow = null;
}

// For Edit operation
function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById('fullName').value = selectedRow.cells[0].innerHTML;
    document.getElementById('amount').value = selectedRow.cells[1].innerHTML;
}
function updateDebt(formData){
    selectedRow.cells[0].innerHTML = formData.fullName;
    selectedRow.cells[1].innerHTML = formData.amount;
}
function onDelete(td){
    if(confirm('Are you sure you want to delete this record?')){
        row = td.parentElement.parentElement;
        document.getElementById('debtList').deleteRow(row.rowIndex);
        resetForm();
    }
}

//Promise
let innie = 3;
const myPromise = new Promise(function(resolve, reject) {
    console.log("Promise run...");
    if (innie === 1) resolve("Huraay, we're good")
    else if (innie === 2) reject("Oops, we have been rejected")
    else throw new Error('Promise error has occurred');
})

myPromise
    .then(function(successMessage) {
        console.log(successMessage);
    }, function(errorMessage) {
        //error handler function is invoked
        console.log(errorMessage);

    })
    .then(() => {
        throw new Error('Something failed');
        //This will not be logged because an error is thrown
        //Therefore will skip to the catch
        console.log("Error thrown");
    })
    .catch(function(errorMessage) {
        console.log(errorMessage);
    });


//Inbuilt event
const searchTxt = document.getElementById('searchMe');

searchTxt.addEventListener('keyup', () => {
    console.log(searchTxt.value)
});



//Custom event (Event)
//Assign an event
const customEvent1 = new Event("shout");
const customEvnt1Btn = document.getElementById('customEvent1Btn');

//Trigger the event listener
customEvnt1Btn.addEventListener("shout", () => {
    console.log("Let's get loud!")
});

//Dispatch the event
customEvnt1Btn.addEventListener("click", () => {
    customEvnt1Btn.dispatchEvent(customEvent1);
});



//Custom event (Custom Event)
const customEvnt2Btn = document.getElementById('customEvent2Btn');

const myCustom = new CustomEvent('vinn', {
    detail: {
        title: "Vinn's event"
    }
});

customEvnt2Btn.addEventListener('vinn', (e) => {
    console.log(e.detail.title);
});

customEvnt2Btn.addEventListener('click', () => {
    customEvnt2Btn.dispatchEvent(myCustom);
});


//Dynamic typing
let a = 10;
console.log("Dynamic before: " + a);

a = "abc"
console.log("Dynamic after: " +a);