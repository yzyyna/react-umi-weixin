import { Button, Divider, Grid, Space } from 'antd-mobile';
import './to-be-partner.less';
import Icon from '@/components/Icon';

export default () => (
  <>
    <div
      style={{
        padding: '20px 0',
      }}
    >
      <Space direction="vertical">
        <div className="font-style">成为合伙人,共享租赁收益</div>
        <Divider>合伙人特权</Divider>
        <Grid columns={5}>
          <Grid.Item span={1}></Grid.Item>
          <Grid.Item span={3}>
            <div className="font-style">共享客户租金</div>
            <div className="font-style">共享好友客户组件</div>
          </Grid.Item>
          <Grid.Item span={1}></Grid.Item>
        </Grid>
        <Divider>合伙人义务</Divider>
        <div className="font-style">邀请好友成为合伙人</div>
        <div className="font-style">邀请用户完成发电机组租赁</div>
      </Space>
    </div>
    <div>
      <Space direction="vertical">
        <Button size="large" block color="success">
          <Space align="center">
            <Icon svgName="wechat" width={30}></Icon>
            <span>成为合伙人</span>
          </Space>
        </Button>
        <Button size="large" block color="success">
          <Space align="center">
            <Icon svgName="wechat" width={30}></Icon>
            <span>邀请好友</span>
          </Space>
        </Button>
      </Space>
    </div>
    <div>成为合伙人,获取专属邀请链接</div>
  </>
);
