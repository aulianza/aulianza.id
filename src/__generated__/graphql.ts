/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never }
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never
    }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
  /** The `DateTime` scalar type represents a point in time. */
  DateTime: { input: any; output: any }
  /**
   * The `QueryArgument` scalar type represents a value to be using in Craft element
   * queries. It can be an integer, a string, or a boolean value.
   */
  QueryArgument: { input: any; output: any }
}

export type Address = AddressInterface &
  ElementInterface & {
    __typename?: 'Address'
    /** Return a number of related elements for a field. */
    _count?: Maybe<Scalars['Int']['output']>
    /** First line of the address */
    addressLine1?: Maybe<Scalars['String']['output']>
    /** Second line of the address */
    addressLine2?: Maybe<Scalars['String']['output']>
    /** Administrative area. */
    administrativeArea?: Maybe<Scalars['String']['output']>
    /** Whether the element is archived. */
    archived?: Maybe<Scalars['Boolean']['output']>
    /** Two-letter country code */
    countryCode: Scalars['String']['output']
    /** The date the element was created. */
    dateCreated?: Maybe<Scalars['DateTime']['output']>
    /** The date the element was last updated. */
    dateUpdated?: Maybe<Scalars['DateTime']['output']>
    /** Dependent locality */
    dependentLocality?: Maybe<Scalars['String']['output']>
    /** Whether the element is enabled. */
    enabled?: Maybe<Scalars['Boolean']['output']>
    /** The first name on the address. */
    firstName?: Maybe<Scalars['String']['output']>
    /** The full name on the address. */
    fullName?: Maybe<Scalars['String']['output']>
    /** The ID of the entity */
    id?: Maybe<Scalars['ID']['output']>
    /** The language of the site element is associated with. */
    language?: Maybe<Scalars['String']['output']>
    /** The last name on the address. */
    lastName?: Maybe<Scalars['String']['output']>
    /** Latitude */
    latitude?: Maybe<Scalars['String']['output']>
    /** Locality */
    locality?: Maybe<Scalars['String']['output']>
    /** Longitude */
    longitude?: Maybe<Scalars['String']['output']>
    /** Organization name */
    organization?: Maybe<Scalars['String']['output']>
    /** Organization tax ID */
    organizationTaxId?: Maybe<Scalars['String']['output']>
    /** Postal code */
    postalCode?: Maybe<Scalars['String']['output']>
    /** The element’s search score, if the `search` parameter was used when querying for the element. */
    searchScore?: Maybe<Scalars['Int']['output']>
    /** The handle of the site the element is associated with. */
    siteHandle?: Maybe<Scalars['String']['output']>
    /** The ID of the site the element is associated with. */
    siteId?: Maybe<Scalars['Int']['output']>
    /** The unique identifier for an element-site relation. */
    siteSettingsId?: Maybe<Scalars['ID']['output']>
    /** The element’s slug. */
    slug?: Maybe<Scalars['String']['output']>
    /** Sorting code */
    sortingCode?: Maybe<Scalars['String']['output']>
    /** The element’s status. */
    status?: Maybe<Scalars['String']['output']>
    /** The element’s title. */
    title?: Maybe<Scalars['String']['output']>
    /** Whether the element has been soft-deleted. */
    trashed?: Maybe<Scalars['Boolean']['output']>
    /** The UID of the entity */
    uid?: Maybe<Scalars['String']['output']>
    /** The element’s URI. */
    uri?: Maybe<Scalars['String']['output']>
  }

export type Address_CountArgs = {
  field: Scalars['String']['input']
}

/** This is the interface implemented by all addresses. */
export type AddressInterface = {
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars['Int']['output']>
  /** First line of the address */
  addressLine1?: Maybe<Scalars['String']['output']>
  /** Second line of the address */
  addressLine2?: Maybe<Scalars['String']['output']>
  /** Administrative area. */
  administrativeArea?: Maybe<Scalars['String']['output']>
  /** Whether the element is archived. */
  archived?: Maybe<Scalars['Boolean']['output']>
  /** Two-letter country code */
  countryCode: Scalars['String']['output']
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']['output']>
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']['output']>
  /** Dependent locality */
  dependentLocality?: Maybe<Scalars['String']['output']>
  /** Whether the element is enabled. */
  enabled?: Maybe<Scalars['Boolean']['output']>
  /** The first name on the address. */
  firstName?: Maybe<Scalars['String']['output']>
  /** The full name on the address. */
  fullName?: Maybe<Scalars['String']['output']>
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']['output']>
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars['String']['output']>
  /** The last name on the address. */
  lastName?: Maybe<Scalars['String']['output']>
  /** Latitude */
  latitude?: Maybe<Scalars['String']['output']>
  /** Locality */
  locality?: Maybe<Scalars['String']['output']>
  /** Longitude */
  longitude?: Maybe<Scalars['String']['output']>
  /** Organization name */
  organization?: Maybe<Scalars['String']['output']>
  /** Organization tax ID */
  organizationTaxId?: Maybe<Scalars['String']['output']>
  /** Postal code */
  postalCode?: Maybe<Scalars['String']['output']>
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['Int']['output']>
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars['String']['output']>
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']['output']>
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars['ID']['output']>
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']['output']>
  /** Sorting code */
  sortingCode?: Maybe<Scalars['String']['output']>
  /** The element’s status. */
  status?: Maybe<Scalars['String']['output']>
  /** The element’s title. */
  title?: Maybe<Scalars['String']['output']>
  /** Whether the element has been soft-deleted. */
  trashed?: Maybe<Scalars['Boolean']['output']>
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']['output']>
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']['output']>
}

/** This is the interface implemented by all addresses. */
export type AddressInterface_CountArgs = {
  field: Scalars['String']['input']
}

