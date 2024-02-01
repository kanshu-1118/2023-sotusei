import { css } from "../../../styled-system/css"

function RideMeter(){
    return(
        <div className={css({
            width:"240px",
            height:"auto",
            boxShadow:"0px 5px 15px 0px rgba(0,0,0,.13)",
            borderRadius:"8px"
        })}>
            <div className={css({
                height:"24px",
                bgColor:"#EE875A",
                borderRadius:"8px 8px 0px 0px",
                textAlign:"center",
                color:"#fff"
            })}>
                <p>ライド中</p>
            </div>
            <div className={css({
                display:"flex",
                width:"100%"
            })}>
                <div>
                    <p>走行距離</p>
                    <p>{}km</p>
                </div>
                <div>
                    <p>走行時間</p>
                    <p>{}</p>
                </div>
                <div>
                    <p>料金</p>
                    <p>{}円</p>
                </div>
            </div>
        </div>
    )
}

export default RideMeter