import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Landing } from './pages/Landing';
import { Tools } from './pages/Tools';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { ToolPage } from './pages/ToolPage';
import { UserManagement } from './pages/UserManagement';
import { Pricing } from './pages/Pricing';
import { Payment } from './pages/Payment';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import { SidebarProvider } from './context/SidebarContext';

export function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <SidebarProvider>
          <Router>
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
              <Navbar />
              <main className="flex-grow pt-16">
                <Routes>
                  <Route path="/" element={<Landing />} />
                  <Route path="/tools" element={<Tools />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/tool/:id" element={<ToolPage />} />
                  <Route path="/user/*" element={<UserManagement />} />
                  <Route path="/pricing" element={<Pricing />} />
                  <Route path="/payment" element={<Payment />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </Router>
        </SidebarProvider>
      </ThemeProvider>
    </AuthProvider>
  );
}