import  express, { Request,Response }  from "express";
import { Card, CreateCardRequest, GetCardsResponse } from "../types/cards";
import { idParams } from "../types/common";


export const cardsRouter = express.Router();

cardsRouter.get('/', (request:Request<{},{}>,response:Response<GetCardsResponse>)=>{

})

cardsRouter.get('/:id', (request:Request<idParams, {}>,response:Response<Card>)=>{
    
})


cardsRouter.post('/', (request:Request<{},CreateCardRequest>,response:Response<Card>)=>{
    
})

cardsRouter.put('/:id', (request:Request<idParams,Card>,response:Response<Card>)=>{
    
})

cardsRouter.delete('/:id', (request:Request<idParams>,response:Response<void>)=>{
    
})