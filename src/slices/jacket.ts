import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TPayload = {
    name:string | null;
    price:string | null;
    preview_front_url: string | null;
    pants_url:string | null;
    preview_full_url:string | null;
  };
type TCategory ={
  category:string;
}
  const initialState = {
    category:"jacket",
    jacket:{
        name:"",
        price:"",
        j_preview_full_url:"",
        j_preview_front_url:"",
        galery_url:"",
        pants_url:''
    },
    vest:{
      name:"",
      price:"",
      preview_full_url:"",
      preview_front_url:"",
      galery_url:"",
    }
  };

const suitSlice = createSlice({
    name:'suit',
    initialState:initialState,
    reducers:{
        changeSuit:(state, {payload})=>{
            state.jacket.j_preview_front_url = payload.j_preview_front_url ;
            state.jacket.pants_url = payload.j_pants_url;
            state.jacket.name=payload.j_name;
            state.jacket.price=payload.j_price;
            state.jacket.j_preview_full_url=payload.j_preview_full_url;
            state.vest.preview_front_url = payload.preview_front_url;
            state.vest.name=payload.name;
            state.vest.price=payload.price;
            state.vest.preview_full_url=payload.preview_full_url
        },
      //   changeVest:(state, {payload}: PayloadAction<TPayload>)=>{
      //     state.vest.preview_front_url = payload.preview_front_url;
      //     state.vest.name=payload.name;
      //     state.vest.price=payload.price;
      //     state.vest.preview_full_url=payload.preview_full_url
      // },
      changeCategory:(state, {payload}: PayloadAction<TCategory>)=>{
        state.category=payload.category
    }
    },
});




  export const jacketReducer = suitSlice.reducer;
  export const {changeSuit,changeCategory} = suitSlice.actions


