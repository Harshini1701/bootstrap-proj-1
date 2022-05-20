const taskContainer = document.querySelector(".task_container");

let globalstore=[];

const updatelocalstorage=() =>{
    localStorage.setItem("tasky",JSON.stringify({cards:globalstore}));
}

const newcard =({id,imageUrl,taskTitle,taskType,taskDescription,}) =>`<div class="col-md-6 col-lg-4" id=${id}>
<div class="card text-center">
    <div class="card-header d-flex justify-content-end gap-2">
        <button type="button" class="btn btn-outline-success" ><i class="fa-solid fa-pen"></i></button>
        <button type="button" class="btn btn-outline-danger" id=${id} onclick="deletecard.apply(this,arguments)"><i class="fa-solid fa-trash-can" id=${id} onclick="deletecard.apply(this,arguments)"></i></button>
    </div>
    <div class="card-body text-start">
        <img src=${imageUrl} />
        <h5 class="card-title">${taskTitle}</h5>
        <p class="card-text">
            ${taskDescription}
        </p>
        <span class="badge bg-primary">${taskType}</span>
    </div>
    <div class="card-footer text-muted ">
        <button type="button" class="btn btn-outline-primary float-end">Open Task</button>
    </div>
</div>
</div>`;

const loadinitialtaskcards= () => {
//access local storage

const getinitialdata=localStorage.getItem("tasky");
if(!getinitialdata) return;

//covert stringified object to normal object

const { cards } = JSON.parse(getinitialdata); 


cards.map((cardobject) => {
    const createnewcard = newcard(cardobject);
    taskContainer.insertAdjacentHTML("beforeend",createnewcard);
    globalstore.push(cardobject);
});
};






const saveChanges = () =>{
    const taskData={
        id:`${Date.now()}`, //unique number each time
        imageUrl:document.getElementById("imageurl").value,
        taskTitle:document.getElementById("tasktitle").value,
        taskType:document.getElementById("tasktype").value,
        taskDescription:document.getElementById("taskdesc").value,
    };

    const createnewcard= newcard(taskData);
    taskContainer.insertAdjacentHTML("beforeend",createnewcard);
    globalstore.push(taskData);
    
//addd to local storage
    updatelocalstorage();
};


const deletecard =(event) => { 

    event = window.event;    //event will fetch the html of the card
    const targetid =event.target.id;
    const tagname = event.target.tagName; //returns BUTTON

    globalstore = globalstore.filter((cardobject)=> cardobject.id !== targetid);

    updatelocalstorage();

    if(tagname === "BUTTON"){
        return taskContainer.removeChild(
            event.target.parentNode.parentNode.parentNode
        );
    }

    return taskContainer.removeChild(
        event.target.parentNode.parentNode.parentNode.parentNode
    );

};