export type AssetCriteriaInput = {
  /** Narrows the query results based on the elements’ creation dates. */
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Narrows the query results based on the assets’ files’ last-modified dates. */
  dateModified?: InputMaybe<Scalars['String']['input']>
  /** Narrows the query results based on the elements’ last-updated dates. */
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Narrows the query results based on the assets’ filenames. */
  filename?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Causes the query results to be returned in the order specified by the `id` argument. */
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>
  /** Narrows the query results based on the folders the assets belong to, per the folders’ IDs. */
  folderId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  /** Narrows the query results based on whether the assets have alternative text. */
  hasAlt?: InputMaybe<Scalars['Boolean']['input']>
  /** Narrows the query results based on the assets’ image heights. */
  height?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Narrows the query results based on the elements’ IDs. */
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  /** Causes the query results to be returned in reverse order. */
  inReverse?: InputMaybe<Scalars['Boolean']['input']>
  /** Broadens the query results to include assets from any of the subfolders of the folder specified by `folderId`. */
  includeSubfolders?: InputMaybe<Scalars['Boolean']['input']>
  /** Narrows the query results based on the assets’ file kinds. */
  kind?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Sets the limit for paginated results. */
  limit?: InputMaybe<Scalars['Int']['input']>
  /** Sets the offset for paginated results. */
  offset?: InputMaybe<Scalars['Int']['input']>
  /** Sets the field the returned elements should be ordered by. */
  orderBy?: InputMaybe<Scalars['String']['input']>
  /** Determines which site should be selected when querying multi-site elements. */
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  /** Narrows the query results based on a reference string. */
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /**
   * Narrows the query results to elements that relate to the provided element IDs.
   * This argument is ignored, if `relatedToAll` is also used.
   */
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  /**
   * Narrows the query results to elements that relate to *all* of the provided
   * element IDs. Using this argument will cause `relatedTo` argument to be
   * ignored. **This argument is deprecated.** `relatedTo: ["and", ...ids]` should
   * be used instead.
   */
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  /** Narrows the query results to elements that relate to an asset list defined with this argument. */
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>
  /** Narrows the query results to elements that relate to a category list defined with this argument. */
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>
  /** Narrows the query results to elements that relate to an entry list defined with this argument. */
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>
  /** Narrows the query results to elements that relate to a tag list defined with this argument. */
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>
  /** Narrows the query results to elements that relate to a use list defined with this argument. */
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>
  /** Narrows the query results to only elements that match a search query. */
  search?: InputMaybe<Scalars['String']['input']>
  /** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  /** Narrows the query results based on the unique identifier for an element-site relation. */
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  /** Narrows the query results based on the assets’ file sizes (in bytes). */
  size?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Narrows the query results based on the elements’ slugs. */
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Narrows the query results based on the elements’ titles. */
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Narrows the query results based on the elements’ UIDs. */
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Determines whether only elements with unique IDs should be returned by the query. */
  unique?: InputMaybe<Scalars['Boolean']['input']>
  /** Narrows the query results based on the user the assets were uploaded by, per the user’s ID. */
  uploader?: InputMaybe<Scalars['QueryArgument']['input']>
  /** Narrows the query results based on the elements’ URIs. */
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Narrows the query results based on the volumes the assets belong to, per the volumes’ handles. */
  volume?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Narrows the query results based on the volumes the assets belong to, per the volumes’ IDs. */
  volumeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  /** Narrows the query results based on the assets’ image widths. */
  width?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** A list of transform handles to preload. */
  withTransforms?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

/** This is the interface implemented by all assets. */
export type AssetInterface = {
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars['Int']['output']>
  /** Alternative text for the asset. */
  alt?: Maybe<Scalars['String']['output']>
  /** Whether the element is archived. */
  archived?: Maybe<Scalars['Boolean']['output']>
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']['output']>
  /** The date the asset file was last modified. */
  dateModified?: Maybe<Scalars['DateTime']['output']>
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']['output']>
  /** Whether the element is enabled. */
  enabled?: Maybe<Scalars['Boolean']['output']>
  /** The file extension for the asset file. */
  extension: Scalars['String']['output']
  /** The filename of the asset file. */
  filename: Scalars['String']['output']
  /** The focal point represented as an array with `x` and `y` keys, or null if it’s not an image. */
  focalPoint?: Maybe<Array<Maybe<Scalars['Float']['output']>>>
  /** The ID of the folder that the asset belongs to. */
  folderId: Scalars['Int']['output']
  /** Returns the file’s format. */
  format?: Maybe<Scalars['String']['output']>
  /** Whether a user-defined focal point is set on the asset. */
  hasFocalPoint: Scalars['Boolean']['output']
  /** The height in pixels or null if it’s not an image. */
  height?: Maybe<Scalars['Int']['output']>
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']['output']>
  /** An `<img>` tag based on this asset. */
  img?: Maybe<Scalars['String']['output']>
  /** The file kind. */
  kind: Scalars['String']['output']
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars['String']['output']>
  /** The file’s MIME type, if it can be determined. */
  mimeType?: Maybe<Scalars['String']['output']>
  /** Returns the next element relative to this one, from a given set of criteria. */
  next?: Maybe<AssetInterface>
  /** The asset’s path in the volume. */
  path: Scalars['String']['output']
  /** Returns the previous element relative to this one, from a given set of criteria. */
  prev?: Maybe<AssetInterface>
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['Int']['output']>
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars['String']['output']>
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']['output']>
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars['ID']['output']>
  /** The file size in bytes. */
  size?: Maybe<Scalars['String']['output']>
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']['output']>
  /** Returns a `srcset` attribute value based on the given widths or x-descriptors. */
  srcset?: Maybe<Scalars['String']['output']>
  /** The element’s status. */
  status?: Maybe<Scalars['String']['output']>
  /** The element’s title. */
  title?: Maybe<Scalars['String']['output']>
  /** Whether the element has been soft-deleted. */
  trashed?: Maybe<Scalars['Boolean']['output']>
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']['output']>
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']['output']>
  /** The full URL of the asset. This field accepts the same fields as the `transform` directive. */
  url?: Maybe<Scalars['String']['output']>
  /** The ID of the volume that the asset belongs to. */
  volumeId?: Maybe<Scalars['Int']['output']>
  /** The width in pixels or null if it’s not an image. */
  width?: Maybe<Scalars['Int']['output']>
}

/** This is the interface implemented by all assets. */
export type AssetInterface_CountArgs = {
  field: Scalars['String']['input']
}

/** This is the interface implemented by all assets. */
export type AssetInterfaceFormatArgs = {
  format?: InputMaybe<Scalars['String']['input']>
  handle?: InputMaybe<Scalars['String']['input']>
  height?: InputMaybe<Scalars['Int']['input']>
  immediately?: InputMaybe<Scalars['Boolean']['input']>
  interlace?: InputMaybe<Scalars['String']['input']>
  mode?: InputMaybe<Scalars['String']['input']>
  position?: InputMaybe<Scalars['String']['input']>
  quality?: InputMaybe<Scalars['Int']['input']>
  transform?: InputMaybe<Scalars['String']['input']>
  width?: InputMaybe<Scalars['Int']['input']>
}

/** This is the interface implemented by all assets. */
export type AssetInterfaceHeightArgs = {
  format?: InputMaybe<Scalars['String']['input']>
  handle?: InputMaybe<Scalars['String']['input']>
  height?: InputMaybe<Scalars['Int']['input']>
  immediately?: InputMaybe<Scalars['Boolean']['input']>
  interlace?: InputMaybe<Scalars['String']['input']>
  mode?: InputMaybe<Scalars['String']['input']>
  position?: InputMaybe<Scalars['String']['input']>
  quality?: InputMaybe<Scalars['Int']['input']>
  transform?: InputMaybe<Scalars['String']['input']>
  width?: InputMaybe<Scalars['Int']['input']>
}

/** This is the interface implemented by all assets. */
export type AssetInterfaceNextArgs = {
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  dateModified?: InputMaybe<Scalars['String']['input']>
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  filename?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>
  folderId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  hasAlt?: InputMaybe<Scalars['Boolean']['input']>
  height?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  inReverse?: InputMaybe<Scalars['Boolean']['input']>
  includeSubfolders?: InputMaybe<Scalars['Boolean']['input']>
  kind?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Scalars['String']['input']>
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>
  search?: InputMaybe<Scalars['String']['input']>
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  size?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  unique?: InputMaybe<Scalars['Boolean']['input']>
  uploader?: InputMaybe<Scalars['QueryArgument']['input']>
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  volume?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  volumeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  width?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  withTransforms?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

/** This is the interface implemented by all assets. */
export type AssetInterfacePrevArgs = {
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  dateModified?: InputMaybe<Scalars['String']['input']>
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  filename?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>
  folderId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  hasAlt?: InputMaybe<Scalars['Boolean']['input']>
  height?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  inReverse?: InputMaybe<Scalars['Boolean']['input']>
  includeSubfolders?: InputMaybe<Scalars['Boolean']['input']>
  kind?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Scalars['String']['input']>
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>
  search?: InputMaybe<Scalars['String']['input']>
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  size?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  unique?: InputMaybe<Scalars['Boolean']['input']>
  uploader?: InputMaybe<Scalars['QueryArgument']['input']>
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  volume?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  volumeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  width?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  withTransforms?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

/** This is the interface implemented by all assets. */
export type AssetInterfaceSrcsetArgs = {
  sizes: Array<Scalars['String']['input']>
}

/** This is the interface implemented by all assets. */
export type AssetInterfaceUrlArgs = {
  format?: InputMaybe<Scalars['String']['input']>
  handle?: InputMaybe<Scalars['String']['input']>
  height?: InputMaybe<Scalars['Int']['input']>
  immediately?: InputMaybe<Scalars['Boolean']['input']>
  interlace?: InputMaybe<Scalars['String']['input']>
  mode?: InputMaybe<Scalars['String']['input']>
  position?: InputMaybe<Scalars['String']['input']>
  quality?: InputMaybe<Scalars['Int']['input']>
  transform?: InputMaybe<Scalars['String']['input']>
  width?: InputMaybe<Scalars['Int']['input']>
}

/** This is the interface implemented by all assets. */
export type AssetInterfaceWidthArgs = {
  format?: InputMaybe<Scalars['String']['input']>
  handle?: InputMaybe<Scalars['String']['input']>
  height?: InputMaybe<Scalars['Int']['input']>
  immediately?: InputMaybe<Scalars['Boolean']['input']>
  interlace?: InputMaybe<Scalars['String']['input']>
  mode?: InputMaybe<Scalars['String']['input']>
  position?: InputMaybe<Scalars['String']['input']>
  quality?: InputMaybe<Scalars['Int']['input']>
  transform?: InputMaybe<Scalars['String']['input']>
  width?: InputMaybe<Scalars['Int']['input']>
}

export type CategoryCriteriaInput = {
  /**
   * Narrows the query results to only elements that are up to a certain distance
   * away from the element in its structure specified by `ancestorOf`.
   */
  ancestorDist?: InputMaybe<Scalars['Int']['input']>
  /** Narrows the query results to only elements that are ancestors of another element in its structure, provided by its ID. */
  ancestorOf?: InputMaybe<Scalars['Int']['input']>
  /** Narrows the query results based on the elements’ creation dates. */
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Narrows the query results based on the elements’ last-updated dates. */
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /**
   * Narrows the query results to only elements that are up to a certain distance
   * away from the element in its structure specified by `descendantOf`.
   */
  descendantDist?: InputMaybe<Scalars['Int']['input']>
  /** Narrows the query results to only elements that are descendants of another element in its structure provided by its ID. */
  descendantOf?: InputMaybe<Scalars['Int']['input']>
  /** Whether to only return categories that the user has permission to edit. */
  editable?: InputMaybe<Scalars['Boolean']['input']>
  /** Causes the query results to be returned in the order specified by the `id` argument. */
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>
  /** Narrows the query results based on the category groups the categories belong to per the group’s handles. */
  group?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Narrows the query results based on the category groups the categories belong to, per the groups’ IDs. */
  groupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  /** Narrows the query results based on whether the elements have any descendants in their structure. */
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>
  /** Narrows the query results based on the elements’ IDs. */
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  /** Causes the query results to be returned in reverse order. */
  inReverse?: InputMaybe<Scalars['Boolean']['input']>
  /** Narrows the query results based on whether the elements are “leaves” in their structure (element with no descendants). */
  leaves?: InputMaybe<Scalars['Boolean']['input']>
  /** Narrows the query results based on the elements’ level within the structure. */
  level?: InputMaybe<Scalars['Int']['input']>
  /** Sets the limit for paginated results. */
  limit?: InputMaybe<Scalars['Int']['input']>
  /**
   * Narrows the query results to only the entry that comes immediately after
   * another element in its structure, provided by its ID.
   */
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>
  /** Sets the offset for paginated results. */
  offset?: InputMaybe<Scalars['Int']['input']>
  /** Sets the field the returned elements should be ordered by. */
  orderBy?: InputMaybe<Scalars['String']['input']>
  /** Narrows the query results to only entries that are positioned after another element in its structure, provided by its ID. */
  positionedAfter?: InputMaybe<Scalars['Int']['input']>
  /** Narrows the query results to only entries that are positioned before another element in its structure, provided by its ID. */
  positionedBefore?: InputMaybe<Scalars['Int']['input']>
  /** Determines which site should be selected when querying multi-site elements. */
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  /**
   * Narrows the query results to only the entry that comes immediately before
   * another element in its structure, provided by its ID.
   */
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>
  /** Narrows the query results based on a reference string. */
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /**
   * Narrows the query results to elements that relate to the provided element IDs.
   * This argument is ignored, if `relatedToAll` is also used.
   */
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  /**
   * Narrows the query results to elements that relate to *all* of the provided
   * element IDs. Using this argument will cause `relatedTo` argument to be
   * ignored. **This argument is deprecated.** `relatedTo: ["and", ...ids]` should
   * be used instead.
   */
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  /** Narrows the query results to elements that relate to an asset list defined with this argument. */
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>
  /** Narrows the query results to elements that relate to a category list defined with this argument. */
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>
  /** Narrows the query results to elements that relate to an entry list defined with this argument. */
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>
  /** Narrows the query results to elements that relate to a tag list defined with this argument. */
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>
  /** Narrows the query results to elements that relate to a use list defined with this argument. */
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>
  /** Narrows the query results to only elements that match a search query. */
  search?: InputMaybe<Scalars['String']['input']>
  /** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  /** Narrows the query results based on the unique identifier for an element-site relation. */
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  /** Narrows the query results based on the elements’ slugs. */
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  stackHandle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  /** Determines which structure data should be joined into the query. */
  structureId?: InputMaybe<Scalars['Int']['input']>
  /** Narrows the query results based on the elements’ titles. */
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Narrows the query results based on the elements’ UIDs. */
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Determines whether only elements with unique IDs should be returned by the query. */
  unique?: InputMaybe<Scalars['Boolean']['input']>
  /** Narrows the query results based on the elements’ URIs. */
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Explicitly determines whether the query should join in the structure data. */
  withStructure?: InputMaybe<Scalars['Boolean']['input']>
}

/** This is the interface implemented by all categories. */
export type CategoryInterface = {
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars['Int']['output']>
  /** The category’s ancestors, if the section is a structure. Accepts the same arguments as the `entries` query. */
  ancestors: Array<CategoryInterface>
  /** Whether the element is archived. */
  archived?: Maybe<Scalars['Boolean']['output']>
  /** The category’s children. */
  children: Array<CategoryInterface>
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']['output']>
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']['output']>
  /** The category’s descendants, if the section is a structure. Accepts the same arguments as the `entries` query. */
  descendants: Array<CategoryInterface>
  /** Whether the element is enabled. */
  enabled?: Maybe<Scalars['Boolean']['output']>
  /** The handle of the group that contains the category. */
  groupHandle: Scalars['String']['output']
  /** The ID of the group that contains the category. */
  groupId: Scalars['Int']['output']
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']['output']>
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars['String']['output']>
  /** The element’s level within its structure */
  level?: Maybe<Scalars['Int']['output']>
  /** The element’s left position within its structure. */
  lft?: Maybe<Scalars['Int']['output']>
  /** The same element in other locales. */
  localized: Array<CategoryInterface>
  /** Returns the next element relative to this one, from a given set of criteria. */
  next?: Maybe<CategoryInterface>
  /** The category’s parent. */
  parent?: Maybe<CategoryInterface>
  /** Returns the previous element relative to this one, from a given set of criteria. */
  prev?: Maybe<CategoryInterface>
  /** The element’s right position within its structure. */
  rgt?: Maybe<Scalars['Int']['output']>
  /** The element’s structure’s root ID */
  root?: Maybe<Scalars['Int']['output']>
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['Int']['output']>
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars['String']['output']>
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']['output']>
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars['ID']['output']>
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']['output']>
  /** The element’s status. */
  status?: Maybe<Scalars['String']['output']>
  /** The element’s structure ID. */
  structureId?: Maybe<Scalars['Int']['output']>
  /** The element’s title. */
  title?: Maybe<Scalars['String']['output']>
  /** Whether the element has been soft-deleted. */
  trashed?: Maybe<Scalars['Boolean']['output']>
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']['output']>
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']['output']>
  /** The element’s full URL */
  url?: Maybe<Scalars['String']['output']>
}

/** This is the interface implemented by all categories. */
export type CategoryInterface_CountArgs = {
  field: Scalars['String']['input']
}

/** This is the interface implemented by all categories. */
export type CategoryInterfaceAncestorsArgs = {
  ancestorDist?: InputMaybe<Scalars['Int']['input']>
  ancestorOf?: InputMaybe<Scalars['Int']['input']>
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  descendantDist?: InputMaybe<Scalars['Int']['input']>
  descendantOf?: InputMaybe<Scalars['Int']['input']>
  editable?: InputMaybe<Scalars['Boolean']['input']>
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>
  group?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  groupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  inReverse?: InputMaybe<Scalars['Boolean']['input']>
  leaves?: InputMaybe<Scalars['Boolean']['input']>
  level?: InputMaybe<Scalars['Int']['input']>
  limit?: InputMaybe<Scalars['Int']['input']>
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Scalars['String']['input']>
  positionedAfter?: InputMaybe<Scalars['Int']['input']>
  positionedBefore?: InputMaybe<Scalars['Int']['input']>
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>
  search?: InputMaybe<Scalars['String']['input']>
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  stackHandle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  structureId?: InputMaybe<Scalars['Int']['input']>
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  unique?: InputMaybe<Scalars['Boolean']['input']>
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  withStructure?: InputMaybe<Scalars['Boolean']['input']>
}

/** This is the interface implemented by all categories. */
export type CategoryInterfaceChildrenArgs = {
  ancestorDist?: InputMaybe<Scalars['Int']['input']>
  ancestorOf?: InputMaybe<Scalars['Int']['input']>
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  descendantDist?: InputMaybe<Scalars['Int']['input']>
  descendantOf?: InputMaybe<Scalars['Int']['input']>
  editable?: InputMaybe<Scalars['Boolean']['input']>
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>
  group?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  groupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  inReverse?: InputMaybe<Scalars['Boolean']['input']>
  leaves?: InputMaybe<Scalars['Boolean']['input']>
  level?: InputMaybe<Scalars['Int']['input']>
  limit?: InputMaybe<Scalars['Int']['input']>
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Scalars['String']['input']>
  positionedAfter?: InputMaybe<Scalars['Int']['input']>
  positionedBefore?: InputMaybe<Scalars['Int']['input']>
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>
  search?: InputMaybe<Scalars['String']['input']>
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  stackHandle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  structureId?: InputMaybe<Scalars['Int']['input']>
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  unique?: InputMaybe<Scalars['Boolean']['input']>
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  withStructure?: InputMaybe<Scalars['Boolean']['input']>
}

/** This is the interface implemented by all categories. */
export type CategoryInterfaceDescendantsArgs = {
  ancestorDist?: InputMaybe<Scalars['Int']['input']>
  ancestorOf?: InputMaybe<Scalars['Int']['input']>
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  descendantDist?: InputMaybe<Scalars['Int']['input']>
  descendantOf?: InputMaybe<Scalars['Int']['input']>
  editable?: InputMaybe<Scalars['Boolean']['input']>
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>
  group?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  groupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  inReverse?: InputMaybe<Scalars['Boolean']['input']>
  leaves?: InputMaybe<Scalars['Boolean']['input']>
  level?: InputMaybe<Scalars['Int']['input']>
  limit?: InputMaybe<Scalars['Int']['input']>
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Scalars['String']['input']>
  positionedAfter?: InputMaybe<Scalars['Int']['input']>
  positionedBefore?: InputMaybe<Scalars['Int']['input']>
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>
  search?: InputMaybe<Scalars['String']['input']>
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  stackHandle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  structureId?: InputMaybe<Scalars['Int']['input']>
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  unique?: InputMaybe<Scalars['Boolean']['input']>
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  withStructure?: InputMaybe<Scalars['Boolean']['input']>
}

/** This is the interface implemented by all categories. */
export type CategoryInterfaceLocalizedArgs = {
  ancestorDist?: InputMaybe<Scalars['Int']['input']>
  ancestorOf?: InputMaybe<Scalars['Int']['input']>
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  descendantDist?: InputMaybe<Scalars['Int']['input']>
  descendantOf?: InputMaybe<Scalars['Int']['input']>
  editable?: InputMaybe<Scalars['Boolean']['input']>
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>
  group?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  groupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  inReverse?: InputMaybe<Scalars['Boolean']['input']>
  leaves?: InputMaybe<Scalars['Boolean']['input']>
  level?: InputMaybe<Scalars['Int']['input']>
  limit?: InputMaybe<Scalars['Int']['input']>
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Scalars['String']['input']>
  positionedAfter?: InputMaybe<Scalars['Int']['input']>
  positionedBefore?: InputMaybe<Scalars['Int']['input']>
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>
  search?: InputMaybe<Scalars['String']['input']>
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  stackHandle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  structureId?: InputMaybe<Scalars['Int']['input']>
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  unique?: InputMaybe<Scalars['Boolean']['input']>
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  withStructure?: InputMaybe<Scalars['Boolean']['input']>
}

/** This is the interface implemented by all categories. */
export type CategoryInterfaceNextArgs = {
  ancestorDist?: InputMaybe<Scalars['Int']['input']>
  ancestorOf?: InputMaybe<Scalars['Int']['input']>
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  descendantDist?: InputMaybe<Scalars['Int']['input']>
  descendantOf?: InputMaybe<Scalars['Int']['input']>
  editable?: InputMaybe<Scalars['Boolean']['input']>
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>
  group?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  groupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  inReverse?: InputMaybe<Scalars['Boolean']['input']>
  leaves?: InputMaybe<Scalars['Boolean']['input']>
  level?: InputMaybe<Scalars['Int']['input']>
  limit?: InputMaybe<Scalars['Int']['input']>
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Scalars['String']['input']>
  positionedAfter?: InputMaybe<Scalars['Int']['input']>
  positionedBefore?: InputMaybe<Scalars['Int']['input']>
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>
  search?: InputMaybe<Scalars['String']['input']>
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  stackHandle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  structureId?: InputMaybe<Scalars['Int']['input']>
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  unique?: InputMaybe<Scalars['Boolean']['input']>
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  withStructure?: InputMaybe<Scalars['Boolean']['input']>
}

/** This is the interface implemented by all categories. */
export type CategoryInterfaceParentArgs = {
  ancestorDist?: InputMaybe<Scalars['Int']['input']>
  ancestorOf?: InputMaybe<Scalars['Int']['input']>
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  descendantDist?: InputMaybe<Scalars['Int']['input']>
  descendantOf?: InputMaybe<Scalars['Int']['input']>
  editable?: InputMaybe<Scalars['Boolean']['input']>
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>
  group?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  groupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  inReverse?: InputMaybe<Scalars['Boolean']['input']>
  leaves?: InputMaybe<Scalars['Boolean']['input']>
  level?: InputMaybe<Scalars['Int']['input']>
  limit?: InputMaybe<Scalars['Int']['input']>
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Scalars['String']['input']>
  positionedAfter?: InputMaybe<Scalars['Int']['input']>
  positionedBefore?: InputMaybe<Scalars['Int']['input']>
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>
  search?: InputMaybe<Scalars['String']['input']>
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  stackHandle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  structureId?: InputMaybe<Scalars['Int']['input']>
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  unique?: InputMaybe<Scalars['Boolean']['input']>
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  withStructure?: InputMaybe<Scalars['Boolean']['input']>
}

/** This is the interface implemented by all categories. */
export type CategoryInterfacePrevArgs = {
  ancestorDist?: InputMaybe<Scalars['Int']['input']>
  ancestorOf?: InputMaybe<Scalars['Int']['input']>
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  descendantDist?: InputMaybe<Scalars['Int']['input']>
  descendantOf?: InputMaybe<Scalars['Int']['input']>
  editable?: InputMaybe<Scalars['Boolean']['input']>
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>
  group?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  groupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  inReverse?: InputMaybe<Scalars['Boolean']['input']>
  leaves?: InputMaybe<Scalars['Boolean']['input']>
  level?: InputMaybe<Scalars['Int']['input']>
  limit?: InputMaybe<Scalars['Int']['input']>
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Scalars['String']['input']>
  positionedAfter?: InputMaybe<Scalars['Int']['input']>
  positionedBefore?: InputMaybe<Scalars['Int']['input']>
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>
  search?: InputMaybe<Scalars['String']['input']>
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  stackHandle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  structureId?: InputMaybe<Scalars['Int']['input']>
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  unique?: InputMaybe<Scalars['Boolean']['input']>
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  withStructure?: InputMaybe<Scalars['Boolean']['input']>
}

export type Element = ElementInterface & {
  __typename?: 'Element'
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars['Int']['output']>
  /** Whether the element is archived. */
  archived?: Maybe<Scalars['Boolean']['output']>
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']['output']>
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']['output']>
  /** Whether the element is enabled. */
  enabled?: Maybe<Scalars['Boolean']['output']>
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']['output']>
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars['String']['output']>
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['Int']['output']>
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars['String']['output']>
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']['output']>
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars['ID']['output']>
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']['output']>
  /** The element’s status. */
  status?: Maybe<Scalars['String']['output']>
  /** The element’s title. */
  title?: Maybe<Scalars['String']['output']>
  /** Whether the element has been soft-deleted. */
  trashed?: Maybe<Scalars['Boolean']['output']>
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']['output']>
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']['output']>
}

export type Element_CountArgs = {
  field: Scalars['String']['input']
}

/** This is the interface implemented by all elements. */
export type ElementInterface = {
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars['Int']['output']>
  /** Whether the element is archived. */
  archived?: Maybe<Scalars['Boolean']['output']>
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']['output']>
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']['output']>
  /** Whether the element is enabled. */
  enabled?: Maybe<Scalars['Boolean']['output']>
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']['output']>
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars['String']['output']>
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['Int']['output']>
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars['String']['output']>
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']['output']>
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars['ID']['output']>
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']['output']>
  /** The element’s status. */
  status?: Maybe<Scalars['String']['output']>
  /** The element’s title. */
  title?: Maybe<Scalars['String']['output']>
  /** Whether the element has been soft-deleted. */
  trashed?: Maybe<Scalars['Boolean']['output']>
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']['output']>
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']['output']>
}

/** This is the interface implemented by all elements. */
export type ElementInterface_CountArgs = {
  field: Scalars['String']['input']
}

export type EntryCriteriaInput = {
  /** Narrows the query results to only entries that were posted on or after a certain date. */
  after?: InputMaybe<Scalars['String']['input']>
  /**
   * Narrows the query results to only elements that are up to a certain distance
   * away from the element in its structure specified by `ancestorOf`.
   */
  ancestorDist?: InputMaybe<Scalars['Int']['input']>
  /** Narrows the query results to only elements that are ancestors of another element in its structure, provided by its ID. */
  ancestorOf?: InputMaybe<Scalars['Int']['input']>
  /** Narrows the query results based on the user group the entries’ authors belong to. */
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Narrows the query results based on the user group the entries’ authors belong to, per the groups’ IDs. */
  authorGroupId?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  /** Narrows the query results based on the entries’ authors. */
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  /** Narrows the query results to only entries that were posted before a certain date. */
  before?: InputMaybe<Scalars['String']['input']>
  /** Narrows the query results based on the elements’ creation dates. */
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Narrows the query results based on the elements’ last-updated dates. */
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /**
   * Narrows the query results to only elements that are up to a certain distance
   * away from the element in its structure specified by `descendantOf`.
   */
  descendantDist?: InputMaybe<Scalars['Int']['input']>
  /** Narrows the query results to only elements that are descendants of another element in its structure provided by its ID. */
  descendantOf?: InputMaybe<Scalars['Int']['input']>
  /** Whether to only return entries that the user has permission to edit. */
  editable?: InputMaybe<Scalars['Boolean']['input']>
  /** Narrows the query results based on the entries’ expiry dates. */
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Causes the query results to be returned in the order specified by the `id` argument. */
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>
  /** Narrows the query results based on whether the elements have any descendants in their structure. */
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>
  /** Narrows the query results based on the elements’ IDs. */
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  /** Causes the query results to be returned in reverse order. */
  inReverse?: InputMaybe<Scalars['Boolean']['input']>
  /** Narrows the query results based on whether the elements are “leaves” in their structure (element with no descendants). */
  leaves?: InputMaybe<Scalars['Boolean']['input']>
  /** Narrows the query results based on the elements’ level within the structure. */
  level?: InputMaybe<Scalars['Int']['input']>
  /** Sets the limit for paginated results. */
  limit?: InputMaybe<Scalars['Int']['input']>
  /**
   * Narrows the query results to only the entry that comes immediately after
   * another element in its structure, provided by its ID.
   */
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>
  /** Sets the offset for paginated results. */
  offset?: InputMaybe<Scalars['Int']['input']>
  /** Sets the field the returned elements should be ordered by. */
  orderBy?: InputMaybe<Scalars['String']['input']>
  /** Narrows the query results to only entries that are positioned after another element in its structure, provided by its ID. */
  positionedAfter?: InputMaybe<Scalars['Int']['input']>
  /** Narrows the query results to only entries that are positioned before another element in its structure, provided by its ID. */
  positionedBefore?: InputMaybe<Scalars['Int']['input']>
  /** Narrows the query results based on the entries’ post dates. */
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Determines which site should be selected when querying multi-site elements. */
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  /**
   * Narrows the query results to only the entry that comes immediately before
   * another element in its structure, provided by its ID.
   */
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>
  projectDescription?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  projectFeatured?: InputMaybe<Scalars['Boolean']['input']>
  projectHeaderImage?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  projectInformation?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  projectLiveDemoLink?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  projectSourcecodeRepositoryLink?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  /** Narrows the query results based on a reference string. */
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /**
   * Narrows the query results to elements that relate to the provided element IDs.
   * This argument is ignored, if `relatedToAll` is also used.
   */
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  /**
   * Narrows the query results to elements that relate to *all* of the provided
   * element IDs. Using this argument will cause `relatedTo` argument to be
   * ignored. **This argument is deprecated.** `relatedTo: ["and", ...ids]` should
   * be used instead.
   */
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  /** Narrows the query results to elements that relate to an asset list defined with this argument. */
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>
  /** Narrows the query results to elements that relate to a category list defined with this argument. */
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>
  /** Narrows the query results to elements that relate to an entry list defined with this argument. */
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>
  /** Narrows the query results to elements that relate to a tag list defined with this argument. */
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>
  /** Narrows the query results to elements that relate to a use list defined with this argument. */
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>
  /** Narrows the query results to only elements that match a search query. */
  search?: InputMaybe<Scalars['String']['input']>
  /** Narrows the query results based on the section handles the entries belong to. */
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Narrows the query results based on the sections the entries belong to, per the sections’ IDs. */
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  /** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  /** Narrows the query results based on the unique identifier for an element-site relation. */
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  /** Narrows the query results based on the elements’ slugs. */
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  stacks?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  /** Determines which structure data should be joined into the query. */
  structureId?: InputMaybe<Scalars['Int']['input']>
  /** Narrows the query results based on the elements’ titles. */
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Narrows the query results based on the entries’ entry type handles. */
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Narrows the query results based on the entries’ entry types, per the types’ IDs. */
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  /** Narrows the query results based on the elements’ UIDs. */
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Determines whether only elements with unique IDs should be returned by the query. */
  unique?: InputMaybe<Scalars['Boolean']['input']>
  /** Narrows the query results based on the elements’ URIs. */
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Explicitly determines whether the query should join in the structure data. */
  withStructure?: InputMaybe<Scalars['Boolean']['input']>
}

/** This is the interface implemented by all entries. */
export type EntryInterface = {
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars['Int']['output']>
  /** The entry’s ancestors, if the section is a structure. Accepts the same arguments as the `entries` query. */
  ancestors: Array<EntryInterface>
  /** Whether the element is archived. */
  archived?: Maybe<Scalars['Boolean']['output']>
  /** Returns the entry’s canonical ID. */
  canonicalId?: Maybe<Scalars['Int']['output']>
  /** Returns the entry’s canonical UUID. */
  canonicalUid?: Maybe<Scalars['String']['output']>
  /** The entry’s children, if the section is a structure. Accepts the same arguments as the `entries` query. */
  children: Array<EntryInterface>
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']['output']>
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']['output']>
  /** The entry’s descendants, if the section is a structure. Accepts the same arguments as the `entries` query. */
  descendants: Array<EntryInterface>
  /** The draft ID (from the `drafts` table). */
  draftId?: Maybe<Scalars['Int']['output']>
  /** The name of the draft. */
  draftName?: Maybe<Scalars['String']['output']>
  /** The notes for the draft. */
  draftNotes?: Maybe<Scalars['String']['output']>
  /** Whether the element is enabled. */
  enabled?: Maybe<Scalars['Boolean']['output']>
  /** Whether the element is enabled for the site. */
  enabledForSite?: Maybe<Scalars['Boolean']['output']>
  /** The expiry date of the entry. */
  expiryDate?: Maybe<Scalars['DateTime']['output']>
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']['output']>
  /** Returns whether this is a draft. */
  isDraft?: Maybe<Scalars['Boolean']['output']>
  /** Returns whether this is a revision. */
  isRevision?: Maybe<Scalars['Boolean']['output']>
  /** Returns whether this is an unpublished draft. */
  isUnpublishedDraft?: Maybe<Scalars['Boolean']['output']>
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars['String']['output']>
  /** The element’s level within its structure */
  level?: Maybe<Scalars['Int']['output']>
  /** The element’s left position within its structure. */
  lft?: Maybe<Scalars['Int']['output']>
  /** The same element in other locales. */
  localized: Array<EntryInterface>
  /** Returns the next element relative to this one, from a given set of criteria. */
  next?: Maybe<EntryInterface>
  /** The entry’s parent, if the section is a structure. */
  parent?: Maybe<EntryInterface>
  /** The entry’s post date. */
  postDate?: Maybe<Scalars['DateTime']['output']>
  /** Returns the previous element relative to this one, from a given set of criteria. */
  prev?: Maybe<EntryInterface>
  /** The revision ID (from the `revisions` table). */
  revisionId?: Maybe<Scalars['Int']['output']>
  /** The revision notes (from the `revisions` table). */
  revisionNotes?: Maybe<Scalars['String']['output']>
  /** The element’s right position within its structure. */
  rgt?: Maybe<Scalars['Int']['output']>
  /** The element’s structure’s root ID */
  root?: Maybe<Scalars['Int']['output']>
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['Int']['output']>
  /** The handle of the section that contains the entry. */
  sectionHandle: Scalars['String']['output']
  /** The ID of the section that contains the entry. */
  sectionId: Scalars['Int']['output']
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars['String']['output']>
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']['output']>
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars['ID']['output']>
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']['output']>
  /**
   * Returns the entry’s canonical ID.
   * @deprecated this field has been deprecated since Craft 3.7.7. Use `canonicalId` instead.
   */
  sourceId?: Maybe<Scalars['Int']['output']>
  /**
   * Returns the entry’s canonical UUID.
   * @deprecated this field has been deprecated since Craft 3.7.7. Use `canonicalUid` instead.
   */
  sourceUid?: Maybe<Scalars['String']['output']>
  /** The element’s status. */
  status?: Maybe<Scalars['String']['output']>
  /** The element’s structure ID. */
  structureId?: Maybe<Scalars['Int']['output']>
  /** The element’s title. */
  title?: Maybe<Scalars['String']['output']>
  /** Whether the element has been soft-deleted. */
  trashed?: Maybe<Scalars['Boolean']['output']>
  /** The handle of the entry type that contains the entry. */
  typeHandle: Scalars['String']['output']
  /** The ID of the entry type that contains the entry. */
  typeId: Scalars['Int']['output']
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']['output']>
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']['output']>
  /** The element’s full URL */
  url?: Maybe<Scalars['String']['output']>
}

/** This is the interface implemented by all entries. */
export type EntryInterface_CountArgs = {
  field: Scalars['String']['input']
}

/** This is the interface implemented by all entries. */
export type EntryInterfaceAncestorsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  ancestorDist?: InputMaybe<Scalars['Int']['input']>
  ancestorOf?: InputMaybe<Scalars['Int']['input']>
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  authorGroupId?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  before?: InputMaybe<Scalars['String']['input']>
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  descendantDist?: InputMaybe<Scalars['Int']['input']>
  descendantOf?: InputMaybe<Scalars['Int']['input']>
  editable?: InputMaybe<Scalars['Boolean']['input']>
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  inReverse?: InputMaybe<Scalars['Boolean']['input']>
  leaves?: InputMaybe<Scalars['Boolean']['input']>
  level?: InputMaybe<Scalars['Int']['input']>
  limit?: InputMaybe<Scalars['Int']['input']>
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Scalars['String']['input']>
  positionedAfter?: InputMaybe<Scalars['Int']['input']>
  positionedBefore?: InputMaybe<Scalars['Int']['input']>
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>
  projectDescription?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  projectFeatured?: InputMaybe<Scalars['Boolean']['input']>
  projectHeaderImage?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  projectInformation?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  projectLiveDemoLink?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  projectSourcecodeRepositoryLink?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>
  search?: InputMaybe<Scalars['String']['input']>
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  stacks?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  structureId?: InputMaybe<Scalars['Int']['input']>
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  unique?: InputMaybe<Scalars['Boolean']['input']>
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  withStructure?: InputMaybe<Scalars['Boolean']['input']>
}

/** This is the interface implemented by all entries. */
export type EntryInterfaceChildrenArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  ancestorDist?: InputMaybe<Scalars['Int']['input']>
  ancestorOf?: InputMaybe<Scalars['Int']['input']>
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  authorGroupId?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  before?: InputMaybe<Scalars['String']['input']>
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  descendantDist?: InputMaybe<Scalars['Int']['input']>
  descendantOf?: InputMaybe<Scalars['Int']['input']>
  editable?: InputMaybe<Scalars['Boolean']['input']>
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  inReverse?: InputMaybe<Scalars['Boolean']['input']>
  leaves?: InputMaybe<Scalars['Boolean']['input']>
  level?: InputMaybe<Scalars['Int']['input']>
  limit?: InputMaybe<Scalars['Int']['input']>
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Scalars['String']['input']>
  positionedAfter?: InputMaybe<Scalars['Int']['input']>
  positionedBefore?: InputMaybe<Scalars['Int']['input']>
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>
  projectDescription?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  projectFeatured?: InputMaybe<Scalars['Boolean']['input']>
  projectHeaderImage?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  projectInformation?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  projectLiveDemoLink?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  projectSourcecodeRepositoryLink?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>
  search?: InputMaybe<Scalars['String']['input']>
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  stacks?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  structureId?: InputMaybe<Scalars['Int']['input']>
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  unique?: InputMaybe<Scalars['Boolean']['input']>
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  withStructure?: InputMaybe<Scalars['Boolean']['input']>
}

/** This is the interface implemented by all entries. */
export type EntryInterfaceDescendantsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  ancestorDist?: InputMaybe<Scalars['Int']['input']>
  ancestorOf?: InputMaybe<Scalars['Int']['input']>
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  authorGroupId?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  before?: InputMaybe<Scalars['String']['input']>
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  descendantDist?: InputMaybe<Scalars['Int']['input']>
  descendantOf?: InputMaybe<Scalars['Int']['input']>
  editable?: InputMaybe<Scalars['Boolean']['input']>
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  inReverse?: InputMaybe<Scalars['Boolean']['input']>
  leaves?: InputMaybe<Scalars['Boolean']['input']>
  level?: InputMaybe<Scalars['Int']['input']>
  limit?: InputMaybe<Scalars['Int']['input']>
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Scalars['String']['input']>
  positionedAfter?: InputMaybe<Scalars['Int']['input']>
  positionedBefore?: InputMaybe<Scalars['Int']['input']>
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>
  projectDescription?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  projectFeatured?: InputMaybe<Scalars['Boolean']['input']>
  projectHeaderImage?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  projectInformation?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  projectLiveDemoLink?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  projectSourcecodeRepositoryLink?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>
  search?: InputMaybe<Scalars['String']['input']>
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  stacks?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  structureId?: InputMaybe<Scalars['Int']['input']>
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  unique?: InputMaybe<Scalars['Boolean']['input']>
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  withStructure?: InputMaybe<Scalars['Boolean']['input']>
}

