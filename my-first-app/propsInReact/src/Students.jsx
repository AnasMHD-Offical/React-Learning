import propTypes from 'prop-types'

function Student(props){
    return(
        <div className="Student">
            <p>Name : {props.name}</p>
            <p>Age : {props.age}</p>
            <p>Student : {props.isStudent?"Yes":"No"}</p>
        </div>
    )
}
//propsType In this type we can specify the datatype of that props 
Student.propTypes = {
    name: propTypes.string,
    age: propTypes.number,
    isStudent: propTypes.bool
}

Student.defaultProps = {
    name:"Guest",
    age:0,
    isStudent:false
}

export default Student