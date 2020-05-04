const tbdStyle = "fa-circle";
const doneStyle = "fa-check-circle";
const tbdText = "text";
const doneText = "text-done";
const list = document.getElementById("list");
const inputField = document.getElementById("inputField");


function addToList(inputString){
   const completed = tbdStyle; 
   const textStyle = tbdText;
   const item = `<li class=item>
                <i class="far ${completed}" onclick="markAsDone(this)"></i>
                <p class="${textStyle}">${inputString}</p>
                <i class="fas fa-minus-circle" onclick="removeFromList()"></i>
                </li>
                `;
        list.insertAdjacentHTML("beforeend", item);
        
    
}

function removeFromList(){
    event.target.parentNode.parentNode.removeChild(event.target.parentNode);

}

function markAsDone(element){

    element.classList.toggle(tbdStyle);
    element.classList.toggle(doneStyle);
    element.parentNode.querySelector("p").classList.toggle(tbdText);
    element.parentNode.querySelector("p").classList.toggle(doneText);
   
}
document.addEventListener("keyup", function(){
    
    if(event.keyCode == 13){
        const inputString = inputField.value;
        if(inputString === ''){
            alert('Please enter the name of the item before adding it.');
        } 
        else {
            addToList(inputString);
            inputField.value="";
        }
        
    }
});