/** This is the interface implemented by all entries. */
export type EntryInterfaceLocalizedArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  ancestorDist?: InputMaybe<Scalars['Int']['input']>
  ancestorOf?: InputMaybe<Scalars['Int']['input']>
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  authorGroupId?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  before?: InputMaybe<Scalars['String']['input']>
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  descendantDist?: InputMaybe<Scalars['Int']['input']>
  descendantOf?: InputMaybe<Scalars['Int']['input']>
  editable?: InputMaybe<Scalars['Boolean']['input']>
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  inReverse?: InputMaybe<Scalars['Boolean']['input']>
  leaves?: InputMaybe<Scalars['Boolean']['input']>
  level?: InputMaybe<Scalars['Int']['input']>
  limit?: InputMaybe<Scalars['Int']['input']>
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Scalars['String']['input']>
  positionedAfter?: InputMaybe<Scalars['Int']['input']>
  positionedBefore?: InputMaybe<Scalars['Int']['input']>
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>
  projectDescription?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  projectFeatured?: InputMaybe<Scalars['Boolean']['input']>
  projectHeaderImage?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  projectInformation?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  projectLiveDemoLink?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  projectSourcecodeRepositoryLink?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>
  search?: InputMaybe<Scalars['String']['input']>
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  stacks?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  structureId?: InputMaybe<Scalars['Int']['input']>
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  unique?: InputMaybe<Scalars['Boolean']['input']>
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  withStructure?: InputMaybe<Scalars['Boolean']['input']>
}

