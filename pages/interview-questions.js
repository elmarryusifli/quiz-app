import Link from 'next/link';
import Layout from '../components/Layout';

const InterviewQuestions = () => {
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
    <Layout>
    <div>
      <h1>Interview Questions</h1>
      <ul>
        {topics.map(topic => (
          <li key={topic}>
            <Link href={`/interview-questions/${topic.toLowerCase().replace(/ /g, '-')}`}>
              {topic} Interview Questions
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
    </Layout>
  );
};

export default InterviewQuestions;
