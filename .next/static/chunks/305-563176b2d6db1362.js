"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[305],{7305:function(e,t,s){s.r(t),s.d(t,{abi:function(){return l},address:function(){return i}});var d=s(5893),a=s(733),r=s(7583),n=s(7294);t.default=()=>{let[e,t]=(0,n.useState)(),[s,m]=(0,n.useState)([0]),[x,c]=(0,n.useState)([]),[p,y]=(0,n.useState)({}),o=e=>{y({...p,[e.target.id]:e.target.value})},h=async()=>{let e=new a.r6("https://rpc.testnet.fantom.network/"),s=new r.CH(i,l,e);t(s),console.log("mContract.LastIdUser---->",await s.LastIdUser()),(async()=>{let e=[];for(let t=0;t<85;t++)try{let d=await s.PositionToId(p.address,+p.cycle,+p.select,t);e.push(d.toString())}catch(e){console.log(e)}console.log("newIds---->",e),c([...e])})()},g=async()=>{let e=new a.r6("https://rpc.testnet.fantom.network/"),d=new r.CH(i,l,e);t(d);try{let e=await d.CurrentCycleNo(p.address,+p.select);m(t=>[...t,parseInt(Number(e))]),console.log("res------>",parseInt(Number(e))),console.log("cycleNum------>",s)}catch(e){console.log(e)}};return(0,d.jsxs)("div",{className:"flex flex-col items-center justify-center p-10",children:[(0,d.jsxs)("div",{className:"flex gap-3 justify-center",children:[(0,d.jsxs)("div",{className:"py-4 border min-w-80 rounded-lg px-5 ",children:[(0,d.jsxs)("div",{className:"mb-6 flex justify-center items-center gap-3",children:[(0,d.jsx)("label",{htmlFor:"address",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"Address:"}),(0,d.jsx)("input",{type:"text",id:"address",placeholder:"Address...",onChange:o,className:"bg-gray-50 border  text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500"}),(0,d.jsx)("button",{onClick:h,className:"py-2 px-3 bg-black border border-teal-500 rounded-lg",children:"Search"})]}),(0,d.jsxs)("div",{className:"mb-5 flex items-center gap-4",children:[(0,d.jsx)("label",{htmlFor:"cycle",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"Cycle:"}),(0,d.jsx)("input",{type:"number",id:"cycle",placeholder:"Cycle...",onChange:o,className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500"})]}),(0,d.jsxs)("select",{id:"select",onChange:o,className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500",children:[(0,d.jsx)("option",{children:"Select No"}),(0,d.jsx)("option",{children:"1"}),(0,d.jsx)("option",{children:"2"}),(0,d.jsx)("option",{children:"3"}),(0,d.jsx)("option",{children:"4"}),(0,d.jsx)("option",{children:"5"}),(0,d.jsx)("option",{children:"6"}),(0,d.jsx)("option",{children:"7"}),(0,d.jsx)("option",{children:"8"})]})]}),(0,d.jsxs)("div",{className:"p-3 border border-teal-500 rounded-lg",children:[(0,d.jsx)("h2",{className:"text-lg lg:text-2xl font-semibold text-gray-400 p-2",children:"Your Current Cycle"}),(0,d.jsxs)("div",{className:"flex flex-col justify-center items-center",children:[(0,d.jsx)("p",{className:"text-5xl text-yellow-400 font-semibold p-2 text-center",children:s[1]&&s[1]}),(0,d.jsx)("button",{onClick:g,className:"py-2 px-3 bg-black border border-teal-500 rounded-lg",children:"Search Cycle"})]})]})]}),(0,d.jsx)("div",{className:"px-2 py-2 mt-5 bg-gray-800 text-white text-sm rounded-md shadow-lg flex flex-col items-center justify-between p-24",children:(0,d.jsxs)("div",{children:[(0,d.jsx)("div",{className:"text-center",children:"User Id : 0"}),(0,d.jsx)("div",{className:"flex text-center mt-3",children:(0,d.jsxs)("div",{className:" z-10  px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg",children:["1 = Id : ",x[1],(0,d.jsxs)("div",{className:"flex text-center",children:[(0,d.jsxs)("div",{className:" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg",children:["5 = ID: ",x[5],(0,d.jsxs)("div",{className:"flex",children:[(0,d.jsxs)("div",{className:" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg",children:["21 = ID: ",x[21]]}),(0,d.jsxs)("div",{className:" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg",children:["37 = ID: ",x[37]]}),(0,d.jsxs)("div",{className:" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg",children:["53 = ID: ",x[53]]}),(0,d.jsxs)("div",{className:" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg",children:["69 = ID: ",x[69]]})]})]}),(0,d.jsxs)("div",{className:" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg",children:["9 = ID: ",x[9],(0,d.jsxs)("div",{className:"flex",children:[(0,d.jsxs)("div",{className:" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg",children:["25 = ID: ",x[25]]}),(0,d.jsxs)("div",{className:" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg",children:["41 = ID: ",x[41]]}),(0,d.jsxs)("div",{className:" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg",children:["57 = ID: ",x[57]]}),(0,d.jsxs)("div",{className:" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg",children:["73 = ID: ",x[73]]})]})]}),(0,d.jsxs)("div",{className:" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg",children:["13 = ID: ",x[13],(0,d.jsxs)("div",{className:"flex",children:[(0,d.jsxs)("div",{className:" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg",children:["29 = ID: ",x[29]]}),(0,d.jsxs)("div",{className:" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg",children:["45 = ID: ",x[45]]}),(0,d.jsxs)("div",{className:" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg",children:["61 = ID: ",x[61]]}),(0,d.jsxs)("div",{className:" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg",children:["77 = ID: ",x[77]]})]})]}),(0,d.jsxs)("div",{className:" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg",children:["17 = ID: ",x[17],(0,d.jsxs)("div",{className:"flex",children:[(0,d.jsxs)("div",{className:" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg",children:["33 = ID: ",x[33]]}),(0,d.jsxs)("div",{className:" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg",children:["49 = ID: ",x[49]]}),(0,d.jsxs)("div",{className:" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg",children:["65 = ID: ",x[65]]}),(0,d.jsxs)("div",{className:" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg",children:["81 = ID: ",x[81]]})]})]})]})]})}),(0,d.jsx)("div",{className:"flex text-center mt-3",children:(0,d.jsxs)("div",{className:" z-10 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg",children:["2 = ID: ",x[2],(0,d.jsxs)("div",{className:"flex text-center",children:[(0,d.jsxs)("div",{className:" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg",children:["6 = ID: ",x[6],(0,d.jsxs)("div",{className:"flex",children:[(0,d.jsxs)("div",{className:" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg",children:["22 = ID: ",x[22]]}),(0,d.jsxs)("div",{className:" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg",children:["38 = ID: ",x[38]]}),(0,d.jsxs)("div",{className:" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg",children:["54 = ID: ",x[54]]}),(0,d.jsxs)("div",{className:" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg",children:["70 = ID: ",x[70]]})]})]}),(0,d.jsxs)("div",{className:" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg",children:["10 = ID: ",x[10],(0,d.jsxs)("div",{className:"flex",children:[(0,d.jsxs)("div",{className:" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg",children:["26 = ID: ",x[26]]}),(0,d.jsxs)("div",{className:" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg",children:["42 = ID: ",x[42]]}),(0,d.jsxs)("div",{className:" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg",children:["58 = ID: ",x[58]]}),(0,d.jsxs)("div",{className:" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg",children:["74 = ID: ",x[74]]})]})]}),(0,d.jsxs)("div",{className:" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg",children:["14 = ID: ",x[14],(0,d.jsxs)("div",{className:"flex",children:[(0,d.jsxs)("div",{className:" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg",children:["30 = ID: ",x[30]]}),(0,d.jsxs)("div",{className:" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg",children:["46 = ID: ",x[46]]}),(0,d.jsxs)("div",{className:" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg",children:["62 = ID: ",x[62]]}),(0,d.jsxs)("div",{className:" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg",children:["78 = ID: ",x[78]]})]})]}),(0,d.jsxs)("div",{className:" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg",children:["18 = ID: ",x[18],(0,d.jsxs)("div",{className:"flex",children:[(0,d.jsxs)("div",{className:" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg",children:["34 = ID: ",x[34]]}),(0,d.jsxs)("div",{className:" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg",children:["50 = ID: ",x[50]]}),(0,d.jsxs)("div",{className:" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg",children:["66 = ID: ",x[66]]}),(0,d.jsxs)("div",{className:" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg",children:["82 = ID: ",x[82]]})]})]})]})]})}),(0,d.jsx)("div",{className:"flex text-center mt-3",children:(0,d.jsxs)("div",{className:" z-10 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg",children:["3 = ID: ",x[3],(0,d.jsxs)("div",{className:"flex text-center",children:[(0,d.jsxs)("div",{className:" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg",children:["7 = ID: ",x[7],(0,d.jsxs)("div",{className:"flex",children:[(0,d.jsxs)("div",{className:" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg",children:["23 = ID: ",x[23]]}),(0,d.jsxs)("div",{className:" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg",children:["39 = ID: ",x[39]]}),(0,d.jsxs)("div",{className:" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg",children:["55 = ID: ",x[55]]}),(0,d.jsxs)("div",{className:" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg",children:["71 = ID: ",x[71]]})]})]}),(0,d.jsxs)("div",{className:" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg",children:["11 = ID: ",x[11],(0,d.jsxs)("div",{className:"flex",children:[(0,d.jsxs)("div",{className:" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg",children:["27 = ID: ",x[27]]}),(0,d.jsxs)("div",{className:" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg",children:["43 = ID: ",x[43]]}),(0,d.jsxs)("div",{className:" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg",children:["59 = ID: ",x[59]]}),(0,d.jsxs)("div",{className:" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg",children:["75 = ID: ",x[75]]})]})]}),(0,d.jsxs)("div",{className:" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg",children:["15 = ID: ",x[15],(0,d.jsxs)("div",{className:"flex",children:[(0,d.jsxs)("div",{className:" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg",children:["31 = ID: ",x[31]]}),(0,d.jsxs)("div",{className:" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg",children:["47 = ID: ",x[47]]}),(0,d.jsxs)("div",{className:" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg",children:["63 = ID: ",x[63]]}),(0,d.jsxs)("div",{className:" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg",children:["79 = ID: ",x[79]]})]})]}),(0,d.jsxs)("div",{className:" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg",children:["19 = ID: ",x[19],(0,d.jsxs)("div",{className:"flex",children:[(0,d.jsxs)("div",{className:" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg",children:["35 = ID: ",x[35]]}),(0,d.jsxs)("div",{className:" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg",children:["51 = ID: ",x[51]]}),(0,d.jsxs)("div",{className:" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg",children:["67 = ID: ",x[67]]}),(0,d.jsxs)("div",{className:" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg",children:["83 = ID: ",x[83]]})]})]})]})]})}),(0,d.jsx)("div",{className:"flex text-center mt-3",children:(0,d.jsxs)("div",{className:" z-10 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg",children:["4 = ID: ",x[4],(0,d.jsxs)("div",{className:"flex text-center",children:[(0,d.jsxs)("div",{className:" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg",children:["8 = ID: ",x[8],(0,d.jsxs)("div",{className:"flex",children:[(0,d.jsxs)("div",{className:" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg",children:["24 = ID: ",x[24]]}),(0,d.jsxs)("div",{className:" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg",children:["40 = ID: ",x[40]]}),(0,d.jsxs)("div",{className:" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg",children:["56 = ID: ",x[56]]}),(0,d.jsxs)("div",{className:" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg",children:["72 = ID: ",x[72]]})]})]}),(0,d.jsxs)("div",{className:" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg",children:["12 = ID: ",x[12],(0,d.jsxs)("div",{className:"flex",children:[(0,d.jsxs)("div",{className:" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg",children:["28 = ID: ",x[28]]}),(0,d.jsxs)("div",{className:" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg",children:["44 = ID: ",x[44]]}),(0,d.jsxs)("div",{className:" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg",children:["60 = ID: ",x[60]]}),(0,d.jsxs)("div",{className:" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg",children:["76 = ID: ",x[76]]})]})]}),(0,d.jsxs)("div",{className:" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg",children:["16 = ID: ",x[16],(0,d.jsxs)("div",{className:"flex",children:[(0,d.jsxs)("div",{className:" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg",children:["32 = ID: ",x[32]]}),(0,d.jsxs)("div",{className:" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg",children:["48 = ID: ",x[48]]}),(0,d.jsxs)("div",{className:" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg",children:["64 = ID: ",x[64]]}),(0,d.jsxs)("div",{className:" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg",children:["80 = ID: ",x[80]]})]})]}),(0,d.jsxs)("div",{className:" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg",children:["20 = ID: ",x[20],(0,d.jsxs)("div",{className:"flex",children:[(0,d.jsxs)("div",{className:" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg",children:["36 = ID: ",x[35]]}),(0,d.jsxs)("div",{className:" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg",children:["52 = ID: ",x[52]]}),(0,d.jsxs)("div",{className:" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg",children:["68 = ID: ",x[68]]}),(0,d.jsxs)("div",{className:" z-10 mr-1 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg",children:["84 = ID: ",x[84]]})]})]})]})]})})]})})]})};let i="0x111E71892616C8050c5DbB0F0fA38Fe58CcC7A92",l=[{inputs:[{internalType:"address",name:"_owner",type:"address"},{internalType:"address",name:"_Idx",type:"address"},{internalType:"address",name:"_admin",type:"address"},{internalType:"address",name:"_dai",type:"address"}],stateMutability:"nonpayable",type:"constructor"},{inputs:[{internalType:"address",name:"_user",type:"address"},{internalType:"uint256",name:"_amount",type:"uint256"}],name:"AddUpgradeAmount",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"AddressToId",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_user",type:"address"},{internalType:"uint256",name:"_matrix",type:"uint256"}],name:"CurrentCycleNo",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"EmergencyWithdraw",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"IdToAddress",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_ref",type:"address"},{internalType:"uint256",name:"_cycle",type:"uint256"},{internalType:"uint256",name:"_matrix",type:"uint256"},{internalType:"uint256",name:"_id",type:"uint256"}],name:"IdToPosition",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"IsUserExists",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"LAST_LEVEL",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"LastIdUser",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"LastUserId",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"MatrixRates",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"one_",type:"uint256"},{internalType:"uint256",name:"two_",type:"uint256"},{internalType:"uint256",name:"third_",type:"uint256"}],name:"PositionCalculator",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"pure",type:"function"},{inputs:[{internalType:"address",name:"_ref",type:"address"},{internalType:"uint256",name:"cycle",type:"uint256"},{internalType:"uint256",name:"_matrix",type:"uint256"},{internalType:"uint256",name:"_postion",type:"uint256"}],name:"PositionToId",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_newUser",type:"address"},{internalType:"address",name:"_Ref",type:"address"}],name:"Register",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_newUser",type:"address"},{internalType:"uint256",name:"_matrix",type:"uint256"}],name:"Upgrade",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"Users",outputs:[{internalType:"uint256",name:"Id",type:"uint256"},{internalType:"uint256",name:"DirectRefs",type:"uint256"},{internalType:"uint256",name:"ReinvestCount",type:"uint256"},{internalType:"uint256",name:"Earnings",type:"uint256"},{internalType:"uint256",name:"Amount",type:"uint256"},{internalType:"uint256",name:"upgradeBalance",type:"uint256"},{internalType:"uint256",name:"recycle1",type:"uint256"},{internalType:"uint256",name:"recycle2",type:"uint256"},{internalType:"uint256",name:"recycle3",type:"uint256"},{internalType:"uint256",name:"recycle4",type:"uint256"},{internalType:"uint256",name:"recycle5",type:"uint256"},{internalType:"uint256",name:"recycle6",type:"uint256"},{internalType:"uint256",name:"recycle7",type:"uint256"},{internalType:"uint256",name:"recycle8",type:"uint256"},{internalType:"address",name:"DRef",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_user",type:"address"}],name:"withdrawFeeAmount",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"}]}}]);