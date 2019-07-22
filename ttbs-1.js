/**
 * 游戏规则：将一副扑克牌平均分成两份，每人拿一份。a先拿出第一张扑克放在桌上，然后b也拿出手中的第一张牌，放在a刚打出的牌上，就像这样两人交替出牌。出牌时，如果某人打出的牌与桌上的某张牌一样，即可将两张相同的牌及其中间所夹的牌全部取走，并以次放到自己手牌的牌尾，当任意一人的手牌出完时，游戏结束，对手获胜
 * 
 * 输入描述：输入包括两行，每行26个数字，分别表示两位玩家初始被分配到的牌的点数；
 * 输出描述：输出游戏结果--平局、玩家a胜、玩家b胜
 */

function driveTrain(arr1, arr2) {
    let gameArr = [];
    let mount = {
        a: 0,
        b: 0,
    };

    const gameCore = (card, tag) => {
        const index = gameArr.indexOf(card);
        if(index === -1) {
            gameArr.push(card);
        }else {
            let deleteNum = gameArr.length - index;
            gameArr.splice(index, deleteNum);
            mount[tag] += deleteNum+1; 
        }
    }

    for (let i=0, len=arr1.length; i<len; i++) {
        gameCore(arr1[i], 'a');
        gameCore[arr2[i], 'b'];
    }

    const { a, b } = mount;

    if(a === b) {
        return '平局';
    }else {
        return a > b ? '玩家a胜利' : '玩家b胜利';
    }
}

function test() {
    const arr1 = [10,2,5,6,13,11,11,4,10,8,12,5,4,1,8,1,7,12,4,13,6,9,9,9,5,7];
    const arr2 = [6,3,13,8,2,3,7,3,2,2,12,11,10,6,10,1,1,12,3,5,7,11,13,4,8,9];
    const res = driveTrain(arr1, arr2);
    console.log(res);
}

test();