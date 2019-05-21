import React from 'react';

export default class Home extends React.Component {
	render () {
		return (			
				<div className='container-introduction'>

                    <div className='container-big-menu'>
                        <div className='icon-container'>
                            <img src='gallery-img5.jpg' alt='Los Angeles'  />
                            <span className='text-area'>Activities</span>
                        </div>
                        <div className='icon-container'>
                            <img src='gallery-img.jpg' alt='Los Angeles'  />
                            <span className='text-area'>Exams Schedule</span>
                        </div>
                        <div className='icon-container'>
                            <img src='gallery-img4.jpg' alt='Los Angeles'  />
                            <span className='text-area'>Results</span>
                        </div>
                        <div className='icon-container'>
                            <img src='gallery-img5.jpg' alt='Los Angeles'  />
                            <span className='text-area'>Facilities</span>
                        </div>

                    </div>

                    <div className='container-welcome-message'> 
                        <span className='welcome-message'>Welcome to</span>
                        <span className='school-name'>SMHS</span>
                        <span className='container-intro-image'><img src='5.jpg' alt='Los Angeles'  /></span>
                        <div className="book-mark-image">

                            <div className="transparent-box">

                            <p>This is MindStick© unlease your imaginaiton

                            </p>

                            </div>

                            </div>
                        <label className='label-aims'>Educational Aims</label>
                        <p className='para-aims'>The primary aim of the school is to develop a student of sound character. It lays special emphasis on the basic elements of character. i. e,. honesty, justice, truthfulness, a sense of duty, sincerity, fair play, disciplined behavior and above all to make students good Muslims and true Pakistani.</p>
                        <p className='para-aims'>Efforts are made to inculcate into students the habits of punctuality, attention to obligation and honesty, so that they acquire sound knowledge, a graceful and mature personality to become useful citizens of the country.</p>
                    </div>
                    <div>
                        
                    </div>
					
				</div>
		)
	}
}