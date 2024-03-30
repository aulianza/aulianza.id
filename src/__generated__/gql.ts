/* eslint-disable */
import * as types from './graphql'
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
  '\n  fragment BlogOverviewEntryFragment on blog_Entry {\n    id\n    title\n    slug\n    dateCreated\n    description\n    isFeatured\n    featuredImage {\n      url\n    }\n  }\n':
    types.BlogOverviewEntryFragmentFragmentDoc,
  '\n  fragment BlogBlockFragment on blogSection_Entry {\n    id\n    title\n    doxterContent\n  }\n':
    types.BlogBlockFragmentFragmentDoc,
  '\n  fragment BlogEntryFragment on blog_Entry {\n    id\n    title\n    slug\n    description\n    dateCreated\n    dateUpdated\n    isFeatured\n    featuredImage {\n      url\n    }\n    blogBlock {\n      ...BlogBlockFragment\n    }\n  }\n':
    types.BlogEntryFragmentFragmentDoc,
  '\n  \n\n  query GetBlogs {\n    blogsEntries {\n      ...BlogOverviewEntryFragment\n    }\n  }\n':
    types.GetBlogsDocument,
  '\n  \n  \n  query GetBlogDetail($slug: [String]) {\n    blogsEntries(slug: $slug) {\n      ...BlogEntryFragment\n    }\n  }\n':
    types.GetBlogDetailDocument,
  '\n  fragment PagesDocumentEntry on pages_Entry {\n    id\n    title\n    slug\n    doxterContent\n  }\n':
    types.PagesDocumentEntryFragmentDoc,
  '\n  \n\n  query GetPageDetail($slug: [String]) {\n    pagesEntries(slug: $slug) {\n      ...PagesDocumentEntry\n    }\n  }\n':
    types.GetPageDetailDocument,
  '\n  fragment ProjectEntryStackCategoryFragment on stacks_Category {\n    id\n    stackHandle\n    title\n  }\n':
    types.ProjectEntryStackCategoryFragmentFragmentDoc,
  '\n  fragment ProjectEntryFragment on project_Entry {\n    id\n    title\n    slug\n    isFeatured\n    description\n    projectHeaderImage {\n      url\n    }\n    stacks {\n      ...ProjectEntryStackCategoryFragment\n    }\n  }\n':
    types.ProjectEntryFragmentFragmentDoc,
  '\n  fragment ProjectDetailFragment on project_Entry {\n    title\n    slug\n    dateCreated\n    dateUpdated\n    projectInformation\n    description\n    projectLiveDemoLink\n    projectSourcecodeRepositoryLink\n    projectHeaderImage {\n      id\n      url\n    }\n    stacks {\n      ...ProjectEntryStackCategoryFragment\n    }\n  }\n':
    types.ProjectDetailFragmentFragmentDoc,
  '\n  \n  \n\n  query GetProjects {\n    projectsEntries {\n      ...ProjectEntryFragment\n    }\n  }\n':
    types.GetProjectsDocument,
  '\n  \n  \n\n  query GetProjectDetail($slug: [String]) {\n    projectsEntries(slug: $slug) {\n      ...ProjectDetailFragment\n    }\n  }\n':
    types.GetProjectDetailDocument,
}

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  fragment BlogOverviewEntryFragment on blog_Entry {\n    id\n    title\n    slug\n    dateCreated\n    description\n    isFeatured\n    featuredImage {\n      url\n    }\n  }\n',
): (typeof documents)['\n  fragment BlogOverviewEntryFragment on blog_Entry {\n    id\n    title\n    slug\n    dateCreated\n    description\n    isFeatured\n    featuredImage {\n      url\n    }\n  }\n']
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  fragment BlogBlockFragment on blogSection_Entry {\n    id\n    title\n    doxterContent\n  }\n',
): (typeof documents)['\n  fragment BlogBlockFragment on blogSection_Entry {\n    id\n    title\n    doxterContent\n  }\n']
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  fragment BlogEntryFragment on blog_Entry {\n    id\n    title\n    slug\n    description\n    dateCreated\n    dateUpdated\n    isFeatured\n    featuredImage {\n      url\n    }\n    blogBlock {\n      ...BlogBlockFragment\n    }\n  }\n',
): (typeof documents)['\n  fragment BlogEntryFragment on blog_Entry {\n    id\n    title\n    slug\n    description\n    dateCreated\n    dateUpdated\n    isFeatured\n    featuredImage {\n      url\n    }\n    blogBlock {\n      ...BlogBlockFragment\n    }\n  }\n']
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  \n\n  query GetBlogs {\n    blogsEntries {\n      ...BlogOverviewEntryFragment\n    }\n  }\n',
): (typeof documents)['\n  \n\n  query GetBlogs {\n    blogsEntries {\n      ...BlogOverviewEntryFragment\n    }\n  }\n']
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  \n  \n  query GetBlogDetail($slug: [String]) {\n    blogsEntries(slug: $slug) {\n      ...BlogEntryFragment\n    }\n  }\n',
): (typeof documents)['\n  \n  \n  query GetBlogDetail($slug: [String]) {\n    blogsEntries(slug: $slug) {\n      ...BlogEntryFragment\n    }\n  }\n']
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  fragment PagesDocumentEntry on pages_Entry {\n    id\n    title\n    slug\n    doxterContent\n  }\n',
): (typeof documents)['\n  fragment PagesDocumentEntry on pages_Entry {\n    id\n    title\n    slug\n    doxterContent\n  }\n']
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  \n\n  query GetPageDetail($slug: [String]) {\n    pagesEntries(slug: $slug) {\n      ...PagesDocumentEntry\n    }\n  }\n',
): (typeof documents)['\n  \n\n  query GetPageDetail($slug: [String]) {\n    pagesEntries(slug: $slug) {\n      ...PagesDocumentEntry\n    }\n  }\n']
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  fragment ProjectEntryStackCategoryFragment on stacks_Category {\n    id\n    stackHandle\n    title\n  }\n',
): (typeof documents)['\n  fragment ProjectEntryStackCategoryFragment on stacks_Category {\n    id\n    stackHandle\n    title\n  }\n']
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  fragment ProjectEntryFragment on project_Entry {\n    id\n    title\n    slug\n    isFeatured\n    description\n    projectHeaderImage {\n      url\n    }\n    stacks {\n      ...ProjectEntryStackCategoryFragment\n    }\n  }\n',
): (typeof documents)['\n  fragment ProjectEntryFragment on project_Entry {\n    id\n    title\n    slug\n    isFeatured\n    description\n    projectHeaderImage {\n      url\n    }\n    stacks {\n      ...ProjectEntryStackCategoryFragment\n    }\n  }\n']
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  fragment ProjectDetailFragment on project_Entry {\n    title\n    slug\n    dateCreated\n    dateUpdated\n    projectInformation\n    description\n    projectLiveDemoLink\n    projectSourcecodeRepositoryLink\n    projectHeaderImage {\n      id\n      url\n    }\n    stacks {\n      ...ProjectEntryStackCategoryFragment\n    }\n  }\n',
): (typeof documents)['\n  fragment ProjectDetailFragment on project_Entry {\n    title\n    slug\n    dateCreated\n    dateUpdated\n    projectInformation\n    description\n    projectLiveDemoLink\n    projectSourcecodeRepositoryLink\n    projectHeaderImage {\n      id\n      url\n    }\n    stacks {\n      ...ProjectEntryStackCategoryFragment\n    }\n  }\n']
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  \n  \n\n  query GetProjects {\n    projectsEntries {\n      ...ProjectEntryFragment\n    }\n  }\n',
): (typeof documents)['\n  \n  \n\n  query GetProjects {\n    projectsEntries {\n      ...ProjectEntryFragment\n    }\n  }\n']
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  \n  \n\n  query GetProjectDetail($slug: [String]) {\n    projectsEntries(slug: $slug) {\n      ...ProjectDetailFragment\n    }\n  }\n',
): (typeof documents)['\n  \n  \n\n  query GetProjectDetail($slug: [String]) {\n    projectsEntries(slug: $slug) {\n      ...ProjectDetailFragment\n    }\n  }\n']

export function gql(source: string) {
  return (documents as any)[source] ?? {}
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never
