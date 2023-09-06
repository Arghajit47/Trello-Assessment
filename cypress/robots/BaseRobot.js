export class BaseEyes {
  seesUrl(url) {
    cy.url({timeout: 120000}).should("contain", url);
  }
  seesTextWithId(id, text) {
    cy.get(`#${id}`, {timeout: 120000}).should("have.text", text);
    return this;
  }

  doesNotseesTextWithId(id, text) {
    cy.get(`#${id}`, {timeout: 120000}).should("not.have.text", text);
    return this;
  }

  seesIdVisible(id) {
    cy.get(`#${id}`, {timeout: 120000}).should("be.visible");
    return this;
  }

  doesNotseesIdVisible(id) {
    cy.get(`#${id}`, {timeout: 120000}).should("not.be.visible");
    return this;
  }

  seesTextWithClass(domClass, text) {
    cy.get(`.${domClass}`, {timeout: 120000}).should("have.text", text);
    return this;
  }

  seesDomVisibleWithCustomMatcher(domlabel, matcher) {
    cy.get(`[${domlabel}=${matcher}]`, {timeout: 120000}).should("be.visible");
    return this;
  }

  seesDomVisible(domlabel) {
    cy.get(domlabel, {timeout: 120000}).should("be.visible");
    return this;
  }

  seesDomContainTextVisible(dom, text) {
    cy.get(dom, {timeout: 120000}).should("eq", text).should("be.visible");
    return this;
  }

  seesTextInChildDom(parentDom, childDom, text) {
    cy.get(`${parentDom} ${childDom}`, {timeout: 120000}).should("contain", text);
    return this;
  }

  seesDomTextWithIndex(dom, index, text) {
    cy.get(dom, {timeout: 120000}).eq(index).should("have.text", text);
    return this;
  }

  seesDomWithIndex(dom, index) {
    cy.get(dom, {timeout: 120000}).eq(index).should("be.visible");
    return this;
  }

  hasLengthForDomWithClass(domClass, length) {
    cy.get(`.${domClass}`, {timeout: 120000}).should("have.length", length);
    return this;
  }

  hasLengthForDom(parentDomClass, childDom, length) {
    cy.get(parentDomClass, {timeout: 120000}).find(childDom).should("have.length", length);
    return this;
  }

  seesDomContainText(dom, text) {
    cy.get(dom, {timeout: 120000}).should("contain", text);
    return this;
  }

  seesDomContainTextValue(dom, value) {
    cy.get(dom, {timeout: 120000}).contains(value);
    return this;
  }
  seesDomShouldContainText(dom, text) {
    cy.get(dom, {timeout: 120000}).should("contain.text", text);
  }

  seesDomContainTextWithIndex(dom, index, text) {
    cy.get(dom, {timeout: 120000}).eq(index).should("contain", text);
    return this;
  }

  doesNotseesDom(dom) {
    cy.get(dom, {timeout: 120000}).should("not.be.visible");
    return this;
  }

  seesTextInAgGridCell(rowId, colId, text) {
    cy.get(`[row-id=${rowId}]`, {timeout: 120000})
      .find(`[col-id=${colId}]`)
      .should("have.text", text);
    return this;
  }

  seesAgGridColumnSelected(rowId, colId) {
    cy.get(`[row-id=${rowId}]`, {timeout: 120000})
      .find(`[col-id=${colId}]`)
      .should("have.class", "ag-cell-range-selected");
    return this;
  }

  seesAgGridRowSelected(rowIndexId) {
    cy.get(`[aria-rowindex=${rowIndexId}]`, {timeout: 120000}).should(
      "have.class",
      "ag-row-selected"
    );
    return this;
  }

  seesMinimumNumberOfElementsInDom(dom, childDomClass, minimumLength) {
    cy.get(dom, {timeout: 120000})
      .find(`.${childDomClass}`)
      .should("have.length.greaterThan", minimumLength);
    return this;
  }

  seesNumberOfElementsInDom(dom, childDomClass, length) {
    cy.get(dom, {timeout: 120000}).find(`.${childDomClass}`).should("have.length", length);
    return this;
  }

  seesPathNameInUrl(path) {
    cy.location("pathname").should("eq", path);
    return this;
  }

  seesDomDisabled(dom) {
    cy.get(dom, {timeout: 120000}).should("be.disabled");
    return this;
  }

  seesDomContainTextDisabled(dom, text) {
    cy.get(dom, {timeout: 120000}).should("contain", text).should("be.disabled");
    return this;
  }

  seesDomContainTextEnabled(dom, text) {
    cy.get(dom, {timeout: 120000}).should("contain", text).should("not.be.disabled");
    return this;
  }

  seesDomEnabled(dom) {
    cy.get(dom, {timeout: 120000}).should("not.be.disabled");
    return this;
  }

  seesWebTitle(text) {
    cy.title({timeout: 120000}).should("eq", text);
  }

  seesDomElementWithXpath(dom) {
    cy.xpath(dom, {timeout: 120000}).should("be.visible");
    return this;
  }
  seesDomElementXpathWithIndex(dom, index) {
    cy.xpath(dom, {timeout: 120000}).eq(index).should("be.visible");
    return this;
  }

}

