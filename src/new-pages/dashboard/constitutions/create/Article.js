import React from "react";
import Section from "./Section";
import { Input } from "antd";

const Article = ({ sections, partIndex, index, setStructure }) => {
  const sectionObject = {
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
  };
  return (
    <section style={{ marginLeft: "40px" }}>
      <h4>Article</h4>
      <Input
        placeholder="Article title title"
        style={{ width: "100%", marginBottom: 10 }}
      />
      <Input
        placeholder="Article description"
        style={{ width: "100%", marginBottom: 10 }}
      />
      {sections.map((section, i) => (
        <Section
          key={i}
          sub_sections={section.sub_sections}
          partIndex={partIndex}
          articleIndex={index}
        />
      ))}

      <div className="d-flx">
        <button
          type="button"
          onClick={() => {
            setStructure(structure => {
              let parts = structure.parts;
              parts[partIndex].articles[index] = {
                ...parts[partIndex].articles[index],
                sections: [
                  ...parts[partIndex].articles[index].sections,
                  sectionObject
                ]
              };

              return {
                ...structure,
                parts
              };
            });
          }}
        >
          Add Section
        </button>

        <button
          type="button"
          onClick={() => {
            setStructure(structure => {
              let parts = structure.parts;
              parts[partIndex].articles[index] = {
                ...parts[partIndex].articles[index],
                sections: [
                  ...parts[partIndex].articles[index].sections,
                  sectionObject
                ]
              };

              return {
                ...structure,
                parts
              };
            });
          }}
        >
          Remove Section
        </button>
      </div>
    </section>
  );
};

export default Article;
