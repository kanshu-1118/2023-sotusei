import { css } from '../../../styled-system/css';


function MyAccountInfo(){
    return(
        <div>
            <div className={css({
                width:"100vw",
                padding:"12px",
                bgColor:"#F57F17",
                borderRadius:"8px 8px 0px 0px",
                textAlign:"center",
                color:"#fff"
            })}>
                <p>アカウント情報</p>
            </div>
            <div className={css({
                padding:"16px"
            })}>
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
                <button type='button'>ログアウト</button>
                <p>退会手続き</p>
            </div>
        </div>
    )
}
export default MyAccountInfo;