/**
 * 奖品设置
 * type: 唯一标识
 * count: 奖品数量
 * title: 奖品描述
 * text: 奖品标题
 * img: 图片地址
 */
const prizes = [
  {
    type: 1,
    count: 10,
    text: "第六轮",
    title: "抽奖资格",
    img: "img/secrit.jpg"
  },
  {
    type: 2,
    count: 10,
    text: "第五轮",
    title: "抽奖资格",
    img: "img/mbp.jpg"
  },
  {
    type: 3,
    count: 10,
    text: "第四轮",
    title: "抽奖资格",
    img: "img/huawei.png"
  },
  {
    type: 4,
    count: 10,
    text: "第三轮",
    title: "抽奖资格",
    img: "img/ipad.jpg"
  },
  {
    type: 5,
    count: 10,
    text: "第二轮",
    title: "抽奖资格",
    img: "img/spark.jpg"
  },
  {
    type: 6,
    count: 10,
    text: "第一轮",
    title: "抽奖资格",
    img: "img/kindle.jpg"
  }
];

/**
 * 一次抽取的奖品个数与prizes对应
 */
const EACH_COUNT = [10,10,10,10,10,10];

/**
 * 卡片公司名称标识
 */
const COMPANY = "智书企飞";

module.exports = {
  prizes,
  EACH_COUNT,
  COMPANY
};
