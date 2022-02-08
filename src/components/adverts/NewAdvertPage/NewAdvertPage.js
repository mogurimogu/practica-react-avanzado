import React from 'react';
import useStoreAction from '../../../hooks/useStoreAction';
import { adCreated } from '../../../store/actions';

import Layout from '../../layout';
import NewAdvertForm from './NewAdvertForm';

function NewAdvertPage() {

  const createAdAction = useStoreAction(adCreated)

  return (
    <Layout>
      <NewAdvertForm onSubmit={createAdAction} />
    </Layout>
  );
}

export default NewAdvertPage;
