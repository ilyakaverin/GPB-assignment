import { ACTIONTYPE } from "./reducer"
import { License } from "./models/licence"

export interface NEW_LICENSE {
  typeOfDocument?: string
  documentId?: string
  activity?: string
  issued?: string
  dateOfIssue?: string
  expiresAt?: string
}
interface SURVEY_INTERFACE {
  [key: string]: boolean
}
type FILL_MODES = "filling" | "invalid" | "approved" | "initialized"
export type StoreComponent = USER_COMMON_DATA | NEW_LICENSE | USER_BUSINESS_DATA

export interface USER_COMMON_DATA {
  [key: string]: string
}
export interface FILL_STATE_INTERFACE {
  data: FILL_MODES
  businessInfo: FILL_MODES
  currentLicense: FILL_MODES
  survey: FILL_MODES
}
export interface USER_STATE {
  hasLicense: boolean
  licenseMode: string
  permanent: boolean
  currentEditingLicenseId: number
  isModalOpened: boolean
  fillState: FILL_STATE_INTERFACE
}
export interface USER_BUSINESS_DATA {
  [key: string]: string
}

export interface StoreInterface {
  username: string
  data: USER_COMMON_DATA
  state: USER_STATE
  businessInfo: USER_BUSINESS_DATA
  currentLicense: NEW_LICENSE
  licenses: License[]
  survey: SURVEY_INTERFACE
  [datakey: string]: any
}
export interface ContextInterface {
  store: StoreInterface
  dispatch: React.Dispatch<ACTIONTYPE>
}
