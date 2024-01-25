import { css } from "../../../styled-system/css";


function ReadyRide(){
    return(
        <div className={css({
            width:"100vw",
            height:"auto",
            padding:"11px 20px",
            borderRadius:"8px",
            bgColor:"skyblue"
        })}>
            <h3 className={css({
                marginLeft:"10px"
            })}>仮</h3>
        </div>
    )
}


export default ReadyRide;