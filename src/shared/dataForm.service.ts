import { Injectable} from '@nestjs/common';

@Injectable()
export class DataformService {
    
    create(v){
        console.log('create')
        let data:any
        data = {
            success:true,
            data:v
        }
        return data
    }

    error(m){
        let data:any
        data = {
            success:false,
            message:m
        }
        return data
    }

}