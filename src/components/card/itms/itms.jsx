import "./itms.css"

export const Items = (arr) =>{

    let a = arr.arr

    
    console.log(a)
    

    return(
        <>

        <ul>
            {a.map((e)=>(
                <li>{e}</li>
            ))}
        </ul>

        </>
    );

}