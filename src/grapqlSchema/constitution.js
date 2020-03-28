import gql from "graphql-tag";

export const GET_BASE_CONSTITUTION = gql`
  query depth_one_chapters_and_structure(
    $heirachy_set: [Int!]
    $region: Region!
    $depth: Int
    $type: String
  ) {
    constitution_stucture(
      heirachy_set: $heirachy_set
      region: $region
      depth: $depth
      type: $type
    ) {
      ... on _constitution_stucture {
        ok
        message
        status
        data {
          ... on depth_one {
            chapters {
              id
              title
              description
              parts {
                id
                title
                chapter_id
              }
            }

            schedules {
              id
              title
              description
              parts {
                id
                title
                chapter_id
                articles {
                  id
                  article
                  parts_id
                }
              }
            }
          }
        }
      }
      ... on T_response {
        ok
        message
        status
        error {
          path
          message
        }
      }
    }
  }
`;
