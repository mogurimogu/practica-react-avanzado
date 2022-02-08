import React from 'react';

import Layout from '../../layout';
import FiltersForm from './FiltersForm';
import AdvertsList from './AdvertsList';
import EmptyList from './EmptyList';
import storage from '../../../utils/storage';
import { defaultFilters, filterAdverts } from './filters';
import useStoreData from '../../../hooks/useStoreData';
import { getAds } from '../../../store/selectors';
import useStoreAction from '../../../hooks/useStoreAction';
import { adsLoaded } from '../../../store/actions';

const getFilters = () => storage.get('filters') || defaultFilters;
const saveFilters = filters => storage.set('filters', filters);

function AdvertsPage() {
  const ads = useStoreData(getAds);
  const LoadAdsAction = useStoreAction(adsLoaded)
  const [filters, setFilters] = React.useState(getFilters);

  React.useEffect(() => {
    LoadAdsAction();
  }, [LoadAdsAction]);

  React.useEffect(() => {
    saveFilters(filters);
  }, [filters]);

  const filteredAdverts = filterAdverts(ads, filters);

  return (
    <Layout>
      {ads.length > 0 && (
        <FiltersForm
          initialFilters={filters}
          defaultFilters={defaultFilters}
          prices={ads.map(({ price }) => price)}
          onFilter={setFilters}
        />
      )}
      {filteredAdverts.length ? (
        <AdvertsList adverts={filteredAdverts} />
      ) : (
        <EmptyList advertsCount={ads.length} />
      )}
    </Layout>
  );
}

export default AdvertsPage;
