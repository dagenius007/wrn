import React from 'react';
import Loader from 'react-loader-spinner';

export const ButtonLoader = () => <Loader type='Oval' color='white' width='20' height='20' />;

export const PageLoader = () => (
	<div className='page-loader'>
		<Loader type='TailSpin' color='#E51773' width='56' height='56' />
	</div>
);

export const BlockLoader = () => (
	<div className='block-loader'>
		<Loader type='TailSpin' color='#E51773' width='46' height='46' />
	</div>
);

