const initialWagonState = {
  supplies: 100,
  distance:0,
  days: 0
};

const Redusky=(state=initialWagonState, action)=>{
 switch(action.type){
   case 'gather':{
     return {...state, 
              supplies: state.supplies + 15,
              days: state.days+1};
   }case 'travel':{
     if (state.supplies < 20){
       return state;
     }
     return {
       ...state, 
       days: state.days+ action.payload,
       supplies: state.supplies - 20*action.payload,
       distance: state.distance + 10*action.payload
     }
   } case 'tippedWagon':{
     return {...state,
     supplies: state.supplies- 30,
     days: state.days + 1
     }
   }
   default:{
     return state;
   }
 }
};

let wagon = Redusky(undefined, {});
console.log(wagon);

let action={type: 'travel', payload: 1};
wagon = Redusky(wagon, action);
console.log(wagon);

let action2 = {type:'gather'};
wagon = Redusky(wagon, action2);
console.log(wagon);

let action3 = {type: 'tippedWagon'};
wagon = Redusky(wagon, action3);
console.log(wagon);

let action4 = {type:'travel', payload:3};
wagon = Redusky(wagon, action4);
console.log(wagon);

let action5 = {type:'travel', payload:3};
wagon = Redusky(wagon, action4);
console.log(wagon);
