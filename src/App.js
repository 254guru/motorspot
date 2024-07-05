import './App.css';
import Header from './components/Header';
import carImage from './assets/view-3d-car.png';

function App() {
  return (
    <div className="flex justify-center min-h-screen bg-gray-200 p-4 md:p-8 overflow-hidden">
      <div className="w-full md:w-3/4 h-full bg-gray-300 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-grow h-auto md:h-[60vh] bg-[#191620] flex flex-col justify-center items-center">
          <div className='max-w-6xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center gap-8 relative z-10'>
            <div className="mb-8 md:mb-0 md:mr-8 flex-1 mt-8 md:mt-0">
              <h1 className='text-green-500 font-bold text-4xl md:text-5xl'>GET YOUR</h1>
              <h1 className='text-green-500 font-bold text-4xl md:text-5xl'>DREAM CAR</h1>
              <h3 className='text-white text-xl md:text-2xl font-bold'>NEED TO RENT A CAR?</h3>
              <p className='text-orange-500 text-xl'>Discover the perfect ride with us, whether you're looking to rent or buy. Explore our extensive range of brand new and quality second-hand cars tailored to your needs and budget. Drive your dream car today and experience unmatched convenience and exceptional service!</p>
              <button className='w-40 py-3 rounded-2xl bg-green-500 hover:bg-green-400 mt-4'>Explore Now</button>
            </div>
            <div className="flex-shrink-0 w-full md:w-[50%] h-[50%] md:h-[70%] relative z-0 md:z-0">
              <img
                src={carImage}
                alt="Car"
                className="w-full h-full object-cover opacity-75 md:opacity-100 rounded-lg"
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;