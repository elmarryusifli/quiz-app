import Link from 'next/link';

const Documentation = () => {
  const topics = [
    "API Testing",
    "Cucumber",
    "Cypress",
    "Docker",
    "Git",
    "HTML",
    "Java",
    "JavaScript",
    "JDBC",
    "Jest",
    "JUnit",
    "Maven",
    "MongoDB",
    "Playwright",
    "Pytest",
    "Python",
    "Selenium",
    "SQL",
    "TestNG",
    "TypeScript",
    "UI Testing",
    "XML"
  ];

  return (
    <div>
      <h1>Documentation</h1>
      <ul>
        {topics.map(topic => (
          <li key={topic}>
            <Link href={`/documentation/${topic.toLowerCase().replace(/ /g, '-')}`}>
              {topic}
            </Link>
          </li>
        ))}
      </ul>
      <style jsx>{`
        ul {
          list-style: none;
          padding: 0;
        }
        li {
          margin: 10px 0;
        }
        a {
          font-size: 1.5em;
          color: blue;
          text-decoration: none;
        }
        a:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
};

export default Documentation;
