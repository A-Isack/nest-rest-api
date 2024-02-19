import {
    UseInterceptors,
    NestInterceptor,
    ExecutionContext,
    CallHandler
}
from '@nestjs/common'

import { Observable } from 'rxjs'
import { map } from 'rxjs/operators' // user to run functions before returning values via endpoint 
import { plainToClass } from 'class-transformer'

export function Serialize (dto: any){
    return UseInterceptors(new SerializeInterceptor(dto))   
} 

export class SerializeInterceptor implements NestInterceptor{
    constructor (private dto: any){}
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
        // This code will run before a request or controller runs.
        console.log('Running Serialize interceptor before the handler before the handler')
    
        return next.handle().pipe(
            map((data)=>{
                console.log(data)
                // runs before the response is sent out 
                console.log('Running Serialize interceptor before the response is sent out ')
                return plainToClass(this.dto, data, {
                    excludeExtraneousValues:true
                    })
            })
        )
    }
}