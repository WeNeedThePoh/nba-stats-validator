import{populateHtml as populateHtml}from"./populate.js";import{getGameId as getGameId,getGameData as getGameData,getTeamLogo as getTeamLogo}from"./external.js";window.onload=()=>{const e=document.getElementById("open-file-btn"),t=document.createElement("input");t.type="file",e.onclick=()=>{t.click()},t.onchange=e=>{const t=e.target.files[0],n=t.name.replace(".htm",""),a=new FileReader;a.readAsText(t,"utf16le"),a.onload=e=>{!async function(e,t){const n=new DOMParser,a=n.parseFromString(e,"text/html"),r=a.querySelectorAll("table"),s=r[0],l=r[1],o=r[2],i=r[3];t=function(e,t){let n=e.querySelectorAll("tr")[1].firstElementChild.textContent;n=n.split(" Vs ");const a=t.substring(0,3),r=t.slice(-3);return n.map((e,t)=>{return function(t,e){let n=t.substring(0,3);var a=[{name:"Golden State",triCode:"GSW"},{name:"Los Angeles",triCode:["LAC","LAL"]},{name:"New York",triCode:"NYK"},{name:"New Orleans",triCode:"NOP"},{name:"Oklahoma City",triCode:"OKC"},{name:"Brooklyn",triCode:"BKN"},{name:"San Antonio",triCode:"SAS"},{name:"Phoenix",triCode:"PHX"},{name:"Washington",triCode:"WSH"}].filter(e=>e.name===t);0<a.length&&(n=a[0].triCode,Array.isArray(n)&&n.includes(e)&&(n=e));return{name:t.toLowerCase(),triCode:n.toUpperCase()}}(e,0===t?a:r)})}(s,t);t=function(e,t,n){let a=t.querySelectorAll("tr");a=[].slice.call(a,3),a.splice(-1,1),a=u(a);let r=n.querySelectorAll("tr");return r=[].slice.call(r,3),r.splice(-1,1),r=u(r),e[0].stats=a[a.length-1],a.splice(-1,1),e[0].players=a,e[1].stats=r[r.length-1],r.splice(-1,1),e[1].players=r,e}(t=function(e,t){for(var[n,a]of t.entries()){var r=e.querySelectorAll("tr")[n+1].children,n=r.length;a.score={firstP:parseInt(r[2].textContent,10),secondP:void 0,thirdP:void 0,fourthP:void 0,final:parseInt(r[n-1].textContent,10)},7<=n&&(a.score.secondP=parseInt(r[4].textContent,10)),9<=n&&(a.score.thirdP=parseInt(r[6].textContent,10)),11<=n&&(a.score.fourthP=parseInt(r[8].textContent,10)),13<=n&&(a.score.firstOT=parseInt(r[10].textContent,10)),15<=n&&(a.score.secondOT=parseInt(r[12].textContent,10)),17<=n&&(a.score.thirdOT=parseInt(r[14].textContent,10))}return t}(l,t),o,i);const m={startsAt:function(e){const t=e.querySelectorAll("tr")[2].firstElementChild.textContent,[n]=t.split(" ");return new Date(n)}(s),location:function(e){const t=e.querySelectorAll("tr")[2].firstElementChild.textContent,[,n]=t.split(" at ");return n}(s),teams:t},p=`${m.startsAt.getFullYear()}${("0"+(m.startsAt.getMonth()+1)).slice(-2)}${m.startsAt.getDate()}`,c=await getGameId(p,t),d=await getGameData(p,c);m.startsAt=function(e,t){const n=e.querySelectorAll("tr")[2].firstElementChild.textContent,[a]=n.split(" "),r=t.basicGameData.startTimeEastern.replace("ET","");return new Date(`${a} ${r} EST`)}(s,d),m.teams=function(e,t){const n={};t.basicGameData.vTeam.triCode===e[0].triCode?(e[0].id=t.basicGameData.vTeam.teamId,n.visitor=e[0],e[1].id=t.basicGameData.hTeam.teamId,n.home=e[1]):(e[1].id=t.basicGameData.vTeam.teamId,n.visitor=e[1],e[0].id=t.basicGameData.hTeam.teamId,n.home=e[0]);return n.home.logo=getTeamLogo(n.home.id),n.visitor.logo=getTeamLogo(n.visitor.id),n}(t,d),m.gameData=d,window.fileData=m,populateHtml(m)}(e.target.result,n)}};function u(e){const t=[];for(const u of e){const[y,E,I,g,C,h,f,x,b,v,,A,T,B,G,P]=u.querySelectorAll("td");var[n,a]=y.textContent.split(","),[r,s]=g.textContent.trim().split("-"),l=+(parseInt(r,10)/parseInt(s,10)*100).toFixed(2)||0,[o,i]=C.textContent.trim().split("-"),m=+(parseInt(o,10)/parseInt(i,10)*100).toFixed(2)||0,[p,c]=h.textContent.trim().split("-"),d=+(parseInt(p,10)/parseInt(c,10)*100).toFixed(2)||0;t.push({firstName:a||"",lastName:n||"",position:E.textContent.trim(),minutes:I.textContent.trim(),fieldGoalsMade:parseInt(r,10),fieldGoalsAttempts:parseInt(s,10),fieldGoalsPercentage:l,threePointsMade:parseInt(o,10),threePointsAttempts:parseInt(i,10),threePointsPercentage:m,freeThrowMade:parseInt(p,10),freeThrowAttempts:parseInt(c,10),freeThrowPercentage:d,offensiveRebounds:parseInt(f.textContent.trim(),10),defensiveRebounds:parseInt(x.textContent.trim(),10),totalRebounds:parseInt(b.textContent.trim(),10),assists:parseInt(v.textContent.trim(),10),personalFouls:parseInt(A.textContent.trim(),10),steals:parseInt(T.textContent.trim(),10),turnouvers:parseInt(B.textContent.trim(),10),blocks:parseInt(G.textContent.trim(),10),points:parseInt(P.textContent.trim(),10)})}return t}function n(e){e.classList.add("active-tab"),e.classList.remove("deactive-tab")}function a(e){e.classList.remove("active-tab"),e.classList.add("deactive-tab")}document.getElementById("home-team-name-players-title").parentElement.onclick=function(){this.classList.contains("active-tab")?(a(this),n(document.getElementById("visitor-team-name-players-title").parentElement),document.getElementById("home-players-table").parentElement.parentElement.parentElement.style.display="none",document.getElementById("visitor-players-table").parentElement.parentElement.parentElement.style.display="block"):(n(this),a(document.getElementById("visitor-team-name-players-title").parentElement),document.getElementById("visitor-players-table").parentElement.parentElement.parentElement.style.display="none",document.getElementById("home-players-table").parentElement.parentElement.parentElement.style.display="block")},document.getElementById("visitor-team-name-players-title").parentElement.onclick=function(){this.classList.contains("active-tab")?(a(this),n(document.getElementById("home-team-name-players-title").parentElement),document.getElementById("visitor-players-table").parentElement.parentElement.parentElement.style.display="none",document.getElementById("home-players-table").parentElement.parentElement.parentElement.style.display="block"):(n(this),a(document.getElementById("home-team-name-players-title").parentElement),document.getElementById("home-players-table").parentElement.parentElement.parentElement.style.display="none",document.getElementById("visitor-players-table").parentElement.parentElement.parentElement.style.display="block")}};