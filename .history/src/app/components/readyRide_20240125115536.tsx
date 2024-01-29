import { css } from "../../../styled-system/css";
import Image from "next/image";


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
                    justifyContent:"space-between",
                    width:"100%",
                })}>
                    <h3 className={css({
                        marginLeft:"10px"
                    })}>仮</h3>
                    <img src="image/circle.svg" alt="" />
                </div>
                <div className={css({
                    display:"flex",
                })}>
                    <div>
                        <img src="" alt="" />
                        <img src="" alt="" />
                    </div>
                    <div>
                        <p>返却する</p>
                        <div>
                            <p>残り{}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ReadyRide;