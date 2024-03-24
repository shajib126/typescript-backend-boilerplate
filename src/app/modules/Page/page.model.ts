import express from 'express'
import { model, Schema } from 'mongoose'
import { TPage } from './page.interface'

const pageSchema = new Schema<TPage>({
    admin:{
        type:Schema.Types.ObjectId,
        required:true
    },
    name:{
        type:String,
        required:true
    }

})


export const Page = model<TPage>('Page',pageSchema)


