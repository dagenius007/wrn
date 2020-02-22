import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';
import styles from './style.module.scss';
import { Link } from 'react-router-dom';

export const StudentForm = ({ onSubmit, form, loading }) => {
	return (
		<>
			<p className={styles.formTitle}>Student Sign Up</p>
			<Form layout='vertical' hideRequiredMark onSubmit={onSubmit}>
				<Form.Item label='First Name'>
					{form.getFieldDecorator('firstName', {
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
					{form.getFieldDecorator('lastName', {
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
					{form.getFieldDecorator('email', {
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
				<Form.Item label='Retype Password'>
					{form.getFieldDecorator('password', {
						initialValue: 'cleanui',
						rules: [
							{
								required: true,
								message: 'Please input your password',
							},
						],
					})(<Input size='default' type='password' />)}
				</Form.Item>

				<div className='form-actions'>
					<Button
						type='primary'
						className={`width-150 mr-4' ${styles.btn_primary}`}
						htmlType='submit'
						loading={loading}
					>
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
		</>
	);
};

export const LawyerForm = () => {
	return (
		<Form layout='vertical' hideRequiredMark onSubmit={this.onSubmit}>
			<Form.Item label='First Name'>
				{form.getFieldDecorator('firstName', {
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
				{form.getFieldDecorator('lastName', {
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
				{form.getFieldDecorator('email', {
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
			<Form.Item label='Retype Password'>
				{form.getFieldDecorator('password', {
					initialValue: 'cleanui',
					rules: [
						{
							required: true,
							message: 'Please input your password',
						},
					],
				})(<Input size='default' type='password' />)}
			</Form.Item>

			<div className='form-actions'>
				<Button
					type='primary'
					className={`width-150 mr-4' ${styles.btn_primary}`}
					htmlType='submit'
					loading={loading}
				>
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
