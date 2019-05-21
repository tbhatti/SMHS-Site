import React from 'react';
import {Link} from 'react-router-dom';
import SourcingSolutions from '../components/header/sourcing/sourcing-solutions'
import ServicesAndSolutions from '../components/header/services-memberships/services-memberships'
import HelpAndCommunity from '../components/header/help-community/community'
import Introduction from '../components/home/introduction'

export default class Home extends React.Component {
	render () {
		return (
			<div className='container-home-page'>
				<div className='container-top-header'>
				<img className='image-school-name' src='shaheen.png' alt='Los Angeles'  /><label>smhs.com</label>
				<div className='container-logo'><img className='image-logo' src='logo.png' alt='Los Angeles'  />
					<span className='school-name'>Shaheen Model High School</span>
				</div>
					<div className='container-main'>
						<p className='menu-item'>Home</p>
						<p className='menu-item'>School</p>
						<p className='menu-item'>Facilities</p>
						<p className='menu-item'>Activities</p>
						<p className='menu-item'>Results</p>
						<p className='menu-item'>Sitemap</p>
						<p className='menu-item'>Contact Us</p>
					</div>				
				</div>
				<div className='container-middle-page'>
			
					<div className='container'>
  						<div id='myCarousel' className='carousel slide' data-ride='carousel'>
							<ol className='carousel-indicators'>
								<li data-target='#myCarousel' data-slide-to='0' className='active'></li>
								<li data-target='#myCarousel' data-slide-to='1'></li>
								<li data-target='#myCarousel' data-slide-to='2'></li>
							</ol>   
    						<div className='carousel-inner'>
     						 
								<div className='item active'>
									<img src='banner2.jpg' alt='Los Angeles'  />
								</div>
								
								<div className='item'>
									<img src='banner5.jpg' alt='Chicago'  />
								</div>  
								
								<div className='item'>
									<img src='banner.jpg' alt='New York'  />
								</div>

								<div className='item'>
									<img src='banner2.jpg' alt='New York'  />
								</div> 

								<div className='item'>
									<img src='banner5.jpg' alt='New York'  />
								</div> 

								<div className='item'>
									<img src='banner.jpg' alt='New York'  />
								</div> 

								<div className='item'>
									<img src='banner2.jpg' alt='New York'  />
								</div> 

								<div className='item'>
									<img src='banner.jpg' alt='New York'  />
								</div> 
    						</div>    
    						<a className='left carousel-control' href='#myCarousel' data-slide='prev'>
								<span className='glyphicon glyphicon-chevron-left'></span>
								<span className='sr-only'>Previous</span>
   							</a>
							<a className='right carousel-control' href='#myCarousel' data-slide='next'>
							<span className='glyphicon glyphicon-chevron-right'></span>
							<span className='sr-only'>Next</span>
							</a>
  					</div>
			</div>
			<Introduction />
		</div>
				
	</div>
		)
	}
}