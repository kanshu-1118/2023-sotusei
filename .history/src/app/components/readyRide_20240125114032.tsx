import { css } from "../../../styled-system/css";


function ReadyRide(){
    return(
        <div className={css({
            width:"100vw",
            height:"100vh",
            bgColor:"#000",
            opacity:"70%"
        })}>
            <div className={css({
                width:"100vw",
                height:"auto",
                padding:"11px 20px",
                borderRadius:"8px",
                bgColor:"#fff"
            })}>
                <div className={css({
                    display:"flex",
                    width:"100%",
                })}>
                    <h3 className={css({
                        marginLeft:"10px"
                    })}>仮</h3>
                    <img src="" alt="" />
                </div>
                <div className={css({
                    display:"flex",
                })}>
                    <div>
                        <img src="" alt="" />
                        <img src="" alt="" />
                    </div>
                    <div>
                        <p></p>
                        <div>
                            <p></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ReadyRide;