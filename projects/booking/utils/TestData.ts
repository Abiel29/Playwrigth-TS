export const TestUsers = {
  guest: {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '+1234567890',
    address: '123 Test Street',
    city: 'New York',
    country: 'US',
  },
  registered: {
    email: 'user@phptravels.com',
    password: 'demouser',
  },
};

export const SearchData = {
  destinations: {
    dubai: 'Dubai',
    london: 'London',
    paris: 'Paris',
    singapore: 'Singapore',
    tokyo: 'Tokyo',
  },
  dates: {
    getCheckIn: () => {
      const date = new Date();
      date.setDate(date.getDate() + 7);
      return date.toISOString().split('T')[0];
    },
    getCheckOut: () => {
      const date = new Date();
      date.setDate(date.getDate() + 10);
      return date.toISOString().split('T')[0];
    },
  },
  guests: {
    single: { adults: 1, children: 0 },
    couple: { adults: 2, children: 0 },
    family: { adults: 2, children: 2 },
  },
};

export const ErrorMessages = {
  destinationRequired: 'Please select a destination',
  dateRequired: 'Please select dates',
  invalidEmail: 'Please enter a valid email',
  phoneRequired: 'Phone number is required',
  termsRequired: 'Please accept terms and conditions',
};

export const Filters = {
  starRatings: [3, 4, 5],
  priceRanges: {
    budget: { min: 0, max: 100 },
    midRange: { min: 100, max: 300 },
    luxury: { min: 300, max: 1000 },
  },
  sortOptions: ['price_asc', 'price_desc', 'rating', 'popularity'],
};
