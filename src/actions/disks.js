import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/catch';
import { ajax } from 'rxjs/observable/dom/ajax';
import { Observable } from 'rxjs';

export const FETCH_ALL_DISKS = 'FETCH_ALL_DISKS';
export const FETCH_DISK = 'FETCH_DISK';
export const FETCH_ALL_DISKS_FULFILLED = 'FETCH_ALL_DISKS_FULFILLED';
export const FETCH_ALL_DISKS_REJECTED = 'FETCH_ALL_DISKS_REJECTED';

export const fetchAllDisks = () => ({ type: FETCH_ALL_DISKS });
export const fetchDisk = name => ({ type: FETCH_DISK, name: name });
export const fetchAllDisksFulfilled = disks => ({ type: FETCH_ALL_DISKS_FULFILLED, disks });
export const fetchError = error => ({ type: FETCH_ALL_DISKS_REJECTED, payload: error.message });

export const fetchDiskEpic = action$ => (
	action$.ofType(FETCH_ALL_DISKS)
		.mergeMap(action =>
			ajax
				.getJSON(`http://localhost:8080/api/v1/albums/`)
				.map(fetchAllDisksFulfilled)
				.catch(error => Observable.of(fetchError(error)))
	  )
);

export const fetchDiskByNameEpic = action$ => (
	action$.ofType(FETCH_DISK)
		.debounceTime(500)
		.mergeMap(action =>
			ajax
				.getJSON(`http://localhost:8080/api/v1/albums/id?=q=${action.id}/`)
				.map(resp => fetchAllDisksFulfilled(resp.items) )
				.takeUntil(action$.ofType(FETCH_DISK))
				.catch(error => Observable.of(fetchError(error)))
	  )
);


