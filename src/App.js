import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import 'roboto-npm-webfont';
import './App.css';
import ProgressComponent from './components/progress/progress';
import HeaderComponent from './components/header/header';
import DarkVoiceComponent from './components/dark-voice/dark-voice';
import IntroductionComponent from './components/introduction/introduction';
import ProgrammingComponent from './components/programming/programming';
import AgileQuoteComponent from './components/agile-quote/agile-quote';
import AgileComponent from './components/agile/agile';
import DesignComponent from './components/design/design';
import CodeGithubComponent from './components/code-github/code-github';
import ContactComponent from './components/contact/contact';
import FooterComponent from './components/footer/footer';
class App extends Component {
	render() {
		return (
			<MuiThemeProvider>
				<div className='App'>
					<ProgressComponent />
					<div className='section header-section'>
						<div className='section-container header-component'>
							<HeaderComponent />
						</div>
					</div>
					<div className='section colored'>
						<div className='section-container'>
							<IntroductionComponent />
						</div>
					</div>
					<div className='relative'>
						<div className=''>
							<CodeGithubComponent />
						</div>
					</div>
					<div className='section dark'>
						<div className='section-container'>
							<DarkVoiceComponent />
						</div>
					</div>
					<div className='section colored'>
						<div className='section-container'>
							<ProgrammingComponent />
						</div>
					</div>
					<div className='section'>
						<div className='section-container'>
							<DesignComponent />
						</div>
					</div>

					<div className='section colored'>
						<div className='section-container'>
							<AgileComponent />
						</div>
					</div>
					<div className='section dark'>
						<div className='section-container'>
							<AgileQuoteComponent />
						</div>
					</div>
					<div className='section'>
						<div className='section-container'>
							<ContactComponent />
						</div>
					</div>
					<div className='section colored'>
						<div className='section-container footer-component'>
							<FooterComponent />
						</div>
					</div>
				</div>
			</MuiThemeProvider>
		);
	}
}

export default App;
