import MainLayout from "../layouts/MainLayout"
import Calendar from "../components/Calendar";

const Home = () => {

  return (
    <MainLayout>
      <main className="main">
        <div className="main__text-container">
          <h1 className="main__title">Choose the day <br/> for the meeting</h1>
          <div className="main__description">We encourage you to book your<br/> appointment online.<br/>This will save you time.</div>
        </div>
        <div className="calendar__container">
          <Calendar/>
        </div>
      </main>
    </MainLayout>
  );
}

export default Home;
