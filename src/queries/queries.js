import gql from 'graphql-tag';

export const pages = gql`
query characters {
          characters{
            results{
              id
              name
              image
            }
          }
        }
`
