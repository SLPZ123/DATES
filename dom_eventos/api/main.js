/*senate */
const copSenate = Array.from(senate.results[0].members);
let tableArray =[];
let table = document.getElementById("tbody");
const $btncheck1 = document.getElementById('btncheck1')
const $btncheck2 = document.getElementById('btncheck2')
const $btncheck3 = document.getElementById('btncheck3')
const $stateSelect = document.getElementById('stateSelect');
let states = [0,0,0];

showData(copSenate);

/*toggle */
function toggle(estado){
    switch(estado){
        case 0:
            estado = 1;
            break;
        case 1:
            estado = 0;
            break;
    }
    return estado;
}

function sum(arr){
    let suma = 0;
    arr.forEach(element =>{
        suma += element;
    })
    return suma;
}


/*DATA TABLE */
function showData(array){
    table.innerHTML = "";
    array.forEach((element) => {
        table.innerHTML += `
        <tr>
            <td><a href="${element.url}" TARGET="_blank">${element.first_name} ${element.last_name}</a></td>
            <td class="text-center">${element.party}</td>
            <td class="text-center">${element.state}</td>
            <td class="text-center">${element.seniority}</td>
            <td class="text-center">${element.votes_with_party_pct}</td>
        </tr>
        `;
    });
}

/*addEventListener checkbox */


//CHECKBOX1
$btncheck1.addEventListener('click',e => {
    if(states[0] == 0){
        copSenate.forEach(element  => {
            if(element.party == 'D'){
                tableArray.push(element)
            }
        })
    }else{
        tableArray = tableArray.filter(element => element.party != 'D')
    }
    states[0] = toggle(states[0]);
    if(sum(states) ==0){
        showData(copSenate);
    }else{
        showData(tableArray);
    }
})
//CHECKBOX2
$btncheck2.addEventListener('click',e => {
    if(states[1] == 0){
        copSenate.forEach(element  => {
            if(element.party == 'R'){
                tableArray.push(element)
            }
        })
    }else{
        tableArray = tableArray.filter(element => element.party != 'R')
    }
    states[1] = toggle(states[1]);
    if(sum(states) ==0){
        showData(copSenate);
    }else{
        showData(tableArray);
    }
})
//CHECKBOX3
$btncheck3.addEventListener('click',e => {
    if(states[2] == 0){
        copSenate.forEach(element  => {
            if(element.party == 'ID'){
                tableArray.push(element)
            }
        })
    }else{
        tableArray = tableArray.filter(element => element.party != 'ID')
    }
    states[2] = toggle(states[2]);
    if(sum(states) ==0){
        showData(copSenate);
    }else{
        showData(tableArray);
    }
})




//select menu
$stateSelect.addEventListener('change',e =>
{
    let value = $stateSelect.value;
    if (value){
        tableArrayState = tableArray.filter(element => element.state == value);
        if(tableArrayState.length == 0){
            tableArrayState.push({'first_name':'No data meets the filters applied',
                                    'last_name':'',
                                    'url':'../../home.html',
                                    'party':'',
                                    'state':'',
                                    'seniority':'',
                                    'votes_with_party_pct':''});
        }
        showData(tableArrayState);
    }else{
        showData(tableArray);
    }

})




