import React from 'react';
import { Helmet } from 'react-helmet';
import PricingItem from 'components/CleanUIComponents/PricingItem';
import { Row, Col, Tabs, Icon } from 'antd';
import styles from './style.module.scss';
import Lawyers from './Lawyers';
import Student from './Student';
import LawSchool from './LawSchool';

const { TabPane } = Tabs;

class Subscription extends React.Component {
	render() {
		return (
			<div>
				<Helmet title='Pricing Table' />

				<Tabs defaultActiveKey='1'>
					<TabPane tab='Lawyers' key='1'>
						<Lawyers />
					</TabPane>
					<TabPane tab='University Student' key='2'>
						<Student />
					</TabPane>
					<TabPane tab='Law student' key='3'>
						<LawSchool />
					</TabPane>
				</Tabs>
			</div>
		);
	}
}

export default Subscription;
