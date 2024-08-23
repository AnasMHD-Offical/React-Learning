function Food(){

    const Food1 = "Pizza"
    const Food2 = "Burger"
    const Food3 = "Biriyani"
    const i = 1
    return(
        <section>
            <h1>Menu</h1>
            <ul id="foodlist">
                <li>{Food1}</li>
                <li>{Food2}</li>
                <li>{ i === 1 ? Food3.toUpperCase() : Food3 }</li>
            </ul>
            <hr />
        </section>
    )
}

export default Food