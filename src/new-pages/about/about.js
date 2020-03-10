import React from 'react';
import { Row, Col, Carousel, Input, Tabs, Icon } from 'antd';
import { Link } from 'react-router-dom';
import styles from './style.module.scss';
import bg1 from 'assets/images/bg1.jpg';
import bg2 from 'assets/images/bg2.jpg';
import law from 'assets/images/law.png';
import theLaw from 'assets/images/thelaw.jpg';

const { TabPane } = Tabs;

class About extends React.Component {
	render() {
		return (
			<section className='container'>
				<Row>
					<Col className='gutter-row' span={24}>
						<img src={theLaw} width='100%' />
					</Col>
				</Row>
				<Row gutter={18}>
					<Col className='gutter-row' span={24}>
						<div className={styles.about_content}>
							<h3>Our Company</h3>
							<p>
								At Weekly Reports of Nigeria, we believe that there are more
								creative ways topresent law reporting. We are passionate about our
								drive to deliver the bestcollection of judgments from the courts in
								Nigeria. We simplify law reporting,making it easy to understand
								legal proceedings, and presenting updated lawreporting. We believe
								that anyone should be able to understand a law report.Hence, we have
								integrated technology through our software application, and ourever
								growing community and workforce.
							</p>
						</div>
					</Col>
				</Row>

				<Row gutter={18}>
					<Col className='gutter-row' span={24}>
						<div className={styles.about_content}>
							<h3>Migrating from Old to New</h3>
							<p>
								We have taken our hard copy law reports, revamped it, added more
								value to it, and presented in an online format. Now, you can access
								all our volumes on the web and mobile. Same company, same product,
								more value, deeper reach.
								<br />
								Our hard copy volumes are still available for order.
								<br />
								You can order online, and have it delivered to you.
							</p>
						</div>
					</Col>
				</Row>

				<Row>
					<Row gutter={18}>
						<h3>How can we be of value to You?</h3>
						<Col className='gutter-row' span={16}>
							<div className={styles.about_content}>
								<p>
									We have different plans for differentcategories of users. Think
									of us as avalue add for your personal andcorporate legal
									research.
								</p>
								<p>
									We are not just concerned withindividuals in the legal practice.
									Wealso have plans for other personsoutside the legal practice
									who maywant to be updated on legalproceedings.
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
			</section>
		);
	}
}

export default About;
