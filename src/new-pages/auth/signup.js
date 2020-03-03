import React, { useState } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { useMutation } from '@apollo/react-hooks';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import logo from 'assets/images/logo.png';
import gql from 'graphql-tag';
import styles from './style.module.scss';
import LawyerForm from './LawyerForm';

const SignUp = ({ match, form }) => {
	const SIGN_UP_MUTATION = gql`
		mutation register(
			$first_name: String!
			$last_name: String!
			$email: String!
			$role: Int!
			$user_name: String
			$password: String!
			$picture_url: String
		) {
			register(
				first_name: $first_name
				last_name: $last_name
				email: $email
				role: $role
				user_name: $user_name
				password: $password
				picture_url: $picture_url
			) {
				ok
				message
				status
			}
		}
	`;

	const [signUp, { data }] = useMutation(SIGN_UP_MUTATION);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');

	const onSubmit = event => {
		event.preventDefault();

		form.validateFields(async (error, values) => {
			if (!error) {
				setLoading(true);
				try {
					await signUp({ variables: { ...values, role: 2 } });
					window.location.href = '/user/login';
				} catch (err) {
					setError('Oops something went wrong');
				}
				setLoading(false);
			}
		});
	};

	// render() {
	// const {
	// 	form,
	// 	user: { loading },
	// 	match: {
	// 		params: { userType },
	// 	},
	// } = this.props;
	const userType = match.params.userType;
	return (
		<div className={styles.width_750}>
			<div className={styles.formWrapper}>
				<div className={styles.form}>
					{userType === 'lawyer' && (
						<LawyerForm form={form} load={loading} onSubmit={onSubmit} error={error} />
					)}
				</div>
				<div className={styles.sidebar}>
					<p className={styles.sidebarTitle}>Agile Dev Meetup</p>
					<p className={styles.sidebarSubTitle}>August 2018</p>
					<div className={styles.sidebarContent}>
						<p>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry&#39;s standard dummy text
							ever since the 1500s.
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
	// }
};

const LoginForm = Form.create({ name: 'login' })(SignUp);

export default LoginForm;

// export default SignUp;
