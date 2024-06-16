import Link from 'next/link';
import Layout from '../components/Layout';

const Documentation = () => {
  const topics = [
    { name: "API Testing", link: "https://restfulapi.net" },
    { name: "Cucumber", link: "https://cucumber.io/docs/guides/10-minute-tutorial/" },
    { name: "Cypress", link: "https://docs.cypress.io/guides/overview/why-cypress" },
    { name: "Docker", link: "https://docs.docker.com/" },
    { name: "Git", link: "https://www.git-scm.com/doc" },
    { name: "HTML", link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { name: "Java", link: "https://docs.oracle.com/en/java/" },
    { name: "JavaScript", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { name: "JDBC", link: "https://docs.oracle.com/javase/8/docs/technotes/guides/jdbc/" },
    { name: "Jest", link: "https://jestjs.io/docs/getting-started" },
    { name: "JUnit", link: "https://junit.org/junit5/docs/current/user-guide/" },
    { name: "Maven", link: "https://maven.apache.org/guides/index.html" },
    { name: "MongoDB", link: "https://docs.mongodb.com/" },
    { name: "Playwright", link: "https://playwright.dev/docs/intro" },
    { name: "Pytest", link: "https://docs.pytest.org/en/6.2.x/" },
    { name: "Python", link: "https://docs.python.org/3/" },
    { name: "Selenium", link: "https://www.selenium.dev/documentation/en/" },
    { name: "SQL", link: "https://www.w3schools.com/sql/" },
    { name: "TestNG", link: "https://testng.org/doc/" },
    { name: "TypeScript", link: "https://www.typescriptlang.org/docs/" },
    { name: "UI Testing", link: "https://en.wikipedia.org/wiki/Graphical_user_interface_testing" },
    { name: "XML", link: "https://www.w3schools.com/xml/" },
  ];

  return (
    <Layout>
    <div className="container">
      <h1>Documentation</h1>
      <ul className="topics-list">
        {topics.map((topic) => (
          <li key={topic.name} className="doc-topic">
            <a href={topic.link} target="_blank" rel="noopener noreferrer">
              {topic.name} Documentation
            </a>
          </li>
        ))}
      </ul>
    </div>
    </Layout>
  );
};

export default Documentation;
