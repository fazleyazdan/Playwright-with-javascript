// talentSignupData.js
// Test data for Hireboard Talent Signup flows

const validTalentSignupData = {
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

const invalidTalentSignupData = {
  firstName: '',
  lastName: '',
  phone: 'abc123',
  salary: 'invalid',
  password: 'weak',
  role: '',
  address: '',
  city: '',
  postalCode: '',
};

const getTalentSignupTestData = (dataType = 'valid') => {
  const baseData = dataType === 'valid' ? validTalentSignupData : invalidTalentSignupData;
  return {
    email: `talent_test_${Date.now()}@mailinator.com`,
    ...baseData,
  };
};

module.exports = {
  validTalentSignupData,
  invalidTalentSignupData,
  getTalentSignupTestData,
};
