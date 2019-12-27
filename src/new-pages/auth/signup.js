import React, { Component } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import logo from 'assets/images/logo.png';
import styles from 'assets/styles/style.module.scss';

@Form.create()
@connect(({ user }) => ({ user }))
class SignUp extends Component {
	onSubmit = event => {
		event.preventDefault();
		const { form, dispatch } = this.props;
		form.validateFields((error, values) => {
			if (!error) {
				console.log(values);
				// dispatch({
				// 	type: 'user/LOGIN',
				// 	payload: values
				// });
			}
		});
	};

	render() {
		const {
			form,
			user: { loading }
		} = this.props;
		return (
			<div>
				<div className={styles.block}>
					<div className="row">
						<div className="col-xl-12">
							<div className={styles.inner}>
								<div className={styles.form}>
									<div className={styles.text_center}>
										<img src={logo} />
										<h4 className="text-uppercase">
											<strong>SignUp</strong>
										</h4>
									</div>

									<Form layout="vertical" hideRequiredMark onSubmit={this.onSubmit}>
										<Form.Item label="First Name">
											{form.getFieldDecorator('firstName', {
												initialValue: 'Paul',
												rules: [{ required: true, message: 'Please input your first name address' }]
											})(<Input size="default" />)}
										</Form.Item>

										<Form.Item label="Last Name">
											{form.getFieldDecorator('lastName', {
												initialValue: 'Ategsoft',
												rules: [{ required: true, message: 'Please input your last name address' }]
											})(<Input size="default" />)}
										</Form.Item>

										<Form.Item label="Email">
											{form.getFieldDecorator('email', {
												initialValue: 'admin@mediatec.org',
												rules: [{ required: true, message: 'Please input your e-mail address' }]
											})(<Input size="default" />)}
										</Form.Item>

										<Form.Item label="Username">
											{form.getFieldDecorator('email', {
												initialValue: 'paulateg',
												rules: [{ required: true, message: 'Please input your username address' }]
											})(<Input size="default" />)}
										</Form.Item>
										<Form.Item label="Password">
											{form.getFieldDecorator('password', {
												initialValue: 'cleanui',
												rules: [{ required: true, message: 'Please input your e-mail address' }]
											})(<Input size="default" type="password" />)}
										</Form.Item>
										<Form.Item label="Retype Password">
											{form.getFieldDecorator('password', {
												initialValue: 'cleanui',
												rules: [{ required: true, message: 'Please input your password' }]
											})(<Input size="default" type="password" />)}
										</Form.Item>

										<div className="form-actions">
											<Button
												type="primary"
												className={`width-150 mr-4' ${styles.btn_primary}`}
												htmlType="submit"
												loading={loading}
											>
												Sign Up
											</Button>
											<span className="ml-3 register-link">
												<Link
													to="/user/login"
													className={`${styles.text_primary} utils__link--underlined`}
												>
													Login
												</Link>{' '}
												if you don&#39;t have account
											</span>
										</div>
									</Form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default SignUp;
