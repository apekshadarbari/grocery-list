//---------- Declaration of variables to be used in the script  ----------

const tbdStyle = "fa-circle";
const doneStyle = "fa-check-circle";
const tbdText = "text";
const doneText = "text-done";
const list = document.getElementById("list");
const inputField = document.getElementById("inputField");


//---------- Event Listener to check for 'Enter' key code on a key press and call addToList() if true ----------

document.addEventListener("keyup", function(){
    
    if(event.keyCode == 13){
        addToList();
    } 
});


//---------- Function to add new item to the list ----------

function addToList(){
   

    
    if(inputField.value === ''){
            alert('Please enter the name of the item before adding it.');
        } 
        else {
           
         
            const item = `<li class=item>
                          <i class="far ${tbdStyle}" onclick="toggleClasses(this)"></i>
                          <p class="${tbdText}">${inputField.value}</p>
                          <i class="fas fa-minus-circle" onclick="removeFromList()"></i>
                          </li>`;
            list.insertAdjacentHTML("beforeend", item);
            inputField.value="";
        }
    
} 


//---------- Function to remove selected item to the list ----------

function removeFromList(){
    event.target.parentNode.remove();

}


//---------- Function to toggle between done and to be done for selected item ----------

function toggleClasses(element){

    element.classList.toggle(tbdStyle);
    element.classList.toggle(doneStyle);
    element.parentNode.querySelector("p").classList.toggle(tbdText);
    element.parentNode.querySelector("p").classList.toggle(doneText);
   
}


