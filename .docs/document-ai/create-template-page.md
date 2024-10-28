# CreateTemplatePage Refactor

Refactor the CreateTemplatePage.tsx component to implement a vertical stepper layout with the following steps:

## 0. Upload Reference Document
- Upload a reference document to enable AI assistance

## 1. Name and Purpose
Implement a form with the following fields:
- Name (input): Clear and concise, stating the intentions of the template
- Description (textarea): Provide all relevant details

## 2. Definition
Implement two options for template definition - toggle between "Assisted" and "Manual" definition, only one can be active at a time.

### 2.1 Assisted Definition
- Input field: "Describe the data type you wish to extract"
- AI assistance button: When clicked, send the description to the backend
- Display a loading state while waiting for the AI-generated template
- Once received, display the AI-generated template in an editable form for user review

### 2.2 Manual Definition
- "Add New Field" button: Opens a modal with the following inputs:
  - Name (input)
  - Data Type (dropdown): Options - text, number, date, array
  - Format (input, optional)
  - If "array" is selected:
    - Enable a nested field setup
    - Allow adding single nested field with:
      - Name (input)
      - Data Type (dropdown): Options - text, number, date
      - Format (input, optional)

### 3. Review and Save
- Display the final template for user review
- Enable user to edit each field by simply clicking on the field
- "Save" button: Save the template to the database
- "Cancel" button: Cancel the template creation process


### On CreateTemplagePage.tsx

Implement two options for template definition - toggle between "Assisted" and "Manual" definition, only one can be active at a time. Radio buttons can be used for this purpose, highlighting the active option.

Fields Area:
- keep state of created fields
- Make it scrollable after 500px height
- Add remove icon next to the edit icon for each field
- enable editing by retrieiving the field data on click

Review Area:
    Template Review Area:
    - Keep as it is
    Test Review Area:
    - Triggers the extraction process itself
    - Display the two interchangeable views, extracted data and original document, for user review. The user can switch between the two views.
    - The user can edit the extracted data by clicking on the field


