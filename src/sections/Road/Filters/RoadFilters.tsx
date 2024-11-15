import { Difficulty, ITrailFilters, Province } from '@/types/Road/road.types';

import DifficultyTab from './DifficultyTabs';
import ProvinceSelect from './ProvinceSelect';
import SearchRoad from './SearchRoad';

interface IRoadFilters {
    filters: ITrailFilters;
    setFilters: React.Dispatch<React.SetStateAction<ITrailFilters>>;
}

const RoadFilters = ({ filters, setFilters }: IRoadFilters) => {
    const handleNameChange = (name: string) => setFilters((prev) => ({ ...prev, name }));

    const handleProvinceChange = (province: Province | '') => setFilters((prev) => ({ ...prev, province }));

    const handleDifficultyChange = (difficulty: Difficulty) => setFilters((prev) => ({ ...prev, difficulty }));

    return (
        <div className='flex flex-wrap max-w-7xl w-full  items-center justify-start gap-5 rounded-lg bg-white p-5'>
            <SearchRoad onNameChange={handleNameChange} value={filters.name} />
            <ProvinceSelect onProvinceChange={handleProvinceChange} />
            <DifficultyTab onDifficultyChange={handleDifficultyChange} />
        </div>
    );
};

export default RoadFilters;
