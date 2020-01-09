import React from 'react';
import { Layout, Row, Col, Icon, Input } from 'antd';
import logo from 'assets/images/logo.png';
import { withRouter } from 'react-router-dom';

const { Header } = Layout;
const { Search } = Input;

@withRouter
class PublicLayout extends React.PureComponent {
	render() {
		const { children } = this.props;
		return (
			<main>
				<div className="nav-container">
					{/* <div className="container"> */}
					<nav class="navbar navbar-expand-lg navbar-light ">
						<a class="navbar-brand" href="#">
							<img src={logo} width="30" height="30" alt="" />
						</a>
						<button
							class="navbar-toggler"
							type="button"
							data-toggle="collapse"
							data-target="#navbarNavDropdown"
							aria-controls="navbarNavDropdown"
							aria-expanded="false"
							aria-label="Toggle navigation"
						>
							<span class="navbar-toggler-icon"></span>
						</button>
						<div class="collapse navbar-collapse" id="navbarNavDropdown">
							<ul class="navbar-nav">
								<li>
									<ul className="nav-list">
										<li class="nav-item active">
											<a class="nav-link" href="#">
												Free Trail
											</a>
										</li>
										<li class="nav-item">
											<a class="nav-link" href="#">
												Products
											</a>
										</li>
										<li class="nav-item">
											<a class="nav-link" href="#">
												Solutions for you
											</a>
										</li>
										<li class="nav-item">
											<a class="nav-link" href="#">
												Support
											</a>
										</li>
										<li class="nav-item">
											<a class="nav-link" href="#">
												Store
											</a>
										</li>
									</ul>
								</li>

								<li>
									<ul className="nav-icons">
										<li class="nav-item">
											<a class="nav-link" href="#">
												<Icon type="phone" />
											</a>
										</li>
										<li class="nav-item">
											<a class="nav-link" href="#">
												<Icon type="search" />
											</a>
										</li>
										<li class="nav-item bg-green">
											<a class="nav-link" href="#">
												<Icon type="key" style={{ color: 'white' }} />
												<span>Product Sign-In</span>
											</a>
										</li>
									</ul>
								</li>
							</ul>
						</div>
					</nav>
					{/* </div> */}
				</div>

				<div className="box box__lg">
					<div className="search_box">
						<Search
							placeholder="input search loading with enterButton"
							loading={false}
							enterButton
							className="search_bar"
						/>
					</div>
					{children}
				</div>

				{/* Footer */}
				<div className="footer">
					<footer className="container">
						<Row gutter={40}>
							<Col className="gutter-row" xs={{ span: 24 }} lg={{ span: 8 }}>
								<p className="footer__title">About WRN</p>
								<p className="footer__content">
									Weekly Reports of Nigeria is a collection of Weekly Law reports by Legaltext
									Publishing Company Limited. The reports are now being digitized to ensure that we
									serve our customers the very best.
								</p>
							</Col>
							<Col className="gutter-row" xs={{ span: 24 }} lg={{ span: 8 }}>
								<p className="footer__title">Company</p>
								<ul className="footer__list">
									<li>Company Overview</li>
									<li> Meet The Team</li> <li>Our Awesome Partners</li> <li>Our Services</li>
									<li>Frequently Asked Questions</li> <li>Conatct Us</li>
									<li>Privacy Policy</li>
									<li>Student Login</li> <li>Terms of Use Copyright</li>
								</ul>
							</Col>

							<Col className="gutter-row" xs={{ span: 24 }} lg={{ span: 8 }}>
								<p className="footer__title">Contact</p>
								<div class="footer__contact">
									<p>
										<i class="fas fa-map-marker-alt"></i>
									</p>
									<p>
										LegalText Publishing Co. LTD <br />
										10, Evelyn Owuama Street
										<br /> River Valley Estate,
										<br /> Ojodu Berger, Lagos.
									</p>
								</div>

								<div class="footer__contact">
									<p>
										<i class="fas fa-phone"></i>
									</p>
									<p>08034447396, 08033596072</p>
								</div>

								<div class="footer__contact">
									<p>
										<i class="fas fa-envelope"></i>
									</p>
									<p>info@weeklyreportsofnigeria.com</p>
								</div>
							</Col>
						</Row>
					</footer>
				</div>
			</main>
		);
	}
}

export default PublicLayout;
