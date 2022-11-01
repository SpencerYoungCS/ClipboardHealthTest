# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

Ticket 1:
    First we need a unique way to identify each agent's custom facility id. 

    Acceptance Criteria:
    Given the Id is unique and there exists more than one facility
    And all agents exist the in Agents table.
    And all agents already have a Unique Id.
    When an agent works for a new facility
    Then it is added to the facilities' agent table.
    And any important metadata from the agents table is migrated over.
    And the table is updated.

    Time/Effort Estimates:
    Little effort, 20 minutes if we have direct access to the database. More if discussion and confirmation is needed.

    Implementation Details:
    We can create a FacilitiesAgents Table.
    This table will contain at least the Agent's custom id, facility id, and agent internal id (Which we can use to link to the Agents table). 
    We should also add another boolean column to flag if an agent if the facility wants to use their custom Id or internal Id for reporting.
    Any other columns can be added if needed.


Ticket 2:
    Facility A wants to generate a report but with their facilitie's custom Id.

    Acceptance Criteria:
    Scenario 1: Facility A wants to generate a report but with their facilitie's custom Id.
    Given that the agent has been already added to the facilities' agent table
    And all data is valid
    When the facility uses the "generateReport" function
    Then Ensure the function converts the data to PDF and it uses the facilities' custom agent id.
    
    Time/Effort Estimates:
    Medium Effort, 1-2 days depending on the complexity of getShiftsByFacility and generateReport.

    Implementation Details:
    We can modify the getShiftsByFacility function such that when it will also query the Agent database, it will also include 
    the flag and agent custom id from the FacilitiesAgents table such that it know whether ot not to use the custom id or not.
    Then find where the Agent's id is assigned to the PDF and if the flag is true, we can simply replace the value or not.

