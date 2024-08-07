import { defineStore } from "pinia";

export const noteStore=defineStore("notes",{
        state:()=>({
           // 儲存各狀態的變數
           notes:[
               {
                   id:1,
                   title:'練習',
                   content:'Vue.js',
                   isPin:false
               },
               {
                   id:2,
                   title:'面試',
                   content:'永豐面談',
                   isPin:true
               },
               {
                   id:3,
                   title:'履歷',
                   content:'更新履歷',
                   isPin:false
               },
               {
                   id:4,
                   title:'薩爾達',
                   content:'離開台地',
                   isPin:false
               },
               {
                id:4,
                title:'薩爾達攻略',
                content:'找到神廟',
                isPin:false
            }
           ]
        }),
        getters:{
           // 要被讀取的資料函式，可以幫忙把資料分類
           finishNotes(state){
               return state.notes.filter(note=>note.isPin)
           }
        },
        actions:{
           // 變更、更新資料狀態的函式區
           addNote(title,content){
               if(title.length==0) return
               this.notes.push({
                   id:Math.floor(Math.random()*100000),
                   title:title,
                   content:content,
                   isPin:false
               })
           },
           markPin(id){
               const index=this.notes.findIndex(note=>note.id===id)
               if(index!==-1){
                this.notes[index].isPin=!this.notes[index].isPin
            }
           }
        }
       })