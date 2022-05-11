import logo from './logo.svg';
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import AdmissionForm from './components/AdmissionForm';
import StudentList from './components/StudentList';
import NavigationBar from './components/NavigationBar';
import StudentDetail from './components/StudentDetail';
import AdmissionSuccessful from './components/AdmissionSuccessful';

function App() {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<StudentList />} />
        <Route path='admission/success' element={<AdmissionSuccessful />} />
        <Route path="admission" element={<AdmissionForm />} />
        <Route path="student/:student_id" element={<StudentDetail />} />
      </Routes>
    </>
  );
}

export default App;
