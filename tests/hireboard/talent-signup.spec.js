// talent-signup.spec.js
// Playwright test for Talent registration on Hireboard staging app
const { test, expect } = require('@playwright/test');
const TalentSignupPage = require('../../pages/talentSignupPage');
const { getTalentSignupTestData } = require('../../testdata/hireboard/talentSignupData');

test.describe('Hireboard - Talent Registration', () => {
  let talentSignupPage;

  test.beforeEach(async ({ page }) => {
    talentSignupPage = new TalentSignupPage(page);
  });

  test('should register as a talent and complete onboarding', async ({ page }) => {
    // Get test data with unique email
    const testData = getTalentSignupTestData('valid');

    // Initialize page object
    talentSignupPage = new TalentSignupPage(page);

    // Complete the entire signup flow using POM
    await talentSignupPage.completeSignupWithData(testData);
  });

  test.skip('register talent using test data in test case', async ({ page }) => {
    // Generate unique email with timestamp
    const timestamp = Date.now();
    const testEmail = `talent_test_${timestamp}@mailinator.com`;
    const testData = {
      email: testEmail,
      firstName: 'Test',
      lastName: 'Talent',
      phone: '5550001234',
      salary: '60000',
      password: 'Test@1234!',
      country: 'United States',
      role: 'Software Engineer',
      address: '123 Main Street',
      city: 'New York',
      postalCode: '10001',
    };

    // Initialize page object
    talentSignupPage = new TalentSignupPage(page);

    // Complete the entire signup flow using POM
    await talentSignupPage.completeSignupWithData(testData);
  });

});
