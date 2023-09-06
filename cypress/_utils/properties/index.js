const properties = {
    baseUrl: Cypress.config().baseUrl,
    userEmail: Cypress.env("USEREMAIL") || "",
    password: Cypress.env("PASSWORD") || ""
  };
  
  export default properties;