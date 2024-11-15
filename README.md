# GoBikeRide
![NikaShop](/public/images/GoBikeRIdeHomePage.png)

## Demo
[GoBikeRide Project Link](https://go-bike-ride.vercel.app/auth/sign-in)

GoBikeRide is a comprehensive cycling application designed to help cyclists keep track of their rides, maintain their bikes, and connect with other cycling enthusiasts. Whether you're a seasoned cyclist or just starting, GoBikeRide provides all the tools you need to enhance your riding experience.

---

## Tech Stack

GoBikeRide is built using the following technologies:

### Frontend:
- **Next.js** – A React framework that enables server-side rendering (SSR), static site generation (SSG), and API routes.
- **TypeScript** – A superset of JavaScript that adds static types, helping to catch errors early and improve code quality.
- **Tailwind CSS** – A utility-first CSS framework for building custom designs quickly.
- **Framer Motion** – A popular library for adding animations and transitions to React applications.
- **React Hook Form** – A library for handling forms in React with minimal re-rendering.
- **Zod** – A TypeScript-first schema validation library for validating form inputs.

### Backend:
- **Supabase** – An open-source Firebase alternative for authentication and database management. It is used for managing user sessions, storing data, and interacting with the database.
- **Prisma ORMS** – Used for interacting with the database, providing a high-level API for querying and manipulating data.
- **Supabase** – While not used in the provided code snippet, Supabase is listed as the authentication and database management service.


## Features

### 1. **User Authentication** 
   - **Registration & Login:** Users can create an account, log in, and access their personalized dashboard.

### 2. **Home**
   - The home page provides general information about the app and its features.

### 3. **Garage**
   - **Bike Management:** Users can add up to 3 bikes to their garage.
   - **Bike Monitoring:** For each bike, users can track the following details:
     - Bike Name
     - Maintenance Date
     - Current Condition
     - Current Mileage (in km)
     - Maintenance Costs

### 4. **Routes**
   - **Route Filter:** Users can filter routes based on:
     - Route Name
     - Region (Voivodeship)
     - Difficulty Level (Easy, Medium, Hard)
   - **Rating:** Each route has a star rating (0-5) given by other users.

### 5. **Posts**
   - Users can create posts about their bike trips and share their experiences.
   - **Interactivity:** Other users can like and comment on posts, creating a sense of community and interaction.

### 6. **Users Directory**
   - **User Search:** Find other users by name.
   - Each user profile card includes:
     - Name
     - Registration Date
     - Preferred Riding Style
     - Respect Points
     - Number of Posts, Routes, and Kilometers Ridden
   - **Profile Link:** Each card links to the user’s full profile.

### 7. **Contact & FAQ**
   - Contact information for app administration.
   - Frequently asked questions (FAQ) for troubleshooting and app-related inquiries.

### 8. **Premium Section**
   - **Premium Subscription:** Users can purchase a premium subscription, unlocking additional features:
     - Access to all routes
     - 3 bikes in the garage
     - Priority support from GoBikeRide’s technical team
     - Premium user badge
     - Access to exclusive contests and competitions
     - Beta access to new features

### 9. **Notifications**
   - A notification system alerts users when:
     - Someone gives them respect
     - Someone comments on their post
   - Users can click on notifications to navigate directly to the relevant user or post.

### 10. **User Profile**
   - Users can edit their personal details, including:
     - **Social Media Links**
     - **Ride Statistics:** Total kilometers ridden, number of posts, and routes.
   - **Settings:** Users can change their password or delete their account from the profile settings.

---

GoBikeRide is constantly evolving, and we are excited to continue adding more features and improvements. Thank you for using our app, and we hope it enhances your cycling experience! 🚴‍♂️🚴‍♀️
