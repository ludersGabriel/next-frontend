import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type LoginInput = {
  password: Scalars['String'];
  username: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  login: Scalars['String'];
  me: User;
};


export type MutationLoginArgs = {
  input: LoginInput;
};

export type Query = {
  __typename?: 'Query';
  findUser: User;
  findUsers: Array<User>;
  info: Scalars['String'];
};


export type QueryFindUserArgs = {
  userId: Scalars['String'];
};

export enum Role {
  Admin = 'ADMIN',
  User = 'USER'
}

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  name: Scalars['String'];
  role: Role;
  username: Scalars['String'];
};

export type LoginMutationVariables = Exact<{
  input: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: string };

export type InfoQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type InfoQueryQuery = { __typename?: 'Query', info: string };

export type MeMutationVariables = Exact<{ [key: string]: never; }>;


export type MeMutation = { __typename?: 'Mutation', me: { __typename?: 'User', id: string, username: string, name: string, role: Role } };


export const LoginDocument = gql`
    mutation Login($input: LoginInput!) {
  login(input: $input)
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const InfoQueryDocument = gql`
    query InfoQuery {
  info
}
    `;

/**
 * __useInfoQueryQuery__
 *
 * To run a query within a React component, call `useInfoQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useInfoQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useInfoQueryQuery({
 *   variables: {
 *   },
 * });
 */
export function useInfoQueryQuery(baseOptions?: Apollo.QueryHookOptions<InfoQueryQuery, InfoQueryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<InfoQueryQuery, InfoQueryQueryVariables>(InfoQueryDocument, options);
      }
export function useInfoQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<InfoQueryQuery, InfoQueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<InfoQueryQuery, InfoQueryQueryVariables>(InfoQueryDocument, options);
        }
export type InfoQueryQueryHookResult = ReturnType<typeof useInfoQueryQuery>;
export type InfoQueryLazyQueryHookResult = ReturnType<typeof useInfoQueryLazyQuery>;
export type InfoQueryQueryResult = Apollo.QueryResult<InfoQueryQuery, InfoQueryQueryVariables>;
export const MeDocument = gql`
    mutation Me {
  me {
    id
    username
    name
    role
  }
}
    `;
export type MeMutationFn = Apollo.MutationFunction<MeMutation, MeMutationVariables>;

/**
 * __useMeMutation__
 *
 * To run a mutation, you first call `useMeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [meMutation, { data, loading, error }] = useMeMutation({
 *   variables: {
 *   },
 * });
 */
export function useMeMutation(baseOptions?: Apollo.MutationHookOptions<MeMutation, MeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<MeMutation, MeMutationVariables>(MeDocument, options);
      }
export type MeMutationHookResult = ReturnType<typeof useMeMutation>;
export type MeMutationResult = Apollo.MutationResult<MeMutation>;
export type MeMutationOptions = Apollo.BaseMutationOptions<MeMutation, MeMutationVariables>;