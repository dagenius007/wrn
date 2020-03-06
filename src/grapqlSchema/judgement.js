import gql from 'graphql-tag';

export const GET_SUPREME_COURT_CASES = gql`
	query judgements_list($court_category: Int!, $pagination: Int!, $last_date: Long!) {
		judgements_list(
			court_category: $court_category
			pagination: $pagination
			last_date: $last_date
		) {
			... on T_response {
				ok
				message
				status
				error {
					path
					message
				}
			}
			... on judgements__list {
				ok
				message
				status
				error {
					path
					message
				}
				data {
					party_1
					party_2
					title
					description
					date
				}
			}
		}
	}
`;

export const GET_COURT_APPEAL_CASES = gql`
	query judgements_list($court_category: Int!, $pagination: Int!, $last_date: Long!) {
		judgements_list(
			court_category: $court_category
			pagination: $pagination
			last_date: $last_date
		) {
			... on T_response {
				ok
				message
				status
				error {
					path
					message
				}
			}
			... on judgements__list {
				ok
				message
				status
				data {
					party_1
					party_2
					title
					description
					date
				}
			}
		}
	}
`;
