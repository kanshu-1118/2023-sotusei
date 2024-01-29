import { css } from "../../../styled-system/css";
import Image from "next/image";


function ReadyRide(){
    return(
    <div className={css({
            width:"100vw",
            height:"auto",
            padding:"11px 20px",
            borderRadius:"8px 8px 0px 0px",
            bgColor:"#fff",
            animation:"slideUp",
        })}>
            <div className={css({
                display:"flex",
                justifyContent:"space-between",
                alignItems:"center",
                width:"100%",
            })}>
                <h3 className={css({
                    marginLeft:"10px",
                    fontWeight:"bold"
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
                justifyContent:"space-between",
                marginTop:"20px"
            })}>
                <div className={css({
                    display:"flex",
                })}>
                    <div className={css({
                        display:"flex",
                        alignItems:"center",
                        justifyContent:"center",
                        width:"48px",
                        height:"48px",
                        bgColor:"#D9D9D9",
                        borderRadius:"4px",
                        position:"relative",
                        marginRight:"24px"
                    })}>
                        <img src="image/gentuki.svg" alt="" />
                        <div className={css({
                            display:"flex",
                            alignItems:"center",
                            justifyContent:"center",
                            width:"40px",
                            height:"24px",
                            bgColor:"#F57F17",
                            fontSize:"14px",
                            borderRadius:"12px",
                            position:"absolute",
                            top:"-12px",
                            right:"-20px",
                            color:"#fff",
                            fontWeight:"bold"
                        })}>
                            <p>{}台</p>
                        </div>
                    </div>
                    <div className={css({
                        display:"flex",
                        alignItems:"center",
                        justifyContent:"center",                            
                        width:"48px",
                        height:"48px",
                        bgColor:"#D9D9D9",
                        borderRadius:"4px",
                        position:"relative"
                    })}>
                        <img src="image/motarBike.svg" alt="" />
                        <div className={css({
                            display:"flex",
                            alignItems:"center",
                            justifyContent:"center",
                            width:"40px",
                            height:"24px",
                            bgColor:"#F57F17",
                            fontSize:"14px",
                            borderRadius:"12px",
                            position:"absolute",
                            top:"-12px",
                            right:"-20px",
                            color:"#fff",
                            fontWeight:"bold"

                        })}>
                            <p>{}台</p>
                        </div>

                    </div>
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
            <div className={css({
                display:"flex",
                justifyContent:"space-between",
                width:"100%",
                marginTop:"19px"
            })}>
                <div className={css({
                    width:"160px",
                    height:"96px",
                    bgColor:"#D9D9D9"
                })}></div>
                <div className={css({
                    width:"160px",
                    height:"96px",
                    bgColor:"#D9D9D9"
                })}></div>
            </div>
            <div className={css({
                display:"flex",
                justifyContent:"space-around",
                width:"100%",
                marginTop:"16px",
                fontSize:"10px",
                textAlign:"center",
                fontWeight:"bold"
            })}>
                <div className={css({
                    width:"64px",
                    height:"64px",
                    border:"solid 1px #000",
                    borderRadius:"4px",
                    paddingTop:"7px"
                })}>
                    <img src="image/gentuki.svg" alt="" className={css({
                        margin:"0 auto"
                    })}/>
                    <p>YAMAHA</p>
                    <p>jog</p>
                </div>
                <div className={css({
                    width:"64px",
                    height:"64px",
                    border:"solid 1px #000",
                    borderRadius:"4px",
                    paddingTop:"7px"

                })}>
                    <img src="image/gentuki.svg" alt=""  className={css({
                        margin:"0 auto"
                    })}/>
                    <p>HONDA</p>
                    <p>Dio</p>
                </div>
                <div className={css({
                    width:"64px",
                    height:"64px",
                    border:"solid 1px #000",
                    borderRadius:"4px",
                    paddingTop:"7px"

                })}>
                    <img src="image/motarBike.svg" alt=""  className={css({
                        margin:"0 auto"
                    })}/>
                    <p>YAMAHA</p>
                    <p>YZF-R25</p>
                </div>
                <div className={css({
                    width:"64px",
                    height:"64px",
                    border:"solid 1px #000",
                    borderRadius:"4px",
                    paddingTop:"7px"

                })}>
                    <img src="image/motarBike.svg" alt=""  className={css({
                        margin:"0 auto"
                    })}/>
                    <p>KAWASAKI</p>
                    <p>Ninja250R</p>
                </div>
            </div>
        </div>
    )
}


export default ReadyRide;