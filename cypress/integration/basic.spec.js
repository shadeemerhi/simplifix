context("Basic", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("renders the page", () => {
    cy.get(".makeStyles-logo-60").should("have.text", "SimpliFix");
  });
});
