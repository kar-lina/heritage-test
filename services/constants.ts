export const api = {
  /**
   * Endpoint for logging in a user.
   */
  LOGIN: 'auth/login',

  /**
   * Endpoint for signing up a user.
   */
  SIGN_UP: 'auth/sign-up',

  /**
   * Endpoint for getting the logged in user.
   */
  GET_USER: 'auth',

  /**
   * Endpoint for getting company heading data.
   */
  COMPANY_HEADING: 'company/heading',

  /**
   * Endpoint for getting company info data (address, working hours, etc).
   */
  COMPANY_INFO: 'company/info',

  /**
   * Endpoint for getting company reviews data.
   */
  COMPANY_REVIEWS: 'company/reviews',

  /**
   * Endpoint for refreshing a user's token.
   */
  REFRESH_TOKEN: 'auth/refresh-token',

  /**
   * Endpoint for getting products data.
   */
  PRODUCTS: 'products',

  /**
   * Endpoint for getting product categories data.
   */
  CATEGORIES: 'products/categories',

  /**
   * Endpoint for getting agents data.
   */
  AGENTS: 'agents'
}
