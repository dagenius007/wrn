import React from 'react';
import { Form, Icon, Input, Button } from 'antd';
import { Link } from 'react-router-dom';
import axios from 'axios';
// import { LoadingOutlined } from '@ant-design/icons';
const FormItem = Form.Item;

const LoginFormComponent = ({ form, loading, onSubmit }) => {
	return (
		<Form onSubmit={onSubmit} className='login-form'>
			<FormItem label='Username'>
				{form.getFieldDecorator('user_name', {
					rules: [{ required: true, message: 'Please input your username!' }],
				})(
					<Input
						prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />}
						placeholder='Username'
					/>,
				)}
			</FormItem>
			<FormItem label='Password'>
				{form.getFieldDecorator('password', {
					rules: [{ required: true, message: 'Please input your Password!' }],
				})(
					<Input
						prefix={<Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />}
						type='password'
						placeholder='Password'
					/>,
				)}
			</FormItem>
			{/* <FormItem>
					{form.getFieldDecorator('remember', {
						valuePropName: 'checked',
						initialValue: true,
					})(<Checkbox>Remember me</Checkbox>)}
					<a
						className='login-form-forgot pull-right text_primary'
						style={{ lineHeight: '36px' }}
						href='javascript: void(0);'
					>
						Forgot password?
					</a>
				</FormItem> */}
			<div className='form-actions'>
				<Button
					type='primary'
					htmlType='submit'
					className='login-form-button btn_primary'
					loading={loading}
				>
					Sign In
					{/* {load ? (
							<Icon type='loading' style={{ color: 'rgba(0,0,0,.25)' }} />
						) : (
							'Sign In'
						)} */}
				</Button>
				<span className='ml-3 register-link'>
					<Link
						to='/user/signup/lawyer'
						className=' utils__link--underlined text_primary'
					>
						Register
					</Link>{' '}
					if you don&#39;t have account
				</span>
			</div>
			<div className='form-group'>
				<p>Use another service to Log In</p>
				<div className='mt-2'>
					<a
						href='https://wrn-server.herokuapp.com/api/v1/oauth/facebook'
						className='btn btn-icon mr-2'
					>
						<i className='icmn-facebook' />
					</a>
					<a
						href='https://wrn-server.herokuapp.com/api/v1/oauth/google'
						className='btn btn-icon mr-2'
					>
						<i className='icmn-google' />
					</a>
					<a
						href='https://wrn-server.herokuapp.com/api/v1/oauth/microsoft'
						className='btn btn-icon mr-2'
					>
						<i className='icmn-windows' />
					</a>
					<a
						href='https://wrn-server.herokuapp.com/api/v1/oauth/twitter'
						className='btn btn-icon mr-2'
					>
						<i className='icmn-twitter' />
					</a>
				</div>
			</div>
		</Form>
	);
};

const LoginForm = Form.create()(LoginFormComponent);
export default LoginForm;
