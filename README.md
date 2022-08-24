# Web Based Hostel Management System for XMUM
The hostel management system is developed using ReactJS and Bootstrap on the frontend, Spring Boot on the backend with a PostgreSQL database. This work produced a user-friendly web-based hostel management system for Xiamen University Malaysia that reduce time required to input the information data into the system, increase the speed of the hostel management process.

## Project Description
XMUMHMS is developed to have two main interfaces, the admin and student interfaces. The admin interface allows the administrators and staffs to manage incoming requests and carry out administrative tasks. While the student interface is for students who will acts as the normal user of the system and perform hostel related tasks. Students can perform activities such as apply, check out, change hostel duration, request for room change, view reports, request for maintenance, view hostel blocks and features, and etcetera.

![image](https://user-images.githubusercontent.com/96167642/186477277-7a9d0043-b110-4e75-a86e-30cf479b38fc.png)


## Project Objective
The aims of the project is to help in enhancing the hostel-related processes for the students and staffs of the university by providing a system that are convenient and can be used for both students and staffs and also solve issues faced by the users of the hostel management system. 

The objectives are as follows:

i)	To reduce time required to input the information data into the system including students and staffs

ii)	To increase the speed of the hostel management process including registration, retrieve and filling form, submitting, and application approval

iii)	To develop a user-friendly website for XMUM hostel management

## System Development Methodology
This section is about the system development tools and framework that are applied for development of this project. The details for the frontend, backend, and database applied are explained in details.

## Frontend

The following are the technologies that will be applied to build the proposed web-based hostel management system:

i)	ReactJS

ReactJS also known as React or React.js is an open-source and free to access frontend JavaScript library in order to build the user interfaces using the UI components. ReactJS can allow the development of the large web applications that can change the part of the element of the web interface without needing to refresh the page, which can make the web application run faster. ReactJS can also allow reusable of UI components and possible reduce boilerplate codes in the project.

ii)	CSS

Cascading style sheets (CSS) is a style sheet language to describe the presentation of document. CSS is designed to enable the content to be separated from the presentation, such as the colors, font, and layout of the elements. This allow the content to be referring to the same CSS layout from different document, which can reduce the complexity and repetition on the style sheets code.

iii)	Bootstrap 5

Bootstrap 5 is an open-source frontend CSS framework. It allows the development of responsive website. Bootstrap works by using a grid system to create a page layout with the help concept such as rows and columns in the website.

## Backend

Spring Boot was used as the backend framework for the web application. Spring Boot is an open-source Java-based framework used for creating a micro Service. Spring Boot is useful when creating standalone application. Spring Boot also includes an embedded Apache Tomcat servlet container for hosting the Java servlets. Spring Boots is used to create the REST APIs for the frontend framework to consume and for sending back the data from the database to the frontend.

## Database

PostgreSQL is used as the database for the proposed hostel management system. It is because PostgreSQL supports some advanced data types and has feature that can optimize the performance of the database. PostgreSQL also support many different data types and allow ability to defined own complex types within its operational activities.

## Development Tools

i.	Integrated Development Environment (IDE)

Microsoft Visual Studio Code and IntelliJ IDEA are selected as the IDEs for the development of the web application. Microsoft Visual Studio Code for the JavaScript code for the frontend, due to its feature such as auto-indentation, liver server on save, syntax highlighting, and etcetera. IntelliJ IDEA for the backend since the main language for backend is Java and IntelliJ IDEA provides a better environment and functions in Java development.

ii.	Version Control Software

Git and GitHub were used as the version control software throughout the project development stage. It is used as a backup, a way to view the logs of the past commits, and revert to the old stages if there happens to be a corruption during the development process.

iii.	Postman

Postman was used because it was useful in testing the connection to the REST APIs endpoint as a checker and to monitor the output from the REST APIs before connecting it to the frontend. Postman can allow easy generation of the custom HTTPs requests to send to the target endpoints.

