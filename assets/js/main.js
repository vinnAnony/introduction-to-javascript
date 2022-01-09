let selectedRow = null;
function submitForm(e){
    event.preventDefault();
    let fName = document.getElementById("fullName").value;
    let dAmount = document.getElementById("fullName").value;
    if ( dAmount!== "") {
        let formData = readFormData();
        if (selectedRow === null) {
            createDebt(formData);
        } else {
            updateDebt(formData)
        }
        resetForm();
    }
    else {
        alert("Invalid input")
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