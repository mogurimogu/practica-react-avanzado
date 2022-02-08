import React from "react";
import { useParams } from "react-router-dom";
import useStoreAction from "../../../hooks/useStoreAction";
import useStoreData from "../../../hooks/useStoreData";
import { adDeleted, adLoaded } from "../../../store/actions";
import { getAd } from "../../../store/selectors";

import Layout from "../../layout";
import AdvertDetail from "./AdvertDetail";

function AdvertPage() {
  const { advertId } = useParams();
  const loadAdAction = useStoreAction(adLoaded);
  const deleteAdAction = useStoreAction(adDeleted);
  const advert = useStoreData(state => getAd(state, advertId))
  const handleDelete = () => {
    deleteAdAction(advertId)
  }

  React.useEffect(() => {
    loadAdAction(advertId);
  }, [loadAdAction, advertId]);

  return (
    <Layout>
      {advert && <AdvertDetail {...advert} onDelete={handleDelete} />}
    </Layout>
  );
}

export default AdvertPage;