/** This is the interface implemented by all entries. */
export type EntryInterfaceNextArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  ancestorDist?: InputMaybe<Scalars['Int']['input']>
  ancestorOf?: InputMaybe<Scalars['Int']['input']>
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  authorGroupId?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  before?: InputMaybe<Scalars['String']['input']>
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  descendantDist?: InputMaybe<Scalars['Int']['input']>
  descendantOf?: InputMaybe<Scalars['Int']['input']>
  editable?: InputMaybe<Scalars['Boolean']['input']>
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  inReverse?: InputMaybe<Scalars['Boolean']['input']>
  leaves?: InputMaybe<Scalars['Boolean']['input']>
  level?: InputMaybe<Scalars['Int']['input']>
  limit?: InputMaybe<Scalars['Int']['input']>
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Scalars['String']['input']>
  positionedAfter?: InputMaybe<Scalars['Int']['input']>
  positionedBefore?: InputMaybe<Scalars['Int']['input']>
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>
  projectDescription?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  projectFeatured?: InputMaybe<Scalars['Boolean']['input']>
  projectHeaderImage?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  projectInformation?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  projectLiveDemoLink?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  projectSourcecodeRepositoryLink?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>
  search?: InputMaybe<Scalars['String']['input']>
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  stacks?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  structureId?: InputMaybe<Scalars['Int']['input']>
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  unique?: InputMaybe<Scalars['Boolean']['input']>
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  withStructure?: InputMaybe<Scalars['Boolean']['input']>
}

/** This is the interface implemented by all entries. */
export type EntryInterfaceParentArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  ancestorDist?: InputMaybe<Scalars['Int']['input']>
  ancestorOf?: InputMaybe<Scalars['Int']['input']>
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  authorGroupId?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  before?: InputMaybe<Scalars['String']['input']>
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  descendantDist?: InputMaybe<Scalars['Int']['input']>
  descendantOf?: InputMaybe<Scalars['Int']['input']>
  editable?: InputMaybe<Scalars['Boolean']['input']>
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  inReverse?: InputMaybe<Scalars['Boolean']['input']>
  leaves?: InputMaybe<Scalars['Boolean']['input']>
  level?: InputMaybe<Scalars['Int']['input']>
  limit?: InputMaybe<Scalars['Int']['input']>
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Scalars['String']['input']>
  positionedAfter?: InputMaybe<Scalars['Int']['input']>
  positionedBefore?: InputMaybe<Scalars['Int']['input']>
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>
  projectDescription?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  projectFeatured?: InputMaybe<Scalars['Boolean']['input']>
  projectHeaderImage?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  projectInformation?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  projectLiveDemoLink?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  projectSourcecodeRepositoryLink?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>
  search?: InputMaybe<Scalars['String']['input']>
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  stacks?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  structureId?: InputMaybe<Scalars['Int']['input']>
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  unique?: InputMaybe<Scalars['Boolean']['input']>
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  withStructure?: InputMaybe<Scalars['Boolean']['input']>
}

/** This is the interface implemented by all entries. */
export type EntryInterfacePrevArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  ancestorDist?: InputMaybe<Scalars['Int']['input']>
  ancestorOf?: InputMaybe<Scalars['Int']['input']>
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  authorGroupId?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  before?: InputMaybe<Scalars['String']['input']>
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  descendantDist?: InputMaybe<Scalars['Int']['input']>
  descendantOf?: InputMaybe<Scalars['Int']['input']>
  editable?: InputMaybe<Scalars['Boolean']['input']>
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  inReverse?: InputMaybe<Scalars['Boolean']['input']>
  leaves?: InputMaybe<Scalars['Boolean']['input']>
  level?: InputMaybe<Scalars['Int']['input']>
  limit?: InputMaybe<Scalars['Int']['input']>
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Scalars['String']['input']>
  positionedAfter?: InputMaybe<Scalars['Int']['input']>
  positionedBefore?: InputMaybe<Scalars['Int']['input']>
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>
  projectDescription?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  projectFeatured?: InputMaybe<Scalars['Boolean']['input']>
  projectHeaderImage?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  projectInformation?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  projectLiveDemoLink?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  projectSourcecodeRepositoryLink?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>
  search?: InputMaybe<Scalars['String']['input']>
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  stacks?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  structureId?: InputMaybe<Scalars['Int']['input']>
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  unique?: InputMaybe<Scalars['Boolean']['input']>
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  withStructure?: InputMaybe<Scalars['Boolean']['input']>
}

export type Mutation = {
  __typename?: 'Mutation'
  ping?: Maybe<Scalars['String']['output']>
}

export type Query = {
  __typename?: 'Query'
  /** This query is used to query for a single asset. */
  asset?: Maybe<AssetInterface>
  /** This query is used to return the number of assets. */
  assetCount: Scalars['Int']['output']
  /** This query is used to query for assets. */
  assets?: Maybe<Array<Maybe<AssetInterface>>>
  /** This query is used to query for categories. */
  categories?: Maybe<Array<Maybe<CategoryInterface>>>
  /** This query is used to query for a single category. */
  category?: Maybe<CategoryInterface>
  /** This query is used to return the number of categories. */
  categoryCount: Scalars['Int']['output']
  /** This query is used to query for entries. */
  entries?: Maybe<Array<Maybe<EntryInterface>>>
  /** This query is used to query for a single entry. */
  entry?: Maybe<EntryInterface>
  /** This query is used to return the number of entries. */
  entryCount: Scalars['Int']['output']
  ping?: Maybe<Scalars['String']['output']>
  /** Entries within the projects section. */
  projectsEntries?: Maybe<Array<Maybe<ProjectsSectionEntryUnion>>>
}

export type QueryAssetArgs = {
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  dateModified?: InputMaybe<Scalars['String']['input']>
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  filename?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>
  folderId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  hasAlt?: InputMaybe<Scalars['Boolean']['input']>
  height?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  inReverse?: InputMaybe<Scalars['Boolean']['input']>
  includeSubfolders?: InputMaybe<Scalars['Boolean']['input']>
  kind?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Scalars['String']['input']>
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>
  search?: InputMaybe<Scalars['String']['input']>
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  size?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  unique?: InputMaybe<Scalars['Boolean']['input']>
  uploader?: InputMaybe<Scalars['QueryArgument']['input']>
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  volume?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  volumeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  width?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  withTransforms?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryAssetCountArgs = {
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  dateModified?: InputMaybe<Scalars['String']['input']>
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  filename?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>
  folderId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  hasAlt?: InputMaybe<Scalars['Boolean']['input']>
  height?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  inReverse?: InputMaybe<Scalars['Boolean']['input']>
  includeSubfolders?: InputMaybe<Scalars['Boolean']['input']>
  kind?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Scalars['String']['input']>
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>
  search?: InputMaybe<Scalars['String']['input']>
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  size?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  unique?: InputMaybe<Scalars['Boolean']['input']>
  uploader?: InputMaybe<Scalars['QueryArgument']['input']>
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  volume?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  volumeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  width?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  withTransforms?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryAssetsArgs = {
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  dateModified?: InputMaybe<Scalars['String']['input']>
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  filename?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>
  folderId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  hasAlt?: InputMaybe<Scalars['Boolean']['input']>
  height?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  inReverse?: InputMaybe<Scalars['Boolean']['input']>
  includeSubfolders?: InputMaybe<Scalars['Boolean']['input']>
  kind?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Scalars['String']['input']>
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>
  search?: InputMaybe<Scalars['String']['input']>
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  size?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  unique?: InputMaybe<Scalars['Boolean']['input']>
  uploader?: InputMaybe<Scalars['QueryArgument']['input']>
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  volume?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  volumeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  width?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  withTransforms?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryCategoriesArgs = {
  ancestorDist?: InputMaybe<Scalars['Int']['input']>
  ancestorOf?: InputMaybe<Scalars['Int']['input']>
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  descendantDist?: InputMaybe<Scalars['Int']['input']>
  descendantOf?: InputMaybe<Scalars['Int']['input']>
  editable?: InputMaybe<Scalars['Boolean']['input']>
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>
  group?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  groupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  inReverse?: InputMaybe<Scalars['Boolean']['input']>
  leaves?: InputMaybe<Scalars['Boolean']['input']>
  level?: InputMaybe<Scalars['Int']['input']>
  limit?: InputMaybe<Scalars['Int']['input']>
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Scalars['String']['input']>
  positionedAfter?: InputMaybe<Scalars['Int']['input']>
  positionedBefore?: InputMaybe<Scalars['Int']['input']>
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>
  search?: InputMaybe<Scalars['String']['input']>
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  stackHandle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  structureId?: InputMaybe<Scalars['Int']['input']>
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  unique?: InputMaybe<Scalars['Boolean']['input']>
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  withStructure?: InputMaybe<Scalars['Boolean']['input']>
}

export type QueryCategoryArgs = {
  ancestorDist?: InputMaybe<Scalars['Int']['input']>
  ancestorOf?: InputMaybe<Scalars['Int']['input']>
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  descendantDist?: InputMaybe<Scalars['Int']['input']>
  descendantOf?: InputMaybe<Scalars['Int']['input']>
  editable?: InputMaybe<Scalars['Boolean']['input']>
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>
  group?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  groupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  inReverse?: InputMaybe<Scalars['Boolean']['input']>
  leaves?: InputMaybe<Scalars['Boolean']['input']>
  level?: InputMaybe<Scalars['Int']['input']>
  limit?: InputMaybe<Scalars['Int']['input']>
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Scalars['String']['input']>
  positionedAfter?: InputMaybe<Scalars['Int']['input']>
  positionedBefore?: InputMaybe<Scalars['Int']['input']>
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>
  search?: InputMaybe<Scalars['String']['input']>
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  stackHandle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  structureId?: InputMaybe<Scalars['Int']['input']>
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  unique?: InputMaybe<Scalars['Boolean']['input']>
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  withStructure?: InputMaybe<Scalars['Boolean']['input']>
}

export type QueryCategoryCountArgs = {
  ancestorDist?: InputMaybe<Scalars['Int']['input']>
  ancestorOf?: InputMaybe<Scalars['Int']['input']>
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  descendantDist?: InputMaybe<Scalars['Int']['input']>
  descendantOf?: InputMaybe<Scalars['Int']['input']>
  editable?: InputMaybe<Scalars['Boolean']['input']>
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>
  group?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  groupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  inReverse?: InputMaybe<Scalars['Boolean']['input']>
  leaves?: InputMaybe<Scalars['Boolean']['input']>
  level?: InputMaybe<Scalars['Int']['input']>
  limit?: InputMaybe<Scalars['Int']['input']>
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Scalars['String']['input']>
  positionedAfter?: InputMaybe<Scalars['Int']['input']>
  positionedBefore?: InputMaybe<Scalars['Int']['input']>
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>
  search?: InputMaybe<Scalars['String']['input']>
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  stackHandle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  structureId?: InputMaybe<Scalars['Int']['input']>
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  unique?: InputMaybe<Scalars['Boolean']['input']>
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  withStructure?: InputMaybe<Scalars['Boolean']['input']>
}

export type QueryEntriesArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  ancestorDist?: InputMaybe<Scalars['Int']['input']>
  ancestorOf?: InputMaybe<Scalars['Int']['input']>
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  authorGroupId?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  before?: InputMaybe<Scalars['String']['input']>
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  descendantDist?: InputMaybe<Scalars['Int']['input']>
  descendantOf?: InputMaybe<Scalars['Int']['input']>
  editable?: InputMaybe<Scalars['Boolean']['input']>
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  inReverse?: InputMaybe<Scalars['Boolean']['input']>
  leaves?: InputMaybe<Scalars['Boolean']['input']>
  level?: InputMaybe<Scalars['Int']['input']>
  limit?: InputMaybe<Scalars['Int']['input']>
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Scalars['String']['input']>
  positionedAfter?: InputMaybe<Scalars['Int']['input']>
  positionedBefore?: InputMaybe<Scalars['Int']['input']>
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>
  projectDescription?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  projectFeatured?: InputMaybe<Scalars['Boolean']['input']>
  projectHeaderImage?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  projectInformation?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  projectLiveDemoLink?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  projectSourcecodeRepositoryLink?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>
  search?: InputMaybe<Scalars['String']['input']>
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  stacks?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  structureId?: InputMaybe<Scalars['Int']['input']>
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  unique?: InputMaybe<Scalars['Boolean']['input']>
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  withStructure?: InputMaybe<Scalars['Boolean']['input']>
}

export type QueryEntryArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  ancestorDist?: InputMaybe<Scalars['Int']['input']>
  ancestorOf?: InputMaybe<Scalars['Int']['input']>
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  authorGroupId?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  before?: InputMaybe<Scalars['String']['input']>
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  descendantDist?: InputMaybe<Scalars['Int']['input']>
  descendantOf?: InputMaybe<Scalars['Int']['input']>
  editable?: InputMaybe<Scalars['Boolean']['input']>
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  inReverse?: InputMaybe<Scalars['Boolean']['input']>
  leaves?: InputMaybe<Scalars['Boolean']['input']>
  level?: InputMaybe<Scalars['Int']['input']>
  limit?: InputMaybe<Scalars['Int']['input']>
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Scalars['String']['input']>
  positionedAfter?: InputMaybe<Scalars['Int']['input']>
  positionedBefore?: InputMaybe<Scalars['Int']['input']>
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>
  projectDescription?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  projectFeatured?: InputMaybe<Scalars['Boolean']['input']>
  projectHeaderImage?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  projectInformation?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  projectLiveDemoLink?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  projectSourcecodeRepositoryLink?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>
  search?: InputMaybe<Scalars['String']['input']>
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  stacks?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  structureId?: InputMaybe<Scalars['Int']['input']>
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  unique?: InputMaybe<Scalars['Boolean']['input']>
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  withStructure?: InputMaybe<Scalars['Boolean']['input']>
}

export type QueryEntryCountArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  ancestorDist?: InputMaybe<Scalars['Int']['input']>
  ancestorOf?: InputMaybe<Scalars['Int']['input']>
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  authorGroupId?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  before?: InputMaybe<Scalars['String']['input']>
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  descendantDist?: InputMaybe<Scalars['Int']['input']>
  descendantOf?: InputMaybe<Scalars['Int']['input']>
  editable?: InputMaybe<Scalars['Boolean']['input']>
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  inReverse?: InputMaybe<Scalars['Boolean']['input']>
  leaves?: InputMaybe<Scalars['Boolean']['input']>
  level?: InputMaybe<Scalars['Int']['input']>
  limit?: InputMaybe<Scalars['Int']['input']>
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Scalars['String']['input']>
  positionedAfter?: InputMaybe<Scalars['Int']['input']>
  positionedBefore?: InputMaybe<Scalars['Int']['input']>
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>
  projectDescription?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  projectFeatured?: InputMaybe<Scalars['Boolean']['input']>
  projectHeaderImage?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  projectInformation?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  projectLiveDemoLink?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  projectSourcecodeRepositoryLink?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>
  search?: InputMaybe<Scalars['String']['input']>
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  stacks?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  structureId?: InputMaybe<Scalars['Int']['input']>
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  unique?: InputMaybe<Scalars['Boolean']['input']>
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  withStructure?: InputMaybe<Scalars['Boolean']['input']>
}

