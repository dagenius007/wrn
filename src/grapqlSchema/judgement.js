import gql from "graphql-tag";

export const GET_JUDGEMENTS = gql`
  query judgements_list(
    $court_category: Int!
    $pagination: Int!
    $last_date: Long!
    $region: Region!
  ) {
    judgements_list(
      court_category: $court_category
      region: $region
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
      ... on judgements_list {
        ok
        message
        status
        data {
          party_1
          party_2
          title
          section
          description
          date
        }
      }
    }
  }
`;

export const GET_NO_AUTH_CASE = gql`
  query no_auth_case_details($case_id: Int!, $region: Region!) {
    case_details(case_id: $case_id, region: $region) {
      ... on T_response {
        ok
        message
        status
        error {
          path
          message
        }
      }
      ... on case_summary {
        ok
        message
        status
        data {
          auth
          case_details {
            id
            party_1
            party_2
            title
            wrn_ref
            section
            court_id
            case_no
            party_1_desc
            party_2_desc
            facts_and_history
            issues
          }
          judgement_and_justices {
            id
            justice
          }
        }
      }
    }
  }
`;
