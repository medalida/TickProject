import React, { PureComponent } from 'react';
import Calendar from 'react-calendar';
import SessionList from './sessionList';
import '../css/calendar.css';

class Navigation extends PureComponent {
    state = { 
        selectedDay:new Date(),
     }

    render() { 
        return (
            <div className="d-flex flex-row w-100 pt-5 h-auto">
                <div className="d-flex flex-row justify-content-center align-items-center h-auto w-50">
                <Calendar
                onChange={(value,event)=>{
                    this.setState({selectedDay:value});
                    console.log(this.state.selectedDay);
                }}/>
                </div>
                <div className="w-50">
                <SessionList for={this.state.selectedDay}/>
                </div>
                
                
            </div>
        );
    }
}
 
export default Navigation;