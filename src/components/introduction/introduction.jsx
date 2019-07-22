import React, {Component} from 'react';
import './introduction.css';
import Avatar from 'material-ui/Avatar';


class IntroductionComponent extends Component {
    render() {
        return (
          <div className="introduction">
            <Avatar src="avatar.jpg" size={150}/>
            <p className="introduction-text">
            Hi, My name is Mahesh. 
            I mainly write code for web applictions 
            and Mobile apps.  


           
            </p>
          </div>
        );
    }
}

export default IntroductionComponent;
