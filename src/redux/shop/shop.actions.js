import ShopActionTypes from './shop.types';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

export const updateCollections = (collectionsMap) => ({

        type:ShopActionTypes.UPDATE_COLLECTIONS,
        payload:collectionsMap


})
    