import React from 'react';
import { Row, Col } from 'antd';
import GoogleMapReact from 'google-map-react';
import Geocode from 'react-geocode';

import { withRouter } from 'react-router-dom';

Geocode.setApiKey('AIzaSyCf2OLqZn7llqNbi7Ok4UZ3mEwmKArXsQ0');

@withRouter
class Footer extends React.PureComponent {
	render() {
		const AnyReactComponent = ({ text }) => <div>{text}</div>;
		return (
			<div className='footer'>
				<footer className='container'>
					<Row gutter={40} className='padd-b-50'>
						<Col className='gutter-row' xs={{ span: 24 }} lg={{ span: 8 }}>
							<p className='footer__title'>CONTACT US</p>
							<p className='footer__content'>
								Legaltext Pubishing Co. Ltd
								<br />
								10, Evelyn Owuama Street <br />
								River Valley Estate, <br />
								Ojodu Berger, Lagos.
								<br />
								Nigeria.
							</p>
						</Col>
						<Col className='gutter-row border-rl' xs={{ span: 24 }} lg={{ span: 8 }}>
							<p className='footer__title text-center'>SUPPORT & ENQUIRY</p>
							<ul className='footer__list'>
								<li className='text-center center-li'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										// xmlns:xlink="http://www.w3.org/1999/xlink"
										version='1.1'
										id='icon_1_'
										x='0px'
										y='0px'
										width='35px'
										height='35px'
										viewBox='0 0 100 100'
										enable-background='new 0 0 100 100'
										// xml:space="preserve"
										data-di-rand='1578758847527'
									>
										<g id='icon'>
											<path
												fill='none'
												class='s-wide'
												stroke='#666666'
												stroke-miterlimit='10'
												d='M35.1,17.9c0,0-0.1,0-0.2,0c-2.9,0.3-6.1,4.6-7,6.3   c-7.1,15.2,3,31,7.7,37l0.9,1.2c4.7,6.1,10.4,13.7,21,18.3c3.4,1.5,6.6,2.2,9.5,2.2c6.8,0,9.6-4,10.3-5.2c1.8-3.1-6.3-10.1-10-12.3   c-0.8-0.5-1.6-0.7-2.4-0.7c-0.9,0-1.5,0.3-1.6,0.3c-2.9,2.3-6.5,2.5-6.6,2.5C48,67.7,40.1,53.8,38.3,48c-1.6-4.9,0.6-7.7,2-9.5   c0.3-0.4,0.6-0.7,0.8-1c1-1.6,2.7-4,3.3-4.6c0.6-2.6-3-9.2-5.7-12.6C36.7,18,35.3,17.9,35.1,17.9z'
											></path>
										</g>
										<g id='set:ln_line_icons'></g>
										<g id='tags:contact.phone.call.connect.'></g>
									</svg>
									08034447396
								</li>

								<li className='text-center center-li'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										// xmlns:xlink="http://www.w3.org/1999/xlink"
										version='1.1'
										id='icon_1_'
										x='0px'
										y='0px'
										width='35px'
										height='35px'
										viewBox='0 0 100 100'
										enable-background='new 0 0 100 100'
										// xml:space="preserve"
										data-di-rand='1578758847527'
									>
										<g id='icon'>
											<path
												fill='none'
												class='s-wide'
												stroke='#666666'
												stroke-miterlimit='10'
												d='M35.1,17.9c0,0-0.1,0-0.2,0c-2.9,0.3-6.1,4.6-7,6.3   c-7.1,15.2,3,31,7.7,37l0.9,1.2c4.7,6.1,10.4,13.7,21,18.3c3.4,1.5,6.6,2.2,9.5,2.2c6.8,0,9.6-4,10.3-5.2c1.8-3.1-6.3-10.1-10-12.3   c-0.8-0.5-1.6-0.7-2.4-0.7c-0.9,0-1.5,0.3-1.6,0.3c-2.9,2.3-6.5,2.5-6.6,2.5C48,67.7,40.1,53.8,38.3,48c-1.6-4.9,0.6-7.7,2-9.5   c0.3-0.4,0.6-0.7,0.8-1c1-1.6,2.7-4,3.3-4.6c0.6-2.6-3-9.2-5.7-12.6C36.7,18,35.3,17.9,35.1,17.9z'
											></path>
										</g>
										<g id='set:ln_line_icons'></g>
										<g id='tags:contact.phone.call.connect.'></g>
									</svg>
									08034447396
								</li>

								<li className='text-center center-li'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										// xmlns:xlink="http://www.w3.org/1999/xlink"
										version='1.1'
										id='icon_1_'
										x='0px'
										y='0px'
										width='35px'
										height='35px'
										viewBox='0 0 100 100'
										enable-background='new 0 0 100 100'
										// xml:space="preserve"
										data-di-rand='1578758847527'
									>
										<g id='icon'>
											<path
												fill='none'
												class='s-wide'
												stroke='#666666'
												stroke-miterlimit='10'
												d='M35.1,17.9c0,0-0.1,0-0.2,0c-2.9,0.3-6.1,4.6-7,6.3   c-7.1,15.2,3,31,7.7,37l0.9,1.2c4.7,6.1,10.4,13.7,21,18.3c3.4,1.5,6.6,2.2,9.5,2.2c6.8,0,9.6-4,10.3-5.2c1.8-3.1-6.3-10.1-10-12.3   c-0.8-0.5-1.6-0.7-2.4-0.7c-0.9,0-1.5,0.3-1.6,0.3c-2.9,2.3-6.5,2.5-6.6,2.5C48,67.7,40.1,53.8,38.3,48c-1.6-4.9,0.6-7.7,2-9.5   c0.3-0.4,0.6-0.7,0.8-1c1-1.6,2.7-4,3.3-4.6c0.6-2.6-3-9.2-5.7-12.6C36.7,18,35.3,17.9,35.1,17.9z'
											></path>
										</g>
										<g id='set:ln_line_icons'></g>
										<g id='tags:contact.phone.call.connect.'></g>
									</svg>
									08034447396
								</li>
							</ul>
						</Col>

						<Col className='gutter-row' xs={{ span: 24 }} lg={{ span: 8 }}>
							<p className='footer__title'>Contact</p>
							<div class='footer__contact'>
								<GoogleMapReact
									bootstrapURLKeys={{
										key: 'AIzaSyCf2OLqZn7llqNbi7Ok4UZ3mEwmKArXsQ0',
									}}
									center={{
										lat: 0,
										lng: 0,
									}}
									defaultZoom={17}
								>
									<AnyReactComponent
										lat={0}
										lng={0}
										// text="My Marker"
									/>
								</GoogleMapReact>
							</div>
						</Col>
					</Row>

					<Row gutter={40} className='padd-t-50 padd-b-50'>
						<Col className='gutter-row' xs={{ span: 24 }} lg={{ span: 6 }}>
							<p className='footer__title'>Legaltext Publishers</p>
							<ul className='footer__list'>
								<li>Our Publications</li>
								<li> Our Team</li>
								<li>Our locations</li>
								<li>News and Events</li>
							</ul>
						</Col>
						<Col className='gutter-row' xs={{ span: 24 }} lg={{ span: 6 }}>
							<p className='footer__title'>Weekly Reports</p>
							<ul className='footer__list'>
								<li>Pricing</li>
								<li> FAQs</li>
								<li>Support</li>
								<li>Students</li>
							</ul>
						</Col>

						<Col className='gutter-row' xs={{ span: 24 }} lg={{ span: 6 }}>
							<p className='footer__title'>Policies</p>
							<ul className='footer__list'>
								<li>Privacy Policy</li>
								<li>Terms of Use</li>
								<li>Refund Policy</li>
							</ul>
						</Col>
						<Col className='gutter-row' xs={{ span: 24 }} lg={{ span: 6 }}>
							<p className='footer__title'>We are Social</p>
							<ul className='footer__links'>
								<i class='fa fa-twitter'></i>
								<i class='fa fa-facebook'></i>
							</ul>
						</Col>
					</Row>

					<Row gutter={24} className='padd-t-50 mb-50'>
						<Col className='gutter-row' xs={{ span: 12 }} lg={{ span: 12 }}>
							<p className='footer__title'>Legaltext Publishers</p>
							<ul className='footer__list'>
								<li>Our Publications</li>
								<li> Our Team</li>
								<li>Our locations</li>
								<li>News and Events</li>
							</ul>
						</Col>
						<Col className='gutter-row' xs={{ span: 12 }} lg={{ span: 12 }}>
							<p className='footer__title'>SUPPORT & ENQUIRY</p>
							<ul className='footer__list'>
								<li>Our Publications</li>
								<li> Our Team</li>
								<li>Our locations</li>
								<li>News and Events</li>
							</ul>
						</Col>
					</Row>

					<p className='text-center footer-p'>
						Copyright © 2020. Legaltext Publishing Company Limited. All Rights Reserved.
					</p>
				</footer>
			</div>
		);
	}
}

export default Footer;
