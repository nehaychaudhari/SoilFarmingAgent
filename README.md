# SoilFarmingAgent
Soil Farming Agent (Template). Soil and Distributors Data. Home, Signup, Login, Admin Dashboard, User Dashboard pages. Firebase Realtime Database.

### User Registration and Login Form with Firebase Integration 
Firebase Official Website: [Firebase](https://firebase.google.com/)  

1. Create Forms:  
   Start by creating a user registration and login form. Include input fields and assign unique `id` attributes to each input and button element.

2. Set Up Firebase:  
   - Go to the official [Firebase website](https://firebase.google.com/) and create an account.  
   - Click on Get Started, then select Create Project, enter the project name, and click Continue.  
   - Disable Analytics and proceed.  
   - On the project page, click the Web `</>` icon, enter the web app name, and click Register App.  

3. Use Script Tag:  
   - In the next step, select "Use a `<script>` tag" and copy the provided code snippet.  
   - Create a `register.js` file in your Visual Studio Code project and paste the copied code there.  

4. Authentication Setup:  
   - Return to the Firebase console and click Continue to Console.  
   - Go to Authentication > Get Started, then enable the Email/Password option and click Save.  

5. Domain Authorization:  
   - Run your project using the Live Server in Visual Studio Code.  
   - Copy the `127.0.0.1` URL and go to Firebase Project Settings > Authorized Domains.  
   - Click Add Domain, paste the URL in the input field, and remove everything except `127.0.0.1`.

6. Link Scripts to HTML:  
   - In `register.html`, link `register.js` inside the `<head>` section with `type="module"`.

7. Basic Firebase Initialization in `register.js`:  

   ```javascript
   // Initialize Firebase
   const app = initializeApp(firebaseConfig);
   const auth = getAuth(app);

   // Submit Event Listener
   const submit = document.getElementById('submit');
   submit.addEventListener("click", function (event) {
       event.preventDefault();

       // Capture User Inputs
       const email = document.getElementById('email').value;
       const password = document.getElementById('password').value;
   })
   ```

8. Complete User Registration Logic:  
   Visit the [Firebase Documentation](https://firebase.google.com/docs/auth/web/start#web_4) and copy the code under Sign up new users (Modular API). Paste this code below the `const password` line in `register.js`. Ensure the `import` statements are at the beginning of the file.*

9. Firebase SDK Update:  
   Visit [Available Firebase JS SDKs](https://firebase.google.com/docs/web/learn-more#available-libraries), expand the Authentication section, and copy the provided URL (`https://www.gstatic.com/firebasejs/11.3.0/firebase-auth.js`). Replace `"firebase/auth"` with this URL.

10. User Login Form Setup:  
   - Create `login.js` in your project.  
   - Copy the code from `register.js` and paste it into `login.js`.  
   - Replace `createUserWithEmailAndPassword` with `signInWithEmailAndPassword`.  
   - Link `login.js` to `userlogin.html` and ensure the script type is set to `module`.

---------------------------------------------------------------------------------------------------------------------------------

### Setting Up Firebase Realtime Database  

1. Select Realtime Database in Firebase:  
   - Open the Firebase website and go to the sidebar.  
   - Under Product Categories, select Build > Realtime Database.  
   - Click on Create Database.  

2. Configure Database Settings:  
   - Ensure the language is set to English, then click Next.  
   - In the Security Rules section, select Test Mode and click Enable.  

3. Obtain Firebase Configuration Code:  
   - In the Firebase sidebar, click on the Gear Icon next to Project Overview.  
   - Select Project Settings.  
   - Copy the CDN Code provided.  
   - Paste this code in the `admindashboard.html` file, just before the closing `</body>` tag.  

4. Implement CRUD Operations (Add, Retrieve, Update, Delete):  
   - Write JavaScript code to perform CRUD (Create, Read, Update, Delete) operations on the Realtime Database.  
   - Import the Firebase Database SDK, as it is essential for database operations.  

5. Data Storage in Realtime Database:  
   - The stored data will be visible in the Realtime Database under the Data section.  
   - Firebase will create a folder using the name you specify (e.g., `DataSet`), and all stored data will be saved inside this folder.  

---------------------------------------------------------------------------------------------------------------------------------

### Displaying Firebase Data in Table Format on a Web Page

1. Copy Firebase Web App Config Code:  
   - Go to Firebase Project Settings.  
   - In the Web App Config section, copy the provided configuration code.  
   - Paste this code inside `userdashboard.html`, just before the closing `</body>` tag.  

2. Write JavaScript to Display Data in Table Format:  
   - Use JavaScript to fetch data from Firebase and display it in a table format on the webpage.  
   - Ensure the Firebase Database SDK is properly imported.  

3. Run the Code and Verify Output:  
   - Once the code runs successfully, the data from Firebase will be displayed on the webpage in a structured table format.  
