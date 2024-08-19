import HeaderBox from '@/components/HeaderBox'
import TotalBalaneBox from '@/components/TotalBalanceBox';

const Home = () => {
  const loggedIn = { firstName: 'Raza'};
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
            <HeaderBox 
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName|| 'Guest'}
            subtext="Access and manage your account and transactions efficiently."
            />
            <TotalBalaneBox 
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.53}
            />
        </header>
      </div>
    </section>
  )
}

export default Home
