// Storage variable names
export const STOR_VISION_ENABLED = "crypto_vision_enabled"
export const STOR_COIN_DATA = "crypto_vision_coin_data"
export const STOR_NEXT_LOAD_TIMESTAMP = "crypto_vision_next_load_timestamp"
export const STOR_DATA_PAGE_INDEX = "crypto_vision_data_page_index"

// CSS 
export const CSS_ACTIVE = "active"
export const CSS_ACTIVATION_BUTTON_ID = "crypto_vision_activation_button"
export const CSS_ACTIVATION_BUTTON_TEXT_ID = "crypto_vision_activation_button_text"
export const CSS_DONATION_BOX_ID = "crypto_vision_donation_box"
export const CSS_DONATION_BUTTON_ID = "crypto_vision_donation_button"
export const CSS_DONATION_LINK_CASH_ID = "crypto_vision_donation_link_cash"
export const CSS_DONATION_LINK_STRIKE_ID = "crypto_vision_donation_link_strike"
export const CSS_DONATION_LINK_ADDRESS_ID = "crypto_vision_donation_link_address"
export const CSS_ACTIVATED_CLASS = "crypto_vision_activated"
export const CSS_TOOLTIP_CLASS = "crypto_vision_tooltip"
export const CSS_COPIED_CLASS = "crypto_vision_copied"
export const CSS_OPEN_CLASS = "open"

// Text Presets
export const TEXT_CRYPTO_VISION_ACTIVATED = "Crypto Vision Activated"
export const TEXT_CRYPTO_VISION_DEACTIVATED = "Crypto Vision Deactivated"

// Highlighter Settings
export let BANNED_TICKERS = [
    "the"
]
export let ELEMENTS_PROHIBITED_TO_OVERRIDE = [
    "<img",
    "<a"
]

// Coin Data Loader Settings
// This is in milliseconds
export const WAIT_PERIOD = 300000
export const COIN_DATA_LOAD_STAGGER_PERIOD = 20000
export const COIN_DATA_PAGES = 4
