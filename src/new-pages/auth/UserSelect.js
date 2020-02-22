import React from 'react';
import styles from './style.module.scss';
import { Link } from 'react-router-dom';

export default ({ setRegister }) => (
	<>
		<p className={styles.formTitle}>Register as a ?</p>
		<Link to='/user/signup/lawyer' className={styles.user_select}>
			Lawyer
		</Link>
		<Link to='/user/signup/student' className={styles.user_select}>
			Student
		</Link>

		<Link to='/user/signup/student' className={styles.user_select}>
			Student
		</Link>
	</>
);
