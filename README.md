GoBikeRide - README
GoBikeRide is a comprehensive cycling application designed to help cyclists keep track of their rides, maintain their bikes, and connect with other cycling enthusiasts. Whether you're a seasoned cyclist or just starting, GoBikeRide provides all the tools you need to enhance your riding experience.

Features
1. User Authentication
Registration & Login: Users can create an account, log in, and access their personalized dashboard.
2. Home
The home page provides general information about the app and its features.
3. Garage
Bike Management: Users can add up to 3 bikes to their garage.
Bike Monitoring: For each bike, users can track the following details:
Bike Name
Maintenance Date
Current Condition
Current Mileage (in km)
Maintenance Costs
4. Routes
Route Filter: Users can filter routes based on:
Route Name
Region (Voivodeship)
Difficulty Level (Easy, Medium, Hard)
Rating: Each route has a star rating (0-5) given by other users.
5. Posts
Users can create posts about their bike trips and share their experiences.
Interactivity: Other users can like and comment on posts, creating a sense of community and interaction.
6. Users Directory
User Search: Find other users by name.
Each user profile card includes:
Name
Registration Date
Preferred Riding Style
Respect Points
Number of Posts, Routes, and Kilometers Ridden
Profile Link: Each card links to the user’s full profile.
7. Contact & FAQ
Contact information for app administration.
Frequently asked questions (FAQ) for troubleshooting and app-related inquiries.
8. Premium Section
Premium Subscription: Users can purchase a premium subscription, unlocking additional features:
Access to all routes
3 bikes in the garage
Priority support from GoBikeRide’s technical team
Premium user badge
Access to exclusive contests and competitions
Beta access to new features
9. Notifications
A notification system alerts users when:
Someone gives them respect
Someone comments on their post
Users can click on notifications to navigate directly to the relevant user or post.
10. User Profile
Users can edit their personal details, including:
Social Media Links
Ride Statistics: Total kilometers ridden, number of posts, and routes.
Settings: Users can change their password or delete their account from the profile settings.
Installation
To run GoBikeRide locally, clone the repository and follow these steps:

Clone the repository:

bash
Skopiuj kod
git clone https://github.com/yourusername/GoBikeRide.git
Navigate to the project directory:

bash
Skopiuj kod
cd GoBikeRide
Install dependencies:

bash
Skopiuj kod
npm install
Set up environment variables (see .env.example for reference).

Run the development server:

bash
Skopiuj kod
npm run dev
Tech Stack
Frontend:

React
Next.js
Tailwind CSS
Framer Motion (for animations)
React Hook Form (for form handling)
Zod (for form validation)
Supabase (for authentication and database)
Backend (Supabase):

Supabase for user authentication and database management.
Contributing
We welcome contributions to GoBikeRide! If you would like to help improve the app, please follow these steps:

Fork the repository.
Create a new branch.
Make your changes.
Submit a pull request.
Please ensure that your code follows the existing style and is properly tested before submitting a pull request.

License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgements
Supabase for providing the authentication and database services.
React and Next.js for building the frontend.
Tailwind CSS for beautiful, responsive designs.
GoBikeRide is constantly evolving, and we are excited to continue adding more features and improvements. Thank you for using our app, and we hope it enhances your cycling experience! 🚴‍♂️🚴‍♀️
