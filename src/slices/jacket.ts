import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TPayload = {
    name:string ;
    price:string ;
    preview_front_url: string ;
    pants_url:string ;
    preview_full_url:string ;
    galery_url:string;
  };
  type TPayloadShirt = {
    name:string ;
    price:string ;
    preview_full_url: string ;
    preview_tail_url:string ;
    preview_collar_url:string ;
    galery_url:string;
  };
type TPayloadVest = {
    name:string ;
    price:string ;
    preview_front_url: string ;
    preview_full_url:string ;
    galery_url:string;
  };
  type TPayloadOther = {
    name:string ;
    price:string ;
    preview_full_url:string ;
    galery_url:string;
  };
type TCategory ={
  category:string;
}
type TPreview ={
  bigPreview:boolean;
}
type TLook ={
  look:boolean;
}
  const initialState = {
    bigPreview:false,
    look:false,
    category:"jacket",
    jacket:{
        name:"",
        price:"",
        preview_full_url:"/asset/default-img/default-jacket.png",
        preview_front_url:"",
        galery_url:"",
        pants_url:"",
    },
    shirt:{
        name:"",
        price: "",
        preview_full_url: "/asset/default-img/default-shirt.png",
        preview_tail_url: "",
        preview_collar_url: "",
        galery_url: ""
    },
    vest:{
      name:"",
      price:"",
      preview_full_url:"/asset/default-img/default-vest.png",
      preview_front_url:"",
      galery_url:"",
    },
    tie:{
      name:"",
      price:"",
      preview_full_url:"/asset/default-img/default-tie.png",
      galery_url:"",
    },
    socks:{
      name:"",
      price:"",
      preview_full_url:"/asset/default-img/default-socks.png",
      galery_url:"",
    },
    belt:{
      name:"",
      price:"",
      preview_full_url:"/asset/default-img/default-belt.png",
      galery_url:"",
    },
    shoes:{
      name:"",
      price:"",
      preview_full_url:"/asset/default-img/default-shoes.png",
      galery_url:"",
    }
  };

const suitSlice = createSlice({
    name:'suit',
    initialState:initialState,
    reducers:{
        changeSuit:(state, {payload}:PayloadAction<TPayload>)=>{
            state.jacket.preview_front_url = payload.preview_front_url ;
            state.jacket.pants_url = payload.pants_url;
            state.jacket.name=payload.name;
            state.jacket.price=payload.price;
            state.jacket.preview_full_url=payload.preview_full_url;
            state.jacket.galery_url=payload.galery_url;   
        },
        changeShirt:(state, {payload}:PayloadAction<TPayloadShirt>)=>{
          state.shirt.preview_collar_url = payload.preview_collar_url ;
          state.shirt.preview_tail_url = payload.preview_tail_url;
          state.shirt.name=payload.name;
          state.shirt.price=payload.price;
          state.shirt.preview_full_url=payload.preview_full_url;
          state.shirt.galery_url=payload.galery_url;
       
      },
        changeVest:(state, {payload}:PayloadAction<TPayloadVest>)=>{
          state.vest.preview_front_url = payload.preview_front_url;
          state.vest.name=payload.name;
          state.vest.price=payload.price;
          state.vest.preview_full_url=payload.preview_full_url;
          state.vest.galery_url=payload.galery_url;
          },
        changeTie:(state, {payload}:PayloadAction<TPayloadOther>)=>{
          state.tie.name=payload.name;
          state.tie.price=payload.price;
          state.tie.preview_full_url=payload.preview_full_url
          state.tie.galery_url=payload.galery_url
          },
        changeSocks:(state, {payload}:PayloadAction<TPayloadOther>)=>{
          state.socks.name=payload.name;
          state.socks.price=payload.price;
          state.socks.preview_full_url=payload.preview_full_url
          state.socks.galery_url=payload.galery_url
          },
        changeBelt:(state, {payload}:PayloadAction<TPayloadOther>)=>{
          state.belt.name=payload.name;
          state.belt.price=payload.price;
          state.belt.preview_full_url=payload.preview_full_url
          state.belt.galery_url=payload.galery_url
          },
        changeShoes:(state, {payload}:PayloadAction<TPayloadOther>)=>{
          state.shoes.name=payload.name;
          state.shoes.price=payload.price;
          state.shoes.preview_full_url=payload.preview_full_url;
          state.shoes.galery_url=payload.galery_url
          },
        changeCategory:(state, {payload}: PayloadAction<TCategory>)=>{
          state.category=payload.category
          },
        changebigPreivew:(state, {payload}: PayloadAction<TPreview>)=>{
            state.bigPreview=payload.bigPreview
          },
        changeLook:(state, {payload}: PayloadAction<TLook>)=>{
            state.look=payload.look
          },
    },
});




  export const jacketReducer = suitSlice.reducer;
  export const {changeSuit,changeCategory,changeVest,changeTie,changeSocks,changeBelt, changeShoes,changeShirt,changebigPreivew ,changeLook} = suitSlice.actions


