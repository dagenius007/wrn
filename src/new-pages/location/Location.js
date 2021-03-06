import React from 'react';
import { Helmet } from 'react-helmet';
import PricingItem from 'components/CleanUIComponents/PricingItem';
import { Table, Row, Col } from 'antd';
import GoogleMapReact from 'google-map-react';
import Geocode from 'react-geocode';
import theLaw from 'assets/images/thelaw.jpg';

import { withRouter } from 'react-router-dom';

Geocode.setApiKey('AIzaSyCf2OLqZn7llqNbi7Ok4UZ3mEwmKArXsQ0');

const Location = () => {
	const AnyReactComponent = ({ text }) => <div>{text}</div>;
	return (
		<>
			<Row>
				<Col className='gutter-row' span={24}>
					<img src={theLaw} width='100%' />
				</Col>
			</Row>
			<p>Our Locations</p>
			<Row gutter={40} className='padd-b-50'>
				<Col className='gutter-row' xs={{ span: 24 }} lg={{ span: 8 }}>
					<p className='footer__title'>HEAD OFFICE</p>
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
					<p className='footer__title text-center'>SALES & ENQUIRY</p>
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

			<p>Other Locations</p>
			<Row gutter={40} className='padd-b-50'>
				<Col className='gutter-row' xs={{ span: 24 }} lg={{ span: 8 }}>
					<div className='other__location'>
						<p>Abuja</p>
						<p>
							Bataiya Plaza,
							<br />
							Suite 11,
							<br />
							Area 11 Garki
							<br />
							Near FCDA- Area 11,
							<br />
							Garki Abuja
							<br />
							08035041712
						</p>
					</div>
					<div>
						<p>Abuja</p>
						<p>
							Bataiya Plaza,
							<br />
							Suite 11,
							<br />
							Area 11 Garki
							<br />
							Near FCDA- Area 11,
							<br />
							Garki Abuja
							<br />
							08035041712
						</p>
					</div>
				</Col>
				<Col className='gutter-row' xs={{ span: 24 }} lg={{ span: 8 }}>
					<div className='other__location'>
						<p>Abuja</p>
						<p>
							Bataiya Plaza,
							<br />
							Suite 11,
							<br />
							Area 11 Garki
							<br />
							Near FCDA- Area 11,
							<br />
							Garki Abuja
							<br />
							08035041712
						</p>
					</div>
					<div>
						<p>Abuja</p>
						<p>
							Bataiya Plaza,
							<br />
							Suite 11,
							<br />
							Area 11 Garki
							<br />
							Near FCDA- Area 11,
							<br />
							Garki Abuja
							<br />
							08035041712
						</p>
					</div>
				</Col>
				<Col className='gutter-row' xs={{ span: 24 }} lg={{ span: 8 }}>
					<div className='other__location'>
						<p>Abuja</p>
						<p>
							Bataiya Plaza,
							<br />
							Suite 11,
							<br />
							Area 11 Garki
							<br />
							Near FCDA- Area 11,
							<br />
							Garki Abuja
							<br />
							08035041712
						</p>
					</div>
					<div>
						<p>Abuja</p>
						<p>
							Bataiya Plaza,
							<br />
							Suite 11,
							<br />
							Area 11 Garki
							<br />
							Near FCDA- Area 11,
							<br />
							Garki Abuja
							<br />
							08035041712
						</p>
					</div>
				</Col>
			</Row>

			<Row>
				<Row gutter={18}>
					<h3>How can we be of value to You?</h3>
					<Col className='gutter-row' span={16}>
						<div>
							<p>
								We have different plans for differentcategories of users. Think of
								us as avalue add for your personal andcorporate legal research.
							</p>
							<p>
								We are not just concerned withindividuals in the legal practice.
								Wealso have plans for other personsoutside the legal practice who
								maywant to be updated on legalproceedings.
								<br />
								<a href=''>Try Us Today</a>
							</p>
						</div>
					</Col>
					<Col className='gutter-row' span={8}>
						<ul>
							<li>I am Legal Practionner</li>
							<li>I am a University Law student</li>
						</ul>
					</Col>
				</Row>

				<Row gutter={18}>
					<h3>Latest Blog Post</h3>
					<Col className='gutter-row' span={24}>
						<p>Blog 1</p>
					</Col>
				</Row>
			</Row>
		</>
	);
};

export default Location;
