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
        },
        {
            id:3,
            text:'面試',
            isFinished:false
        },
        {
            id:4,
            text:'作品集',
            isFinished:false
        }
    ]
 }),
 getters:{
    // 要被讀取的資料函式，可以幫忙把資料分類
    finishTodos(state){
        return state.todos.filter(todo=>todo.isFinished)
    }
 },
 actions:{
    // 變更、更新資料狀態的函式區
    addTodo(text){
        if(text.length==0) return
        this.todos.push({
            id:Math.floor(Math.random()*100000),
            text:text,
            isFinished:false
        })
    },
    toggleTodo(id){
        const index =this.todos.findIndex((todo) => todo.id === id)
        this.todos[index].isFinished = !this.todos[index].isFinished
    }
 }
})