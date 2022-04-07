import "./navbar.css"

export  const Navbar =() =>{

    const lnk = ["Services","Project","About"]

    return(
        <div className="nav">
            <div className="lgo">
                <h1>LOGOBAKERY</h1>
            </div>
            <div className="lnk">
                {lnk.map((e)=>(
                    <a href="">{e}</a>
                ))}
            </div>
            <div className="btn">
                <button>Contact</button>
            </div>

        </div>
    );

}