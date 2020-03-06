import gql from 'graphql-tag';

export const SIGN_UP_MUTATION = gql`
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

export const LOGIN_MUTATION = gql`
	mutation _login($user_name: String!, $password: String!) {
	login(user_name: $user_name, password: $password) {
		ok
		message
		status
		error {
			path
			message
		}
	}
}
`;
