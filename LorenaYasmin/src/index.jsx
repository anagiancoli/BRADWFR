import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css'; // Estilos personalizados do usuário
import App from './App';
// Cria o ponto de entrada da aplicação
ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);