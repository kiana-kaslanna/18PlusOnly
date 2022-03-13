import 'antd/dist/antd.css';
import './App.css';
import Contents from './components/Contents';
import ContextProvider from './services/Context/Context';

function App() {
    return (
        <>
            <ContextProvider>
                <div className="App">
                    <Contents />
                </div>
            </ContextProvider>
        </>
    );
}

export default App;
