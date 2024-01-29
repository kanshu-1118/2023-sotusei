import { css } from "../../../styled-system/css";
import Image from "next/image";


function ReadyRide(){
    return(
        <div className={css({
            width:"100vw",
            height:"100vh",
            bgColor:"rgba(0,0,0,0.7)",
            // opacity:"70%",
            // zIndex:"-10",
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
                    alignItems:"center",
                    width:"100%",
                })}>
                    <h3 className={css({
                        marginLeft:"10px"
                    })}>仮</h3>
                    <div className={css({
                        width:"48px",
                        height:"48px",
                        bgColor:"#D9D9D9",
                        borderRadius:"50%",
                        display:"flex",
                        alignItems:"center",
                        justifyContent:"center",
                    })}>
                        <img src="image/heart.svg" alt="" />
                    </div>
                </div>
                <div className={css({
                    display:"flex",
                    width:"100%",
                    justifyContent:"space-between"
                })}>
                    <div className={css({
                        display:"flex",
                    })}>
                        <img src="image/gentuki.svg" alt="" />
                        <img src="image/motarBike.svg" alt="" />
                    </div>
                    <div className={css({
                        display:"flex",
                        alignItems:"center",
                        justifyContent:"space-between",
                        width:"192px",
                        height:"48px",
                        padding:"0px 14px",
                        bgColor:"#2E2E2E",
                        color:"#fff",
                        borderRadius:"4px"
                    })}>
                        <p>返却する</p>
                        <div className={css({
                            display:"flex",
                            justifyContent:"center",
                            alignItems:"center",
                            width:"80px",
                            height:"24px",
                            bgColor:"#F15742",
                            borderRadius:"4px",
                            fontWeight:"bold",
                            fontSize:"14px"
                        })}>
                            <p>残り{}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ReadyRide;