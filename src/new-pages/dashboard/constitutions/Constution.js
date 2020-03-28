import React from "react";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";
import styles from "./style.module.scss";
import { Input } from "antd";
import { useStore } from "context";
import { useLazyQuery } from "@apollo/react-hooks";
import { BlockLoader } from "components/Loaders";
import { Button } from "styled/button";
import { GET_BASE_CONSTITUTION } from "grapqlSchema/constitution";

import { Tree } from "antd";

const { DirectoryTree } = Tree;

const { Search } = Input;

const Constitution = ({ history, match }) => {
  const type = match.params.type;
  const [store, dispatch] = useStore();
  const [getConstitution, { loading, data }] = useLazyQuery(
    GET_BASE_CONSTITUTION
  );
  const [constitution, setConstitution] = React.useState({
    heirachy_set: [],
    region: localStorage.country_code,
    depth: 0,
    type
  });

  const treeData = [
    {
      title: "parent 0",
      key: "0-0",
      children: [
        { title: "leaf 0-0", key: "0-0-0", isLeaf: true },
        { title: "leaf 0-1", key: "0-0-1", isLeaf: true }
      ]
    },
    {
      title: "parent 1",
      key: "0-1",
      children: [
        { title: "leaf 1-0", key: "0-1-0", isLeaf: true },
        { title: "leaf 1-1", key: "0-1-1", isLeaf: true }
      ]
    }
  ];
  React.useEffect(() => {
    getConstitution({
      variables: {
        heirachy_set: [],
        region: localStorage.country_code,
        depth: 1,
        type
      }
    });
  }, []);

  React.useEffect(() => {
    if (data) {
      const {
        constitution_stucture: { data: type, error }
      } = data;
      console.log(type);
      error
        ? dispatch({ type: "GET_ERRORS", payload: type })
        : setConstitution(type);
    }
  }, [data]);

  const onSelect = (keys, event) => {
    console.log("Trigger Select", keys, event);
  };

  const onExpand = () => {
    console.log("Trigger Expand");
  };

  return (
    <section>
      <Row>
        <Col className="gutter-row" span={24}></Col>
      </Row>
      <Row gutter={18}>
        <Col className="gutter-row" span={6}>
          <DirectoryTree
            onSelect={onSelect}
            onExpand={onExpand}
            treeData={treeData}
          />
        </Col>
        <Col className="gutter-row" span={18}>
          <div className={styles.side_nav}>
            <ul className={styles.side_block}>
              <li>Parties</li>
              <li>Justices</li>
              <li>Subject Matter</li>
            </ul>

            <ul className={styles.side_block}>
              <li>Headnotes</li>
              <li>Ratio Decideni</li>
              <li>Judgement by Judge</li>
            </ul>

            <ul className={styles.side_block}>
              <li>Counsel</li>
              <li>Case References</li>
              <li>Status References</li>
              <li>Case History</li>
            </ul>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default Constitution;
