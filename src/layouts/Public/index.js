import React from 'react';
import { NavLink } from 'react-router-dom';
import { Layout, Row, Col, Icon, Input } from 'antd';
import logo from 'assets/images/logo.png';
import { withRouter } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

// const { Header } = Layout;
const { Search } = Input;

@withRouter
class PublicLayout extends React.PureComponent {
	render() {
		const { children } = this.props;
		return (
			<main>
				<Header />
				<div className='box box__lg'>
					<div className='search_box'>
						<Search
							placeholder='input search loading with enterButton'
							loading={false}
							enterButton
							className='search_bar'
						/>
					</div>
					{children}
				</div>

				{/* Footer */}
				<Footer />
			</main>
		);
	}
}

export default PublicLayout;
