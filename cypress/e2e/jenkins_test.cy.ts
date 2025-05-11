describe("Test Jenkins", () => {
  it("Premier test", () => {
    //cy.visit("http://localhost:4200/");
    cy.log("Ceci est un simple test de cypress et Jenkins");
    //cy.get("h1").contains("Hello");
  });

  it("Second test", () => {
    cy.visit("http://www.google.com");
    cy.log("Ceci est le second test");
    //cy.get("h1").contains("Hello");
  });
});
