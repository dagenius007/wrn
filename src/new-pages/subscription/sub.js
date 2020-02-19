import React from 'react';
// import { Helmet } from 'react-helmet';
import PricingItem from 'components/CleanUIComponents/PricingItem';
import { Row, Col, Tabs, Icon } from 'antd';
import styles from './style.module.scss';

const { TabPane } = Tabs;

class Subscription extends React.Component {
	render() {
		return (
			<div>
				{/* <Helmet title='Pricing Table' /> */}

				<Tabs defaultActiveKey='1'>
					<TabPane tab='Lawyers' key='1'>
						<div className={styles.pricingTable}>
							<PricingItem
								type='success'
								data={{
									amount: '3000',
									period: '/ mon',
									features: [
										{
											main: '10GB',
											descr: 'of Bandwidth',
										},
										{
											main: '200MB',
											descr: 'Max File Size',
										},
										{
											main: '2GHZ',
											descr: 'CPU',
										},
										{
											main: '256MB',
											descr: 'Memory',
										},
										{
											main: '1 GB',
											descr: 'Storage',
										},
									],
								}}
							/>
							<PricingItem />
							<PricingItem type='default' />
							{/* <PricingItem type="default" /> */}
						</div>
					</TabPane>
					<TabPane tab='University Student' key='2'>
						<div className={styles.pricingTable}>
							<PricingItem type='success' />
							<PricingItem />
							<PricingItem type='default' />
							{/* <PricingItem type="default" /> */}
						</div>
					</TabPane>
					<TabPane tab='Law student' key='3'>
						<div className={styles.pricingTable}>
							<PricingItem type='success' />
							<PricingItem />
							<PricingItem type='default' />
							{/* <PricingItem type="default" /> */}
						</div>
					</TabPane>
				</Tabs>
				{/* <div className='mb-5'>
					<div className={styles.pricingTable}>
						<PricingItem type='success' />
						<PricingItem />
						<PricingItem type='default' />
					</div>
					<div className={styles.pricingTable}>
						<PricingItem type='warning' />
						<PricingItem />
						<PricingItem extended />
						<PricingItem />
					</div>
				</div> */}
			</div>
		);
	}
}

export default Subscription;
