module.exports.niuConf = {

}
var conf = {}
//牌型变量
conf.COMB_TYPE_NONE  =   0            // 牛破
conf.COMB_TYPE_OX1   =    1           // 牛1
conf.COMB_TYPE_OX2   =    2           // 牛2
conf.COMB_TYPE_OX3   =    3           // 牛3
conf.COMB_TYPE_OX4   =    4           // 牛4
conf.COMB_TYPE_OX5   =    5           // 牛5
conf.COMB_TYPE_OX6   =    6           // 牛6
conf.COMB_TYPE_OX7   =    7           // 牛7   x2
conf.COMB_TYPE_OX8   =    8           // 牛8   x3
conf.COMB_TYPE_OX9   =    9           // 牛9   x4
conf.COMB_TYPE_OX10  =    10          // 牛牛  x5
conf.COMB_TYPE_DELUX =    11          // 五花  x6
conf.COMB_TYPE_MICRO =    12          // 五小  x7
conf.COMB_TYPE_BOMB  =    13          // 炸弹  x8



conf.GAME_PLAYER = 2                 //游戏人数
conf.TID_ROB_TIME = 5000            //抢庄时间
conf.TID_BETTING = 5000              //下注时间
conf.TID_SETTLEMENT = 5000           //结conf.
conf.MING_CARD_NUM = 4               //明牌数量
//游戏状态
conf.GS_FREE         = 1001              //空闲阶段
conf.GS_BETTING      = 1002              //下注阶段
conf.GS_DEAL         = 1003              //发牌阶段
conf.GS_SETTLEMENT   = 1004              //结算阶段
conf.GS_ROB_BANKER   = 1005              //抢庄阶段

//游戏模式
conf.MODE_GAME_NORMAL = 1              //常规模式
conf.MODE_GAME_BULL   = 3              //斗公牛模式
conf.MODE_GAME_SHIP   = 4              //开船模式
//定庄模式
conf.MODE_BANKER_ROB   = 1              //随机抢庄
conf.MODE_BANKER_HOST  = 2              //房主做庄
conf.MODE_BANKER_ORDER = 3              //轮庄
conf.MODE_BANKER_NONE  = 4              //无定庄模式
//消耗模式
conf.MODE_DIAMOND_HOST = 1              //房主扣钻
conf.MODE_DIAMOND_EVERY = 2             //每人扣钻
conf.MODE_DIAMOND_WIN = 3               //大赢家扣钻
//明牌模式
conf.MODE_CARD_HIDE  = 1 				//不明牌
conf.MODE_CARD_SHOW  = 2 				//明牌



module.exports.niuConf = conf