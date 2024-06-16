// import { useState } from 'react';
// import axios from 'axios';
// import { useRouter } from 'next/router';
// import Layout from '../components/Layout';
// import withProtectedRoute from '../components/ProtectedRoute';

// function CreateQuiz() {
//   const [questionsText, setQuestionsText] = useState('');
//   const router = useRouter();

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       await axios.post('/api/questions', { questions: questionsText });
//       setQuestionsText('');
//       router.push('/quiz'); // Redirect to the quiz page
//     } catch (error) {
//       console.error('Error adding questions:', error);
//     }
//   };

//   return (
//     <Layout>
//       <h1>Create Quiz</h1>
//       <form onSubmit={handleSubmit}>
//         <textarea
//           value={questionsText}
//           onChange={(e) => setQuestionsText(e.target.value)}
//           rows="10"
//           cols="50"
//           placeholder="Enter your questions here..."
//         ></textarea>
//         <button type="submit">Add Questions</button>
//       </form>
//     </Layout>
//   );
// }

// export default withProtectedRoute(CreateQuiz);

///////////////

// pages/create-quiz.js
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import withProtectedRoute from '../components/ProtectedRoute';

function CreateQuiz() {
  const [questionsText, setQuestionsText] = useState('');
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('/api/questions', { questions: questionsText });
      setQuestionsText('');
      router.push('/quiz'); // Redirect to the quiz page
    } catch (error) {
      console.error('Error adding questions:', error);
    }
  };

  return (
    <Layout>
      <h1 className='cq'>Create Quiz</h1>
      <form onSubmit={handleSubmit}>
        <textarea className='tcq'
          value={questionsText}
          onChange={(e) => setQuestionsText(e.target.value)}
          rows="10"
          cols="50"
          placeholder="Enter your questions here..."
        ></textarea>
        <button type="submit">Add Questions</button>
      </form>
    </Layout>
  );
}

export default withProtectedRoute(CreateQuiz);
