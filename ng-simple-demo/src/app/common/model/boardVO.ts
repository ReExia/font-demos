export class BoardVO{

  //id编号
  id : string;

  //资金渠道
  capitalChannel : string;

  //未放款项目金额含失败
  unloanMoneyAll : string;

  //未放款项目失败笔数
  unloanfailedTimes : string;

  //未放款金额
  unLoanMoney : string;

  //未放款笔数
  unloanTimes : string;

  //失败笔数
  failedTimes : string;

  //失败金额
  failedMoney : string;

  constructor(id: string, capitalChannel: string, unloanMoneyAll: string, unloanfailedTimes: string, unLoanMoney: string, unloanTimes: string, failedTimes: string, failedMoney: string) {
    this.id = id;
    this.capitalChannel = capitalChannel;
    this.unloanMoneyAll = unloanMoneyAll;
    this.unloanfailedTimes = unloanfailedTimes;
    this.unLoanMoney = unLoanMoney;
    this.unloanTimes = unloanTimes;
    this.failedTimes = failedTimes;
    this.failedMoney = failedMoney;
  }
}
