import React, { Component } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import logo from 'assets/images/logo.png';
import styles from './style.module.scss';
import { StudentForm } from './SigupForms';

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
			user: { loading },
			match: {
				params: { userType },
			},
		} = this.props;

		console.log(userType);

		return (
			<div className={styles.width_750}>
				<div className={styles.formWrapper}>
					<div className={styles.form}>
						<StudentForm form={form} loading={loading} />
					</div>
					<div className={styles.sidebar}>
						<p className={styles.sidebarTitle}>Agile Dev Meetup</p>
						<p className={styles.sidebarSubTitle}>August 2018</p>
						<div className={styles.sidebarContent}>
							<p>
								Lorem Ipsum is simply dummy text of the printing and typesetting
								industry. Lorem Ipsum has been the industry&#39;s standard dummy
								text ever since the 1500s.
							</p>
							<p>
								Ipsum has been the industry&#39;s standard dummy text ever since the
								1500s.
							</p>
						</div>
						<div className={styles.sidebarFooter}>
							<span>
								<i className='icmn-location mr-3' />
								New York, USA
							</span>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default SignUp;

// import React, { Component } from 'react';
// import { Form, Input, Button, Checkbox } from 'antd';
// import { Helmet } from 'react-helmet';
// import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
// import logo from 'assets/images/logo.png';
// import styles from 'assets/styles/style.module.scss';

// @Form.create()
// @connect(({ user }) => ({ user }))
// class SignUp extends Component {
// 	onSubmit = event => {
// 		event.preventDefault();
// 		const { form, dispatch } = this.props;
// 		form.validateFields((error, values) => {
// 			if (!error) {
// 				console.log(values);
// 				// dispatch({
// 				// 	type: 'user/LOGIN',
// 				// 	payload: values
// 				// });
// 			}
// 		});
// 	};

// 	render() {
// 		const {
// 			form,
// 			user: { loading },
// 		} = this.props;
// 		return (
// 			<div>
// 				<div className={styles.block}>
// 					<div className='row'>
// 						<div className='col-xl-12'>
// 							<div className={styles.inner}>
// 								<div className={styles.form}>
// 									<div className={styles.text_center}>
// 										<img src={logo} width={200} />
// 										<h4 className='text-uppercase'>
// 											<strong>SignUp</strong>
// 										</h4>
// 									</div>
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		);
// 	}
// }

// export default SignUp;