export type QueryProjectsEntriesArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  ancestorDist?: InputMaybe<Scalars['Int']['input']>
  ancestorOf?: InputMaybe<Scalars['Int']['input']>
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  authorGroupId?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  before?: InputMaybe<Scalars['String']['input']>
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  descendantDist?: InputMaybe<Scalars['Int']['input']>
  descendantOf?: InputMaybe<Scalars['Int']['input']>
  editable?: InputMaybe<Scalars['Boolean']['input']>
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  inReverse?: InputMaybe<Scalars['Boolean']['input']>
  leaves?: InputMaybe<Scalars['Boolean']['input']>
  level?: InputMaybe<Scalars['Int']['input']>
  limit?: InputMaybe<Scalars['Int']['input']>
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Scalars['String']['input']>
  positionedAfter?: InputMaybe<Scalars['Int']['input']>
  positionedBefore?: InputMaybe<Scalars['Int']['input']>
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>
  projectDescription?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  projectFeatured?: InputMaybe<Scalars['Boolean']['input']>
  projectHeaderImage?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  projectInformation?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  projectLiveDemoLink?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  projectSourcecodeRepositoryLink?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>
  search?: InputMaybe<Scalars['String']['input']>
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  stacks?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  structureId?: InputMaybe<Scalars['Int']['input']>
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  unique?: InputMaybe<Scalars['Boolean']['input']>
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  withStructure?: InputMaybe<Scalars['Boolean']['input']>
}

