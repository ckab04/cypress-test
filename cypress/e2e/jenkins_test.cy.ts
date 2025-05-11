describe("Test Jenkins", () => {
  it("passes", () => {
    cy.visit("http://localhost:4200/");
    cy.log("Ceci est un simple test de cypress et Jenkins");
    cy.get("h1").contains("Hello");
  });
});
