import React from "react";
import "./App.css"; // Import CSS styles

const App: React.FC = () => {
  return (
    <div id="root">
      <header className="main-header">
        <h1>Welcome to my portfolio!</h1>
        <p>
          I am an AI engineer for AthenaReads, with previous experience as a
          data engineer. I specialize in data pipeline automation and data
          platform architecture. Proficient in various data engineering tools
          such as AWS CDK, AWS SDK, LocalStack, Kafka, DBT, Databricks, Dagster,
          Docker, Cube, Paradime, and more. Skilled in languages including
          Python, SQL, Java, TypeScript, JavaScript, C++, and C.
        </p>
        <p>
          Please explore my completed projects to see the extent of my knowledge
          and experience, and feel free to reach out if you have any questions
          or suggestions to improve my work!
        </p>
      </header>
      <div className="error-message">Scroll down for more content</div>
    </div>
  );
};

export default App;
