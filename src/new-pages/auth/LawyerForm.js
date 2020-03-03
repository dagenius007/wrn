import React, { Component } from 'react';
import { Form, Input, Button, Icon } from 'antd';
import styles from './style.module.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';

const LawyerForm = ({ form, load, error, onSubmit }) => {
	return (
		<Form layout='vertical' hideRequiredMark scrollToFirstError onSubmit={onSubmit}>
			{error}
			<Form.Item label='First Name'>
				{form.getFieldDecorator('first_name', {
					initialValue: 'Paul',
					rules: [
						{
							required: true,
							message: 'Please input your first name address',
						},
					],
				})(<Input size='default' />)}
			</Form.Item>

			<Form.Item label='Last Name'>
				{form.getFieldDecorator('last_name', {
					initialValue: 'Ategsoft',
					rules: [
						{
							required: true,
							message: 'Please input your last name address',
						},
					],
				})(<Input size='default' />)}
			</Form.Item>

			<Form.Item label='Email'>
				{form.getFieldDecorator('email', {
					initialValue: 'admin@mediatec.org',
					rules: [
						{
							required: true,
							message: 'Please input your e-mail address',
						},
					],
				})(<Input size='default' />)}
			</Form.Item>

			<Form.Item label='Username'>
				{form.getFieldDecorator('user_name', {
					initialValue: 'paulateg',
					rules: [
						{
							required: true,
							message: 'Please input your username address',
						},
					],
				})(<Input size='default' />)}
			</Form.Item>
			<Form.Item label='Password'>
				{form.getFieldDecorator('password', {
					initialValue: 'cleanui',
					rules: [
						{
							required: true,
							message: 'Please input your e-mail address',
						},
					],
				})(<Input size='default' type='password' />)}
			</Form.Item>
			{/* <Form.Item label='Retype Password'>
				{form.getFieldDecorator('password', {
					initialValue: 'cleanui',
					rules: [
						{
							required: true,
							message: 'Please input your password',
						},
					],
				})(
					<Input
						size='default'
						type='password'
						onChange={e => {
							e.persist();
							setField(field => {
								return { ...field, rpassword: e.target.value };
							});
						}}
					/>,
				)}
			</Form.Item> */}

			<div className='form-actions'>
				<Button
					type='primary'
					className='login-form-button btn_primary'
					htmlType='submit'
					loading={load}
				>
					{/* {load ? <Icon name='loading' /> : 'Sign Up'} */}
					Sign Up
				</Button>
				<span className='ml-3 register-link'>
					<Link
						to='/user/login'
						className={`${styles.text_primary} utils__link--underlined`}
					>
						Login
					</Link>{' '}
					if you don&#39;t have account
				</span>
			</div>
		</Form>
	);
};

export default LawyerForm;
