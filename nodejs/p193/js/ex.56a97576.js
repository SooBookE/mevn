"use strict";(self["webpackChunkvue_pr03"]=self["webpackChunkvue_pr03"]||[]).push([[578],{1015:function(n,t,l){l.r(t),l.d(t,{default:function(){return b}});var u=l(3396),a=l(7139),e=l(9242);const r={class:"ex_1"},i=(0,u._)("h1",null,"1. 디렉티브 사용하기",-1),o=(0,u._)("hr",null,null,-1),_=(0,u._)("h3",null,"변수 머스타치 사용하기",-1),c=(0,u._)("hr",null,null,-1),p=(0,u._)("h3",null,"v-on 기능 사용하기",-1),s=(0,u._)("hr",null,null,-1),d=(0,u._)("h3",null,"v-if 조건문",-1),h={key:0},D=(0,u._)("hr",null,null,-1),v=(0,u._)("h3",null,"v-model 양방향데이터",-1),m=(0,u._)("hr",null,null,-1),w=(0,u._)("br",null,null,-1);function f(n,t,l,f,y,g){return(0,u.wg)(),(0,u.iD)(u.HY,null,[(0,u._)("div",r,[i,o,_,(0,u._)("h1",null,"안녕하세요. "+(0,a.zw)(y.vname)+" 반갑습니다. "+(0,a.zw)(y.age)+"살입니까?",1),c,p,(0,u._)("button",{onClick:t[0]||(t[0]=n=>g.func("팝업창"))},"버튼"),(0,u._)("button",{onDblclick:t[1]||(t[1]=n=>g.func("떱클 팝업"))},"더블클릭버튼",32),s,d,y.status?((0,u.wg)(),(0,u.iD)("h1",h,"제가 보이나요?")):(0,u.kq)("",!0),(0,u.wy)((0,u._)("h1",null,"제가 보이나요?",512),[[e.F8,y.status]]),(0,u._)("button",{onClick:t[2]||(t[2]=n=>y.status=!0)},"보이게 할게요."),(0,u._)("button",{onClick:t[3]||(t[3]=n=>y.status=!1)},"숨길게요."),(0,u._)("button",{onClick:t[4]||(t[4]=n=>y.status=!y.status)},"전환할게요."),D,v,(0,u.wy)((0,u._)("input",{type:"text","onUpdate:modelValue":t[5]||(t[5]=n=>y.inData=n),onKeyup:t[6]||(t[6]=n=>g.func(y.inData+"적고 손뗐다."))},null,544),[[e.nr,y.inData]]),(0,u.wy)((0,u._)("input",{type:"text","onUpdate:modelValue":t[7]||(t[7]=n=>y.inData=n),onKeyup:t[8]||(t[8]=(0,e.D2)((n=>g.func(y.inData+"적고 엔터치따.")),["enter"]))},null,544),[[e.nr,y.inData]]),(0,u._)("h2",null,(0,a.zw)(y.inData),1)]),m,(0,u._)("h3",null,[(0,u.Uk)("v-for 사용하기 "),w,(0,u.Uk)("배열:"+(0,a.zw)(y.arrData),1)]),(0,u._)("button",{onClick:t[9]||(t[9]=(...n)=>g.add&&g.add(...n))},"추가하기"),(0,u._)("button",{onClick:t[10]||(t[10]=(...n)=>g.sub&&g.sub(...n))},"삭제하기"),(0,u._)("ul",null,[((0,u.wg)(!0),(0,u.iD)(u.HY,null,(0,u.Ko)(y.arrData,(n=>((0,u.wg)(),(0,u.iD)("li",{key:n},(0,a.zw)(n),1)))),128))]),(0,u._)("p",null,"추가한 값: "+(0,a.zw)(y.anum),1),(0,u._)("p",null,"삭제한 값: "+(0,a.zw)(y.dnum),1)],64)}l(7658);var y={name:"app",data(){return{vname:"홍길동",age:20,status:!1,inData:"",arrData:[1,2,3,4,5],dnum:0,anum:0}},methods:{func:function(n){alert(n)},add:function(){this.arrData.push(this.arrData.length+1),this.anum=this.arrData.length,this.dnum=""},sub:function(){this.dnum=this.arrData.pop(),this.anum=""}}},g=l(89);const k=(0,g.Z)(y,[["render",f]]);var b=k},5483:function(n,t,l){l.r(t),l.d(t,{default:function(){return m}});var u=l(3396),a=l(7139),e=l(9242);const r=(0,u._)("h1",null,"2. 데이터 가져오기",-1),i=(0,u._)("h4",null,"가져온 데이터",-1),o=(0,u._)("tr",null,[(0,u._)("th",null,"카테고리"),(0,u._)("th",null,"품명"),(0,u._)("th",null,"가격"),(0,u._)("th",null,"배송비")],-1),_={key:0},c=(0,u._)("hr",null,null,-1),p=(0,u._)("span",null,"얼마 이상의 물품을 출력할까요?",-1);function s(n,t,l,s,d,h){return(0,u.wg)(),(0,u.iD)("div",null,[r,i,(0,u._)("p",null,(0,a.zw)(d.dataArr),1),(0,u._)("table",null,[o,((0,u.wg)(!0),(0,u.iD)(u.HY,null,(0,u.Ko)(d.dataArr,(n=>((0,u.wg)(),(0,u.iD)(u.HY,{key:n},[n.price>=d.inUser?((0,u.wg)(),(0,u.iD)("tr",_,[(0,u._)("td",null,(0,a.zw)(n.category),1),(0,u._)("td",null,(0,a.zw)(n.product_name),1),(0,u._)("td",null,(0,a.zw)(n.price),1),(0,u._)("td",null,(0,a.zw)(n.delivery_price),1)])):(0,u.kq)("",!0)],64)))),128))]),c,p,(0,u.wy)((0,u._)("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=n=>d.inUser=n)},null,512),[[e.nr,d.inUser]])])}var d=[{product_name:"기계식 키보드",price:25e3,category:"노트북/태블릿",delivery_price:5e3},{product_name:"무선 마우스",price:12e3,category:"노트북/태블릿",delivery_price:3e3},{product_name:"아이패드",price:725e3,category:"노트북/태블릿",delivery_price:1e4},{product_name:"태블릿 거치대",price:32e3,category:"노트북/태블릿",delivery_price:5e3}],h={name:"app",data(){return{dataArr:d,inUser:0}},methods:{}},D=l(89);const v=(0,D.Z)(h,[["render",s]]);var m=v},7661:function(n,t,l){l.r(t),l.d(t,{default:function(){return w}});var u=l(3396),a=l(9242),e=l(7139);const r=(0,u._)("h1",null,"3. 데이터 양방향 바인딩",-1),i=(0,u._)("h2",null,"v-model을 사용하여 양방향을 구현",-1),o=(0,u._)("span",null,"v-model :",-1),_=(0,u._)("br",null,null,-1),c=(0,u._)("hr",null,null,-1),p=(0,u._)("h1",null,"4. 데이터 단반향 바인딩",-1),s=(0,u._)("h2",null,"v-bind(읽기)와 v-on(쓰기)을 사용해 단방향(2가지=양방향)을 구현한다.",-1),d=["value"];function h(n,t,l,h,D,v){return(0,u.wg)(),(0,u.iD)("div",null,[r,i,o,(0,u.wy)((0,u._)("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=n=>D.inData=n)},null,512),[[a.nr,D.inData]]),(0,u._)("p",null,(0,e.zw)(D.inData),1),(0,u._)("button",{onClick:t[1]||(t[1]=n=>D.inData=D.outData)},"꺼내오기:"+(0,e.zw)(D.inData),1),_,c,p,s,(0,u._)("h3",null,(0,e.zw)(D.inValue),1),(0,u._)("input",{type:"text",value:D.inValue,onInput:t[2]||(t[2]=(...n)=>v.upValue&&v.upValue(...n))},null,40,d),(0,u._)("button",{style:{margin:"0 5px"},onClick:t[3]||(t[3]=(...n)=>v.setData&&v.setData(...n))},"데이터 입력"),(0,u._)("button",{onClick:t[4]||(t[4]=(...n)=>v.getData&&v.getData(...n))},"데이터 출력")])}var D={name:"app",data(){return{inData:"",outData:"꺼내온 값이다.",inValue:"",temp:""}},methods:{upValue:function(n){this.inValue=n.target.value},setData:function(n){this.inValue&&(alert("v-binding 된 값"+this.inValue+" 를 입력함"),this.temp=this.inValue,this.inValue="")},getData:function(n){alert("v-on으로 저장된 값:"+this.temp+" 를 꺼내온다."),this.inValue=this.temp}}},v=l(89);const m=(0,v.Z)(D,[["render",h]]);var w=m}}]);