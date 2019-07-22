import React, { Component } from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import MicrophoneIcon from 'material-ui/svg-icons/av/mic';
import './dark-voice.css';

class DarkVoiceComponent extends Component {
	render() {
		return (
			<div className='dark-voice'>
				<p className='text-center'>
					<b className='dark-voice-tag'>&#x3C;voice&#x3E; </b>
					<br />
					Ready for hard work and serious responsibilities. Teamwork, respect,
					honesty, professionalism and eagerness for success are necessary
					attributes for every job and I believe that I posses them.
					<br />
					<b className='dark-voice-tag'>&#x3C;/voice&#x3E;</b>
				</p>
				<div className='microphone-action'>
					<FloatingActionButton backgroundColor='#A80202'>
						<MicrophoneIcon />
					</FloatingActionButton>
				</div>
			</div>
		);
	}
}

export default DarkVoiceComponent;
