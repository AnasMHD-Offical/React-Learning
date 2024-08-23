import propTypes from 'prop-types'

function UserGreeting(props){
//    if(props.isLoggedIn){
//         return(<h2>Welcome {props.username}</h2>)
//    }else{
//         return( 
//              <h2>Please Log-In to continue</h2>
//          )
//    }
   const welcomeMsg = <h2 className="welcome-msg">🎉Welcome {props.username}🎉</h2>
   const loginMsg = <h2 className="login-msg">⚠️ Please login to continue ⚠️</h2>
   return(props.isLoggedIn ? welcomeMsg: loginMsg)
}

UserGreeting.propTypes = {
   isLoggedIn: propTypes.bool,
   username: propTypes.string
}
UserGreeting.defaultProps = {
   isLoggedIn:false,
   username:"Guest"
}

export default UserGreeting