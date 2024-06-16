import withProtectedRoute from '../components/ProtectedRoute';
import Layout from '../components/Layout';
import Link from 'next/link';

const Quizzes = () => {
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
      <h1 className='qz'>Quizzes</h1>
      <ul>
        {topics.map(topic => (
          <li key={topic} className="quiz-topic">
            <Link href={`/quizzes/${topic.toLowerCase().replace(/ /g, '-')}`}>
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
        .quiz-topic a {
          font-size: 1.5em;
          color: blue;
          text-decoration: none;
        }
        .quiz-topic a:hover {
          text-decoration: none;
        }
      `}</style>
    </div>
    </Layout>
  );
};

export default withProtectedRoute(Quizzes);
