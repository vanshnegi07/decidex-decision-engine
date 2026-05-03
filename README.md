<h1>DecideX – Smart Decision Making Application</h1>

<h2>Introduction</h2>
<p>
DecideX is a web-based decision support application developed using React. The purpose of this project is to help users make informed and logical decisions by comparing multiple options based on selected criteria. Instead of relying on guesswork, the application uses a weighted scoring system to evaluate and rank different choices.
</p>

<h2>Objectives</h2>
<ul>
  <li>To implement a structured decision-making system using weighted scoring</li>
  <li>To allow users to compare multiple options effectively</li>
  <li>To provide a clear visual representation of results</li>
  <li>To create an interactive and user-friendly interface</li>
</ul>

<h2>Features</h2>
<ul>
  <li>Add multiple options for decision making</li>
  <li>Create custom criteria and assign importance (weights)</li>
  <li>Rate each option based on defined criteria</li>
  <li>Automatically calculate scores using a weighted formula</li>
  <li>Display results using charts for better understanding</li>
  <li>Light and dark mode toggle for improved user experience</li>
  <li>Store previous decisions using local storage</li>
</ul>

<h2>Technologies Used</h2>
<ul>
  <li>React (Functional Components and Hooks)</li>
  <li>JavaScript (ES6)</li>
  <li>Tailwind CSS for styling and responsiveness</li>
  <li>Recharts for data visualization</li>
  <li>React Router for navigation</li>
</ul>

<h2>Project Structure</h2>
<ul>
  <li><strong>App.jsx</strong> – Handles routing and main layout</li>
  <li><strong>Navbar.jsx</strong> – Navigation bar with theme toggle</li>
  <li><strong>Home.jsx</strong> – Landing page of the application</li>
  <li><strong>CreateDecision.jsx</strong> – Allows users to input options, criteria, and ratings</li>
  <li><strong>Result.jsx</strong> – Displays calculated results and charts</li>
  <li><strong>History.jsx</strong> – Displays previously saved decisions</li>
  <li><strong>index.css</strong> – Contains Tailwind CSS configuration</li>
</ul>

<h2>Working</h2>
<p>
The application uses React's <code>useState</code> hook to manage data such as options, criteria, and ratings. Each option is evaluated based on user-provided ratings and assigned weights for each criterion.
</p>

<p>
The final score is calculated using the formula:
<br>
<strong>Score = Σ (Rating × Weight)</strong>
</p>

<p>
The application then compares all calculated scores and identifies the best option based on the highest value. The results are displayed using charts for better visualization, and decision data is stored in local storage for future reference.
</p>

<h2>Future Enhancements</h2>
<ul>
  <li>Add functionality to edit or delete saved decisions</li>
  <li>Integrate a backend database for persistent storage</li>
  <li>Improve UI with advanced animations and design</li>
  <li>Add user authentication and personalized dashboards</li>
</ul>

<h2>Conclusion</h2>
<p>
DecideX demonstrates how React can be used to build interactive and practical web applications. It applies logical decision-making techniques to solve real-world problems while showcasing important frontend concepts such as state management, routing, and component-based architecture.
</p>