export class BaseHands {
  clickOnId(id) {
    cy.get(`#${id}`, {timeout: 120000}).click({timeout: 120000});
    return this;
  }

  doubleClickOnId(id) {
    cy.get(`#${id}`, {timeout: 120000}).dblclick({timeout: 120000});
    return this;
  }

  clickOnDomElement(dom) {
    cy.get(dom, {timeout: 120000}).click({ force: true },{timeout: 120000});
    return this;
  }
  doubleClickOnDomElement(dom) {
    cy.get(dom, {timeout: 120000}).dblclick({ force: true },{timeout: 120000});
    return this;
  }

  clickOnDomElementWithXpath(dom) {
    cy.xpath(dom, {timeout: 120000}).click({ force: true },{timeout: 120000});
    return this;
  }
  clickOnDomElementXpathWithIndex(dom, index) {
    cy.xpath(dom, {timeout: 120000}).eq(index).click({ force: true },{timeout: 120000});
    return this;
  }

  clickOnDomContainText(dom, text) {
    cy.get(dom, {timeout: 120000}).should("contain", text).click({timeout: 120000});
    return this;
  }

  clickOnDomElementWithIndex(dom, index) {
    cy.get(dom, {timeout: 120000}).eq(index).click({ force: true },{timeout: 120000});
    return this;
  }

  typeTextonDom(dom, text) {
    cy.get(dom, {timeout: 120000}).type(text, { force: true },{timeout: 120000});
    return this;
  }

  typeTextonId(id, text) {
    cy.get(`#${id}`, {timeout: 120000}).type(text, { force: true }, {timeout: 120000});
    return this;
  }

  clickOnChildDom(parentId, dom, index) {
    cy.get(`#${parentId} ${dom}`, {timeout: 120000}).eq(index).click({timeout: 120000});
    return this;
  }

  ClickOnTextWithClassAndIndex(domClass, index) {
    cy.get(`[class=${domClass}]`, {timeout: 120000}).eq(index).click({timeout: 120000});
    return this;
  }

  scrollToWithClassName(domClass, direction) {
    cy.get(`.${domClass}`, {timeout: 120000}).scrollTo(direction, {timeout: 120000});
    return this;
  }

  clearDomElement(dom) {
    cy.get(dom, {timeout: 120000}).clear({ force: true }, {timeout: 120000});
    return this;
  }

  wait(milliSecs) {
    cy.wait(milliSecs);
    return this;
  }
  clickOnDomContainTextWithIndex(dom, index, text) {
    cy.get(dom, {timeout: 120000}).eq(index).should("contain", text).click({timeout: 120000});
    return this;
  }
  clickOnDomContainTextWithXpath(text, xpath) {
    cy.xpath(xpath, {timeout: 120000}).should("contain", text).click({timeout: 120000});
    return this;
  }
  selectDomElementFromDropdown(dom, text) {
    cy.get(dom, {timeout: 120000}).select(text).should("have.value", text);
  }
  getElementCoordinate(element) {
    cy.get(element, {timeout: 120000}).then(($card) => {
      const rect = $card[0].getBoundingClientRect();
      const x = rect.left + window.pageXOffset;
      const y = rect.top + window.pageYOffset;
      cy.log(`Card Coordinates: x = ${x}, y = ${y}`);
  });

  }
}

export class BaseDependencies {
  visitUrl(url) {
    cy.visit(`${url}`, { timeout: 120000 });
    return this;
  }
}
