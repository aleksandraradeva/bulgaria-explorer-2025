Project Documentation

Project Overview
My project "BulgariaExplorer" is a web SPA application built with React and Node.js + MongoDB as a backend service. It provides a platform where users can browse, share and manage their travel trips in Bulgaria. 

Users can log in (and logout), explore all trips on the catalog page, view trip details, create trips, edit and delete their own trips, add/remove trips from their wishlist. For easy trip management each user has it's own area ("My Trips" and "My Wishlist"). Under "My Trips" each user can find their own created trips. Under "My Wishlist" each user can find their saved trips, favorite Bulgarian destinations they want to visit.

Guest (before login) can register, explore all trips on the catalog page and view trip details. Guests have no access to the functional activities of the web app.

Key Features:
- Home: Static page with hero  section, CTA button and short overview, how the website works.
- Explore Trips (Catalog): Users and guests can explore trips. For each trip users and guests can learn more details.
- Trip Creation & Management: Users can create trips via React controlled form. Edit and Delete funcionality is only available for the
author of the trip. Edit and Delete funcionality is available on the Details pages or unter "My Trips".
- Personalized Wishlist: Users can add and remove trips to/from their wishlist. Own created trips can not be added to the wishlist. Add &   Remove functionality is avaliable on the Home & Detail pages. Remove can also be done unter "My Wishlist".
- Error Handling and Data validation: The app displays user-friendly error messages for authentication and trip management operations (e.g. Delete confirmation modals etc.).
- Conditional Rendering: The application provides intuitive feedback when content is unavailable (e.g. no trips added, no trips created etc.)
- User Authentication: Secure login/logout functionality using JWT (JSON Web Tokens).
- Route Guards: Guest are not able to access private pages, logged-in users are not able to see the login/register pages.