import React from "react";
import {displayContainer,contentStyle1,tableinput,square,right,cursorstyle} from "../Layout.css";
import Icon from 'react-icons-kit';
import { plusSquareO,minusSquareO } from 'react-icons-kit/fa';
import { cross } from 'react-icons-kit/entypo/cross';

export class Auto extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      addcomponent1:true,
      addcomponent2:false,
      addcomponent3:false,
      deletecomponent1:true,
      deletecomponent2:true,
      deletecomponent3:true

    }
  }
  handleaddcomponent2(){
    this.setState({
      addcomponent2: true,
      deletecomponent2:true
    })
  }
  handledeletecomponent1(){
    this.setState({
      deletecomponent1: false
    })
  }
  handleaddcomponent3(){
    this.setState({
      addcomponent3: true,
      deletecomponent3: true
    })
  }
  handledeletecomponent2(){
    this.setState({
      deletecomponent2: false
    })
  }
  handledeletecomponent3(){
    this.setState({
      deletecomponent3: false
  })
}

  render(){
    return(
      <div>
      <table class="table table-bordered table-responsive-md" data-toggle="toggle" id={contentStyle1}>
      <thead>
          <tr style={{backgroundColor:'#496FA0',color:'white',textAlign:'center'}}>
                <th>Components</th>
                <th>Monthly</th>
                <th>Annually</th>
                <th>Curency</th>
                <th>Component Type</th>
                <th>
                 </th>
            </tr>
        </thead>
        <tbody>
  {this.state.deletecomponent1 && this.state.addcomponent1 ?
    <tr>
        <td><input type="text" placeholder="component1" class="form-control" id={tableinput} /></td>
        <td><input type="text" placeholder="5,000" class="form-control" id={tableinput}/></td>
        <td><input type="text" placeholder="60,000" class="form-control" id={tableinput} /></td>
        <td><select class="form-control" id={tableinput} >
        <option>INR-INDIA</option>
        </select></td>
        <td><select class="form-control" id={tableinput}>
        <option>EARNINGS</option>
        <option>DEDUCTIONS</option>
        </select></td>
        <td>
         <Icon icon={plusSquareO} onClick={this.handleaddcomponent2.bind(this)} className={cursorstyle} />
         <Icon icon={minusSquareO} onClick={this.handledeletecomponent1.bind(this)} className={cursorstyle}  />
          </td>
    </tr>
    :
    ''
  }
{this.state.addcomponent2 && this.state.deletecomponent2 ?
  <tr>
      <td><input type="text" placeholder="component2" class="form-control" id={tableinput}/></td>
      <td><input type="text" placeholder="1,000" class="form-control" id={tableinput}/></td>
      <td><input type="text" placeholder="12,000" class="form-control" id={tableinput}/></td>
      <td><select class="form-control" id={tableinput}>
      <option>INR-INDIA</option>
      </select></td>
      <td ><select class="form-control" id={tableinput}>
      <option>EARNINGS</option>
      <option>DEDUCTIONS</option>
      </select></td>
      <td>
        <Icon icon={plusSquareO} onClick={this.handleaddcomponent3.bind(this)} className={cursorstyle} />
        <Icon icon={minusSquareO}  onClick={this.handledeletecomponent2.bind(this)} className={cursorstyle} />
      </td>

  </tr>
  :
  ''
}
{this.state.addcomponent3 && this.state.deletecomponent3 ?
  <tr>
      <td><input type="text" placeholder="component3" class="form-control" id={tableinput}/></td>
      <td><input type="text" placeholder="" class="form-control" id={tableinput}/></td>
      <td ><input type="text" placeholder="" class="form-control" id={tableinput}/></td>
      <td ><select class="form-control" id={tableinput}>
      <option>INR-INDIA</option>
      </select></td>
      <td ><select class="form-control" id={tableinput}>
      <option>EARNINGS</option>
      <option>DEDUCTIONS</option>
      </select></td>
      <td>

      <Icon icon={minusSquareO}  onClick={this.handledeletecomponent3.bind(this)} className={cursorstyle} />
       </td>

  </tr>
  :
  ''
}
           <tr style={{position:'relative',top:'3vw'}}>
           <td>Total CTC</td>
           <td ><input type="text" placeholder="4,000" class="form-control" id={tableinput}/></td>
           <td ><input type="text" placeholder="48,000" class="form-control" id={tableinput}/></td>
           <td></td>
      <td></td>
           <td className={right}><button class="btn  btn-outline-warning">Save</button></td>

           </tr>
           </tbody>
           </table>
      </div>
    );
  }
}
