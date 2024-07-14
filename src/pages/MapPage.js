import Map from '../components/Map'
import Search from '../components/Search'
import BottomNav from '../components/BottomNav'

function MapPage() {
    return (
        <div className="app">
            <Map />
            <Search />
            <BottomNav />
        </div>
    )
}

export default MapPage