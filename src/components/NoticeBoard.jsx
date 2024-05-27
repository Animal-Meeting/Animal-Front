import React from "react";
import "./NoticeBoard.css";

const NoticeBoard = ( ) => {
    return (
        <div className="noticeboard-container"> 
            <div className="noticeboard-header">
                이런 동물상이 있어요!
            </div>
            <div className="noticeboard-main">
                {/* <div className="noticeboard-content">
                    성별을 고르고 시작 버튼을 누른 뒤, <br/>
                    5초간 카메라를 응시해주세요.<br/> 
                    
                </div> */}
                <div className="noticeboard-animal-list-container">
                    <div className="noticeboard-woman">
                            여자 
                            <div className="woman-animal-wrapper"> 
                            <img src={`${process.env.PUBLIC_URL}/img/woman-animal/dog-woman.png`}/>
                            <img src={`${process.env.PUBLIC_URL}/img/woman-animal/cat-woman.png`}/>
                            <img src={`${process.env.PUBLIC_URL}/img/woman-animal/fox.png`}/>
                            <img src={`${process.env.PUBLIC_URL}/img/woman-animal/rabbit-woman.png`}/>
                            <img src={`${process.env.PUBLIC_URL}/img/woman-animal/deer.png`}/>
                            <img src={`${process.env.PUBLIC_URL}/img/woman-animal/hamster.png`}/>
                            </div>    
                    </div>
                    <div className="noticeboard-man">
                            남자
                            <div className="man-animal-wrapper"> 
                            <img src={`${process.env.PUBLIC_URL}/img/man-animal/dog.png`}/>
                            <img src={`${process.env.PUBLIC_URL}/img/man-animal/cat-man.png`}/>
                            <img src={`${process.env.PUBLIC_URL}/img/man-animal/wolf.png`}/>
                            <img src={`${process.env.PUBLIC_URL}/img/man-animal/rabbit-man.png`}/>
                            <img src={`${process.env.PUBLIC_URL}/img/man-animal/dinosaur.png`}/>
                            <img src={`${process.env.PUBLIC_URL}/img/man-animal/bear.png`}/>
                            </div>    
                    </div>
                </div>
                <div className="noticeboard-animal">
                    저희 부스는 이런 체험을 할 수 있어요!
                </div>

                <div className="noticeboard-booth">
                    <div className="noticeboard-measurement">
                        <span className='noticeboard-measurement-sub-title'>
                            &lt; 동물상 측정 &gt;<br></br>
                        </span>
                        <span className="noticeboard-measurement-content">
                            💰 비용 : 무료<br></br>
                            나와 닮은 동물은 무엇일까?
                            <br></br>
                            부스에서 나의 동물상을 확인하고 <mark>야광팔찌</mark>도 받아가자! 
                            <br></br>
                            <br></br>                        📌 측정 결과 사진 다운방법
                            <br></br>
                            1. 현장 부스에서 동물상을 측정 후, 등록 버튼 클릭! <br></br>
                            2. 학번 및 8자리 고유번호를 입력해 주세요. <br></br>
                            3. 화면에 보이는 QR 및 sejongpeer.ac.kr 사이트에 접속해주세요. <br></br>
                            4. 사진 저장시 입력한 학번을 입력 후 이미지를 다운받을 수 있습니다!
                            <br></br>

                            <br></br>                        📌 자세한 내용은 QR를 찍어 확인해주세요!
                            <br></br>
                            
                            <img src={
                                `${process.env.PUBLIC_URL}/img/boothinformation.png`}
                                style={{ width: '40%', height: 'auto', marginLeft: "80px" }} 
                                />

                        </span>
                    </div>
                    
                    <div className="noticeboard-meeting">
                        <span className='noticeboard-meeting-sub-title'>
                            &lt; 동물상 미팅 &gt;
                            <br></br>
                        </span>
                        <span className="noticeboard-meeting-content">
                            💰 비용 : 3000원<br></br>
                            우리 학교에 내가 선호하는 동물상의 이상형은 없을까?
                            <br></br>
                            선호하는 동물상을 고른 후 동물상 미팅에 참여해보세요!
                            <br></br>
                            1:1, 2:2, 3:3으로 진행되는 미팅! <br></br>어떻게 미팅할지, 선택은 당신에게 달려있습니다! 
                            <br></br>미팅에 참여하면 귀여운 <mark>동물스티커</mark>는 덤!
                            <br></br>
                            <br></br>                        📌 미팅 참여방법
                            <br></br>
                            1. 현장 부스에서 동물상을 측정 후, 미팅등록을 완료해주세요! <br></br>
                            2.  왼쪽 QR코드로 사이트에 접속해 주세요. <br></br>
                            3. 오후 <strong>6시 30분</strong>에 이름과 전화번호로 로그인 후 매칭결과를 확인해주세요. <br></br>
                            3. 매칭결과 페이지 내 오픈채팅 참여 버튼을 통해 매칭방에 입장해주세요. <br></br>
                            4. 모든인원이 참여하면 미팅 시작! <br></br>
                            5. <mark><stong>꼭 7시30분까지 입장해주세요!!!</stong></mark>
                            <br></br>
                        </span>
                    </div>
                </div>
            
            </div>
        </div>
    );
};

export default NoticeBoard;
