import React, { useState } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import logo from 'assets/images/logo.png';
import styles from './style.module.scss';
import LoginForm from './LoginForm';
import { useMutation } from '@apollo/react-hooks';
import { useStore } from 'context';
import { LOGIN_MUTATION } from 'grapqlSchema/auth';

const Login = ({ form }) => {
	const [login, { data, loading: mutationLoading }] = useMutation(LOGIN_MUTATION);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');

	const onSubmit = event => {
		event.preventDefault();
		// can you see this in real-time 11:53pm??

		form.validateFields(async (error, values) => {
			if (!error) {
				setLoading(true);
				try {
					const executionData = await login({ variables: { ...values } });
					console.log(data); // use just execution data... it returrns everything pro
				} catch (err) {
					setError('Oops something went wrong'); // most likely network errors .. handle them later dont forget
				}
				setLoading(false);
			}
		});
	};

	return (
		<div className={styles.width_750}>
			<div className={styles.formWrapper}>
				<div className={styles.form}>
					<p className={styles.formTitle}>Please log in</p>
					<LoginForm form={form} onSubmit={onSubmit} loading={loading} />
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
};

const LoginForms = Form.create({ name: 'login' })(Login);

export default LoginForms;
