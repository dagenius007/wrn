import React from "react";
import Article from "./Article";
import { Input, Button } from "antd";

const Part = ({ articles, setStructure, index }) => {
  const articles_body = {
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
  };
  return (
    <section style={{ marginLeft: "20px" }}>
      <h4>Part</h4>
      <Input
        placeholder="Part title"
        style={{ width: "100%", marginBottom: 10 }}
      />
      <Input
        placeholder="Part description"
        style={{ width: "100%", marginBottom: 10 }}
      />
      {articles.map((article, i) => (
        <Article
          key={i}
          sections={article.sections}
          partIndex={index}
          index={i}
          setStructure={setStructure}
        />
      ))}

      <Button
        type="button"
        onClick={() => {
          setStructure(structure => {
            return {
              ...structure,
              parts: structure.parts.map((part, i) => {
                if (i === index) {
                  return {
                    ...part,
                    articles: [
                      ...structure.parts[index].articles,
                      articles_body
                    ]
                  };
                }
              })
            };
          });
        }}
      >
        Add Article
      </Button>
    </section>
  );
};

export default Part;
