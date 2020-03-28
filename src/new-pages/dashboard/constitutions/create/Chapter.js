import React from "react";
import Part from "./Part";
import { Input, Button } from "antd";

const Chapter = () => {
  const [structure, setStructure] = React.useState({
    title: "",
    id: "",
    parts: [
      {
        id: "",
        title: "",
        desc: "",
        articles: [
          {
            id: "",
            title: "",
            desc: "",
            sections: [
              {
                id: "",
                title: "",
                desc: "",
                sub_sections: [
                  {
                    id: "",
                    title: "",
                    desc: ""
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  });

  const part_body = {
    title: "",
    desc: "",
    articles: [
      {
        id: "",
        title: "",
        desc: "",
        sections: [
          {
            id: "",
            title: "",
            desc: "",
            sub_sections: [
              {
                id: "",
                title: "",
                desc: ""
              }
            ]
          }
        ]
      }
    ]
  };

  return (
    <>
      <h2>Chapter</h2>
      <Input
        placeholder="Enter chapter id"
        style={{ width: "100%", marginBottom: 10 }}
      />
      <Input
        placeholder="Enter chapter title"
        style={{ width: "100%", marginBottom: 10 }}
      />
      <Input
        placeholder="Enter chapter description"
        style={{ width: "100%", marginBottom: 10 }}
      />
      <div className="parts">
        {structure.parts.map((part, i) => (
          <Part
            key={i}
            articles={part.articles}
            setStructure={setStructure}
            index={i}
          />
        ))}
      </div>
      <Button
        type="primary"
        className="login-form-button btn_primary"
        onClick={() => {
          setStructure({
            ...structure,
            parts: [...structure.parts, part_body]
          });
        }}
        style={{ marginTop: "15px", marginRight: "10px" }}
      >
        Add Part
      </Button>
      <Button
        type="primary"
        className="login-form-button btn_primary"
        onClick={() => {
          setStructure({
            ...structure,
            parts: [...structure.parts, part_body]
          });
        }}
        style={{ marginTop: "15px" }}
      >
        Remove Part
      </Button>
    </>
  );
};

export default Chapter;