export type TagCriteriaInput = {
  /** Narrows the query results based on the elements’ creation dates. */
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Narrows the query results based on the elements’ last-updated dates. */
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Causes the query results to be returned in the order specified by the `id` argument. */
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>
  /** Narrows the query results based on the tag groups the tags belong to per the group’s handles. */
  group?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Narrows the query results based on the tag groups the tags belong to, per the groups’ IDs. */
  groupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  /** Narrows the query results based on the elements’ IDs. */
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  /** Causes the query results to be returned in reverse order. */
  inReverse?: InputMaybe<Scalars['Boolean']['input']>
  /** Sets the limit for paginated results. */
  limit?: InputMaybe<Scalars['Int']['input']>
  /** Sets the offset for paginated results. */
  offset?: InputMaybe<Scalars['Int']['input']>
  /** Sets the field the returned elements should be ordered by. */
  orderBy?: InputMaybe<Scalars['String']['input']>
  /** Determines which site should be selected when querying multi-site elements. */
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  /** Narrows the query results based on a reference string. */
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /**
   * Narrows the query results to elements that relate to the provided element IDs.
   * This argument is ignored, if `relatedToAll` is also used.
   */
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  /**
   * Narrows the query results to elements that relate to *all* of the provided
   * element IDs. Using this argument will cause `relatedTo` argument to be
   * ignored. **This argument is deprecated.** `relatedTo: ["and", ...ids]` should
   * be used instead.
   */
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  /** Narrows the query results to elements that relate to an asset list defined with this argument. */
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>
  /** Narrows the query results to elements that relate to a category list defined with this argument. */
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>
  /** Narrows the query results to elements that relate to an entry list defined with this argument. */
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>
  /** Narrows the query results to elements that relate to a tag list defined with this argument. */
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>
  /** Narrows the query results to elements that relate to a use list defined with this argument. */
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>
  /** Narrows the query results to only elements that match a search query. */
  search?: InputMaybe<Scalars['String']['input']>
  /** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  /** Narrows the query results based on the unique identifier for an element-site relation. */
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  /** Narrows the query results based on the elements’ slugs. */
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Narrows the query results based on the elements’ titles. */
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Narrows the query results based on the elements’ UIDs. */
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Determines whether only elements with unique IDs should be returned by the query. */
  unique?: InputMaybe<Scalars['Boolean']['input']>
  /** Narrows the query results based on the elements’ URIs. */
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type User = ElementInterface &
  UserInterface & {
    __typename?: 'User'
    /** Return a number of related elements for a field. */
    _count?: Maybe<Scalars['Int']['output']>
    /** The user’s addresses. */
    addresses?: Maybe<Array<Maybe<AddressInterface>>>
    /** Whether the element is archived. */
    archived?: Maybe<Scalars['Boolean']['output']>
    /** The date the element was created. */
    dateCreated?: Maybe<Scalars['DateTime']['output']>
    /** The date the element was last updated. */
    dateUpdated?: Maybe<Scalars['DateTime']['output']>
    /** The user’s email. */
    email?: Maybe<Scalars['String']['output']>
    /** Whether the element is enabled. */
    enabled?: Maybe<Scalars['Boolean']['output']>
    /** The user’s first name. */
    firstName?: Maybe<Scalars['String']['output']>
    /** The user’s first name or username. */
    friendlyName?: Maybe<Scalars['String']['output']>
    /** The user’s full name. */
    fullName?: Maybe<Scalars['String']['output']>
    /** The ID of the entity */
    id?: Maybe<Scalars['ID']['output']>
    /** The language of the site element is associated with. */
    language?: Maybe<Scalars['String']['output']>
    /** The user’s last name. */
    lastName?: Maybe<Scalars['String']['output']>
    /** The user’s full name or username. */
    name: Scalars['String']['output']
    /** The user’s photo. */
    photo?: Maybe<AssetInterface>
    /** The user’s preferences. */
    preferences: Scalars['String']['output']
    /** The user’s preferred language. */
    preferredLanguage?: Maybe<Scalars['String']['output']>
    /** The element’s search score, if the `search` parameter was used when querying for the element. */
    searchScore?: Maybe<Scalars['Int']['output']>
    /** The handle of the site the element is associated with. */
    siteHandle?: Maybe<Scalars['String']['output']>
    /** The ID of the site the element is associated with. */
    siteId?: Maybe<Scalars['Int']['output']>
    /** The unique identifier for an element-site relation. */
    siteSettingsId?: Maybe<Scalars['ID']['output']>
    /** The element’s slug. */
    slug?: Maybe<Scalars['String']['output']>
    /** The element’s status. */
    status?: Maybe<Scalars['String']['output']>
    /** The element’s title. */
    title?: Maybe<Scalars['String']['output']>
    /** Whether the element has been soft-deleted. */
    trashed?: Maybe<Scalars['Boolean']['output']>
    /** The UID of the entity */
    uid?: Maybe<Scalars['String']['output']>
    /** The element’s URI. */
    uri?: Maybe<Scalars['String']['output']>
    /** The username. */
    username?: Maybe<Scalars['String']['output']>
  }

export type User_CountArgs = {
  field: Scalars['String']['input']
}

export type UserAddressesArgs = {
  administrativeArea?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  countryCode?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  inReverse?: InputMaybe<Scalars['Boolean']['input']>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Scalars['String']['input']>
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>
  search?: InputMaybe<Scalars['String']['input']>
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  unique?: InputMaybe<Scalars['Boolean']['input']>
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type UserCriteriaInput = {
  /** Narrows the query results based on whether the users have uploaded any assets. */
  assetUploaders?: InputMaybe<Scalars['Boolean']['input']>
  /** Narrows the query results based on whether the users are listed as the author of any entries. */
  authors?: InputMaybe<Scalars['Boolean']['input']>
  /** Narrows the query results based on the elements’ creation dates. */
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Narrows the query results based on the elements’ last-updated dates. */
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Narrows the query results based on the users’ email addresses. */
  email?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Narrows the query results based on the users’ first names. */
  firstName?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Causes the query results to be returned in the order specified by the `id` argument. */
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>
  /** Narrows the query results based on the users’ full names. */
  fullName?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Narrows the query results based on the user group the users belong to. */
  group?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  /** Narrows the query results based on the user group the users belong to, per the groups’ IDs. */
  groupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  /** Narrows the query results to only users that have (or don’t have) a user photo. */
  hasPhoto?: InputMaybe<Scalars['Boolean']['input']>
  /** Narrows the query results based on the elements’ IDs. */
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  /** Causes the query results to be returned in reverse order. */
  inReverse?: InputMaybe<Scalars['Boolean']['input']>
  /** Narrows the query results based on the users’ last names. */
  lastName?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Sets the limit for paginated results. */
  limit?: InputMaybe<Scalars['Int']['input']>
  /** Sets the offset for paginated results. */
  offset?: InputMaybe<Scalars['Int']['input']>
  /** Sets the field the returned elements should be ordered by. */
  orderBy?: InputMaybe<Scalars['String']['input']>
  /** Determines which site should be selected when querying multi-site elements. */
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  /** Narrows the query results based on a reference string. */
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /**
   * Narrows the query results to elements that relate to the provided element IDs.
   * This argument is ignored, if `relatedToAll` is also used.
   */
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  /**
   * Narrows the query results to elements that relate to *all* of the provided
   * element IDs. Using this argument will cause `relatedTo` argument to be
   * ignored. **This argument is deprecated.** `relatedTo: ["and", ...ids]` should
   * be used instead.
   */
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  /** Narrows the query results to elements that relate to an asset list defined with this argument. */
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>
  /** Narrows the query results to elements that relate to a category list defined with this argument. */
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>
  /** Narrows the query results to elements that relate to an entry list defined with this argument. */
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>
  /** Narrows the query results to elements that relate to a tag list defined with this argument. */
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>
  /** Narrows the query results to elements that relate to a use list defined with this argument. */
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>
  /** Narrows the query results to only elements that match a search query. */
  search?: InputMaybe<Scalars['String']['input']>
  /** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  /** Narrows the query results based on the unique identifier for an element-site relation. */
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  /** Narrows the query results based on the elements’ slugs. */
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Narrows the query results based on the elements’ titles. */
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Narrows the query results based on the elements’ UIDs. */
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Determines whether only elements with unique IDs should be returned by the query. */
  unique?: InputMaybe<Scalars['Boolean']['input']>
  /** Narrows the query results based on the elements’ URIs. */
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Narrows the query results based on the users’ usernames. */
  username?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

/** This is the interface implemented by all users. */
export type UserInterface = {
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars['Int']['output']>
  /** The user’s addresses. */
  addresses?: Maybe<Array<Maybe<AddressInterface>>>
  /** Whether the element is archived. */
  archived?: Maybe<Scalars['Boolean']['output']>
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']['output']>
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']['output']>
  /** The user’s email. */
  email?: Maybe<Scalars['String']['output']>
  /** Whether the element is enabled. */
  enabled?: Maybe<Scalars['Boolean']['output']>
  /** The user’s first name. */
  firstName?: Maybe<Scalars['String']['output']>
  /** The user’s first name or username. */
  friendlyName?: Maybe<Scalars['String']['output']>
  /** The user’s full name. */
  fullName?: Maybe<Scalars['String']['output']>
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']['output']>
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars['String']['output']>
  /** The user’s last name. */
  lastName?: Maybe<Scalars['String']['output']>
  /** The user’s full name or username. */
  name: Scalars['String']['output']
  /** The user’s photo. */
  photo?: Maybe<AssetInterface>
  /** The user’s preferences. */
  preferences: Scalars['String']['output']
  /** The user’s preferred language. */
  preferredLanguage?: Maybe<Scalars['String']['output']>
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['Int']['output']>
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars['String']['output']>
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']['output']>
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars['ID']['output']>
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']['output']>
  /** The element’s status. */
  status?: Maybe<Scalars['String']['output']>
  /** The element’s title. */
  title?: Maybe<Scalars['String']['output']>
  /** Whether the element has been soft-deleted. */
  trashed?: Maybe<Scalars['Boolean']['output']>
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']['output']>
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']['output']>
  /** The username. */
  username?: Maybe<Scalars['String']['output']>
}

/** This is the interface implemented by all users. */
export type UserInterface_CountArgs = {
  field: Scalars['String']['input']
}

/** This is the interface implemented by all users. */
export type UserInterfaceAddressesArgs = {
  administrativeArea?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  countryCode?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  inReverse?: InputMaybe<Scalars['Boolean']['input']>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Scalars['String']['input']>
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>
  search?: InputMaybe<Scalars['String']['input']>
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  unique?: InputMaybe<Scalars['Boolean']['input']>
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Files_Asset = AssetInterface &
  ElementInterface & {
    __typename?: 'files_Asset'
    /** Return a number of related elements for a field. */
    _count?: Maybe<Scalars['Int']['output']>
    /** Alternative text for the asset. */
    alt?: Maybe<Scalars['String']['output']>
    /** Whether the element is archived. */
    archived?: Maybe<Scalars['Boolean']['output']>
    /** The date the element was created. */
    dateCreated?: Maybe<Scalars['DateTime']['output']>
    /** The date the asset file was last modified. */
    dateModified?: Maybe<Scalars['DateTime']['output']>
    /** The date the element was last updated. */
    dateUpdated?: Maybe<Scalars['DateTime']['output']>
    /** Whether the element is enabled. */
    enabled?: Maybe<Scalars['Boolean']['output']>
    /** The file extension for the asset file. */
    extension: Scalars['String']['output']
    /** The filename of the asset file. */
    filename: Scalars['String']['output']
    /** The focal point represented as an array with `x` and `y` keys, or null if it’s not an image. */
    focalPoint?: Maybe<Array<Maybe<Scalars['Float']['output']>>>
    /** The ID of the folder that the asset belongs to. */
    folderId: Scalars['Int']['output']
    /** Returns the file’s format. */
    format?: Maybe<Scalars['String']['output']>
    /** Whether a user-defined focal point is set on the asset. */
    hasFocalPoint: Scalars['Boolean']['output']
    /** The height in pixels or null if it’s not an image. */
    height?: Maybe<Scalars['Int']['output']>
    /** The ID of the entity */
    id?: Maybe<Scalars['ID']['output']>
    /** An `<img>` tag based on this asset. */
    img?: Maybe<Scalars['String']['output']>
    /** The file kind. */
    kind: Scalars['String']['output']
    /** The language of the site element is associated with. */
    language?: Maybe<Scalars['String']['output']>
    /** The file’s MIME type, if it can be determined. */
    mimeType?: Maybe<Scalars['String']['output']>
    /** Returns the next element relative to this one, from a given set of criteria. */
    next?: Maybe<AssetInterface>
    /** The asset’s path in the volume. */
    path: Scalars['String']['output']
    /** Returns the previous element relative to this one, from a given set of criteria. */
    prev?: Maybe<AssetInterface>
    /** The element’s search score, if the `search` parameter was used when querying for the element. */
    searchScore?: Maybe<Scalars['Int']['output']>
    /** The handle of the site the element is associated with. */
    siteHandle?: Maybe<Scalars['String']['output']>
    /** The ID of the site the element is associated with. */
    siteId?: Maybe<Scalars['Int']['output']>
    /** The unique identifier for an element-site relation. */
    siteSettingsId?: Maybe<Scalars['ID']['output']>
    /** The file size in bytes. */
    size?: Maybe<Scalars['String']['output']>
    /** The element’s slug. */
    slug?: Maybe<Scalars['String']['output']>
    /** Returns a `srcset` attribute value based on the given widths or x-descriptors. */
    srcset?: Maybe<Scalars['String']['output']>
    /** The element’s status. */
    status?: Maybe<Scalars['String']['output']>
    /** The element’s title. */
    title?: Maybe<Scalars['String']['output']>
    /** Whether the element has been soft-deleted. */
    trashed?: Maybe<Scalars['Boolean']['output']>
    /** The UID of the entity */
    uid?: Maybe<Scalars['String']['output']>
    /** The element’s URI. */
    uri?: Maybe<Scalars['String']['output']>
    /** The full URL of the asset. This field accepts the same fields as the `transform` directive. */
    url?: Maybe<Scalars['String']['output']>
    /** The ID of the volume that the asset belongs to. */
    volumeId?: Maybe<Scalars['Int']['output']>
    /** The width in pixels or null if it’s not an image. */
    width?: Maybe<Scalars['Int']['output']>
  }

export type Files_Asset_CountArgs = {
  field: Scalars['String']['input']
}

export type Files_AssetFormatArgs = {
  format?: InputMaybe<Scalars['String']['input']>
  handle?: InputMaybe<Scalars['String']['input']>
  height?: InputMaybe<Scalars['Int']['input']>
  immediately?: InputMaybe<Scalars['Boolean']['input']>
  interlace?: InputMaybe<Scalars['String']['input']>
  mode?: InputMaybe<Scalars['String']['input']>
  position?: InputMaybe<Scalars['String']['input']>
  quality?: InputMaybe<Scalars['Int']['input']>
  transform?: InputMaybe<Scalars['String']['input']>
  width?: InputMaybe<Scalars['Int']['input']>
}

export type Files_AssetHeightArgs = {
  format?: InputMaybe<Scalars['String']['input']>
  handle?: InputMaybe<Scalars['String']['input']>
  height?: InputMaybe<Scalars['Int']['input']>
  immediately?: InputMaybe<Scalars['Boolean']['input']>
  interlace?: InputMaybe<Scalars['String']['input']>
  mode?: InputMaybe<Scalars['String']['input']>
  position?: InputMaybe<Scalars['String']['input']>
  quality?: InputMaybe<Scalars['Int']['input']>
  transform?: InputMaybe<Scalars['String']['input']>
  width?: InputMaybe<Scalars['Int']['input']>
}

export type Files_AssetNextArgs = {
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  dateModified?: InputMaybe<Scalars['String']['input']>
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  filename?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>
  folderId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  hasAlt?: InputMaybe<Scalars['Boolean']['input']>
  height?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  inReverse?: InputMaybe<Scalars['Boolean']['input']>
  includeSubfolders?: InputMaybe<Scalars['Boolean']['input']>
  kind?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Scalars['String']['input']>
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>
  search?: InputMaybe<Scalars['String']['input']>
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  size?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  unique?: InputMaybe<Scalars['Boolean']['input']>
  uploader?: InputMaybe<Scalars['QueryArgument']['input']>
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  volume?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  volumeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  width?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  withTransforms?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Files_AssetPrevArgs = {
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  dateModified?: InputMaybe<Scalars['String']['input']>
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  filename?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>
  folderId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  hasAlt?: InputMaybe<Scalars['Boolean']['input']>
  height?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  inReverse?: InputMaybe<Scalars['Boolean']['input']>
  includeSubfolders?: InputMaybe<Scalars['Boolean']['input']>
  kind?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Scalars['String']['input']>
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>
  search?: InputMaybe<Scalars['String']['input']>
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  size?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  unique?: InputMaybe<Scalars['Boolean']['input']>
  uploader?: InputMaybe<Scalars['QueryArgument']['input']>
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  volume?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  volumeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  width?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  withTransforms?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Files_AssetSrcsetArgs = {
  sizes: Array<Scalars['String']['input']>
}

export type Files_AssetUrlArgs = {
  format?: InputMaybe<Scalars['String']['input']>
  handle?: InputMaybe<Scalars['String']['input']>
  height?: InputMaybe<Scalars['Int']['input']>
  immediately?: InputMaybe<Scalars['Boolean']['input']>
  interlace?: InputMaybe<Scalars['String']['input']>
  mode?: InputMaybe<Scalars['String']['input']>
  position?: InputMaybe<Scalars['String']['input']>
  quality?: InputMaybe<Scalars['Int']['input']>
  transform?: InputMaybe<Scalars['String']['input']>
  width?: InputMaybe<Scalars['Int']['input']>
}

export type Files_AssetWidthArgs = {
  format?: InputMaybe<Scalars['String']['input']>
  handle?: InputMaybe<Scalars['String']['input']>
  height?: InputMaybe<Scalars['Int']['input']>
  immediately?: InputMaybe<Scalars['Boolean']['input']>
  interlace?: InputMaybe<Scalars['String']['input']>
  mode?: InputMaybe<Scalars['String']['input']>
  position?: InputMaybe<Scalars['String']['input']>
  quality?: InputMaybe<Scalars['Int']['input']>
  transform?: InputMaybe<Scalars['String']['input']>
  width?: InputMaybe<Scalars['Int']['input']>
}

export type ProjectsSectionEntryUnion = Projects_Project_Entry

export type Projects_Project_Entry = ElementInterface &
  EntryInterface & {
    __typename?: 'projects_project_Entry'
    /** Return a number of related elements for a field. */
    _count?: Maybe<Scalars['Int']['output']>
    /** The entry’s ancestors, if the section is a structure. Accepts the same arguments as the `entries` query. */
    ancestors: Array<EntryInterface>
    /** Whether the element is archived. */
    archived?: Maybe<Scalars['Boolean']['output']>
    /** Returns the entry’s canonical ID. */
    canonicalId?: Maybe<Scalars['Int']['output']>
    /** Returns the entry’s canonical UUID. */
    canonicalUid?: Maybe<Scalars['String']['output']>
    /** The entry’s children, if the section is a structure. Accepts the same arguments as the `entries` query. */
    children: Array<EntryInterface>
    /** The date the element was created. */
    dateCreated?: Maybe<Scalars['DateTime']['output']>
    /** The date the element was last updated. */
    dateUpdated?: Maybe<Scalars['DateTime']['output']>
    /** The entry’s descendants, if the section is a structure. Accepts the same arguments as the `entries` query. */
    descendants: Array<EntryInterface>
    /** The draft ID (from the `drafts` table). */
    draftId?: Maybe<Scalars['Int']['output']>
    /** The name of the draft. */
    draftName?: Maybe<Scalars['String']['output']>
    /** The notes for the draft. */
    draftNotes?: Maybe<Scalars['String']['output']>
    /** Whether the element is enabled. */
    enabled?: Maybe<Scalars['Boolean']['output']>
    /** Whether the element is enabled for the site. */
    enabledForSite?: Maybe<Scalars['Boolean']['output']>
    /** The expiry date of the entry. */
    expiryDate?: Maybe<Scalars['DateTime']['output']>
    /** The ID of the entity */
    id?: Maybe<Scalars['ID']['output']>
    /** Returns whether this is a draft. */
    isDraft?: Maybe<Scalars['Boolean']['output']>
    /** Returns whether this is a revision. */
    isRevision?: Maybe<Scalars['Boolean']['output']>
    /** Returns whether this is an unpublished draft. */
    isUnpublishedDraft?: Maybe<Scalars['Boolean']['output']>
    /** The language of the site element is associated with. */
    language?: Maybe<Scalars['String']['output']>
    /** The element’s level within its structure */
    level?: Maybe<Scalars['Int']['output']>
    /** The element’s left position within its structure. */
    lft?: Maybe<Scalars['Int']['output']>
    /** The same element in other locales. */
    localized: Array<EntryInterface>
    /** Returns the next element relative to this one, from a given set of criteria. */
    next?: Maybe<EntryInterface>
    /** The entry’s parent, if the section is a structure. */
    parent?: Maybe<EntryInterface>
    /** The entry’s post date. */
    postDate?: Maybe<Scalars['DateTime']['output']>
    /** Returns the previous element relative to this one, from a given set of criteria. */
    prev?: Maybe<EntryInterface>
    projectDescription?: Maybe<Scalars['String']['output']>
    projectFeatured?: Maybe<Scalars['Boolean']['output']>
    projectHeaderImage: Array<Maybe<AssetInterface>>
    projectInformation?: Maybe<Scalars['String']['output']>
    projectLiveDemoLink?: Maybe<Scalars['String']['output']>
    projectSourcecodeRepositoryLink?: Maybe<Scalars['String']['output']>
    /** The revision ID (from the `revisions` table). */
    revisionId?: Maybe<Scalars['Int']['output']>
    /** The revision notes (from the `revisions` table). */
    revisionNotes?: Maybe<Scalars['String']['output']>
    /** The element’s right position within its structure. */
    rgt?: Maybe<Scalars['Int']['output']>
    /** The element’s structure’s root ID */
    root?: Maybe<Scalars['Int']['output']>
    /** The element’s search score, if the `search` parameter was used when querying for the element. */
    searchScore?: Maybe<Scalars['Int']['output']>
    /** The handle of the section that contains the entry. */
    sectionHandle: Scalars['String']['output']
    /** The ID of the section that contains the entry. */
    sectionId: Scalars['Int']['output']
    /** The handle of the site the element is associated with. */
    siteHandle?: Maybe<Scalars['String']['output']>
    /** The ID of the site the element is associated with. */
    siteId?: Maybe<Scalars['Int']['output']>
    /** The unique identifier for an element-site relation. */
    siteSettingsId?: Maybe<Scalars['ID']['output']>
    /** The element’s slug. */
    slug?: Maybe<Scalars['String']['output']>
    /**
     * Returns the entry’s canonical ID.
     * @deprecated this field has been deprecated since Craft 3.7.7. Use `canonicalId` instead.
     */
    sourceId?: Maybe<Scalars['Int']['output']>
    /**
     * Returns the entry’s canonical UUID.
     * @deprecated this field has been deprecated since Craft 3.7.7. Use `canonicalUid` instead.
     */
    sourceUid?: Maybe<Scalars['String']['output']>
    stacks: Array<Maybe<CategoryInterface>>
    /** The element’s status. */
    status?: Maybe<Scalars['String']['output']>
    /** The element’s structure ID. */
    structureId?: Maybe<Scalars['Int']['output']>
    /** The element’s title. */
    title?: Maybe<Scalars['String']['output']>
    /** Whether the element has been soft-deleted. */
    trashed?: Maybe<Scalars['Boolean']['output']>
    /** The handle of the entry type that contains the entry. */
    typeHandle: Scalars['String']['output']
    /** The ID of the entry type that contains the entry. */
    typeId: Scalars['Int']['output']
    /** The UID of the entity */
    uid?: Maybe<Scalars['String']['output']>
    /** The element’s URI. */
    uri?: Maybe<Scalars['String']['output']>
    /** The element’s full URL */
    url?: Maybe<Scalars['String']['output']>
  }

export type Projects_Project_Entry_CountArgs = {
  field: Scalars['String']['input']
}

export type Projects_Project_EntryAncestorsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  ancestorDist?: InputMaybe<Scalars['Int']['input']>
  ancestorOf?: InputMaybe<Scalars['Int']['input']>
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  authorGroupId?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  before?: InputMaybe<Scalars['String']['input']>
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  descendantDist?: InputMaybe<Scalars['Int']['input']>
  descendantOf?: InputMaybe<Scalars['Int']['input']>
  editable?: InputMaybe<Scalars['Boolean']['input']>
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  inReverse?: InputMaybe<Scalars['Boolean']['input']>
  leaves?: InputMaybe<Scalars['Boolean']['input']>
  level?: InputMaybe<Scalars['Int']['input']>
  limit?: InputMaybe<Scalars['Int']['input']>
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Scalars['String']['input']>
  positionedAfter?: InputMaybe<Scalars['Int']['input']>
  positionedBefore?: InputMaybe<Scalars['Int']['input']>
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>
  projectDescription?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  projectFeatured?: InputMaybe<Scalars['Boolean']['input']>
  projectHeaderImage?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  projectInformation?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  projectLiveDemoLink?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  projectSourcecodeRepositoryLink?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>
  search?: InputMaybe<Scalars['String']['input']>
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  stacks?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  structureId?: InputMaybe<Scalars['Int']['input']>
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  unique?: InputMaybe<Scalars['Boolean']['input']>
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  withStructure?: InputMaybe<Scalars['Boolean']['input']>
}

export type Projects_Project_EntryChildrenArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  ancestorDist?: InputMaybe<Scalars['Int']['input']>
  ancestorOf?: InputMaybe<Scalars['Int']['input']>
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  authorGroupId?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  before?: InputMaybe<Scalars['String']['input']>
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  descendantDist?: InputMaybe<Scalars['Int']['input']>
  descendantOf?: InputMaybe<Scalars['Int']['input']>
  editable?: InputMaybe<Scalars['Boolean']['input']>
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  inReverse?: InputMaybe<Scalars['Boolean']['input']>
  leaves?: InputMaybe<Scalars['Boolean']['input']>
  level?: InputMaybe<Scalars['Int']['input']>
  limit?: InputMaybe<Scalars['Int']['input']>
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Scalars['String']['input']>
  positionedAfter?: InputMaybe<Scalars['Int']['input']>
  positionedBefore?: InputMaybe<Scalars['Int']['input']>
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>
  projectDescription?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  projectFeatured?: InputMaybe<Scalars['Boolean']['input']>
  projectHeaderImage?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  projectInformation?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  projectLiveDemoLink?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  projectSourcecodeRepositoryLink?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>
  search?: InputMaybe<Scalars['String']['input']>
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  stacks?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  structureId?: InputMaybe<Scalars['Int']['input']>
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  unique?: InputMaybe<Scalars['Boolean']['input']>
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  withStructure?: InputMaybe<Scalars['Boolean']['input']>
}

export type Projects_Project_EntryDescendantsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  ancestorDist?: InputMaybe<Scalars['Int']['input']>
  ancestorOf?: InputMaybe<Scalars['Int']['input']>
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  authorGroupId?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  before?: InputMaybe<Scalars['String']['input']>
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  descendantDist?: InputMaybe<Scalars['Int']['input']>
  descendantOf?: InputMaybe<Scalars['Int']['input']>
  editable?: InputMaybe<Scalars['Boolean']['input']>
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  inReverse?: InputMaybe<Scalars['Boolean']['input']>
  leaves?: InputMaybe<Scalars['Boolean']['input']>
  level?: InputMaybe<Scalars['Int']['input']>
  limit?: InputMaybe<Scalars['Int']['input']>
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Scalars['String']['input']>
  positionedAfter?: InputMaybe<Scalars['Int']['input']>
  positionedBefore?: InputMaybe<Scalars['Int']['input']>
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>
  projectDescription?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  projectFeatured?: InputMaybe<Scalars['Boolean']['input']>
  projectHeaderImage?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  projectInformation?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  projectLiveDemoLink?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  projectSourcecodeRepositoryLink?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>
  search?: InputMaybe<Scalars['String']['input']>
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  stacks?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  structureId?: InputMaybe<Scalars['Int']['input']>
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  unique?: InputMaybe<Scalars['Boolean']['input']>
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  withStructure?: InputMaybe<Scalars['Boolean']['input']>
}

export type Projects_Project_EntryLocalizedArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  ancestorDist?: InputMaybe<Scalars['Int']['input']>
  ancestorOf?: InputMaybe<Scalars['Int']['input']>
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  authorGroupId?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  before?: InputMaybe<Scalars['String']['input']>
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  descendantDist?: InputMaybe<Scalars['Int']['input']>
  descendantOf?: InputMaybe<Scalars['Int']['input']>
  editable?: InputMaybe<Scalars['Boolean']['input']>
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  inReverse?: InputMaybe<Scalars['Boolean']['input']>
  leaves?: InputMaybe<Scalars['Boolean']['input']>
  level?: InputMaybe<Scalars['Int']['input']>
  limit?: InputMaybe<Scalars['Int']['input']>
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Scalars['String']['input']>
  positionedAfter?: InputMaybe<Scalars['Int']['input']>
  positionedBefore?: InputMaybe<Scalars['Int']['input']>
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>
  projectDescription?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  projectFeatured?: InputMaybe<Scalars['Boolean']['input']>
  projectHeaderImage?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  projectInformation?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  projectLiveDemoLink?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  projectSourcecodeRepositoryLink?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>
  search?: InputMaybe<Scalars['String']['input']>
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  stacks?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  structureId?: InputMaybe<Scalars['Int']['input']>
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  unique?: InputMaybe<Scalars['Boolean']['input']>
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  withStructure?: InputMaybe<Scalars['Boolean']['input']>
}

export type Projects_Project_EntryNextArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  ancestorDist?: InputMaybe<Scalars['Int']['input']>
  ancestorOf?: InputMaybe<Scalars['Int']['input']>
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  authorGroupId?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  before?: InputMaybe<Scalars['String']['input']>
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  descendantDist?: InputMaybe<Scalars['Int']['input']>
  descendantOf?: InputMaybe<Scalars['Int']['input']>
  editable?: InputMaybe<Scalars['Boolean']['input']>
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  inReverse?: InputMaybe<Scalars['Boolean']['input']>
  leaves?: InputMaybe<Scalars['Boolean']['input']>
  level?: InputMaybe<Scalars['Int']['input']>
  limit?: InputMaybe<Scalars['Int']['input']>
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Scalars['String']['input']>
  positionedAfter?: InputMaybe<Scalars['Int']['input']>
  positionedBefore?: InputMaybe<Scalars['Int']['input']>
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>
  projectDescription?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  projectFeatured?: InputMaybe<Scalars['Boolean']['input']>
  projectHeaderImage?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  projectInformation?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  projectLiveDemoLink?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  projectSourcecodeRepositoryLink?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>
  search?: InputMaybe<Scalars['String']['input']>
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  stacks?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  structureId?: InputMaybe<Scalars['Int']['input']>
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  unique?: InputMaybe<Scalars['Boolean']['input']>
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  withStructure?: InputMaybe<Scalars['Boolean']['input']>
}

export type Projects_Project_EntryParentArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  ancestorDist?: InputMaybe<Scalars['Int']['input']>
  ancestorOf?: InputMaybe<Scalars['Int']['input']>
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  authorGroupId?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  before?: InputMaybe<Scalars['String']['input']>
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  descendantDist?: InputMaybe<Scalars['Int']['input']>
  descendantOf?: InputMaybe<Scalars['Int']['input']>
  editable?: InputMaybe<Scalars['Boolean']['input']>
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  inReverse?: InputMaybe<Scalars['Boolean']['input']>
  leaves?: InputMaybe<Scalars['Boolean']['input']>
  level?: InputMaybe<Scalars['Int']['input']>
  limit?: InputMaybe<Scalars['Int']['input']>
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Scalars['String']['input']>
  positionedAfter?: InputMaybe<Scalars['Int']['input']>
  positionedBefore?: InputMaybe<Scalars['Int']['input']>
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>
  projectDescription?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  projectFeatured?: InputMaybe<Scalars['Boolean']['input']>
  projectHeaderImage?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  projectInformation?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  projectLiveDemoLink?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  projectSourcecodeRepositoryLink?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>
  search?: InputMaybe<Scalars['String']['input']>
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  stacks?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  structureId?: InputMaybe<Scalars['Int']['input']>
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  unique?: InputMaybe<Scalars['Boolean']['input']>
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  withStructure?: InputMaybe<Scalars['Boolean']['input']>
}

