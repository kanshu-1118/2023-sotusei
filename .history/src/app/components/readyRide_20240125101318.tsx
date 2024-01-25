import { css } from "../../../styled-system/css";


function ReadyRide(){
    return(
        <div>
            <div className={css({
                width:"100vw",
                height:"auto",
                padding:"11px 20px",
                borderRadius:"8px",
                bgColor:"skyblue"
            })}>
                <div>
                    <h3 className={css({
                        marginLeft:"10px"
                    })}>仮</h3>
                </div>
            </div>
        </div>
    )
}


export default ReadyRide;