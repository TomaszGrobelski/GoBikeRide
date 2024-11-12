import DifficultyTab from './DifficultyTabs';
import ProvinceSelect from './ProvinceSelect';
import SearchRoad from './SearchRoad';

const RoadFilters = () => {
    return (
        <div className='flex flex-wrap items-center justify-start gap-5 rounded-lg bg-white p-5'>
            <SearchRoad />
            <ProvinceSelect />
            <DifficultyTab />
        </div>
    );
};

export default RoadFilters;
