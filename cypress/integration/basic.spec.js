context("Basic", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("Navigates to gig", () => {
    cy.get("[alt=Plumbing]").first().click();

    cy.wait(100);

    cy.get("[alt='Fridge repair']").click();

    cy.get(".MuiButton-label").contains("Book").click();
  });

  it("Searches for Plumber", () => {
    cy.get("input")
      .should("have.attr", "placeholder", "Search…")
      .first()
      .click()
      .type("Plumber");

    cy.get("button").first().click();
  });
});
