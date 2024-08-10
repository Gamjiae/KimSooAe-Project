import '../a.css';
import Map from '../components/Map';
import Folder from '../components/Folder';
import BottomNav from '../components/BottomNav';


function BookmarkPage() {
  return (
    <div className="w-full h-full">
      <Map />
      <Folder />
      <BottomNav />
    </div>
  );
}

export default BookmarkPage;