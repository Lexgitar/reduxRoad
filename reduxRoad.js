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


// Add a cash property, beginning with 200 for the initial state
// Add a 'sell' case: Players can give away 20 supplies to gain 5 cash
// Add a 'buy' case: Players can gain 25 supplies at the cost of 15 cash
// Add a 'theft' case: Outlaws steal half of the player’s cash