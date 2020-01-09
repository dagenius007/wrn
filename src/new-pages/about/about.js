import React from 'react';
import { Row, Col, Carousel, Input, Tabs, Icon } from 'antd';
import { Link } from 'react-router-dom';
import styles from './style.module.scss';
import bg1 from 'assets/images/bg1.jpg';
import bg2 from 'assets/images/bg2.jpg';
import law from 'assets/images/law.png';

const { TabPane } = Tabs;

class About extends React.Component {
	render() {
		const blog = new Array(5).fill(' ');
		return (
			<Row gutter={18}>
				<Col className="gutter-row" span={16}>
					<div className={styles.about_content}>
						<h3>About Legaltext</h3>
						<p>
							Legaltext is a registered law reporting and publishing company located in the heart of
							Lagos. Our law reports are one of the best in the country. We have very skilled
							personnel and experienced management
						</p>
					</div>

					<div className={styles.about_content}>
						<h3>About Weekly Reports of Nigeria</h3>
						<p>
							Weekly Reports of Nigeria is the digitized version of the Published Weekly law
							reports. Our web solution that delivers law reports in a seamless and orderly manner.
							We employ about the best technology in our law report presentation, all at a very
							affordable rate.
						</p>
					</div>
				</Col>
				<Col className="gutter-row" span={8}>
					<img src={law} width="80%" />
				</Col>
			</Row>
		);
	}
}

export default About;
