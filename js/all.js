var card;
var cardStructure = ""; //卡片內容結構

(function createCard() {            
    for(let i = 2; i < 10; i++) {                
        cardStructure += `<div class="title-number">${i}</div>`        

        for(let j = 1; j < 10; j++) {
            cardStructure += `<div class="data-row">${i} × ${j} = ${i * j}</div>`                      
        }

        card = document.createElement('div'); //建立卡片
        card.setAttribute('class', 'card'); //設定卡片class名稱
        card.innerHTML = cardStructure; //結構字串寫入卡片
        document.querySelector(".container").appendChild(card);

        cardStructure = ""; //清空字串
        
    }    
})();
