import {put, takeEvery, all, fork, cancel, take, cancelled, call} from 'redux-saga/effects';
import {delay} from 'redux-saga';

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watch() {
    yield takeEvery('*', inactivityTimer)
}


export function* helloSaga() {
    try {
        while (true){
            yield delay(10000)
            console.log('Hello Sagas!')        
        }

    } finally {
        if( yield cancelled()){
            yield put({type:'cancel the `time`r'})
        }

    }
}
export function* startTheTimer() {
    try {
        yield delay(10000);
        console.log('timer started');
     } finally {
            if(yield cancelled()){
                console.log('task cancelled');
            }
        }
}
export function* login() {
    //const time = yield fork(startTheTimer);
    console.log('login')
}
export function* logout() {
    console.log('logout')
}
let time;
export function* inactivityTimer(action) {
    if(action.type !== 'login' && action.type !== 'logout') {
        yield cancel(time);
        console.log('other')
    }
    if(action.type === 'logout') return;
    time = yield fork(startTheTimer);
    console.log('reset all')
}
