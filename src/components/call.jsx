import React, { PureComponent } from 'react';
import {useParams} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { useLocation } from 'react-router-dom';
import StudentCall from './studentCall';
import 'swiper/css';
import "../css/call.css";



 function Call (props){
  console.log(props.match);
    
    //let list = await getList("");
    let navigate = useNavigate();
    function save(){
      navigate("/session/10", { replace: true });
    }

        return (
            <div  id="call">
    <Swiper
    modules={[Navigation, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      allowTouchMove = {false}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: false }}
      onSwiper={(swiper) => {console.log(swiper)}}
      onSlideChange={() => console.log('slide change')}
    >
        <SwiperSlide><div className="swiper-slide"><button type="button" className="btn btn-lg btn-primary" onClick={startCall}>Start call for attendence</button></div></SwiperSlide>
      <SwiperSlide><div id="slide" className="swiper-slide"><StudentCall/></div></SwiperSlide>
      <SwiperSlide><div id="call-background" className="swiper-slide"><StudentCall/></div></SwiperSlide>
      <SwiperSlide><div className="swiper-slide"><StudentCall/></div></SwiperSlide>
      <SwiperSlide><div className="swiper-slide"><StudentCall/></div></SwiperSlide>
      <SwiperSlide><div className="swiper-slide"><StudentCall/></div></SwiperSlide>
      <SwiperSlide><div className="swiper-slide"><button type="button" className="btn btn-lg btn-primary" onClick={save}>Save attendence</button></div></SwiperSlide>
    </Swiper>


          </div>
          
        );
    }

    function startCall(){
      let nextButton = document.querySelector(".swiper-button-next");
      nextButton.click();
    }

let getList = async (sessionId)=>{

}
 
export default Call;