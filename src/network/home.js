import { request } from './request';
export function HomeMultidata(){
    return request({
        url : '/home/multidata'
    }) 
}
