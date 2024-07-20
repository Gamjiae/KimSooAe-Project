import Map from '../components/Map';
import Search from '../components/Search';
import BottomNav from '../components/BottomNav';
import { useKeyword } from '../context/KeywordContext';

function MapPage() {
  const { keyword } = useKeyword();

  return (
      <div className="app" style={{ position: 'relative', width: '100%', height: '100vh' }}>
            <Map keyword={keyword} locationIconPosition={{ bottom: '80px', left: '20px' }}/>
            <Search />
            <BottomNav />
      </div>
  );
}

export default MapPage;
