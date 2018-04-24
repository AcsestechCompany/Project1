import React from "react";
import {Row,Col,Card} from "reactstrap";
import {CardHeader} from "./CardHeader";
import {Repotees} from "./Repotees";
import {repoteesRowStyle,repoteesCardStyle,rowStyle,repoteesStyle,item1,item2} from "../Layout.css";
import {repoteesLeft,repoteesRight} from "./Home.css";
import {Circle} from 'react-shapes';
import Icon from 'react-icons-kit';
import { thinRight,thinLeft } from 'react-icons-kit/entypo';




export class FourthRow extends React.Component{

  render(){
    return(
      <Row className={rowStyle}>
       <Col>
           <Card  className={repoteesCardStyle}>
           <CardHeader text={"MY REPOTEES"}  />
           <div id="carouselExampleIndicators1" class="carousel slide" data-interval="false" >

             <div class="carousel-inner" >
               <div class="carousel-item active" style={{textAlign:'center'}} id={item1} >
               <Row className={repoteesStyle}>

                     <Repotees/>
                     <Repotees/>
                     <Repotees text={<Circle r={5} fill={{color:'#FEC835'}}  />}/>
                     <Repotees text={<Circle r={5} fill={{color:'#29A751'}}  />}/>
                     <Repotees text={<Circle r={5} fill={{color:'#EF462E'}}  />}/>
               </Row>
               </div>
               <div class="carousel-item" style={{textAlign:'center'}} id={item2}>

                    <Row  className={repoteesStyle}>
                          <Repotees text={<Circle r={5} fill={{color:'#29A751'}}  />}/>
                          <Repotees text={<Circle r={5} fill={{color:'#EF462E'}}  />}/>
                          <Repotees text={<Circle r={5} fill={{color:'#FEC835'}}  />}/>
                          <Repotees/>
                          <Repotees/>

                    </Row>
               </div>
             </div>

           <a class="carousel-control-prev" href="#carouselExampleIndicators1" role="button" data-slide="prev" >
               <Icon icon={thinLeft} id={repoteesLeft} size={40}/>
             <span class="sr-only">Previous</span>
           </a>
           <a class="carousel-control-next" href="#carouselExampleIndicators1" role="button" data-slide="next">
             <Icon icon={thinRight} id={repoteesRight} size={40}/>
             <span class="sr-only">Next</span>
           </a>
         </div>
            <Row className={repoteesRowStyle}>
                <div> <Circle r={5} fill={{color:'#29A751'}}  />
               <span style={{paddingLeft:'0.3vw',paddingRight:'2vw',fontSize:'0.9vw'}}>Present</span></div>
                 <div> <Circle r={5} fill={{color:'#EF462E'}}  />
                 <span style={{paddingLeft:'0.3vw',paddingRight:'2vw',fontSize:'0.9vw'}}>Absent</span></div>
                 <div><Circle r={5} fill={{color:'#FEC835'}}  />
                 <span style={{paddingLeft:'0.3vw',paddingRight:'2vw',fontSize:'0.9vw'}}>On Leave</span></div>
          </Row>
         </Card>
         </Col>
     </Row>
    );
  }
}
