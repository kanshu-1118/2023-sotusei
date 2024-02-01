import { css } from '../../../styled-system/css';


function MyAccountInfo(){
    return(
        <div>
            <div className={css({
                width:"100vw",
                padding:"12px",
                bgColor:"#F57F17"
            })}>
                <p>アカウント情報</p>
            </div>
            <div>
                <p>プロフィール情報</p>
                <div>
                    <div>
                        <p>氏名</p>
                        <p>{}</p>
                    </div>
                    <div>
                        <p>生年月日</p>
                        <p>{}</p>
                    </div>
                    <div>
                        <p>メールアドレス</p>
                        <p>{}</p>
                    </div>
                    <div>
                        <p>電話番号</p>
                        <p>{}</p>
                    </div>
                </div>
                <p>通知設定</p>
                <div>
                    <p>メール通知設定</p>
                    <button type="button">＞</button>
                </div>
                <p>支払い情報</p>
                <div>
                    {}
                </div>
            </div>
        </div>
    )
}
export default MyAccountInfo;