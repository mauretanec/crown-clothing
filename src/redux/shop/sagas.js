import { all, takeLatest, call, put } from 'redux-saga/effects'

import shopActionTypes from './types'
import { fetchCollectionsSuccess, fetchCollectionsFailure } from './actions'
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils'

export function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection('collections')
    const snapshot = yield collectionRef.get()
    const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot)
    yield put(fetchCollectionsSuccess(collectionsMap))
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message))
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(
    shopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  )
}

export function* shopSagas() {
  yield all([
    call(fetchCollectionsStart)
  ])
}
