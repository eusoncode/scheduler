describe("Appointment", () => {
  beforeEach(() => {    
    cy.request("GET", "/api/debug/reset");
  });
  it("should book an interview", () => {
    cy.visit("/")
    cy.contains("Monday")
  });
  it("should click on the Add button in the second appointment", () => {
    cy
      .get("[alt=Add]")
      .first()
      .click();
  });
  it("should enter their name", () => {
    cy
      .get("[data-testid=student-name-input]")
      .type("Lydia Miller-Jones");
  });
  it("should choose an interviewer", () => {
    cy
      .get("[alt='Sylvia Palmer']")
      .click();
  });
  it("should click the save button", () => {
    cy
      .contains("Save")
      .click();
  });
  it("should show student and interviewer names", () => {
    cy.contains(".appointment__card--show", "Lydia Miller-Jones");
    cy.contains(".appointment__card--show", "Sylvia Palmer");
  });
});