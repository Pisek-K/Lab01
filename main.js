console.log(React);
console.log(ReactDOM);


function App() {
    const year = new Date().getFullYear()
    const sumAge = year - 1996
    // const month = currentDate.getMonth()
    // const sumMonth = month - 6
    const st1 = {color: 'whitesmoke', backgroundColor:'cornflowerblue'}
    const user = { fname: 'Pisek', lname: 'Kidsavanon', birthDate: 1996 }
    return (
        <div>
            <h1>Lab01</h1>
            <h1 style={st1}>Name : {user.fname}  {user.lname}</h1>
            <p>Age : {sumAge}</p>
        </div>
    )
}

ReactDOM.createRoot(document.querySelector('#root')).render(<App />)
