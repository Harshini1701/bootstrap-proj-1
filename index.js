const taskContainer = document.querySelector(".task_container");

const newcard =({id,imageUrl,taskTitle,taskType,taskDescription,}) =>`<div class="col-md-6 col-lg-4" id=${id}>
<div class="card text-center">
    <div class="card-header d-flex justify-content-end gap-2">
        <button type="button" class="btn btn-outline-success"><i class="fa-solid fa-pen"></i></button>
        <button type="button" class="btn btn-outline-danger"><i class="fa-solid fa-trash-can"></i></button>
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

};