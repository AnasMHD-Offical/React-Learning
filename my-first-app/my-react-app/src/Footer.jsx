function Footer(){

    return(
        <footer>
            <ul >
                <li><a href="#">About</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms & conditions</a></li>
            </ul>
            {/* For adding javascript to the componets we use {} for it and write js code inside the braces */}
            <p>&copy;{new Date().getFullYear()} All rights reserved by Anas Muhammed</p>
            
        </footer>
    )
}

export default Footer