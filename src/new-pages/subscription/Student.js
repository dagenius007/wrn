import React from "react";
import { Helmet } from "react-helmet";
import PricingItem from "components/CleanUIComponents/PricingItem";
import { Table, Row, Col } from "antd";
import styles from "./style.module.scss";

const Students = () => {
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
      title: "Semester",
      dataIndex: "semester",
      key: "semester",
      render: text => <a>{text}</a>
    },
    {
      title: "Session",
      dataIndex: "session",
      key: "session",
      render: text => <a>{text}</a>
    }
  ];

  const data = [
    {
      key: "1",
      row: "Cost",
      monthly: "NGN1,500",
      semester: "NGN6,000",
      session: "NGN10,000"
    },
    {
      key: "2",
      row: "Discount",
      monthly: "0%",
      semester: "11%",
      session: "33%"
    },
    {
      key: "3",
      row: "Duration",
      monthly: "1 Month",
      semester: "6 Months",
      session: "12 Months"
    }
  ];
  return (
    <>
      <section className={styles.sub_block}>
        {/* <h3>Online Access</h3> */}
        <Table
          columns={columns}
          dataSource={data}
          bordered={true}
          pagination={false}
          className={styles.table}
        />
        <Row gutter={8} className="mt-40">
          <Col className="gutter-row" xs={{ span: 24 }} lg={{ span: 12 }}>
            <p className={styles.bold}>Benefits</p>
            <ul>
              <li>Free WEB and MOBILE APP</li>
              <li>Weekly updates</li>
              <li>Law Courses Research per School level</li>
            </ul>
          </Col>
          <Col className="gutter-row" xs={{ span: 24 }} lg={{ span: 12 }}>
            <p className={styles.bold}>Features</p>
            <ul>
              <li>Online Access to WRN Volumes and indexes</li>
              <li>Supreme court Cases and Summaries</li>
              <li>Court of Appeal Cases and Summaries</li>
              <li>Laws of the Fed, Civil Procedure rules</li>
              <li>Constitution</li>
              <li> Law Dictionary</li>
              <li>Access to WRN Blog and resources.</li>
            </ul>
          </Col>
        </Row>
      </section>

      {/* <section className={styles.sub_block}>
				<h3>Offline Access</h3>
				<Table
					columns={columns}
					dataSource={data}
					bordered={true}
					className={styles.table}
				/>
				<Row gutter={8}>
					<Col className='gutter-row' xs={{ span: 24 }} lg={{ span: 12 }}>
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
					<Col className='gutter-row' xs={{ span: 24 }} lg={{ span: 12 }}>
						<p className={styles.bold}>Features</p>
						<ul>
							<li>Offline Access to WRN Volumes and indexes</li>
							<li>Supreme court Cases and Summaries</li>
							<li>Court of Appeal Cases and Summaries</li>
							<li>Laws of the Fed, Civil Procedure rules</li>
							<li>Constitution, Law Dictionary</li>
						</ul>
					</Col>
				</Row>
			</section> */}
    </>
  );
};

export default Students;
