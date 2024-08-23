//How to Style react components with css
/* 
1.External
2.Modules
3.Inline
*/ 

//Module css adding
import  styles from './Button.module.css'

function Button(){

// inline css adding
    // const style = {
    //     outline: 'none',
    //     border: '1px solid' ,
    //     borderRadius: '30px',
    //     padding: '15px',
      
    //     cursor: 'pointer',
        
    //     color: 'aliceblue',
    //     backgroundColor: 'rgb(0, 64, 255)',
      
    //     fontFamily: 'monospace',
    //     fontSize: '20px',
    //     fontWeight: '600',
    // }
    return(
        <button className={styles.btn}>Hello World</button>
    )
}

export default Button