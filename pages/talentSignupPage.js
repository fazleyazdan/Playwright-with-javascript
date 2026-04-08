// talentSignupPage.js
// Page Object Model for Talent Signup
const { expect } = require('@playwright/test');

class TalentSignupPage {
  constructor(page) {
    this.page = page;
  }

  // Navigation Methods
  async navigateToHome() {
    await this.page.goto('https://staging-app.hireboard.co/');
    await this.page.waitForLoadState('networkidle');
  }

  async clickTalentSignupLink() {
    await this.page.getByRole('link', { name: 'Talent' }).click();
  }

  // STEP 1: Signup Page Verification
  async verifyWelcomeHeading() {
    await expect(this.page.getByRole('heading', { name: 'Welcome to Hireboard' })).toBeVisible({ timeout: 10000 });
  }

  async verifyEmailInputVisible() {
    const emailInput = this.page.getByRole('textbox', { name: 'Type your email...' });
    await expect(emailInput).toBeVisible();
  }

  async verifyProceedButtonVisible() {
    const proceedButton = this.page.getByRole('button', { name: 'Proceed With This Email' });
    await expect(proceedButton).toBeVisible();
  }

  // STEP 2: Email Entry
  async enterEmail(email) {
    const emailInput = this.page.getByRole('textbox', { name: 'Type your email...' });
    await emailInput.fill(email);
  }

  async clickProceedWithEmail() {
    const proceedButton = this.page.getByRole('button', { name: 'Proceed With This Email' });
    await proceedButton.click();
  }

  async verifyFirstNameFieldVisible() {
    const firstNameInput = this.page.getByRole('textbox', { name: 'Type your first name...' });
    await expect(firstNameInput).toBeVisible({ timeout: 10000 });
  }

  // STEP 3: Account Creation - Personal Info
  async enterFirstName(firstName) {
    const firstNameInput = this.page.getByRole('textbox', { name: 'Type your first name...' });
    await firstNameInput.fill(firstName);
  }

  async enterLastName(lastName) {
    const lastNameInput = this.page.getByRole('textbox', { name: 'Type your last name...' });
    await lastNameInput.fill(lastName);
  }

  async enterPhoneNumber(phone) {
    const phoneInput = this.page.getByRole('textbox', { name: 'Type your phone number...' });
    await phoneInput.fill(phone);
  }

  async enterExpectedSalary(salary) {
    const salaryInput = this.page.getByRole('spinbutton', { name: 'Your expected salary in USDs' });
    await salaryInput.fill(salary);
  }

  async enterPassword(password) {
    const passwordInput = this.page.getByRole('textbox', { name: 'Type your password...' });
    await passwordInput.fill(password);
  }

  async enterConfirmPassword(password) {
    const confirmPasswordInput = this.page.getByRole('textbox', { name: 'Confirm your password...' });
    await confirmPasswordInput.fill(password);
  }

  async clickCreateAccountButton() {
    const createAccountButton = this.page.getByRole('button', { name: 'Create Account' });
    await createAccountButton.click();
  }

  async verifyOnboardingScreenLoaded() {
    await expect(this.page.getByRole('heading', { name: 'Hurray! You are onboard.' })).toBeVisible({ timeout: 10000 });
  }

  // STEP 4: Onboarding Profile
  async verifyCountryFieldVisible() {
    const countryCombo = this.page.getByRole('combobox');
    await expect(countryCombo).toBeVisible();
  }

  async waitForOnboardingFormToLoad() {
    await this.page.waitForLoadState('networkidle');
  }

  async enterRoleDescription(role) {
    const bioFields = this.page.locator('textarea, input[placeholder*="role"], input[placeholder*="describe"]');
    const bioFieldCount = await bioFields.count();
    
    if (bioFieldCount > 0) {
      await bioFields.first().fill(role);
      return true;
    }
    return false;
  }

  async enterAddress(address) {
    const addressInput = this.page.locator('input[placeholder*="address"], input[placeholder*="Address"]').first();
    if (await addressInput.isVisible().catch(() => false)) {
      await addressInput.fill(address);
      return true;
    }
    return false;
  }

  async enterCity(city) {
    const cityInput = this.page.locator('input[placeholder*="city"], input[placeholder*="City"]').first();
    if (await cityInput.isVisible().catch(() => false)) {
      await cityInput.fill(city);
      return true;
    }
    return false;
  }

  async enterPostalCode(postalCode) {
    const postalInput = this.page.locator('input[placeholder*="postal"], input[placeholder*="Postal"], input[placeholder*="zip"], input[placeholder*="Zip"]').first();
    if (await postalInput.isVisible().catch(() => false)) {
      await postalInput.fill(postalCode);
      return true;
    }
    return false;
  }

  async clickSaveButton() {
    const saveButton = this.page.getByRole('button', { name: 'Save' });
    if (await saveButton.isVisible().catch(() => false)) {
      await saveButton.click();
      await this.page.waitForLoadState('networkidle');
      return true;
    }
    return false;
  }

  // Helper Methods
  async completeSignupWithData(testData) {
    // STEP 1: Navigate and verify signup page
    console.log('STEP 1: Navigate to signup page');
    await this.navigateToHome();
    await this.clickTalentSignupLink();
    await this.verifyWelcomeHeading();
    await this.verifyEmailInputVisible();
    await this.verifyProceedButtonVisible();
    console.log('✓ On signup page with Welcome heading visible');

    // STEP 2: Enter email and proceed
    console.log('\nSTEP 2: Enter email and proceed');
    await this.enterEmail(testData.email);
    console.log(`✓ Entered email: ${testData.email}`);
    await this.clickProceedWithEmail();
    await this.verifyFirstNameFieldVisible();
    console.log('✓ First name field visible - email accepted');

    // STEP 3: Fill in personal info and create account
    console.log('\nSTEP 3: Fill in personal info and create account');
    await this.enterFirstName(testData.firstName);
    console.log(`✓ Entered first name: ${testData.firstName}`);
    await this.enterLastName(testData.lastName);
    console.log(`✓ Entered last name: ${testData.lastName}`);
    await this.enterPhoneNumber(testData.phone);
    console.log(`✓ Entered phone: ${testData.phone}`);
    await this.enterExpectedSalary(testData.salary);
    console.log(`✓ Entered salary: ${testData.salary}`);
    await this.enterPassword(testData.password);
    console.log(`✓ Entered password`);
    await this.enterConfirmPassword(testData.password);
    console.log(`✓ Entered confirm password`);
    await this.clickCreateAccountButton();
    console.log('✓ Clicked Create Account button');
    await this.verifyOnboardingScreenLoaded();
    console.log('✓ Onboarding screen loaded - account created');

    // STEP 4: Complete onboarding profile
    console.log('\nSTEP 4: Complete talent onboarding profile');
    await this.verifyCountryFieldVisible();
    console.log(`✓ Country field visible`);
    await this.waitForOnboardingFormToLoad();
    
    if (await this.enterRoleDescription(testData.role)) {
      console.log(`✓ Entered role: ${testData.role}`);
    }
    if (await this.enterAddress(testData.address)) {
      console.log(`✓ Entered address: ${testData.address}`);
    }
    if (await this.enterCity(testData.city)) {
      console.log(`✓ Entered city: ${testData.city}`);
    }
    if (await this.enterPostalCode(testData.postalCode)) {
      console.log(`✓ Entered postal code: ${testData.postalCode}`);
    }
    if (await this.clickSaveButton()) {
      console.log('✓ Clicked Save button');
    }

    console.log('\n✅ Talent registration completed successfully!');
  }
}

module.exports = TalentSignupPage;
