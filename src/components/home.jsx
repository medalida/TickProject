import React, { PureComponent } from 'react';
import {TeacherContext} from '../App';
let Home = ()=>{
    const value = React.useContext(TeacherContext);

    return(
        <div>
            this is : {value}
        </div>
    );
}

export default Home;