import { useState } from 'react';
import './App.css';
import Header from './components/Header.jsx';
import ExpenseForm from './components/ExpenseForm.jsx';
import ExpenseTable from './components/ExpenseTable.jsx';

function App() {
    const [expenses, setExpenses] = useState([]);
    const [searchTerm, setSearchTerm] = useState([]);

    function handleAddExpense(newExpense) {
      setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
    
    const filteredExpenses = expenses.filter((expense) =>
      expense.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      expense.description.toLowerCase().includes(searchTerm.toLowerCase())
     );
    }

  return (
    <>
      <Header />
      <div className="main-content"></div>
      <searchBar searchTerm={searchTerm} onsearchChange={setSearchTerm} />
      <ExpenseForm onAddExpense={handleExpense} />
      <ExpenseTable expense={sortExpenses} />

    
    </>
  );
}

export default App
