import useScrollTop from "../../hooks/use-scroll-top";
import {useNavigate} from "react-router-dom";

const EventParticipate = () => {
    const { stick} = useScrollTop();
    const navigate = useNavigate();

    const onClickHandler = () => {
        // 로그인한 회원의 정보를 가져오는 로직을 추가합니다.
        // 예를 들어, 로컬 스토리지나 컨텍스트에서 회원 정보를 가져올 수 있습니다.
        const userInfo = getUserInfo(); // 이 함수는 로그인된 사용자 정보를 가져오는 예시 함수입니다.

        // 회원 정보를 관리자 페이지로 이동시키는 로직을 추가합니다.
        navigate('/admin', { state: { userInfo } });
    };

    if (stick) {
        return (
            <div className="pro-details-cart btn-hover"
                 style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "15vh", marginTop: "-60px" }}
            >
            {/*<button*/}
            {/*    aria-label="회원 이벤트 참가"*/}
            {/*    type="button"*/}
            {/*    className="Event Participation"*/}
            {/*    onClick={onClickHandler}*/}
            {/*    style={{ padding: "8px 30px", fontSize: "16px",  marginBottom: "60px"}}*/}
            {/*>*/}
            {/*  Join Us*/}
            {/*</button>*/}
                <h5>
                    ※ 참가 희망을 원하시는 회원분들께서는 아이디와 메일 그리고 이벤트에 대한 사연을 아래의 메일로 보내주세요.
                    <h6>
                    Email : friendyadm@gmail.com
                    <br/>
                    FAQ : 010-9242-6643</h6></h5>

            </div>
        );
    }
    return null;
};

const getUserInfo = () => {
    // 실제로는 로그인된 사용자 정보를 가져오는 로직이 필요합니다.
    // 여기는 예시로 임의의 사용자 정보를 반환합니다.
    return {
        id: 123,
        name: "홍길동",
        email: "hong@example.com"
    };
};

export default EventParticipate;