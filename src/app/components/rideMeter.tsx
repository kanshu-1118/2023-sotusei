import { css } from "../../../styled-system/css"

function RideMeter(){
    return(
        <div className={css({
            width:"240px",
            height:"auto",
            boxShadow:"0px 5px 15px 0px rgba(0,0,0,.13)",
            borderRadius:"8px",
            position:"absolute",
            top:"50px",
            right:"0px",
            left:"0px",
            margin:"auto"
        })}>
            <div className={css({
                height:"24px",
                bgColor:"#EE875A",
                borderRadius:"8px 8px 0px 0px",
                textAlign:"center",
                color:"#fff",
                fontSize:"14px"
            })}>
                <p>ライド中</p>
            </div>
            <div className={css({
                display:"flex",
                justifyContent:"space-between",
                width:"100%",
                padding:"8px 11px"
            })}>
                <div className={css({textAlign:"center"})}>
                    <p className={css({fontSize:"10px",color:"#646464"})}>走行距離</p>
                    <p className={css({fontSize:"18px"})}>{}km</p>
                </div>
                <div className={css({textAlign:"center"})}>
                    <p className={css({fontSize:"10px",color:"#646464"})}>走行時間</p>
                    <p className={css({fontSize:"18px"})}>{}</p>
                </div>
                <div className={css({textAlign:"center"})}>
                    <p className={css({fontSize:"10px",color:"#646464"})}>料金</p>
                    <p className={css({fontSize:"18px"})}>{}円</p>
                </div>
            </div>
        </div>
    )
}

export default RideMeter