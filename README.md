# Sho8lana — Project & Business Documentation

## 1. Project Overview

**Sho8lana** is a freelance marketplace platform that connects clients who need work completed with freelancers who have the skills to deliver it.

The platform is designed to support the lifecycle of freelance work: clients can publish projects, freelancers can discover opportunities and submit proposals, and both sides can follow project progress and delivery through their accounts.

The application is implemented as a React single-page application. The repository also contains a small JSON Server dataset for sample jobs.

## 2. The Business Idea

### The problem

Individuals and businesses often need specific tasks or projects completed without hiring a full-time employee. Freelancers, meanwhile, need a place to discover paid opportunities, present their skills, and reach potential clients.

Finding the right person, agreeing on scope and price, and tracking delivery can be fragmented when handled through informal channels.

### The proposed solution

Sho8lana provides a shared online marketplace where:

- **Clients** describe the work they need and publish projects.
- **Freelancers** browse projects, review requirements, and send proposals.
- Both sides can manage proposals and follow project progress through project-related pages.
- Users can create profiles so the other side can learn about their background and capabilities.

In short, Sho8lana aims to make it easier to find freelance work and hire people for project-based tasks.

### Target users

1. **Clients:** Individuals, startups, and businesses that need a service or a defined project completed.
2. **Freelancers:** Independent professionals who want to find projects and offer their skills.
3. **Administrators:** Platform operators who manage users and marketplace categories and skills.

### Value proposition

| User | Value provided |
|---|---|
| Client | Publish a project, receive freelancer proposals, and follow project-related activity. |
| Freelancer | Discover opportunities, submit proposals, manage jobs, and showcase a profile/CV. |
| Administrator | Tools and pages for managing users, categories, and skills. |

## 3. Business Model (Suggested)

The repository demonstrates marketplace functionality, but it does not establish a confirmed production revenue model. Possible future models include:

- **Commission per completed project:** Deduct an agreed percentage from a successfully completed transaction.
- **Freelancer subscription:** Optional paid plans with additional profile visibility or business tools.
- **Featured projects or profiles:** Paid promoted placement.
- **Business plans:** Additional hiring, team, or account-management features for companies.

These are business recommendations, not claims that the current code implements payments, subscriptions, or commissions.

## 4. Main User Roles

### Client

A client can use the client-facing registration and profile pages, publish a project, view projects, inspect project details, and work with proposals. The route structure also includes client project listings and project-delivery pages.

### Freelancer

A freelancer can register separately, maintain a profile, upload a CV, browse projects, submit proposals, manage jobs, and access incoming proposals and delivery-related pages.

### Administrator

The application includes an admin dashboard and management pages for users, categories, and skills. Admin access is represented in a dedicated React context.

## 5. Main Features Identified

The following features are indicated by the application's route and component structure:

- Separate signup flows for clients and freelancers.
- Sign-in page.
- Home/job landing page and project browsing.
- Project listing and project details.
- Project creation.
- Freelancer project proposals and proposal responses.
- Client project views.
- Freelancer job creation and job management.
- Incoming proposal pages.
- Project/job delivery pages.
- User profiles and profile editing.
- CV upload.
- Search.
- Category and skill listing, creation, and update.
- Admin dashboard and user listing.

A frontend route alone does not prove that a workflow is fully connected to a production backend. Verify the relevant API and server behavior before presenting a feature as production-ready.

## 6. Typical Marketplace Workflows

### Workflow A — Client publishes a project

1. The client creates an account or signs in.
2. The client opens the project-posting page.
3. The client enters project information and requirements.
4. The project becomes available in the marketplace, subject to backend behavior.
5. Freelancers can open project details and consider submitting proposals.

### Workflow B — Freelancer applies to a project

1. The freelancer creates an account or signs in.
2. The freelancer completes their profile and may upload a CV.
3. The freelancer browses available projects.
4. The freelancer opens a project and reviews its details.
5. The freelancer submits a proposal.
6. The proposal can be followed through proposal-related pages and responses.

### Workflow C — Project follow-up and delivery

1. The client and freelancer proceed with the agreed work.
2. The application provides project/job management and delivery-related pages.
3. Relevant users can access the delivery views.

The exact approval rules, status transitions, payment handling, and dispute process should be confirmed from the backend and corresponding page logic.

### Workflow D — Marketplace administration

1. An administrator accesses the admin area.
2. The administrator can access user-management pages.
3. The administrator can view and manage categories and skills through their corresponding pages.

## 7. Application Structure

The repository follows a React application structure. The main application entry is `src/App.js`, which configures providers and the route table.

| Path | Responsibility |
|---|---|
| `src/App.js` | Main application composition, providers, and route definitions. |
| `src/pages/` | Page-level features such as projects, profiles, signup, search, and dashboards. |
| `src/components/` | Reusable interface components such as navigation, footer, loading, and protected admin UI. |
| `src/Context/` | Shared authentication and admin state. |
| `data/jobs.json` | Sample job records used by the local JSON Server script. |
| `public/` | Static public assets. |

