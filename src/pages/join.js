import React from "react";
import { Link } from "gatsby";
import { Row, Col } from "antd";
import Layout from "../components/Layout";
import QRcode from "../../static/wechat-QRcode.png";

const Join = () => {
  return (
    <Layout>
      <h1>加入我们</h1>
      <p>
        “纸飞机计划”由青少年们所开启，也为青少年们而成立。
        世界卫生组织的官网上显示，每四人中就有一人患有某种心理健康疾病。心理健康问题出没在中国与全球的每个角落，但只有少数人愿意去帮助心理健康问题患者，了解心理健康背后的知识。
        也只有少数人意识到，我们应该像关心自己的身体一样时刻关注自己的心理状态，并照顾家人朋友的心理状态。其实，每个人需要的仅仅是一个会倾听的人和一个安全的，说什么心理话都可以的环境。但根深蒂固的社会偏见让这样的环境愈发难以形成。纸飞机希望能够做些什么，改变这个现状。
        作为一组华裔青少年，纸飞机希望通过为中国青少年群体建立一个可以自由学习、交流的平台开始，一步一步努力为心理健康的重要性发声。
        如果你认同我们、愿意和我们一起向着这个目标共同努力，那么请加入我们吧！我们目前在寻找为公众号和其他社交媒体的写手、编辑、艺术家和平面设计师。当然，如果你对我们有任何意见，或希望加入我们但想做以上三个方面之外的工作的话，也可以告诉我们哟。你不需要是一个和心理健康问题有过接触的人，也不需要对心理学有多高深的研究；只要你是一个对加入我们感兴趣，并且积极努力的华裔学生或者青少年，我们都欢迎！！
        扫描微信二维码联系我们，仅仅说：“我对纸飞机感兴趣”就可以啦！我们随后会告知你关于这份工作的更多细节。
      </p>
      <img src={QRcode} style={{ maxWidth: "250px", margin: "30px" }}></img>
      <p>需要更多加入我们的理由？那好吧。加入纸飞机的话，你可以...</p>
      <ul>
        <li>
          为申请海外大学加分！因为你在帮助你的社区、在make a real difference！
        </li>
        <li>完成学校的Community Service Requirement或者CAS</li>
        <li>收货与一只哈佛创新实验室团队一起工作的经验</li>
        <li>拥有一个更大的平台，分享你的心理健康经历或任何想说的话</li>
        <li>
          在为新文章做调查研究、修改他人书写的段落、设计下一张封面图的过程中学到新的知识或提升原油的技能
        </li>
        <li>认识团队中其他的青少年，结交新的朋友</li>
        认识团队中其他的青少年，结交新的朋友
      </ul>
      当然，如果你有任何疑问，也欢迎直接私信公众号或扫一扫联系上面的微信号哟！！
    </Layout>
  );
};
export default Join;
