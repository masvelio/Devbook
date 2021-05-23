import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  jsonb: any;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: Maybe<Scalars['String']>;
  _is_null?: Maybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: Maybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: Maybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: Maybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: Maybe<Scalars['String']>;
};

/** columns and relationships of "developers" */
export type Developers = {
  __typename?: 'developers';
  bio: Scalars['String'];
  country_code: Scalars['String'];
  first_name: Scalars['String'];
  github_url?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  image_url: Scalars['String'];
  job_position: Scalars['String'];
  last_name: Scalars['String'];
  linked_in_url?: Maybe<Scalars['String']>;
  rating: Scalars['Int'];
  super_powers: Scalars['jsonb'];
  technologies: Scalars['jsonb'];
  user_id: Scalars['String'];
  years_of_experience: Scalars['Int'];
};

/** columns and relationships of "developers" */
export type DevelopersSuper_PowersArgs = {
  path?: Maybe<Scalars['String']>;
};

/** columns and relationships of "developers" */
export type DevelopersTechnologiesArgs = {
  path?: Maybe<Scalars['String']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Developers_Append_Input = {
  super_powers?: Maybe<Scalars['jsonb']>;
  technologies?: Maybe<Scalars['jsonb']>;
};

/** Boolean expression to filter rows from the table "developers". All fields are combined with a logical 'AND'. */
export type Developers_Bool_Exp = {
  _and?: Maybe<Array<Developers_Bool_Exp>>;
  _not?: Maybe<Developers_Bool_Exp>;
  _or?: Maybe<Array<Developers_Bool_Exp>>;
  bio?: Maybe<String_Comparison_Exp>;
  country_code?: Maybe<String_Comparison_Exp>;
  first_name?: Maybe<String_Comparison_Exp>;
  github_url?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  image_url?: Maybe<String_Comparison_Exp>;
  job_position?: Maybe<String_Comparison_Exp>;
  last_name?: Maybe<String_Comparison_Exp>;
  linked_in_url?: Maybe<String_Comparison_Exp>;
  rating?: Maybe<Int_Comparison_Exp>;
  super_powers?: Maybe<Jsonb_Comparison_Exp>;
  technologies?: Maybe<Jsonb_Comparison_Exp>;
  user_id?: Maybe<String_Comparison_Exp>;
  years_of_experience?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "developers" */
export enum Developers_Constraint {
  /** unique or primary key constraint */
  DevelopersPkey = 'developers_pkey',
  /** unique or primary key constraint */
  DevelopersUserIdKey = 'developers_user_id_key',
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Developers_Delete_At_Path_Input = {
  super_powers?: Maybe<Array<Scalars['String']>>;
  technologies?: Maybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Developers_Delete_Elem_Input = {
  super_powers?: Maybe<Scalars['Int']>;
  technologies?: Maybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Developers_Delete_Key_Input = {
  super_powers?: Maybe<Scalars['String']>;
  technologies?: Maybe<Scalars['String']>;
};

/** input type for incrementing numeric columns in table "developers" */
export type Developers_Inc_Input = {
  rating?: Maybe<Scalars['Int']>;
  years_of_experience?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "developers" */
export type Developers_Insert_Input = {
  bio?: Maybe<Scalars['String']>;
  country_code?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  github_url?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  image_url?: Maybe<Scalars['String']>;
  job_position?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  linked_in_url?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Int']>;
  super_powers?: Maybe<Scalars['jsonb']>;
  technologies?: Maybe<Scalars['jsonb']>;
  user_id?: Maybe<Scalars['String']>;
  years_of_experience?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "developers" */
export type Developers_Mutation_Response = {
  __typename?: 'developers_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Developers>;
};

/** on conflict condition type for table "developers" */
export type Developers_On_Conflict = {
  constraint: Developers_Constraint;
  update_columns?: Array<Developers_Update_Column>;
  where?: Maybe<Developers_Bool_Exp>;
};

/** Ordering options when selecting data from "developers". */
export type Developers_Order_By = {
  bio?: Maybe<Order_By>;
  country_code?: Maybe<Order_By>;
  first_name?: Maybe<Order_By>;
  github_url?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  image_url?: Maybe<Order_By>;
  job_position?: Maybe<Order_By>;
  last_name?: Maybe<Order_By>;
  linked_in_url?: Maybe<Order_By>;
  rating?: Maybe<Order_By>;
  super_powers?: Maybe<Order_By>;
  technologies?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
  years_of_experience?: Maybe<Order_By>;
};

/** primary key columns input for table: developers */
export type Developers_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Developers_Prepend_Input = {
  super_powers?: Maybe<Scalars['jsonb']>;
  technologies?: Maybe<Scalars['jsonb']>;
};

/** select columns of table "developers" */
export enum Developers_Select_Column {
  /** column name */
  Bio = 'bio',
  /** column name */
  CountryCode = 'country_code',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  GithubUrl = 'github_url',
  /** column name */
  Id = 'id',
  /** column name */
  ImageUrl = 'image_url',
  /** column name */
  JobPosition = 'job_position',
  /** column name */
  LastName = 'last_name',
  /** column name */
  LinkedInUrl = 'linked_in_url',
  /** column name */
  Rating = 'rating',
  /** column name */
  SuperPowers = 'super_powers',
  /** column name */
  Technologies = 'technologies',
  /** column name */
  UserId = 'user_id',
  /** column name */
  YearsOfExperience = 'years_of_experience',
}

/** input type for updating data in table "developers" */
export type Developers_Set_Input = {
  bio?: Maybe<Scalars['String']>;
  country_code?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  github_url?: Maybe<Scalars['String']>;
  image_url?: Maybe<Scalars['String']>;
  job_position?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  linked_in_url?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Int']>;
  super_powers?: Maybe<Scalars['jsonb']>;
  technologies?: Maybe<Scalars['jsonb']>;
  years_of_experience?: Maybe<Scalars['Int']>;
};

/** update columns of table "developers" */
export enum Developers_Update_Column {
  /** column name */
  Bio = 'bio',
  /** column name */
  CountryCode = 'country_code',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  GithubUrl = 'github_url',
  /** column name */
  ImageUrl = 'image_url',
  /** column name */
  JobPosition = 'job_position',
  /** column name */
  LastName = 'last_name',
  /** column name */
  LinkedInUrl = 'linked_in_url',
  /** column name */
  Rating = 'rating',
  /** column name */
  SuperPowers = 'super_powers',
  /** column name */
  Technologies = 'technologies',
  /** column name */
  YearsOfExperience = 'years_of_experience',
}

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  /** is the column contained in the given json value */
  _contained_in?: Maybe<Scalars['jsonb']>;
  /** does the column contain the given json value at the top level */
  _contains?: Maybe<Scalars['jsonb']>;
  _eq?: Maybe<Scalars['jsonb']>;
  _gt?: Maybe<Scalars['jsonb']>;
  _gte?: Maybe<Scalars['jsonb']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: Maybe<Scalars['String']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: Maybe<Array<Scalars['String']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: Maybe<Array<Scalars['String']>>;
  _in?: Maybe<Array<Scalars['jsonb']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['jsonb']>;
  _lte?: Maybe<Scalars['jsonb']>;
  _neq?: Maybe<Scalars['jsonb']>;
  _nin?: Maybe<Array<Scalars['jsonb']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** insert data into the table: "developers" */
  insert_developers?: Maybe<Developers_Mutation_Response>;
  /** insert a single row into the table: "developers" */
  insert_developers_one?: Maybe<Developers>;
  /** update data of the table: "developers" */
  update_developers?: Maybe<Developers_Mutation_Response>;
  /** update single row of the table: "developers" */
  update_developers_by_pk?: Maybe<Developers>;
};

/** mutation root */
export type Mutation_RootInsert_DevelopersArgs = {
  objects: Array<Developers_Insert_Input>;
  on_conflict?: Maybe<Developers_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Developers_OneArgs = {
  object: Developers_Insert_Input;
  on_conflict?: Maybe<Developers_On_Conflict>;
};

/** mutation root */
export type Mutation_RootUpdate_DevelopersArgs = {
  _append?: Maybe<Developers_Append_Input>;
  _delete_at_path?: Maybe<Developers_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Developers_Delete_Elem_Input>;
  _delete_key?: Maybe<Developers_Delete_Key_Input>;
  _inc?: Maybe<Developers_Inc_Input>;
  _prepend?: Maybe<Developers_Prepend_Input>;
  _set?: Maybe<Developers_Set_Input>;
  where: Developers_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Developers_By_PkArgs = {
  _append?: Maybe<Developers_Append_Input>;
  _delete_at_path?: Maybe<Developers_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Developers_Delete_Elem_Input>;
  _delete_key?: Maybe<Developers_Delete_Key_Input>;
  _inc?: Maybe<Developers_Inc_Input>;
  _prepend?: Maybe<Developers_Prepend_Input>;
  _set?: Maybe<Developers_Set_Input>;
  pk_columns: Developers_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last',
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "developers" */
  developers: Array<Developers>;
  /** fetch data from the table: "developers" using primary key columns */
  developers_by_pk?: Maybe<Developers>;
};

export type Query_RootDevelopersArgs = {
  distinct_on?: Maybe<Array<Developers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Developers_Order_By>>;
  where?: Maybe<Developers_Bool_Exp>;
};

export type Query_RootDevelopers_By_PkArgs = {
  id: Scalars['Int'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "developers" */
  developers: Array<Developers>;
  /** fetch data from the table: "developers" using primary key columns */
  developers_by_pk?: Maybe<Developers>;
};

export type Subscription_RootDevelopersArgs = {
  distinct_on?: Maybe<Array<Developers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Developers_Order_By>>;
  where?: Maybe<Developers_Bool_Exp>;
};

export type Subscription_RootDevelopers_By_PkArgs = {
  id: Scalars['Int'];
};

export type GetMyDeveloperProfileQueryVariables = Exact<{
  developerId?: Maybe<Scalars['Int']>;
}>;

export type GetMyDeveloperProfileQuery = { __typename?: 'query_root' } & {
  developers: Array<
    { __typename?: 'developers' } & Pick<
      Developers,
      | 'id'
      | 'first_name'
      | 'image_url'
      | 'bio'
      | 'github_url'
      | 'country_code'
      | 'job_position'
      | 'last_name'
      | 'linked_in_url'
      | 'rating'
      | 'super_powers'
      | 'technologies'
      | 'user_id'
      | 'years_of_experience'
    >
  >;
};

export type GetDevelopersProfileQueryVariables = Exact<{
  [key: string]: never;
}>;

export type GetDevelopersProfileQuery = { __typename?: 'query_root' } & {
  developers: Array<
    { __typename?: 'developers' } & Pick<
      Developers,
      | 'id'
      | 'first_name'
      | 'image_url'
      | 'bio'
      | 'github_url'
      | 'country_code'
      | 'job_position'
      | 'last_name'
      | 'linked_in_url'
      | 'rating'
      | 'super_powers'
      | 'technologies'
      | 'user_id'
      | 'years_of_experience'
    >
  >;
};

export const GetMyDeveloperProfileDocument = gql`
  query GetMyDeveloperProfile($developerId: Int) {
    developers(where: { id: { _eq: $developerId } }) {
      id
      first_name
      image_url
      bio
      github_url
      country_code
      job_position
      last_name
      linked_in_url
      rating
      super_powers
      technologies
      user_id
      years_of_experience
    }
  }
`;

/**
 * __useGetMyDeveloperProfileQuery__
 *
 * To run a query within a React component, call `useGetMyDeveloperProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMyDeveloperProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMyDeveloperProfileQuery({
 *   variables: {
 *      developerId: // value for 'developerId'
 *   },
 * });
 */
export function useGetMyDeveloperProfileQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetMyDeveloperProfileQuery,
    GetMyDeveloperProfileQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetMyDeveloperProfileQuery,
    GetMyDeveloperProfileQueryVariables
  >(GetMyDeveloperProfileDocument, options);
}
export function useGetMyDeveloperProfileLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetMyDeveloperProfileQuery,
    GetMyDeveloperProfileQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetMyDeveloperProfileQuery,
    GetMyDeveloperProfileQueryVariables
  >(GetMyDeveloperProfileDocument, options);
}
export type GetMyDeveloperProfileQueryHookResult = ReturnType<
  typeof useGetMyDeveloperProfileQuery
>;
export type GetMyDeveloperProfileLazyQueryHookResult = ReturnType<
  typeof useGetMyDeveloperProfileLazyQuery
>;
export type GetMyDeveloperProfileQueryResult = Apollo.QueryResult<
  GetMyDeveloperProfileQuery,
  GetMyDeveloperProfileQueryVariables
>;
export const GetDevelopersProfileDocument = gql`
  query GetDevelopersProfile {
    developers {
      id
      first_name
      image_url
      bio
      github_url
      country_code
      job_position
      last_name
      linked_in_url
      rating
      super_powers
      technologies
      user_id
      years_of_experience
    }
  }
`;

/**
 * __useGetDevelopersProfileQuery__
 *
 * To run a query within a React component, call `useGetDevelopersProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDevelopersProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDevelopersProfileQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetDevelopersProfileQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetDevelopersProfileQuery,
    GetDevelopersProfileQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetDevelopersProfileQuery,
    GetDevelopersProfileQueryVariables
  >(GetDevelopersProfileDocument, options);
}
export function useGetDevelopersProfileLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetDevelopersProfileQuery,
    GetDevelopersProfileQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetDevelopersProfileQuery,
    GetDevelopersProfileQueryVariables
  >(GetDevelopersProfileDocument, options);
}
export type GetDevelopersProfileQueryHookResult = ReturnType<
  typeof useGetDevelopersProfileQuery
>;
export type GetDevelopersProfileLazyQueryHookResult = ReturnType<
  typeof useGetDevelopersProfileLazyQuery
>;
export type GetDevelopersProfileQueryResult = Apollo.QueryResult<
  GetDevelopersProfileQuery,
  GetDevelopersProfileQueryVariables
>;
