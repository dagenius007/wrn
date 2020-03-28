import React from "react";
import { Row, Col } from "antd";
import styles from "./style.module.scss";
import { Input } from "antd";
import { Button } from "styled/button";
import coa from "assets/images/coa.jpg";

const { Search } = Input;

const Case = () => {
  return (
    <section>
      <Row>
        <Col className="gutter-row" span={24}></Col>
      </Row>
      <Row gutter={18}>
        <Col className="gutter-row" span={18}>
          <ul className={styles.top_menu}>
            <li>
              <Button>Home</Button>
            </li>
            <li>Research Folder</li>
            <li>Inbox</li>
            <li>History</li>
          </ul>

          <div className={styles.search}>
            <Search
              placeholder="input search text"
              onSearch={value => console.log(value)}
              enterButton
            />
          </div>
          <div className={styles.case}>
            <p className={styles.case__parties}>
              GODFREY IFEDIORA v. EUGENE OKAFOR
            </p>
            <p className={styles.case__volume}>(2010) WRN/SC. 166</p>
            <div className={styles.case__img}>
              <img src={coa} height={70} />
            </div>
            <p className={styles.case__text__md}> Supreme Court</p>
            <p className={`${styles.text__xs}`}> SC. 166/2010</p>
            <div className={styles.case__judges}>
              <p>Judges</p>
              <p>JUSTICE IBRAHIM TANKO MUHAMMAD </p>
              <p>JUSTICE OLUKAYODE ARIWOOLA</p>
              <p> JUSTICE JOHN INYANG OKORO </p>
              <p>JUSTICE PAUL ADAMU GALINJE</p>
              <p> JUSTICE UWANI MUSA ABBA AJI</p>
            </div>
          </div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div className={styles.side_nav}>
            <ul className={styles.side_block}>
              <li>Parties</li>
              <li>Parties</li>
              <li>Parties</li>
            </ul>

            <ul className={styles.side_block}>
              <li>Parties</li>
              <li>Parties</li>
              <li>Parties</li>
            </ul>

            <ul className={styles.side_block}>
              <li>Parties</li>
              <li>Parties</li>
              <li>Parties</li>
            </ul>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default Case;