### Application providers

The main application wraps its routes with:

- **AuthProvider:** exposes an authentication token through React Context. It reads the `autoToken` value from local storage when the application starts.
- **QueryClientProvider:** provides React Query functionality.
- **AdminProvider:** exposes admin state through React Context and checks for an `Admin` value in local storage.
- **BrowserRouter:** manages client-side navigation.

The application also initializes AOS for scroll animations and uses React Hot Toast for notifications.

## 8. Technology Stack

The dependencies and application entry point identify these technologies:

| Technology | Purpose |
|---|---|
| React 18 | Frontend UI and component architecture. |
| React Router DOM 6 | Client-side routing. |
| React Query 3 | Server-state and asynchronous data management. |
| Axios | HTTP requests. |
| Material UI 5 | UI components and styling. |
| Ant Design 5 | Additional UI components. |
| Bootstrap 5 / React Bootstrap | Layout and interface styling. |
| Formik and React Hook Form | Form handling. |
| Yup | Form validation. |
| SignalR client | Real-time communication dependency; actual usage should be verified in source. |
| AOS and Framer Motion | Animation. |
| JSON Server | Local mock API for sample jobs. |

## 9. Running the Project Locally

### Requirements

- Node.js and npm.
- Git.

### Installation

```bash
git clone https://github.com/Abdullah-atia/Sho8lana.git
cd Sho8lana
npm install
```

### Run the React application

```bash
npm start
```

The Create React App development server normally starts at `http://localhost:3000`.

### Run the sample jobs API

In a separate terminal:

```bash
npm run server
```

The package script starts JSON Server using `data/jobs.json` on port `9000`, with a configured 500 ms delay.

The sample data is mock data. It is not evidence of a production database or real payment records.

### Build for production

```bash
npm run build
```

## 10. Important Routes

The following routes are defined in `src/App.js`:

| Route | Purpose |
|---|---|
| `/` and `/job` | Home page |
| `/Projects` | Browse projects |
| `/projectDetails/:projectId` | Project details |
| `/postProject` | Publish a project |
| `/ProjectProposal/:projectId` | Project proposal view |
| `/PropasalForm/:projectId` | Submit a proposal |
| `/ReplayProposal/:proposalId` | Respond to a proposal |
| `/myProjects/:userId` | Client's projects |
| `/myprojects` | Freelancer's projects |
| `/myJobs` | Freelancer's jobs |
| `/uploadcv` | Upload CV |
| `/search/` | Search |
| `/profile/:userId` | User profile |
| `/EditProfile/:userId` | Edit profile |
| `/signin` | Sign in |
| `/clientsignup` | Client registration |
| `/freesignup` | Freelancer registration |
| `/admin` | Admin dashboard |
| `/allCategory` | Categories |
| `/allSkills` | Skills |
| `/viewallusers` | User listing |

Additional routes cover delivered projects/jobs, proposal replies, client/freelancer profile views, and category/skill administration.

## 11. Current Scope and Items to Verify

This documentation is based on the repository's visible frontend entry point, route definitions, package manifest, authentication/admin contexts, and sample jobs dataset.

Before treating Sho8lana as a production-ready marketplace, verify the following in the complete application and backend:

- Backend API endpoints, database schema, and deployment configuration.
- Password security, token validation, token expiry, and role-based authorization on the server.
- Whether clients can only manage their own projects and freelancers their own proposals/jobs.
- Proposal acceptance/rejection rules and project status transitions.
- How work submission, review, and final delivery are handled.
- Whether payments, refunds, platform commissions, and invoices exist.
- File upload validation, storage, and access permissions for CVs and other attachments.
- Notifications and whether SignalR is actively integrated.
- Search, filtering, pagination, and error handling.
- Tests, accessibility, and production environment configuration.

**Security note:** frontend route protection and values stored in local storage are not sufficient authorization controls. Sensitive permissions must be validated by the backend.

## 12. Product Vision

Sho8lana can evolve into a trusted platform for project-based work by improving the complete hiring lifecycle:

1. Help clients write clear project descriptions.
2. Help freelancers present verified skills and relevant work.
3. Make proposal comparison and communication straightforward.
4. Provide transparent project milestones and delivery tracking.
5. Introduce secure payment and dispute-resolution processes if supported by the business strategy.
6. Build trust through reviews, ratings, and verified user information.

The long-term objective is to create a reliable marketplace where clients can find suitable talent and freelancers can build sustainable independent careers.

---

**Repository:** https://github.com/Abdullah-atia/Sho8lana  
**Documentation status:** Initial project and business documentation based on the inspected frontend repository. Backend-dependent behavior and the proposed revenue model require confirmation.
