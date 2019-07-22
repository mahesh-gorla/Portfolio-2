import React, {Component} from 'react';
import './agile-quote.css';


class AgileQuoteComponent extends Component {

    render() {
        return (
          <div className="agile-quote">
            <p className="quote">
              <span className="quote-marks">&ldquo;</span>
              <span className="quote-content">
              I have looked in the mirror 
              every morning and asked myself: 
              ‘If today were the last day of my life, 
              would I want to do what I am about to do today?’ 
              And whenever the answer has been ‘No’ for too 
              many days in a row, I know I need to change 
              something.
              </span>
              <span className="quote-author"></span>
            </p>
          </div>
        );
    }
}

export default AgileQuoteComponent;
