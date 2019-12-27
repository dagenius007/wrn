import React, { Component } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import logo from 'assets/images/logo.png';
import styles from 'assets/styles/style.module.scss';

@Form.create()
@connect(({ user }) => ({ user }))
class Login extends Component {
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
										<Form.Item label="Email">
											{form.getFieldDecorator('email', {
												initialValue: 'admin@mediatec.org',
												rules: [{ required: true, message: 'Please input your e-mail address' }]
											})(<Input size="default" />)}
										</Form.Item>

										<Form.Item label="Password">
											{form.getFieldDecorator('password', {
												initialValue: 'cleanui',
												rules: [{ required: true, message: 'Please input your e-mail address' }]
											})(<Input size="default" type="password" />)}
										</Form.Item>

										<Form.Item>
											{form.getFieldDecorator('remember', {
												valuePropName: 'checked',
												initialValue: true
											})(<Checkbox>Remember me</Checkbox>)}
											<Link
												to="/user/forgot"
												className={`${styles.text_primary} utils__link--blue utils__link--underlined pull-right`}
											>
												Forgot password?
											</Link>
										</Form.Item>
										<div className="form-actions">
											<Button
												type="primary"
												className={`width-150 mr-4' ${styles.btn_primary}`}
												htmlType="submit"
												loading={loading}
											>
												Login
											</Button>
											<span className="ml-3 register-link">
												<Link
													to="/user/signup"
													className={`${styles.text_primary} utils__link--underlined`}
												>
													Sign Up
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

export default Login;
