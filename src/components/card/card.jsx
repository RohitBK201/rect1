import "./card.css"
import { Items } from "./itms/itms";

export const Card =() =>{

    const data =[{ title : "Mobile Operating System",
                    os : ["Android","Blackberry","iPhone","windows Phone"]},
                    { title : "Mobile Manufacture",
                    os : ["Samsung","HTC","Micromax","Apple"]}]


    return(
        <div>
            { data.map((e)=>(

               <>

                <h1>{e.title}</h1>

                <Items arr={e.os} />


               </>
                
            ))}
        </div>
    );

} 