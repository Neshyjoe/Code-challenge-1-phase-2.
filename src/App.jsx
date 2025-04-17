import { useState } from 'react';
import './App.css';
import Header from './components/Header.jsx';
import ExpenseForm from './components/ExpenseForm.jsx';
import ExpensesTable from './components/ExpenseTable.jsx';
import SearchBar from './components/SearchBar.jsx'; 

function App() {
  const [expenses, setExpenses] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); 

  function handleAddExpense(newExpense) {
    setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
  }

  const filteredExpenses = expenses.filter((expense) =>
    expense.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    expense.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Header />
      <div className="main-content">
        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        <ExpenseForm onAddExpense={handleAddExpense} />
        <ExpensesTable expenses={filteredExpenses} />
      </div>
    </>
  );
}

export default App;
