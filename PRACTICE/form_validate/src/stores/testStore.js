// 要設定pinia的資料
// Action 修改狀態的方法，如改資料

import { defineStore} from 'pinia'
// test是我defineStore的名字
export const testStore= defineStore ("test", {
 state:()=>({
    // 儲存各狀態的變數
    todos:[
        {
            id:1,
            text:'父子組件練習',
            isFinished:false
        },
        {
            id:2,
            text:'pinia練習',
            isFinished:false
        }
    ]
 }),
 getters:{
    // 要被讀取的資料函式
 },
 actions:{
    // 變更資料狀態的函式區
 }
})