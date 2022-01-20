describe("My First Test", () => {
  it("開いた直後はカウンタは0", () => {
    cy.visit("localhost:8080/");
    cy.get("[test-dataid='display']").should("have.text", 0);
  });
  it("0より少なくはできない", () => {
    cy.visit("localhost:8080/");
    cy.get("[test-dataid='minusButton']").click();
    cy.get("[test-dataid='display']").should("have.text", 0);
  });
  it("10より多くはできない", () => {
    cy.visit("localhost:8080/");
    for (let index = 0; index < 15; index++) {
      cy.get("[test-dataid='plusButton']").click();
    }
    cy.get("[test-dataid='display']").should("have.text", 10);
  });
});
