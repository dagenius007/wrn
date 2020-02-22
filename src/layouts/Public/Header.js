import React from 'react';
import logo from 'assets/images/logo.png';
import { NavLink } from 'react-router-dom';
import { Icon } from 'antd';

export default () => (
	<div className='nav-container'>
		<nav class='navbar navbar-expand-lg navbar-light '>
			<a class='navbar-brand' href='/home'>
				<img src={logo} alt='' />
			</a>
			<button
				class='navbar-toggler'
				type='button'
				data-toggle='collapse'
				data-target='#navbarNavDropdown'
				aria-controls='navbarNavDropdown'
				aria-expanded='false'
				aria-label='Toggle navigation'
			>
				<span class='navbar-toggler-icon'></span>
			</button>
			<div class='collapse navbar-collapse' id='navbarNavDropdown'>
				<ul class='navbar-nav'>
					<li>
						<ul className='nav-list'>
							<li class='nav-item'>
								<NavLink class='nav-link' to='/home'>
									Free Trail
								</NavLink>
							</li>
							<li class='nav-item'>
								<NavLink class='nav-link' to='/products'>
									Products
								</NavLink>
							</li>
							<li class='nav-item'>
								<a class='nav-link' to='/'>
									Solutions for you
								</a>
							</li>
							<li class='nav-item'>
								<a class='nav-link' to='/'>
									Support
								</a>
							</li>
						</ul>
					</li>

					<li>
						<ul className='nav-icons'>
							<li class='nav-item'>
								<a class='nav-link' href='#'>
									<Icon type='phone' />
								</a>
							</li>
							<li class='nav-item'>
								<a class='nav-link' href='#'>
									<Icon type='search' />
								</a>
							</li>
							<li class='nav-item bg-green'>
								<NavLink class='nav-link' to='/user/login'>
									<Icon
										type='key'
										style={{
											color: 'white',
										}}
										width={'0.9em'}
										height={'0.9em'}
									/>
									<span>Product Sign-In</span>
								</NavLink>
							</li>
						</ul>
					</li>
				</ul>
			</div>
		</nav>
	</div>
);
