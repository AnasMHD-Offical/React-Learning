import React , {useState} from "react"

function TodoList(){

    const [task , setTask] = useState(["Eat breakfast correctly"])
    const [newTask , setNewTask] = useState("")
    const [btnState,setBtnState] = useState("Add")



    function handleInputChange(event){
        setNewTask(event.target.value)
    }
    function addTask(event){
        setBtnState("Add")
        if(newTask.trim() !== ""){
            setTask(t =>[...t,newTask])
            setNewTask("")
            document.getElementById("input-box").value = ""
        }
    }
    function deleteTask(index){
        const updatedTask = task.filter((_,i)=> i!== index)
        setTask(updatedTask)
    }
    function editTask(index){
        setBtnState("Edit")
        const edit = task[index]
        let input = document.getElementById("input-box").value
        if(input === ""){
            document.getElementById("input-box").value = edit
            task[index] = document.getElementById("input-box").value
            task.splice(index,1)
            setTask(t=>[...t])
        }
        
    }
    function moveTaskUp(index){
        if(index > 0){
            const upTask = [...task]
            console.log(upTask);
            
            [upTask[index],upTask[index - 1]] = [upTask[index - 1],upTask[index]]
            setTask(upTask)
        }
    } 
    function moveTaskDown(index){
        if(index < task.length -  1){
            const downTask = [...task]
            console.log(downTask);
            
            [downTask[index],downTask[index +1]] = [downTask[index + 1],downTask[index]]
            setTask(downTask)
        }
    }
    function Completed(e){
        e.target.style.textDecoration = "line-through  5px #0C4854"
    }
    function UndoCompleted(e){
        e.target.style.textDecoration = ""
    }
    return(
    <div className="Todo-list">
        <h1 className="Todo-h1"> Todo List</h1>
        <div className="Todo-input-container">
            <input className="Todo-input-box" type="text" onChange={handleInputChange} id="input-box"  placeholder="Enter a task" />
            <button className="Todo-add-btn" onClick={addTask}>{btnState}</button>
        </div>
        <ol className="task-list">
            {task.map((task,index)=>
                <li className="task-link"key={index} onClick={(e)=>Completed(e)} onDoubleClick={(e)=>UndoCompleted(e)}><span className="text">{task}</span>
                <div className="list-btn">
                <button onClick={() => deleteTask(index)} className="delete-task"><box-icon name='x' color='#bae7ec' ></box-icon></button>
                
                 <button onClick={() => editTask(index)} className="edit-task"><box-icon name='edit-alt' type='solid' color='#bae7ec' ></box-icon> </button> 
                
                <button onClick={() => moveTaskUp(index)} className="moveUp-task"><box-icon name='chevrons-up' color='#bae7ec' ></box-icon></button>
                
                <button onClick={() => moveTaskDown(index)} className="moveDown-task"><box-icon name='chevrons-down' color='#bae7ec' ></box-icon></button>
                </div>

                </li>
            )}
        </ol>
    
    
    </div>)
}

export default TodoList