## Common Interface
## Login page
![image](https://user-images.githubusercontent.com/96167642/186478594-c87b09d1-adb8-48e7-8249-2667547f8a3c.png)

The login page allows student and administrator to log into the system by providing their user id and password with the user category.

## Profile navigation item
![image](https://user-images.githubusercontent.com/96167642/186478690-db54080b-4467-42fc-867c-d6415a2e3872.png)

The profile item locates inside the main page of both student and administrator interface. It allows user to click on the item to dropdown a list of current user id with greeting, settings for account details and password, and a logout button to logout from the system.

## Interface for Student Page
## Registration page

![image](https://user-images.githubusercontent.com/96167642/186478757-bdc5c8c6-1e40-4041-969b-7f8accab5a8c.png)

The registration page only allow student to register into the hostel management system due to administrator should not be allowed to be create without proper login and user authentication.

## Student Home Page
![image](https://user-images.githubusercontent.com/96167642/186478779-2b5d64c6-f984-4002-871a-d930481490b4.png)

The student home page provides an overview of the hostel to the student.

## Announcement navigation item
![image](https://user-images.githubusercontent.com/96167642/186478807-622928fe-47c6-415a-910f-e99168fe745e.png)

The announcement navigation on the page allow student to click on to it then it will pop up a modal window regarding the latest announcement from the administrator.

## Dashboard
![image](https://user-images.githubusercontent.com/96167642/186478956-6456cfaa-1f6d-4da9-9c61-d56f9ff4683e.png)

The dashboard located on the side bar and allow student to click to view the profile information and room information.

## Hostel overview page
![image](https://user-images.githubusercontent.com/96167642/186478994-40d069d6-4b00-41cb-8669-b7292b6cef57.png)

The hostel overview page provide student a graphical user interface for the student to click on the block on the top-down image of XMUM. After that, the block selected will pop up a side bar to display the details regarding the selected hostel.

## Hostel Related Functions page
![image](https://user-images.githubusercontent.com/96167642/186479014-389a6c19-2748-4229-bdad-75c606c57a10.png)

This page provides the student with four of the hostel services for them to navigate to the selected services.

## Hostel Application page
![image](https://user-images.githubusercontent.com/96167642/186479034-65aa95d4-2396-48f2-ac70-f6b85cfb261e.png)

The hostel application page allows student to apply for hostel through the online web application and certain input field will be autofill with the student particulars from the database.

## Checkout page
![image](https://user-images.githubusercontent.com/96167642/186479059-7019049e-4785-40ae-a6bb-fdca03a32392.png)

This page allows student to request for checkout.

## Change Hostel Period page
![image](https://user-images.githubusercontent.com/96167642/186479083-b05b2a4e-2a0d-4f59-b702-9768f36d8d43.png)

This page allows student to change the period or duration of the hostel.

## Room Change page
![image](https://user-images.githubusercontent.com/96167642/186479105-192e8d09-0dc3-47ad-8872-d04dd76ec49c.png)

This page allows student to request for room change.

## View Report page
![image](https://user-images.githubusercontent.com/96167642/186479137-a309da73-a2bf-4448-966e-4c3961ff068f.png)

This page will display the past rental fees records and maintenance records of the student from the database.

## Edit Pending Request page
![image](https://user-images.githubusercontent.com/96167642/186479163-b59960a5-962c-4265-9dc7-b719f7472ffb.png)

This page by default displays the current pending request for the user, from there the student can edit the pending request. In order to view the past history of request submitted. The student can click on the filter exist on top of the page and view the details of those past requests.

## Request Maintenance page
![image](https://user-images.githubusercontent.com/96167642/186479185-c26190a4-bd9f-48d5-ac29-2bd4b653c7a3.png)

The page allow student to submit request for maintenance of the room.

## Feedback page
![image](https://user-images.githubusercontent.com/96167642/186479211-2849b563-e59d-452c-a449-d979164e15cf.png)

This page allow student to submit feedbacks to the administrator of the hostel management system.

## Student Settings page
![image](https://user-images.githubusercontent.com/96167642/186479234-1862bda4-6dc9-458f-8590-653d0cc6f6fe.png)

The page display settings for the student such as view and edit profile, change password, view room details and a help section.

![image](https://user-images.githubusercontent.com/96167642/186479280-691bfa1c-fae6-4bb7-b671-945d12288325.png)

Profile page: This page displays the current student details from the database and allow students to change their display name in the system.

Change Password page: This page allows student to change their password.

Room Details page: This page displays the room details of the student from the database

Help page: This page contains of general questions and help regarding XMUM accommodation services.

## Interface of Administrator Page
## Pending Hostel Request page
![image](https://user-images.githubusercontent.com/96167642/186479337-a4d4989d-1f0b-43d9-abd8-19743fa4fada.png)

This page is shown when the administrator first log into the system. The current requests that are in pending status will be displayed and allow the administrator to check and view the details of the requests. The administrator could then have the options to approve, reject, or view the details in form layout.

### Pending Hostel page after check

![image](https://user-images.githubusercontent.com/96167642/186480255-e183d9c6-9631-4199-a1eb-39e0ab7f3493.png)

### After view in form function

![image](https://user-images.githubusercontent.com/96167642/186480273-1d73cd34-9989-40b6-9bb3-1db8dc798cb3.png)

After click on the function to view in form layout, a fully filled form of using the content of the request is produced and display to the administrator. The administrator can then choose to generate and downlaod the form in the pdf format.

![image](https://user-images.githubusercontent.com/96167642/186480549-7c5aa014-5fd0-46cf-8516-eeb189c2412f.png)

## Administrator List page
![image](https://user-images.githubusercontent.com/96167642/186480578-802e6567-bf77-40c9-baa9-998fc8010d29.png)

This page includes and displays all the administrator in the system and allow remove of the admin from the system. The administrator however is not allowed to delete their own record.

### Pop up modal window for administrator removal confirmation
![image](https://user-images.githubusercontent.com/96167642/186480728-b6a299f6-eafb-4455-a3c8-94a7ba0dd56f.png)

## Add Announcement page
![image](https://user-images.githubusercontent.com/96167642/186480708-4cbe40dd-2cef-49d6-b82d-31e2d729476a.png)

This page allow administrator to add and publish their announcement for the student to view in the web application. The announcement will be created then saved to the database. The administrator can also edit the previous announcement posted using the user interface and the announcement published date time will be updated along with the title and description of the announcement.

### Edit announcement function
![image](https://user-images.githubusercontent.com/96167642/186480952-77d62c80-d59f-41a6-b0e5-c4a9d0a7c7e9.png)

## Hostel Request Record / Log page
### Hostel Request Record / Log page (card view)
![image](https://user-images.githubusercontent.com/96167642/186481021-1ce13848-1dc0-43ed-a6b4-27465f6513a2.png)

### Hostel Request Record / Log page (list view)
![image](https://user-images.githubusercontent.com/96167642/186481042-52b0ce38-7d4f-45b2-adef-fe129c6b8b52.png)

The page allow administrator to view all type of requests, which includes approved, rejected, and pending. The administrator can choose to view the record by card view or list view layout by clicking the button exist on top right side of the page.

## Report Generation page
![image](https://user-images.githubusercontent.com/96167642/186481185-531b2773-58fc-4f6f-bb6a-797fc5686c23.png)

This page allow administrator to display the selected record using the filter on the top left side of the web application. The respective output will be displayed applying those filters and the administrator can also choose to generate a pdf file from the table.

## Administrator Settings page
![image](https://user-images.githubusercontent.com/96167642/186481227-f31b87f9-e60f-4421-be8f-3b60a6e27bca.png)

This page includes the functionality of editing and view the profile, changing the admin password, and help functions consist of the frequently ask questions. 

## UML Diagram
![image](https://user-images.githubusercontent.com/96167642/186477753-6440577f-2e5b-434a-94a8-6d3556d7b05f.png)

## Project Advantages
The proposed hostel management system, XMUMHMS has several advantages that it provides. Firstly, the developed system is a web application, which means the users of the system are able to connect to the system in anywhere and at any time, as long as they have an active network connection for connecting to the web host. This also allow the cross-platform compatibility on the devices using the web application, since the web-based applications are far more compatible across multiple platforms compare to the traditional software application. The minimum requirement for using the web application here is only an internet browser and it is independent on the operating system of the actual devices that are currently in used.

In addition, the development of the XMUMHMS system is able to effectively identify the requirements and needs of the students in XMUM, where the requirements are highly priorities and needed by the student of XMUM. The overall processes of the XMUM hostel system are also clearly understood by the student from the registration to the checkout process and workflow of the XMUM hostel system.

Moreover, by having the web application, the student now has access to a method to view the record and history of their hostel activities and also one place for them to get information about the hostel all within a single web application. The student also would be able to track back and retrieve their past record if needed.

Furthermore, as a web application the paper works when carry out hostel processes are also reduced. The student does not need to sign and fill in physically but instead has an alternative to submit their application. This approach is also more environmentally friendly for the students and also the administrator/staff of XMUM.

## Project Disadvantages
The proposed hostel management system, XMUMHMS also have several disadvantages in the system. For a web-based hostel management system, the speed of delivery might become the main disadvantage of the system. Although in the currently proposed hostel management system, the scale of the system is relatively small. Therefore, it is not slow in the information processing and performances, however if the proposed hostel management system scales up in the future, the processing speed may become slow depends on the capability of the web server.

Besides, since the application developed is a web-based solution. It also indicates that it will not work if there does not exist an internet connection for the students and administrators/staff to consume in order to maintain the connection to the web server. The system is also solely depended on the network connection speed as the performance of the application system.

Moreover, as a web application, students and administrator/staffs of XMUM need to learn to use the system. Therefore, the system was developed in a user-friendly way, however there might still be an issue and requires technical and time in order to fully learn to operate the system. The maintenance cost of the web application is also there compares to the traditional approaches.
