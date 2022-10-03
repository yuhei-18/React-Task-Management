import { v4 as uuidv4 } from "uuid";

const dummyData = [
  {
    id: uuidv4(),
    title: "未対応",
    tasks: [
      {
        id: uuidv4(),
        title: "TOEICの勉強"
      },
      {
        id: uuidv4(),
        title: "旅行計画アプリの作成"
      },
      {
        id: uuidv4(),
        title: "麻雀の勉強"
      },
      {
        id: uuidv4(),
        title: "英会話の勉強"
      }
    ]
  },
  {
    id: uuidv4(),
    title: "対応中",
    tasks: [
      {
        id: uuidv4(),
        title: "Djangoの勉強"
      },
      {
        id: uuidv4(),
        title: "英語の勉強（高校）"
      }
    ]
  },
  {
    id: uuidv4(),
    title: "対応済",
    tasks: [
      {
        id: uuidv4(),
        title: "フリーランスになる"
      },
      {
        id: uuidv4(),
        title: "英語の勉強（中学）"
      },
    ]
  }
];

export default dummyData;
