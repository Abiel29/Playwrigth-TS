import { authenticatedTest as test, expect } from '../fixtures/test-fixtures';
import { EmployeeData } from '../utils/TestData';

test.describe('Employee Management Tests', () => {
  test.beforeEach(async ({ authenticatedPage, dashboardPage }) => {
    await dashboardPage.navigateToPIM();
  });

  test('should display employee list', async ({ employeeListPage }) => {
    await expect(employeeListPage.employeeTable).toBeVisible();
    await expect(employeeListPage.addEmployeeButton).toBeVisible();
  });

  test('should navigate to add employee page', async ({ page, employeeListPage }) => {
    await employeeListPage.clickAddEmployee();
    await expect(page).toHaveURL(/pim\/addEmployee/);
  });

  test('should add new employee', async ({ page, employeeListPage, addEmployeePage }) => {
    await employeeListPage.clickAddEmployee();
    
    const employee = EmployeeData.newEmployee();
    await addEmployeePage.addEmployee(employee);
    
    await expect(page).toHaveURL(/pim\/viewPersonalDetails/);
  });

  test('should show validation error for empty first name', async ({ employeeListPage, addEmployeePage }) => {
    await employeeListPage.clickAddEmployee();
    
    await addEmployeePage.fillEmployeeDetails({
      firstName: '',
      lastName: 'Test',
    });
    await addEmployeePage.clickSave();
    
    const errors = await addEmployeePage.getErrorMessages();
    expect(errors.length).toBeGreaterThan(0);
  });

  test('should show validation error for empty last name', async ({ employeeListPage, addEmployeePage }) => {
    await employeeListPage.clickAddEmployee();
    
    await addEmployeePage.fillEmployeeDetails({
      firstName: 'Test',
      lastName: '',
    });
    await addEmployeePage.clickSave();
    
    const errors = await addEmployeePage.getErrorMessages();
    expect(errors.length).toBeGreaterThan(0);
  });

  test('should cancel adding employee', async ({ page, employeeListPage, addEmployeePage }) => {
    await employeeListPage.clickAddEmployee();
    await addEmployeePage.clickCancel();
    
    await expect(page).toHaveURL(/pim\/viewEmployeeList/);
  });

  test('should search employee by ID', async ({ employeeListPage }) => {
    await employeeListPage.searchById('0001');
    await employeeListPage.clickSearch();
    
    // Verify search was performed
    await expect(employeeListPage.employeeTable).toBeVisible();
  });

  test('should reset search filters', async ({ employeeListPage }) => {
    await employeeListPage.searchById('0001');
    await employeeListPage.clickReset();
    
    // Verify filters are cleared
    await expect(employeeListPage.searchEmployeeId).toHaveValue('');
  });
});
