import image from './assets/img.jpg'
function Card(){

    return(
        <div className="card">
            <img className='card-img' src={image} alt="Profile pic" title="Profile Picture" />
            <h2 className='card-title'>Anas Muhammed</h2>
            <p className='card-text'> Hi👋🏻,I am Anas Muhammed. I probabily write some interesting code for living 💸. Most probabily I code in MERN stack Domain using Javascript 🧑🏻‍💻 </p>
        </div>
    )

}
export default Card