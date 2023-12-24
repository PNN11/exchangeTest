import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import ExchangeForm from './components/ExchangeForm'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ExchangeForm />
    </QueryClientProvider>
  )
}

export default App
