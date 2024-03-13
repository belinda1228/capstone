const URL = 'http://localhost:4000'

const mylist = document.querySelector('#mylist');
const addItemForm = document.querySelector('#add-item-form');
const newItemField = document.querySelector('#new-item-field');
const itemCallback = ({ data: item }) => showMyList(item)
const errCallback = err => console.log(err.response.data)
const deleteItem = id => axios.delete(`${URL}/${id}`).then(itemCallback).catch(errCallback)


function insertItem(item){
    const li = document.createElement('li');
    li.innerHTML = `${item.task}
    <button onclick="deleteItem(${item.id})">Delete</button>`;
    mylist.appendChild(li);
}

function showMyList(){
    // mylist.replaceChildren();
    axios.get(`${URL}/mylist`)
        .then(result=>{
            for (const item of result.data){
                insertItem(item);
            }
        });
}


addItemForm.addEventListener('submit', evt =>{
    console.log('hey')
    evt.preventDefault();
    const added = {
        "task": newItemField.value
        // "amount": amount.value
    };
    axios.post(`${URL}/mylist`, added)
        .then(result=>{
            newItemField.value = '';
            amount.value ='';
            showMyList();
        });

});

mylist.addEventListener('delete',(id)=>{
    axios.delete(`${URL}/mylist/${id}`)
        .then(() => showMyList())
        .catch(err => console.log(err))

})

showMyList();