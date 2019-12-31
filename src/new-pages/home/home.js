import React from 'react';
import { Row, Col, Carousel, Input, Tabs } from 'antd';
import { Link } from 'react-router-dom';
import styles from './style.module.scss';
import bg1 from 'assets/images/bg1.jpg';
import bg2 from 'assets/images/bg2.jpg';

const { Search } = Input;
const { TabPane } = Tabs;

class Home extends React.Component {
	render() {
		const blog = new Array(5).fill(' ');
		return (
			<div className="box box__lg">
				<div className={styles.search_box}>
					<Search
						placeholder="input search loading with enterButton"
						loading={false}
						enterButton
						className="search_bar"
					/>
				</div>
				<Row gutter={18}>
					<Col className="gutter-row" span={16}>
						<div className={styles.carousel}>
							<Carousel autoplay>
								<div className={styles.carousel__child}>
									<img src={bg1} />
									<p>GET ACCESS TO OVER 30,000 JUDGMENTS DAILY</p>
								</div>
								<div className={styles.carousel__child}>
									<img src={bg2} />
									<p>Thousands of Weekly Cases and Judgments At Your Fingertips</p>
								</div>
							</Carousel>
						</div>

						<div className={styles.judgement}>
							<p className={styles.judgement__title}>Recent Judgement</p>

							<Tabs defaultActiveKey="1">
								<TabPane tab="Supreme Court" key="1">
									<ul>
										<li>CHIEF ORLANDO OLAIYA OJO VS NATIONAL PENSION COMMISSION</li>
									</ul>
								</TabPane>
								<TabPane tab="Court Of Appeal" key="2">
									<ul>
										<li>CHIEF ORLANDO OLAIYA OJO VS NATIONAL PENSION COMMISSION</li>
									</ul>
								</TabPane>
							</Tabs>
						</div>

						{/* Testimonails */}

						<div className={styles.testimonails}>
							<Carousel autoplay>
								<div className={styles.testimonail}>
									<div className={styles.testimonail__quotes}>
										<p>
											<i class="fas fa-quote-left"></i>
										</p>
										<p>
											<i class="fas fa-quote-right"></i>
										</p>
									</div>
									<p className={styles.testimonail__content}>
										We have been making use of Weekly Reports of Nigeria for a while. This is a good
										improvement to the old method of law reports.
									</p>
									<p className={styles.testimonail__name}>Adisa Sule</p>
								</div>
								{/* <div className={styles.testimonail}>
									<div className={styles.testimonail__quotes}>
										<p>
											<i class="fas fa-quote-left"></i>
										</p>
										<p>
											<i class="fas fa-quote-right"></i>
										</p>
									</div>
									<p className={styles.testimonail__content}>
										The Weekly Reports of Nigeria provide some of the most detailed law reporting in
										Nigeria. I am a satisfied customer.
									</p>
									<p className={styles.testimonail__name}>Kelechi Munagwo</p>
								</div> */}
							</Carousel>
						</div>
					</Col>
					<Col className="gutter-row" span={8}>
						<div className={styles.blog}>
							<p className={styles.blog__header}>Latest News</p>
							<div className={styles.blog__posts}>
								{blog.map((m, i) => {
									return i == 0 ? (
										<div
											className={styles.blog__post_img}
											style={{ backgroundImage: `url(${bg1})` }}
										>
											<p className={styles.blog__title}>
												Request For Loan Modification Restarted Limitations Period, 9th Circuit Says
											</p>
										</div>
									) : (
										<div className={styles.blog__post}>
											<p className={styles.blog__title}>
												Request For Loan Modification Restarted Limitations Period, 9th Circuit Says
											</p>
											<p className={styles.blog__footer}>
												{' '}
												MEALEY'S <strong>|</strong> DEC 26, 2019
											</p>
										</div>
									);
								})}
							</div>
						</div>
					</Col>
				</Row>
			</div>
		);
	}
}

export default Home;
