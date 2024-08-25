import image from "./assets/added1.png"
let count = 1

//click events in react : the event that help us to perform different operations like perform most of the click events in js 
    function Button(props){

        const handleClick = () => console.log("button clicked ouch!");
        const handleClickCb = (name) => console.log(`${name} Stop doing it`);

        const handleClickCount =  () =>{
            count <= 3 ? console.log(`${props.name} you clicked me ${count++}`) : console.log("Stop doing it");
        }

        const handleClickEvent = (e) => e.target.textContent = "Ouch! 🤕";
        const handleImgEvent = (e) => e.target.style.visibility = "hidden";
        const handleDoubleClickEvent = (e) => e.target.textContent = "Ouch! Ouch! 🤕";
        

        const handleCount = () => console.log(`Count : ${count++}`);
        const handleResetCount = () => console.log(`Count : ${count = 0}`);
        
        
        return(
            <>
            <img src={image} alt="image" onClick={handleCount} style={{width:'200px',borderRadius:'12px',boxShadow:"8px 8px 3px black"}}/>
            <br />
            <br />
            <img src={image} alt="image" onClick={(e)=> handleImgEvent(e) } style={{width:'200px',borderRadius:'12px',boxShadow:"8px 8px 3px black"}}/>
            <br />
            <br />
            <button onDoubleClick={(e)=> handleDoubleClickEvent(e)}> Click me for event </button>
            &nbsp;
            <button onClick={(e)=> handleClickEvent(e)}> Click me for event </button>
            &nbsp;
            <button onClick={handleClickCount}> Click me til 3  </button>
            &nbsp;
            <button onClick={()=>handleClickCb(props.name,handleClick())}> don't Click me  </button>
            &nbsp;
            <button onClick={() => handleClickCb(props.name)}> Click me </button>
            &nbsp;
            <button onClick={handleCount}> count </button>
            &nbsp;
            <button onClick={handleResetCount}> Reset count </button>
            </>
        )
    }

    export default Button