export type Projects_Project_EntryPrevArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  ancestorDist?: InputMaybe<Scalars['Int']['input']>
  ancestorOf?: InputMaybe<Scalars['Int']['input']>
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  authorGroupId?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  before?: InputMaybe<Scalars['String']['input']>
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  descendantDist?: InputMaybe<Scalars['Int']['input']>
  descendantOf?: InputMaybe<Scalars['Int']['input']>
  editable?: InputMaybe<Scalars['Boolean']['input']>
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  inReverse?: InputMaybe<Scalars['Boolean']['input']>
  leaves?: InputMaybe<Scalars['Boolean']['input']>
  level?: InputMaybe<Scalars['Int']['input']>
  limit?: InputMaybe<Scalars['Int']['input']>
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Scalars['String']['input']>
  positionedAfter?: InputMaybe<Scalars['Int']['input']>
  positionedBefore?: InputMaybe<Scalars['Int']['input']>
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>
  projectDescription?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  projectFeatured?: InputMaybe<Scalars['Boolean']['input']>
  projectHeaderImage?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  projectInformation?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  projectLiveDemoLink?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  projectSourcecodeRepositoryLink?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>
  search?: InputMaybe<Scalars['String']['input']>
  section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  stacks?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  structureId?: InputMaybe<Scalars['Int']['input']>
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  unique?: InputMaybe<Scalars['Boolean']['input']>
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  withStructure?: InputMaybe<Scalars['Boolean']['input']>
}

