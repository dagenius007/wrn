import React from "react";
import { Row, Col } from "antd";
import styles from "./style.module.scss";
import { Input } from "antd";
import { Redirect, Link } from "react-router-dom";
import { Button } from "styled/button";
import { BlockLoader } from "components/Loaders";
import { useLazyQuery } from "@apollo/react-hooks";
import { Pagination } from "antd";
import { GET_JUDGEMENTS } from "grapqlSchema/judgement";
import { useStore } from "context";

const { Search } = Input;

const Cases = ({
  match: {
    params: { type }
  }
}) => {
  const [{ cases }, dispatch] = useStore();
  const [getCases, { loading, data }] = useLazyQuery(GET_JUDGEMENTS);

  React.useEffect(() => {
    getCases({
      variables: {
        court_category: type === "supreme" ? 1 : 2,
        region: localStorage.country_code ?? "ng",
        pagination: 5,
        last_date: Date.now()
      }
    });
  }, []);

  React.useEffect(() => {
    console.log(data);
    if (data) {
      const {
        judgements_list: { data: cases, error }
      } = data;
      dispatch({ type: "GET_CASES", payload: cases });
      if (error) {
        dispatch({ type: "GET_ERRORS", payload: error.path });
      }
    }
  }, [data]);

  return type === "supreme" || type === "appeal" ? (
    <section>
      <Row>
        <Col className="gutter-row" span={24}></Col>
      </Row>
      <Row gutter={18}>
        <Col className="gutter-row" span={18}>
          {/* <div className={styles.search}>
						<Search placeholder='input search text' onSearch={value => console.log(value)} enterButton />
					</div> */}

          <div className={styles.cases}>
            <h2>
              {type === "supreme"
                ? "Supreme Court Judgments"
                : "Court of Appeal"}
            </h2>
            <div className="div__line"></div>
            <p>
              Below are the updated{" "}
              {type === "supreme"
                ? "Supreme Court Judgments"
                : "Court of Appeal"}{" "}
              . The cases are arranged by date, with the most recent judgments
              appearing at the top. You may also use the search bar above to run
              a search for a report or judgment.
            </p>
            {/* {loading ? <BlockLoader /> : } */}
            {loading ? (
              <BlockLoader />
            ) : cases?.cases?.length ? (
              cases.cases.map((appealCase, i) => (
                <Link className={styles.cases}>
                  <p>{appealCase.title}</p>
                  <p>{moment(appealCase.date).format("MM/DD/YY")}</p>
                </Link>
              ))
            ) : (
              <p>No cases</p>
            )}
            {/* <Link>
							<span>GODFREY IFEDIORA VS EUGENE OKAFOR ( SC. 166/2010 )</span>
							<span>07/12/2019</span>
						</Link> */}
            <div className="pagination">
              <Pagination />
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
  ) : (
    <Redirect />
  );
};

export default Cases;
