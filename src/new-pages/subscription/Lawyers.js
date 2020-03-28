import React from "react";
import { Helmet } from "react-helmet";
import PricingItem from "components/CleanUIComponents/PricingItem";
import { Table, Row, Col } from "antd";
import styles from "./style.module.scss";

const Lawyers = () => {
  const columns = [
    {
      title: "",
      dataIndex: "row",
      key: "row"
    },
    {
      title: "Monthly",
      dataIndex: "monthly",
      key: "monthly",
      render: text => <a>{text}</a>
    },
    {
      title: "Quarterly",
      dataIndex: "quarterly",
      key: "quarterly",
      render: text => <a>{text}</a>
    },
    {
      title: "Biannual",
      dataIndex: "biannual",
      key: "biannual",
      render: text => <a>{text}</a>
    },
    {
      title: "Yearly",
      dataIndex: "yearly",
      key: "yearly",
      render: text => <a>{text}</a>
    }
  ];

  const onlineData = [
    {
      key: "1",
      row: "Cost",
      monthly: "NGN3,000",
      quarterly: "NGN8,00",
      biannual: "NGN12,000",
      yearly: "NGN20,000"
    },
    {
      key: "2",
      row: "Discount",
      monthly: "0%",
      quarterly: "11%",
      biannual: "33%",
      yearly: "45%"
    },
    {
      key: "3",
      row: "Duration",
      monthly: "1 Month",
      quarterly: "3 Months",
      biannual: "6 Months",
      yearly: "12 Months"
    }
  ];

  const offlineData = [
    {
      key: "1",
      row: "Cost",
      monthly: "NGN3,000",
      quarterly: "NGN8,00",
      biannual: "NGN12,000",
      yearly: "NGN20,000"
    },
    {
      key: "2",
      row: "Discount",
      monthly: "0%",
      quarterly: "11%",
      biannual: "33%",
      yearly: "45%"
    },
    {
      key: "3",
      row: "Duration",
      monthly: "1 Month",
      quarterly: "3 Months",
      biannual: "6 Months",
      yearly: "12 Months"
    }
  ];
  return (
    <>
      <section className={styles.sub_block}>
        <h3>Offline Access</h3>
        <Table
          columns={columns}
          dataSource={offlineData}
          bordered={true}
          className={styles.table}
          pagination={false}
        />
        <Row gutter={8} className="mt-40">
          <Col className="gutter-row" xs={{ span: 24 }} lg={{ span: 12 }}>
            <p className={styles.bold}>Benefits</p>
            <ul>
              <li>Free WEB and MOBILE APP</li>
              <li>Complete Offline (Desktop/Laptop) Access</li>
              <li>Weekly updates</li>
              <li>Most cost-effective plan</li>
              <li>Access to All editions of WRN</li>
              <li>Access to multiple users (Enterprise Edition Only)</li>
            </ul>
          </Col>
          <Col className="gutter-row" xs={{ span: 24 }} lg={{ span: 12 }}>
            <p className={styles.bold}>Features</p>
            <ul>
              <li>Offline Access to WRN Volumes and indexes</li>
              <li>Supreme court Cases and Summaries</li>
              <li>Court of Appeal Cases and Summaries</li>
              <li>Laws of the Fed, Civil Procedure rules</li>
              <li>Constitution, Law Dictionary</li>
              <li> Lifetime Access to WRN Blog and resources.</li>
            </ul>
          </Col>
        </Row>
      </section>

      <section className={styles.sub_block}>
        <h3>Online Access</h3>
        <Table
          columns={columns}
          dataSource={onlineData}
          bordered={true}
          className={styles.table}
          pagination={false}
        />
        <Row gutter={8} className="mt-40">
          <Col className="gutter-row" xs={{ span: 24 }} lg={{ span: 12 }}>
            <p className={styles.bold}>Benefits</p>
            <ul>
              <li>Free WEB and MOBILE APP</li>
              <li>Weekly updates</li>
            </ul>
          </Col>
          <Col className="gutter-row" xs={{ span: 24 }} lg={{ span: 12 }}>
            <p className={styles.bold}>Features</p>
            <ul>
              <li>Offline Access to WRN Volumes and indexes</li>
              <li>Supreme court Cases and Summaries</li>
              <li>Court of Appeal Cases and Summaries</li>
              <li>Laws of the Fed, Civil Procedure rules</li>
              <li>Constitution</li>
              <li> Law Dictionary</li>
              <li> Lifetime Access to WRN Blog and resources.</li>
            </ul>
          </Col>
        </Row>
      </section>
    </>
  );
};

export default Lawyers;
