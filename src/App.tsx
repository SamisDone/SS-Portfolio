import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'next-themes'
import { RootLayout } from './components/layout/RootLayout'
import { HomePage } from './pages/HomePage'

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <RootLayout>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </RootLayout>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App

