import gql from "graphql-tag";

export const GET_VOLUMES = gql`
  query volumes($pagination: Int!, $last_date: Long!, $region: Region!) {
    volumes(pagination: $pagination, last_date: $last_date, region: $region) {
      ... on T_response {
        ok
        message
        status
      }
      ... on volumes_ {
        ok
        message
        status
        data {
          volume
          date
        }
      }
    }
  }
`;