export type Projects_Project_EntryProjectHeaderImageArgs = {
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  dateModified?: InputMaybe<Scalars['String']['input']>
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  filename?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>
  folderId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  hasAlt?: InputMaybe<Scalars['Boolean']['input']>
  height?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  inReverse?: InputMaybe<Scalars['Boolean']['input']>
  includeSubfolders?: InputMaybe<Scalars['Boolean']['input']>
  kind?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Scalars['String']['input']>
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>
  search?: InputMaybe<Scalars['String']['input']>
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  size?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  unique?: InputMaybe<Scalars['Boolean']['input']>
  uploader?: InputMaybe<Scalars['QueryArgument']['input']>
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  volume?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  volumeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  width?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  withTransforms?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Projects_Project_EntryStacksArgs = {
  ancestorDist?: InputMaybe<Scalars['Int']['input']>
  ancestorOf?: InputMaybe<Scalars['Int']['input']>
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  descendantDist?: InputMaybe<Scalars['Int']['input']>
  descendantOf?: InputMaybe<Scalars['Int']['input']>
  editable?: InputMaybe<Scalars['Boolean']['input']>
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>
  group?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  groupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  inReverse?: InputMaybe<Scalars['Boolean']['input']>
  leaves?: InputMaybe<Scalars['Boolean']['input']>
  level?: InputMaybe<Scalars['Int']['input']>
  limit?: InputMaybe<Scalars['Int']['input']>
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Scalars['String']['input']>
  positionedAfter?: InputMaybe<Scalars['Int']['input']>
  positionedBefore?: InputMaybe<Scalars['Int']['input']>
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>
  search?: InputMaybe<Scalars['String']['input']>
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  stackHandle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  structureId?: InputMaybe<Scalars['Int']['input']>
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  unique?: InputMaybe<Scalars['Boolean']['input']>
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  withStructure?: InputMaybe<Scalars['Boolean']['input']>
}

export type Stacks_Category = CategoryInterface &
  ElementInterface & {
    __typename?: 'stacks_Category'
    /** Return a number of related elements for a field. */
    _count?: Maybe<Scalars['Int']['output']>
    /** The category’s ancestors, if the section is a structure. Accepts the same arguments as the `entries` query. */
    ancestors: Array<CategoryInterface>
    /** Whether the element is archived. */
    archived?: Maybe<Scalars['Boolean']['output']>
    /** The category’s children. */
    children: Array<CategoryInterface>
    /** The date the element was created. */
    dateCreated?: Maybe<Scalars['DateTime']['output']>
    /** The date the element was last updated. */
    dateUpdated?: Maybe<Scalars['DateTime']['output']>
    /** The category’s descendants, if the section is a structure. Accepts the same arguments as the `entries` query. */
    descendants: Array<CategoryInterface>
    /** Whether the element is enabled. */
    enabled?: Maybe<Scalars['Boolean']['output']>
    /** The handle of the group that contains the category. */
    groupHandle: Scalars['String']['output']
    /** The ID of the group that contains the category. */
    groupId: Scalars['Int']['output']
    /** The ID of the entity */
    id?: Maybe<Scalars['ID']['output']>
    /** The language of the site element is associated with. */
    language?: Maybe<Scalars['String']['output']>
    /** The element’s level within its structure */
    level?: Maybe<Scalars['Int']['output']>
    /** The element’s left position within its structure. */
    lft?: Maybe<Scalars['Int']['output']>
    /** The same element in other locales. */
    localized: Array<CategoryInterface>
    /** Returns the next element relative to this one, from a given set of criteria. */
    next?: Maybe<CategoryInterface>
    /** The category’s parent. */
    parent?: Maybe<CategoryInterface>
    /** Returns the previous element relative to this one, from a given set of criteria. */
    prev?: Maybe<CategoryInterface>
    /** The element’s right position within its structure. */
    rgt?: Maybe<Scalars['Int']['output']>
    /** The element’s structure’s root ID */
    root?: Maybe<Scalars['Int']['output']>
    /** The element’s search score, if the `search` parameter was used when querying for the element. */
    searchScore?: Maybe<Scalars['Int']['output']>
    /** The handle of the site the element is associated with. */
    siteHandle?: Maybe<Scalars['String']['output']>
    /** The ID of the site the element is associated with. */
    siteId?: Maybe<Scalars['Int']['output']>
    /** The unique identifier for an element-site relation. */
    siteSettingsId?: Maybe<Scalars['ID']['output']>
    /** The element’s slug. */
    slug?: Maybe<Scalars['String']['output']>
    stackHandle?: Maybe<Scalars['String']['output']>
    /** The element’s status. */
    status?: Maybe<Scalars['String']['output']>
    /** The element’s structure ID. */
    structureId?: Maybe<Scalars['Int']['output']>
    /** The element’s title. */
    title?: Maybe<Scalars['String']['output']>
    /** Whether the element has been soft-deleted. */
    trashed?: Maybe<Scalars['Boolean']['output']>
    /** The UID of the entity */
    uid?: Maybe<Scalars['String']['output']>
    /** The element’s URI. */
    uri?: Maybe<Scalars['String']['output']>
    /** The element’s full URL */
    url?: Maybe<Scalars['String']['output']>
  }

export type Stacks_Category_CountArgs = {
  field: Scalars['String']['input']
}

export type Stacks_CategoryAncestorsArgs = {
  ancestorDist?: InputMaybe<Scalars['Int']['input']>
  ancestorOf?: InputMaybe<Scalars['Int']['input']>
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  descendantDist?: InputMaybe<Scalars['Int']['input']>
  descendantOf?: InputMaybe<Scalars['Int']['input']>
  editable?: InputMaybe<Scalars['Boolean']['input']>
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>
  group?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  groupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  inReverse?: InputMaybe<Scalars['Boolean']['input']>
  leaves?: InputMaybe<Scalars['Boolean']['input']>
  level?: InputMaybe<Scalars['Int']['input']>
  limit?: InputMaybe<Scalars['Int']['input']>
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Scalars['String']['input']>
  positionedAfter?: InputMaybe<Scalars['Int']['input']>
  positionedBefore?: InputMaybe<Scalars['Int']['input']>
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>
  search?: InputMaybe<Scalars['String']['input']>
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  stackHandle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  structureId?: InputMaybe<Scalars['Int']['input']>
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  unique?: InputMaybe<Scalars['Boolean']['input']>
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  withStructure?: InputMaybe<Scalars['Boolean']['input']>
}

export type Stacks_CategoryChildrenArgs = {
  ancestorDist?: InputMaybe<Scalars['Int']['input']>
  ancestorOf?: InputMaybe<Scalars['Int']['input']>
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  descendantDist?: InputMaybe<Scalars['Int']['input']>
  descendantOf?: InputMaybe<Scalars['Int']['input']>
  editable?: InputMaybe<Scalars['Boolean']['input']>
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>
  group?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  groupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  inReverse?: InputMaybe<Scalars['Boolean']['input']>
  leaves?: InputMaybe<Scalars['Boolean']['input']>
  level?: InputMaybe<Scalars['Int']['input']>
  limit?: InputMaybe<Scalars['Int']['input']>
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Scalars['String']['input']>
  positionedAfter?: InputMaybe<Scalars['Int']['input']>
  positionedBefore?: InputMaybe<Scalars['Int']['input']>
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>
  search?: InputMaybe<Scalars['String']['input']>
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  stackHandle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  structureId?: InputMaybe<Scalars['Int']['input']>
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  unique?: InputMaybe<Scalars['Boolean']['input']>
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  withStructure?: InputMaybe<Scalars['Boolean']['input']>
}

export type Stacks_CategoryDescendantsArgs = {
  ancestorDist?: InputMaybe<Scalars['Int']['input']>
  ancestorOf?: InputMaybe<Scalars['Int']['input']>
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  descendantDist?: InputMaybe<Scalars['Int']['input']>
  descendantOf?: InputMaybe<Scalars['Int']['input']>
  editable?: InputMaybe<Scalars['Boolean']['input']>
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>
  group?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  groupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  inReverse?: InputMaybe<Scalars['Boolean']['input']>
  leaves?: InputMaybe<Scalars['Boolean']['input']>
  level?: InputMaybe<Scalars['Int']['input']>
  limit?: InputMaybe<Scalars['Int']['input']>
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Scalars['String']['input']>
  positionedAfter?: InputMaybe<Scalars['Int']['input']>
  positionedBefore?: InputMaybe<Scalars['Int']['input']>
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>
  search?: InputMaybe<Scalars['String']['input']>
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  stackHandle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  structureId?: InputMaybe<Scalars['Int']['input']>
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  unique?: InputMaybe<Scalars['Boolean']['input']>
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  withStructure?: InputMaybe<Scalars['Boolean']['input']>
}

export type Stacks_CategoryLocalizedArgs = {
  ancestorDist?: InputMaybe<Scalars['Int']['input']>
  ancestorOf?: InputMaybe<Scalars['Int']['input']>
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  descendantDist?: InputMaybe<Scalars['Int']['input']>
  descendantOf?: InputMaybe<Scalars['Int']['input']>
  editable?: InputMaybe<Scalars['Boolean']['input']>
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>
  group?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  groupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  inReverse?: InputMaybe<Scalars['Boolean']['input']>
  leaves?: InputMaybe<Scalars['Boolean']['input']>
  level?: InputMaybe<Scalars['Int']['input']>
  limit?: InputMaybe<Scalars['Int']['input']>
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Scalars['String']['input']>
  positionedAfter?: InputMaybe<Scalars['Int']['input']>
  positionedBefore?: InputMaybe<Scalars['Int']['input']>
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>
  search?: InputMaybe<Scalars['String']['input']>
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  stackHandle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  structureId?: InputMaybe<Scalars['Int']['input']>
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  unique?: InputMaybe<Scalars['Boolean']['input']>
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  withStructure?: InputMaybe<Scalars['Boolean']['input']>
}

export type Stacks_CategoryNextArgs = {
  ancestorDist?: InputMaybe<Scalars['Int']['input']>
  ancestorOf?: InputMaybe<Scalars['Int']['input']>
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  descendantDist?: InputMaybe<Scalars['Int']['input']>
  descendantOf?: InputMaybe<Scalars['Int']['input']>
  editable?: InputMaybe<Scalars['Boolean']['input']>
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>
  group?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  groupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  inReverse?: InputMaybe<Scalars['Boolean']['input']>
  leaves?: InputMaybe<Scalars['Boolean']['input']>
  level?: InputMaybe<Scalars['Int']['input']>
  limit?: InputMaybe<Scalars['Int']['input']>
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Scalars['String']['input']>
  positionedAfter?: InputMaybe<Scalars['Int']['input']>
  positionedBefore?: InputMaybe<Scalars['Int']['input']>
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>
  search?: InputMaybe<Scalars['String']['input']>
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  stackHandle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  structureId?: InputMaybe<Scalars['Int']['input']>
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  unique?: InputMaybe<Scalars['Boolean']['input']>
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  withStructure?: InputMaybe<Scalars['Boolean']['input']>
}

export type Stacks_CategoryParentArgs = {
  ancestorDist?: InputMaybe<Scalars['Int']['input']>
  ancestorOf?: InputMaybe<Scalars['Int']['input']>
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  descendantDist?: InputMaybe<Scalars['Int']['input']>
  descendantOf?: InputMaybe<Scalars['Int']['input']>
  editable?: InputMaybe<Scalars['Boolean']['input']>
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>
  group?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  groupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  inReverse?: InputMaybe<Scalars['Boolean']['input']>
  leaves?: InputMaybe<Scalars['Boolean']['input']>
  level?: InputMaybe<Scalars['Int']['input']>
  limit?: InputMaybe<Scalars['Int']['input']>
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Scalars['String']['input']>
  positionedAfter?: InputMaybe<Scalars['Int']['input']>
  positionedBefore?: InputMaybe<Scalars['Int']['input']>
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>
  search?: InputMaybe<Scalars['String']['input']>
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  stackHandle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  structureId?: InputMaybe<Scalars['Int']['input']>
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  unique?: InputMaybe<Scalars['Boolean']['input']>
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  withStructure?: InputMaybe<Scalars['Boolean']['input']>
}

export type Stacks_CategoryPrevArgs = {
  ancestorDist?: InputMaybe<Scalars['Int']['input']>
  ancestorOf?: InputMaybe<Scalars['Int']['input']>
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  descendantDist?: InputMaybe<Scalars['Int']['input']>
  descendantOf?: InputMaybe<Scalars['Int']['input']>
  editable?: InputMaybe<Scalars['Boolean']['input']>
  fixedOrder?: InputMaybe<Scalars['Boolean']['input']>
  group?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  groupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  hasDescendants?: InputMaybe<Scalars['Boolean']['input']>
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  inReverse?: InputMaybe<Scalars['Boolean']['input']>
  leaves?: InputMaybe<Scalars['Boolean']['input']>
  level?: InputMaybe<Scalars['Int']['input']>
  limit?: InputMaybe<Scalars['Int']['input']>
  nextSiblingOf?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Scalars['String']['input']>
  positionedAfter?: InputMaybe<Scalars['Int']['input']>
  positionedBefore?: InputMaybe<Scalars['Int']['input']>
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  prevSiblingOf?: InputMaybe<Scalars['Int']['input']>
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  relatedToAll?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>
  search?: InputMaybe<Scalars['String']['input']>
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  siteSettingsId?: InputMaybe<
    Array<InputMaybe<Scalars['QueryArgument']['input']>>
  >
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  stackHandle?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>
  structureId?: InputMaybe<Scalars['Int']['input']>
  title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  unique?: InputMaybe<Scalars['Boolean']['input']>
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  withStructure?: InputMaybe<Scalars['Boolean']['input']>
}

export type ProjectEntryStackCategoryFragmentFragment = {
  __typename?: 'stacks_Category'
  id?: string | null
  stackHandle?: string | null
  title?: string | null
} & { ' $fragmentName'?: 'ProjectEntryStackCategoryFragmentFragment' }

export type ProjectEntryFragmentFragment = {
  __typename?: 'projects_project_Entry'
  id?: string | null
  title?: string | null
  slug?: string | null
  projectFeatured?: boolean | null
  projectDescription?: string | null
  projectHeaderImage: Array<{
    __typename?: 'files_Asset'
    url?: string | null
  } | null>
  stacks: Array<
    | ({ __typename?: 'stacks_Category' } & {
        ' $fragmentRefs'?: {
          ProjectEntryStackCategoryFragmentFragment: ProjectEntryStackCategoryFragmentFragment
        }
      })
    | null
  >
} & { ' $fragmentName'?: 'ProjectEntryFragmentFragment' }

export type ProjectDetailFragmentFragment = {
  __typename?: 'projects_project_Entry'
  title?: string | null
  slug?: string | null
  dateCreated?: any | null
  dateUpdated?: any | null
  projectInformation?: string | null
  projectDescription?: string | null
  projectLiveDemoLink?: string | null
  projectSourcecodeRepositoryLink?: string | null
  projectHeaderImage: Array<{
    __typename?: 'files_Asset'
    id?: string | null
    url?: string | null
  } | null>
  stacks: Array<
    | ({ __typename?: 'stacks_Category' } & {
        ' $fragmentRefs'?: {
          ProjectEntryStackCategoryFragmentFragment: ProjectEntryStackCategoryFragmentFragment
        }
      })
    | null
  >
} & { ' $fragmentName'?: 'ProjectDetailFragmentFragment' }

export type GetProjectsQueryVariables = Exact<{ [key: string]: never }>

export type GetProjectsQuery = {
  __typename?: 'Query'
  projectsEntries?: Array<
    | ({ __typename?: 'projects_project_Entry' } & {
        ' $fragmentRefs'?: {
          ProjectEntryFragmentFragment: ProjectEntryFragmentFragment
        }
      })
    | null
  > | null
}

export type GetProjectDetailQueryVariables = Exact<{
  slug?: InputMaybe<
    | Array<InputMaybe<Scalars['String']['input']>>
    | InputMaybe<Scalars['String']['input']>
  >
}>

export type GetProjectDetailQuery = {
  __typename?: 'Query'
  projectsEntries?: Array<
    | ({ __typename?: 'projects_project_Entry' } & {
        ' $fragmentRefs'?: {
          ProjectDetailFragmentFragment: ProjectDetailFragmentFragment
        }
      })
    | null
  > | null
}

export const ProjectEntryStackCategoryFragmentFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ProjectEntryStackCategoryFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'stacks_Category' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'stackHandle' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ProjectEntryStackCategoryFragmentFragment, unknown>
export const ProjectEntryFragmentFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ProjectEntryFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'projects_project_Entry' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
          { kind: 'Field', name: { kind: 'Name', value: 'projectFeatured' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'projectDescription' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'projectHeaderImage' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'url' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'stacks' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: {
                    kind: 'Name',
                    value: 'ProjectEntryStackCategoryFragment',
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ProjectEntryStackCategoryFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'stacks_Category' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'stackHandle' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ProjectEntryFragmentFragment, unknown>
export const ProjectDetailFragmentFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ProjectDetailFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'projects_project_Entry' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
          { kind: 'Field', name: { kind: 'Name', value: 'dateCreated' } },
          { kind: 'Field', name: { kind: 'Name', value: 'dateUpdated' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'projectInformation' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'projectDescription' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'projectLiveDemoLink' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'projectSourcecodeRepositoryLink' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'projectHeaderImage' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'url' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'stacks' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: {
                    kind: 'Name',
                    value: 'ProjectEntryStackCategoryFragment',
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ProjectEntryStackCategoryFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'stacks_Category' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'stackHandle' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ProjectDetailFragmentFragment, unknown>
export const GetProjectsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetProjects' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'projectsEntries' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'ProjectEntryFragment' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ProjectEntryStackCategoryFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'stacks_Category' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'stackHandle' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ProjectEntryFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'projects_project_Entry' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
          { kind: 'Field', name: { kind: 'Name', value: 'projectFeatured' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'projectDescription' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'projectHeaderImage' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'url' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'stacks' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: {
                    kind: 'Name',
                    value: 'ProjectEntryStackCategoryFragment',
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetProjectsQuery, GetProjectsQueryVariables>
export const GetProjectDetailDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetProjectDetail' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'slug' } },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'projectsEntries' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'slug' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'slug' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'ProjectDetailFragment' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ProjectEntryStackCategoryFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'stacks_Category' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'stackHandle' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ProjectDetailFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'projects_project_Entry' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
          { kind: 'Field', name: { kind: 'Name', value: 'dateCreated' } },
          { kind: 'Field', name: { kind: 'Name', value: 'dateUpdated' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'projectInformation' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'projectDescription' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'projectLiveDemoLink' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'projectSourcecodeRepositoryLink' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'projectHeaderImage' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'url' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'stacks' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: {
                    kind: 'Name',
                    value: 'ProjectEntryStackCategoryFragment',
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetProjectDetailQuery,
  GetProjectDetailQueryVariables
>
