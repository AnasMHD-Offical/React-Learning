function Card(props){
    return(
        <div className="card">
            <img className='card-img' src={props.image} alt="Profile pic" title="Profile Picture" />
            <h2 className='card-title'>{props.name}</h2>
            <p className='card-text'> Hi👋🏻,I am {props.name}. I probabily write some interesting code for living 💸. Most probabily I code in MERN stack Domain using Javascript 🧑🏻‍💻 </p>
        </div>
    )
}

export default Card