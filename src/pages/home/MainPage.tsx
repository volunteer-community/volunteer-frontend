import MainBn from './MainBn';
import CategoryList from './CategoryList';
import { QueryClient, QueryClientProvider } from 'react-query';
const MainPage = () => {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <MainBn />
        <CategoryList />
      </QueryClientProvider>
    </>
  );
};

export default MainPage;
