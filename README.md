# Team 13 Project

The application name  BuildingManager

The first section titled Team Overview includes the names of each team member and their GitHub usernames: Aadit Bhatia, Saniya Sekhon, Ananya Srivastava, Will Wallace

Innovative Idea : Ours is a workforce management app. A company can schedule employee shifts and maintain details of all its available assets(meeting rooms, cafeterias etc.). Furthermore, we will have a calendar component where the user can schedule all their events. Also, we will have a feature which can assign meeting rooms in a building to different people. 
There are workforce management apps, like workday, oracle, dayforce etc. but ours is different because we have more features like event schedulers

List of the data your application will support. For each data type, you must include a brief description of the data and how it will be used in your application:
Worker- Shift hours(time), Wage, Position(manager, front-desk staff, etc)
Calendar - Worker hours, meeting rooms, event rooms
Event Room- contain a capacity, chairs, and availibility
Meeting rooms- contain a capacity, chairs, and availibility
Buildings: Support for multiple buildings, each with their own assigned Workers, Event Rooms, and Meeting Rooms.

The fourth section titled Functionality provides a list of the functionality your application will support. For each functionality, you must include a brief description of the functionality and how it will be used in your application. For example, if you are creating a recipe application, you might have a functionality for adding a recipe. You would then describe how a user would add a recipe to your application. You must include at least four different types of functionality.

Calendar - A company can export a google calendar onto our application, and we would create a schedule from that calendar on our app/ Company can create their own schedule on that app
    -The import functionality will take the form of parsing a ics file and creating events on our calender correspondingly.
Shift manager- Employees can take and drop shifts. Whenever an employee drops a shift, an email is sent out to other employees asking for shift swaps
Room scheduler- Schedules and books meeting rooms/event rooms.
Incident Report- Report incidents with other workers. These reports can only be viewed by those with specific roles (HR, shared manager). A specific time and location can be specified. 




[MIT License](https://opensource.org/licenses/MIT)
