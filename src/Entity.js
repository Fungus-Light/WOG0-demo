var player_basic = new Vue({
    el: "#player-basic",
    data: {
        Name_Name: "名字",
        CurrentName: "Fungus-Light",
        Class: "骑士",
        LV: 11,
        CurrentHealth: 60,
        MaxHealth: 100,
        CurrentMana: 80,
        MaxMana: 100,
        Class_Name: "阶层",
        Class_Detail: "恪守荣誉的骑士,你拥有良好的教育，接受了精良的训练，你随身带有丰厚的补给。",
        IsDetailShow: false
    },
    methods: {
        ShowDetail: function () {
            document.getElementById("Class-Detail").showModal();
        }
    },
});

var player_data = new Vue({
    el: "#player-data",
    data: {
        AreaName: "数据",

        ATT: 3,
        DEF: 4,
        STA: 6,
        INT: 1,
        ELO: 2,

        ToolTips: {
            ATT: "攻击力",
            DEF: "防御力",
            STA: "持久力",
            INT: "智力",
            ELO: "沟通力"
        }
    }
});

var player_quest = new Vue({
    el: "#player-quest",
    data: {
        AreaName: "任务",
        Quests: [
            {
                key: "q0",
                name: "找到出路"
            },
            {
                key: "q1",
                name: "找到村庄"
            },
            {
                key: "q2",
                name: "和村长谈一谈"
            }
        ]
    },
    methods: {
        ShowQuestDetail: function (key) {
            console.log(key);
        }
    }
});

var player_status = new Vue({
    el: "#player-status",
    data: {
        Area_Name: "状态",
        Status: [
            {
                key: "s1",
                name: "左臂受伤",
                color: "nes-text is-error"
            },
            {
                key: "s2",
                name: "阳光晴朗",
                color: "nes-text is-primary"
            },
            {
                key: "s3",
                name: "精良的护甲",
                color: "nes-text is-primary"
            },
            {
                key: "s4",
                name: "缓释医疗包",
                color: "nes-text is-success"
            },
        ]
    },
    methods: {
        GetColor: function (obj) {
            return obj.color
        },
        ShowDetail(key) {
            console.log(key);
        },
    }
});

var player_item = new Vue({
    el: "#player-item",
    data: {
        AreaName: "物品",
        Weight_Name: "负重",
        currentWeight: 20,
        maxWeight: 120,
        BTN_Name: {
            use: "使用",
            detail: "详情",
            depart: "分解",
            drop: "丢弃"
        },
        items: [
            {
                key: "i0",
                text: '<span class="nes-text is-primary">铁质</span><span class="nes-text">头盔</span>',
                number: 1
            },
            {
                key: "i1",
                text: '<span class="nes-text is-warning">黄铜</span><span class="nes-text">胸甲</span>',
                number: 1
            }
        ]
    }
});

var System=new Vue({
    el:"#System",
    data:{
        AreaName:"功能",
        BTN_Name:{
            Maps:"地图",
            Skills:"技能",
            Relation:"关系",
            Galleries:"冒险记录",
            System:"系统"
        }
    }
});

var Historys=new Vue({
    el:"#Historys",
    data:{
        AreaName:"历史",
        historys:[
            {
                key:"h0",
                text:'<span class="nes-text">你发现一只</span><span class="nes-text is-warning">奇怪的老鼠</span>'
            },
            {
                key:"h1",
                text:'<span class="nes-text">你杀死了一只</span><span class="nes-text is-error">奇怪的老鼠</span>'
            }
        ]
    }
});

var player_actions=new Vue({
    el:"#player-actions",
    data:{
        AreaName:"互动",
        CurrentObject:'<span class="nes-text is-success">和善的</span><span class="nes-text">农夫</span>',
        CurrentMessage:"或许你可以去村中心看看。",
        actions:[
            {
                key:'a0',
                text:"那么路怎么走呢？",
                next:"t0",
                style:"nes-btn"
            },
            {
                key:'a2',
                text:"谢谢你！(和善)",
                next:"t3",
                style:"nes-btn is-success"
            },
            {
                key:'a3',
                text:"把你的钱都交出来！！！(敌对)",
                next:"t4",
                style:"nes-btn is-error"
            },
            {
                key:'a4',
                text:"我会记住你对我的帮助。(威严)",
                next:"t5",
                style:"nes-btn is-primary"
            },
        ]
    },
    methods:{
        GetStyle(action){
            return action.style;
        },
        HandleNext(key){
            console.log("go to "+key);
        }
    }
});