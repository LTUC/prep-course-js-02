# HR-management-system

## **Task 07**

### **Overview**

Today will be the beginning of a multi-Task project, where you will build an employee management system.

### **Problem domain**

You are building an HR management system for a company, where they can organize their employees with their information and filter them.

### **Requirements**

#### Set up your Github Repository

- Create a new repository called `HR-management-system`
- Add a **README** file to add your changes for each day.
- Clone this repo to your local machine.
- Checkout a new branch called `constructor` for today's task.
- Open it in VS code.

You will create two pages index.html and accounting.html.

#### **Home page**

1. Header for navigating to any other pages.
2. Main render the information for each employee from javascript.
3. Footer will have some social media links with copyright.

### **Javascript**

1. You will create a constructor to generate an employee object which will be rendered in the main section from your app.js file.
    - Employee ID
    - Full Name
    - Department:
        - Administration
        - Marketing
        - Development
        - Finance

    - Level:
        - Junior
        - Mid-Senior
        - Senior

    - Image URL
    - Salary
2. You will create a prototype function for calculating the salary using the provided table by generating a random number between the minimum and maximum salary for each level, use the below table to calculate the salary depends on the employee level.

3. After calculating the random salary you should calculate the net salary where the tax percent is 7.5.

    |Level|Min|Max|
    |-----|---|---|
    |Senior|1500|2000|
    |Mid-Senior|1000|1500|
    |Junior|500|1000|

4. You will create a render prototype function to render each employee name with their salary in the home page.

5. Use the information shown in the table below to create employees instances.

    |Employee ID|Full Name|Department|Level|
    |-----------|---------|----------|-----|
    |1000|Ghazi Samer|Administration|Senior|
    |1001|Lana Ali|Finance|Senior|
    |1002|Tamara Ayoub|Marketing|Senior|
    |1003|Safi Walid|Administration|Mid-Senior|
    |1004|Omar Zaid|Development|Senior|
    |1005|Rana Saleh|Development|Junior|
    |1006|Hadi Ahmad|Finance|Mid-Senior|

### **Accounting page**

- For now this page should have:

1. Header for navigating to any other pages.
2. Main will be empty for today's task.
3. Footer will have some social media links with copyright.


## Submission Instructions:
- When your work is complete and ready for submission, push to the `constructor` branch.
- Create a pull request.
- Deploy to the Github pages.
- Submit the pull request and deployed version (Live URL) links.
- Merge `constructor` with the main branch.
- What observations or questions do you have about what you’ve learned so far?
- How long did it take you to complete this assignment? And, before you started, how long did you think it would take you to complete this assignment?