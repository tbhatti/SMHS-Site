import React from 'react';

export default class ServicesSolutions extends React.Component {
	render () {
		return (
				<div className='container-service-main'>
					<div className='container-services'>
					<span className='text-menu' >Services & Memberships</span>
						<div className='show-hide-service-menu'>
							<div className='column'>
								<p className='column-heading'>Trade Service</p>
								<p className='link'>Trade Assurance</p>
								<p className='link'>Inspection Service</p>
							</div>
							<div className='column'>
								<p className='column-heading'>Membership Service</p>
								<p className='link'>Buyer Business</p>
								<p className='link'>Test Link</p>
							</div>
							<div className='column'>
								<p className='column-heading'>Value-Added Services</p>
								<p className='link'>Urgent Request</p>
								<p className='link'>Extra Quotes</p>
							</div>
						</div>
					</div>
				</div>
				
		
		)
	}
}