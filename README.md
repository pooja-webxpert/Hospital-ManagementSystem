

# Hospital Management System

This Hospital Management System is a web application designed to streamline appointment booking and management processes for hospitals. Built with modern technologies, the system offers separate interfaces for doctors, admins, and patients, ensuring an efficient and user-friendly experience for all.


## Features

1. Appointment Booking:
- Patients can easily book appointments with doctors through an intuitive interface.
- Doctors can view their own booked slots on their personalized dashboard.
2. Admin Dashboard:

- Admins can view all appointments, monitor their status, and manage pending requests.
- Admins have the ability to accept or reject appointment requests.

3. Doctor Dashboard:
- Doctors have access to a dedicated dashboard where only their appointments and schedules are displayed.
4. Dynamic Repeater Form:

- The system includes a dynamic repeater form for data entry, enabling flexible addition, editing, and deletion of entries.

5. Validation:

- Built-in form validation ensures accurate and consistent data entry.

6. Responsive and User-Friendly UI:

- A modern, responsive interface allows for seamless usage on all devices


## Tech Stack

- Framework: Next.js with App Router
- Next.js v15: The React framework for building the application.
- UI Components: Material-UI (MUI) for a sleek, responsive interface. For UI components like the side drawer, buttons, etc.
- Storage: Local storage for temporary data persistence and dynamic data management.

## Getting Started
Prerequisites

Ensure you have the following installed:

- Node.js v18.19.1
- Yarn or npm

Installation

1. Clone the repository

```bash
git clone https://github.com/pooja-webxpert/Hospital-ManagementSystem
```
2. Navigate to the project directory:

```bash
cd my-app
```
3. Install dependencies:

```bash
npm install
# or
yarn install

```
## Environment Variables

Create a .env.local file in the root directory and add the following variables:

```bash
NEXTAUTH_URL=http://localhost:3000
SECRET=your_nextauth_secret
```

## Run Locally

To start the development server:

```bash
npm run dev
# or
yarn dev
```
Open http://localhost:3000 in your browser to view the app.



## Usage

1. Patient Workflow:

- Patients log in to the system and book an appointment with their preferred doctor.

- The appointment details are stored and displayed to the respective doctor and admin.

2. Admin Workflow:

- Admins log in to their dashboard to view all booked appointments.

- Admins can approve or reject pending appointments.

3. Doctor Workflow:

- Doctors log in to their personalized dashboard to view only their appointments and schedules.

- Doctors can manage their own booking slots without interference from other data.

## Additional Functionalities

- Dynamic Repeater Form: Simplifies data entry tasks for admins and doctors.

- Validation: Ensures no incorrect or incomplete data is submitted.

- Dashboard-Based Navigation: Provides role-specific dashboards for streamlined workflows.

## Folder Structure
Here's a general overview of the folder structure:


```bash
├── components        # Reusable components (e.g., Drawer, Navbar,MUI forms,validations,tabs,modals)
├── pages             # Next.js pages
│   ├── admin-panel   # admin-panel/dashboard,allappointment,etc
│   ├──  api          # API routes for NextAuth and other endpoints
│   └── auth          # Authentication pages
├── public            # Public assets (e.g., images, icons)
├── styles            # Global and component-specific styles
└── utils             # Utility functions (e.g., route URLs)
```


