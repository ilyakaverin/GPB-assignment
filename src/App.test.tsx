import { License } from "./models/licence";

test("isCorrectClass", () => {
  const mock = {
    typeOfDocument: "Свидетельство СРО",
    documentId: " № ЛО-40-01-001077",
    activity:
      "Деятельности по монтажу, техническому обслуживанию и ремонту средств обеспечения пожарной безопасности зданий и сооружений.",
    issued: "Комиссией по выдаче лицензий",
    dateOfIssue: "2022-07-19",
    expiresAt: "2022-07-21",
  };
  const updated = {
    typeOfDocument: "Еще одно свидетельство",
    documentId: " № ЛО-40-01-001077",
    activity:
      "Деятельности по монтажу, техническому обслуживанию и ремонту средств обеспечения пожарной безопасности зданий и сооружений.",
    issued: "Комиссией по выдаче лицензий",
    dateOfIssue: "2022-07-19",
    expiresAt: "2022-07-21",
  }

  const class1 = new License(mock);
  class1.update(updated);

  expect(class1 instanceof License).toBeTruthy;
});
